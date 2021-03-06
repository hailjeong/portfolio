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
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        lat
        lng
      }
    }
  }
`;

export default function EditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });

  return loading ? <></> : <OldBoardWrite isEdit={true} itemdata={data} />;
}
