import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import OldBoardWrite from "../../../../src/components/oldBoards/oldBoardWrite/OldBoardWrite.container";

export default function OldBoardsNew() {
  useAuth();
  return <OldBoardWrite isEdit={false} />;
}
