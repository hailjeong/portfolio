import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import OldBoardListUI from "./OldBoardList.presenter";
import { FETCH_USEDITEMS } from "./OldBoardList.queries";

export default function OldBoardList() {
  const router = useRouter();
  const [keyword, setKeyWord] = useState("");

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const { data, refetch, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: { useditemId: router.query.id },
  });
  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveDetail = (event) => {
    router.push(`/oldboards/boards/${event.currentTarget.id}`);
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
      loadFunc={loadFunc}
    />
  );
}
