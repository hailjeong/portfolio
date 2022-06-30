import { MouseEvent } from "react";
import InfiniteScroll from "react-infinite-scroller";
// import OldBoardSearch from "../../oldBoardSearch/OldBoardSearch.container";
import * as S from "./OldBoardList.styles";

interface IOldBoardListUI {
  data?: any;
  onClickImage: (el) => (event: MouseEvent<HTMLImageElement>) => void;
  onClickMakeNew: (event: MouseEvent<HTMLButtonElement>) => void;
  // onChangeWord: (value) => void;
  // keyword: string;
  loadFunc: () => void;
}

export default function OldBoardListUI(props: IOldBoardListUI) {
  return (
    <S.Wrapper>
      <S.Buttons>
        <S.Button onClick={props.onClickMakeNew}>상품 등록하기</S.Button>
      </S.Buttons>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        <S.InfiniteScroll>
          {props.data?.fetchUseditems.map((el) => (
            <S.ListCardWrapper
              key={el._id}
              id={el._id}
              onClick={props.onClickImage(el)}
            >
              <S.Detail>
                {el.images?.[0] ? (
                  <S.Image
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                ) : (
                  <S.Image src="/images/ListDelete.png" />
                )}
                <S.ItemWrapper>
                  <S.ItemDetail>
                    <S.ItemName>{el.name}</S.ItemName>
                    <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
                    <S.ItemTags>{el.tags}</S.ItemTags>
                  </S.ItemDetail>
                  <S.SellerWrapper>
                    <S.SellerIcon src="/images/Vector.png" />
                    <S.Seller>{el.seller.name}</S.Seller>
                    <S.PickImg src="/images/pick.png" />
                    <S.PickCount>{el.pickedCount}</S.PickCount>
                  </S.SellerWrapper>
                </S.ItemWrapper>
                <S.PriceWrapper>
                  <S.ItmePriceImg src="/images/Price.png" />
                  <S.ItemPrice>{el.price}원</S.ItemPrice>
                </S.PriceWrapper>
              </S.Detail>
            </S.ListCardWrapper>
          ))}
        </S.InfiniteScroll>
      </InfiniteScroll>
    </S.Wrapper>
  );
}
