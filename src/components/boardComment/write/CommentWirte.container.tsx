import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import CommentWirteUI from "./CommentWirte.presenter";
import { CREATE_BOARD_COMMENT } from "./CommentWirte.queries";

export default function CommentWirte() {
  const router = useRouter();

  const [rating, setRating] = useState(0);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeInputs = (event: any) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const onClickRate = (event) => {
    setRating(event);
  };
  const onClickSubmit = async () => {
    await createBoardComment({
      variables: {
        createBoardCommentInput: {
          ...inputs,
          rating,
        },
        boardId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.id },
        },
      ],
    });
    setInputs({
      writer: "",
      password: "",
      contents: "",
    });
    setRating(0);
  };

  return (
    <CommentWirteUI
      onChangeInputs={onChangeInputs}
      onClickRate={onClickRate}
      onClickSubmit={onClickSubmit}
      contents={inputs.contents}
      inputs={inputs}
      setRating={rating}
    />
  );
}
