import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent, useState } from "react";

export default function BoardList() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataCount, refetch: refetchCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const onClickToMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickToMoveNewBoard = () => {
    router.push(`/boards/new`);
  };

  const onChangeWord = (value) => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      onClickToMoveDetail={onClickToMoveDetail}
      onClickToMoveNewBoard={onClickToMoveNewBoard}
      refetch={refetch}
      keyword={keyword}
      count={dataCount?.fetchBoardsCount}
      refetchCount={refetchCount}
      onChangeWord={onChangeWord}
    />
  );
}
