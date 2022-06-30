import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import OldBoardListUI from "./OldBoardList.presenter";
import { FETCH_USEDITEMS } from "./OldBoardList.queries";

export default function OldBoardList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USEDITEMS);

  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMakeNew = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(`/oldboards/boards/new`);
  };

  const onClickImage = (el) => (event: MouseEvent<HTMLDivElement>) => {
    const baskets = JSON.parse(sessionStorage.getItem("basket") || "[]");
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);

    if (baskets.length >= 3) {
      baskets.pop();
    }

    if (temp.length > 0) {
      router.push(`/oldboards/boards/${event.currentTarget.id}`);
    } else {
      const { __typename, ...newEl } = el;
      baskets.unshift(newEl);
      sessionStorage.setItem("basket", JSON.stringify(baskets));
      router.push(`/oldboards`);
    }
  };

  return (
    <OldBoardListUI
      data={data}
      loadFunc={loadFunc}
      onClickImage={onClickImage}
      onClickMakeNew={onClickMakeNew}
    />
  );
}
