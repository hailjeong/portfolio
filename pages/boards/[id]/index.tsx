import BoardDetail from "../../../src/components/board/detail/BoardDetail.container";
import CommentList from "../../../src/components/boardComment/list/CommentList.container";
import CommentWirte from "../../../src/components/boardComment/write/CommentWirte.container";

export default function BoardDetailPage() {

  return (
    <>
      <BoardDetail/>
      <CommentWirte/>
      <CommentList/>
    </>
  )
}