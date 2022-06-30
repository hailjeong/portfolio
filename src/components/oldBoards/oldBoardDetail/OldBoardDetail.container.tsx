import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OldBoardDetailUI from "./OldBoardDetail.presenter";
import {
  CREATE_POINT_BUY_AND_SELL,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USED_ITEM,
} from "./OldBoardDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function OldBoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM);
  const [createPointBuyandSell] = useMutation(CREATE_POINT_BUY_AND_SELL);

  const onClickPick = async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: router.query.id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.id },
        },
      ],
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=60f41832d3a252ba8f706fab1b304c1d&autoload=false ";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("maptwo");
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress.lat,
            data?.fetchUseditem.useditemAddress.lng
          ),
          level: 3, // 지도의 레벨 (확대 축소)
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress.lat,
          data?.fetchUseditem.useditemAddress.lng
        );
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
        console.log("detaillat", data?.fetchUseditem.useditemAddress.lat);
        console.log("detaillng", data?.fetchUseditem.useditemAddress.lng);
      });
    };
  }, [
    data?.fetchUseditem.useditemAddress.lat,
    data?.fetchUseditem.useditemAddress.lng,
  ]);
  console.log(data);
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

  const onClickBuy = async () => {
    try {
      await createPointBuyandSell({
        variables: { useritemId: router.query.id },
      });
      alert("구매 성공");
      router.push(`/oldboards`);
    } catch (error) {
      alert("구매 실패");
      router.push(`/oldboards`);
    }
  };

  return (
    <OldBoardDetailUI
      data={data}
      onClickMoveList={onClickMoveList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      onClickBuy={onClickBuy}
    />
  );
}
