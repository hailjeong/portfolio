import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USEDITEM_QUESTIONS } from "../oldBoardCommentList/OldBoardCommentList.queries";
import OldBoardCommentWriteUI from "./OldBoardCommentWrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./OldBoardCommentWrite.quries";

export default function OldBoardCommentWrite() {
  const router = useRouter();

  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickQuestion = async () => {
    await createUseditemQuestion({
      variables: {
        useditemId: router.query.id,
        createUseditemQuestionInput: {
          contents,
        },
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: { useditemId: router.query.id },
        },
      ],
    });
    setContents("");
  };
  console.log(contents);
  return (
    <OldBoardCommentWriteUI
      onChangeContents={onChangeContents}
      onClickQuestion={onClickQuestion}
      contents={contents}
    />
  );
}
