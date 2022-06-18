import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import OldBoardDetailUI from "./OldBoardDetail.presenter";
import { FETCH_USEDITEM } from "./OldBoardDetail.queries";

export default function OldBoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  const onClickMoveList = () => {
    router.push(`/oldboards`);
  };

  return <OldBoardDetailUI data={data} onClickMoveList={onClickMoveList} />;
}
