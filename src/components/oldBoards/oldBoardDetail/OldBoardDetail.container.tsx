import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import OldBoardDetailUI from "./OldBoardDetail.presenter";
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./OldBoardDetail.queries";

export default function OldBoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);

  const onClickMoveList = () => {
    router.push(`/oldboards`);
  };
  const onClickEdit = () => {
    router.push(`/oldboards/boards/${router.query.id}/edit`);
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
          },
        ],
      });
      alert("게시물을 삭제하였습니다.");
      router.push(`/oldboards`);
    } catch (error) {
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <OldBoardDetailUI
      data={data}
      onClickMoveList={onClickMoveList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
    />
  );
}
