import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import OldBoardWriteUI from "./OldBoardWrite.presenter";
import { CREATE_USEDITEM } from "./OldBoardWrite.queries";
import * as yup from "yup";

interface IOldBoardWrite {
  isEdit: boolean;
  itemdata?: any;
}

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup.number().required("필수 입력 사항입니다."),
});

export default function OldBoardWrite(props: IOldBoardWrite) {
  const router = useRouter();

  const [createUseditem] = useMutation(CREATE_USEDITEM);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
          },
        },
      });
      router.push(`/oldboard/${result.data.createUseditem._id}`);
    } catch (error) {
      alert("죄송합니다. 다시 한 번 시도해주세요!");
    }
  };

  return (
    <OldBoardWriteUI
      isEdit={props.isEdit}
      itemdata={props.itemdata}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
