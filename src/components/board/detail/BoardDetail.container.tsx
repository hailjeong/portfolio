import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKEBOARD,
  FETCH_BOARD,
  LIKEBOARD,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  const [likeCount] = useMutation(LIKEBOARD);
  const [disLikeCount] = useMutation(DISLIKEBOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickLikeIcon = async (event: MouseEvent<HTMLImageElement>) => {
    await likeCount({
      variables: {
        boardId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.id },
        },
      ],
    });
  };

  const onClickDisLikeCount = async (event: MouseEvent<HTMLImageElement>) => {
    await disLikeCount({
      variables: {
        boardId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.id },
        },
      ],
    });
  };

  const onClickMoveToList = () => {
    router.push(`/boards`);
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickDeleteBoard = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
        },
      ],
    });
    router.push(`/boards`);
  };

  return (
    <BoardDetailUI
      onClickLikeIcon={onClickLikeIcon}
      onClickDisLikeCount={onClickDisLikeCount}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDeleteBoard={onClickDeleteBoard}
      data={data}
    />
  );
}
