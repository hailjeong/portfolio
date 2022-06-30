import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import OldBoardCommentList from "../../../../src/components/oldBoardComment/oldBoardCommentList/OldBoardCommentList.container";
import OldBoardCommentWrite from "../../../../src/components/oldBoardComment/oldBoardCommentWrite/OldBoardCommentWrite.container";
import OldBoardDetail from "../../../../src/components/oldBoards/oldBoardDetail/OldBoardDetail.container";

export default function OldBoardDetailPage() {
  useAuth();
  return (
    <>
      <OldBoardDetail />
      <OldBoardCommentWrite />
      <OldBoardCommentList />
    </>
  );
}
