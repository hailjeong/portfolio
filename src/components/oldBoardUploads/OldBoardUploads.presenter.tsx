import { ChangeEvent, RefObject } from "react";
import * as S from "./OldBoardUploads.styles";

interface IUploadsUI {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function OldBoardUploadsUI(props: IUploadsUI) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>이미지</>
        </S.UploadButton>
      )}

      <S.UploadFile
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
