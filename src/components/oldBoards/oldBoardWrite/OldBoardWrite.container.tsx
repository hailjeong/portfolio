import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import OldBoardWriteUI from "./OldBoardWrite.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./OldBoardWrite.queries";
import * as yup from "yup";
import { Modal } from "antd";
import { useState } from "react";

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

  const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeImgUrls = (fileUrl: string, index: number) => {
    const newImgUrls = [...imgUrls];
    newImgUrls[index] = fileUrl;
    setImgUrls(newImgUrls);
  };
  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 알려주는 기능!
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: imgUrls,
            useditemAddress: {
              // lat: data.useditemAddress.lat,
              // lng: data.useditemAddress.lng,
            },
            createdAt: data.createdAt,
          },
        },
      });
      alert("중고거래 게시판에 글이 작성 완료되었습니다.");
      router.push(`/oldboards/boards/${result.data.createUseditem._id}`);
    } catch (error) {
      alert("죄송합니다. 다시 한 번 시도해주세요!");
    }
  };
  const onClickEdit = async (data) => {
    // try {
    if (data.name) data.updateUseditemInput.name = data.name;
    if (data.remarks) data.updateUseditemInput.remarks = data.remarks;
    if (data.contents) data.updateUseditemInput.contents = data.contents;
    if (data.price) data.updateUseditemInput.price = data.price;
    if (data.tags) data.updateUseditemInput.tags = data.tags;

    await updateUseditem({
      variables: {
        useditemId: router.query.id,
        updateUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: data.price,
          tags: data.tags,
        },
      },
    });
    Modal.success({ content: "게시물 수정이 성공적으로 이루어졌습니다!" });
    router.push(`/oldboards/boards/${router.query.id}`);
    // } catch (error) {
    //   Modal.error({ content: "게시물 수정에 실패했습니다!" });
    // }
  };

  return (
    <OldBoardWriteUI
      isEdit={props.isEdit}
      itemdata={props.itemdata}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onChangeContents={onChangeContents}
      onClickEdit={onClickEdit}
      onChangeImgUrls={onChangeImgUrls}
      imgUrls={imgUrls}
    />
  );
}
