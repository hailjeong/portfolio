import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import OldBoardUploadsUI from "./OldBoardUploads.presenter";
import { UPLOAD_FILE } from "./OldBoardUploads.queries";
import { checkValidationImage } from "./OldBoardUploads.validation";

interface IUploads {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export default function OldBoardUploads(props: IUploads) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    const result = await uploadFile({ variables: { file } });
    props.onChangeFileUrls(result.data.uploadFile.url, props.index);
  };

  return (
    <OldBoardUploadsUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
