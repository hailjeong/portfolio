import { getDate } from "../../commons/libraries/utils";
import * as S from "./OldBoardDetail.styles";

interface IOldBoardDetailUI {
  data?: any;
  onClickMoveList: () => void;
}

export default function OldBoardDetailUI(props: IOldBoardDetailUI) {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.Profile src="/images/Vector.png" />
        <S.WriterWrapper>
          <S.Writer>{props.data?.fetchUseditem.seller.name}</S.Writer>
          <S.Date>{getDate(props.data?.fetchUseditem.createdAt)}</S.Date>
        </S.WriterWrapper>
      </S.ProfileWrapper>

      <S.Body>
        <S.ItemDetail>
          <S.RemarksWrapper>
            {props.data?.fetchUseditem.remarks}
          </S.RemarksWrapper>
          <S.Title>{props.data?.fetchUseditem.name}</S.Title>
          <S.Price>{props.data?.fetchUseditem.price}</S.Price>
        </S.ItemDetail>

        <S.ImgWrapper>
          <S.Img></S.Img>
        </S.ImgWrapper>

        <S.ContentsWrapper>
          <S.Contents>상품설명내용이 들어갈 자리</S.Contents>
        </S.ContentsWrapper>

        <S.TagWrapper>
          <S.Tags>태그자리</S.Tags>
        </S.TagWrapper>

        <S.MapWrapper>
          <S.Map></S.Map>
        </S.MapWrapper>
      </S.Body>

      <S.Options>
        <S.ListButton onClick={props.onClickMoveList}>목록으로</S.ListButton>
        <S.BuyButton>구매하기</S.BuyButton>
      </S.Options>
    </S.Wrapper>
  );
}
