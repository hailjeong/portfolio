import * as S from "./OldBoardDetail.styles";

export default function OldBoardDetailUI() {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.ProfileWrapper>
          <S.Profile />
          <S.WriterWrapper>
            <S.Writer>판매자</S.Writer>
            <S.Date></S.Date>
          </S.WriterWrapper>
        </S.ProfileWrapper>

        <S.Body>
          <S.ItemDetail>
            <S.RemarksWrapper>2019 LTE 32GB</S.RemarksWrapper>
            <S.Title>삼성전자 갤럭시 탭</S.Title>
            <S.Price>240,120원</S.Price>
          </S.ItemDetail>

          <S.ImgWrapper>
            <S.Img></S.Img>
          </S.ImgWrapper>
        </S.Body>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
}
