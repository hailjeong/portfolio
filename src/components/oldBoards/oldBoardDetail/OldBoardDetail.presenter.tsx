import { getDate } from "../../commons/libraries/utils";
import * as S from "./OldBoardDetail.styles";
import Dompurify from "dompurify";

interface IOldBoardDetailUI {
  data?: any;
  onClickMoveList: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickPick: () => void;
  // lat: number;
  // lng: number;
  onClickBuy: () => void;
}

export default function OldBoardDetailUI(props: IOldBoardDetailUI) {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.HeaderWrapper>
          <S.Profile src="/images/Vector.png" />
          <S.WriterWrapper>
            <S.Writer>{props.data?.fetchUseditem.seller.name}</S.Writer>
            <S.Date>{getDate(props.data?.fetchUseditem.createdAt)}</S.Date>
          </S.WriterWrapper>
        </S.HeaderWrapper>
        <S.Icons>
          <S.HeartTwoToneIcon onClick={props.onClickPick} />
          <S.PickCount>{props.data?.fetchUseditem.pickedCount}</S.PickCount>
        </S.Icons>
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
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.Img key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.ImgWrapper>

        <S.ContentsWrapper>
          {typeof window !== "undefined" && (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></S.Contents>
          )}
        </S.ContentsWrapper>

        <S.TagWrapper>
          <S.Tags>태그자리</S.Tags>
        </S.TagWrapper>

        <S.MapWrapper>
          <S.Map id="maptwo" />
        </S.MapWrapper>
      </S.Body>

      <S.Options>
        <S.ListButton onClick={props.onClickMoveList}>목록으로</S.ListButton>
        <S.EditButton onClick={props.onClickEdit}>수정하기</S.EditButton>
        <S.BuyButton onClick={props.onClickBuy}>구매하기</S.BuyButton>
        <S.DeleteButton onClick={props.onClickDelete}>삭제하기</S.DeleteButton>
      </S.Options>
    </S.Wrapper>
  );
}
