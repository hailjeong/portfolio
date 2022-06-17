import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import OldBoardListUI from "./OldBoardList.presenter";
import { FETCH_BOARDS_COUNT, FETCH_USEDITEMS } from "./OldBoardList.queries";

export default function OldBoardList() {
  const router = useRouter();
  const [keyword, setKeyWord] = useState("");

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const { data, refetch } = useQuery(FETCH_USEDITEMS);
  const { data: dataCount, refetch: refetchCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const onClickMoveDetail = (event) => {
    router.push(`/oldboards/${event.currentTarget.id}`);
  };

  const onClickWriteNew = () => {
    router.push(`/oldboards/boards/new`);
  };

  const onChangeWord = (value) => {
    setKeyWord(value);
  };

  return (
    <OldBoardListUI
      register={register}
      handleSubmit={handleSubmit}
      data={data}
      refetch={refetch}
      onClickMoveDetail={onClickMoveDetail}
      onClickWriteNew={onClickWriteNew}
      onChangeWord={onChangeWord}
      keyword={keyword}
      dataCount={dataCount?.fetchBoardsCount}
      refetchCount={refetchCount}
    />
  );
}
