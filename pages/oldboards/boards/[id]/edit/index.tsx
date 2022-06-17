import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import OldBoardWrite from "../../../../../src/components/oldBoards/oldBoardWrite/OldBoardWrite.container";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;

export default function EditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });

  return <OldBoardWrite isEdit={true} itemdata={data} />;
}
