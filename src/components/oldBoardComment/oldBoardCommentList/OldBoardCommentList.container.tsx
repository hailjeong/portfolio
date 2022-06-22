import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState, useRef } from "react";
import OldBoardCommentListUI from "./OldBoardCommentList.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./OldBoardCommentList.queries";

export default function OldBoardCommentList() {
  const router = useRouter();

  // const [contents, setContents] = useState("");
  const contents = useRef("");
  const [isOpen, setIsOpen] = useState("");

  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.id },
  });

  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const onClickDelete = async (event) => {
    await deleteUseditemQuestion({
      variables: {
        useditemQuestionId: event.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: { useditemId: router.query.id },
        },
      ],
    });
  };

  const onChangeContents = (event) => {
    contents.current = event.target.value;
  };

  const onClickFinalEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(isOpen === "" ? event.currentTarget.id : "");
  };

  const onClickCancel = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(isOpen === "" ? event.currentTarget.id : "");
  };

  const onClickEdit = async (event: MouseEvent<HTMLButtonElement>) => {
    await updateUseditemQuestion({
      variables: {
        useditemQuestionId: event.currentTarget.id,
        updateUseditemQuestionInput: {
          contents: contents.current,
        },
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: { useditemId: router.query.id },
        },
      ],
    });
    setIsOpen("");
  };
  return (
    <OldBoardCommentListUI
      onChangeContents={onChangeContents}
      onClickDelete={onClickDelete}
      onClickFinalEdit={onClickFinalEdit}
      onClickCancel={onClickCancel}
      onClickEdit={onClickEdit}
      data={data}
      isOpen={isOpen}
      loadFunc={loadFunc}
    />
  );
}
