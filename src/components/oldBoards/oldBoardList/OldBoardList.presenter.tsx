import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../commons/libraries/utils";
import OldBoardSearch from "../../oldBoardSearch/OldBoardSearch.container";
import * as S from "./OldBoardList.styles";

interface IOldBoardListUI {
  register?: any;
  handleSubmit: any;
  data?: any;
  refetch: any;
  onClickMoveDetail: (event) => void;
  onClickWriteNew: () => void;
  onChangeWord: (value) => void;
  keyword: string;
  dataCount?: number;
  refetchCount?: any;
  loadFunc: () => void;
}

export default function OldBoardListUI(props: IOldBoardListUI) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickWriteNew)}>
      <S.TitleName>
        <S.Title>베스트 게시글</S.Title>
      </S.TitleName>

      <S.BoxWrapper>
        <S.Box>Box</S.Box>
      </S.BoxWrapper>

      <S.SearchWrapper>
        <S.SellingWrapper>
          <S.Selling>판매중인 상품 / </S.Selling>
          <S.Selled> 판매완료된 상품</S.Selled>
        </S.SellingWrapper>
        <S.SearchDate>
          <OldBoardSearch
            refetch={props.refetch}
            onChangeWord={props.onChangeWord}
          />
        </S.SearchDate>
      </S.SearchWrapper>

      <S.ListTitleWrapper>
        <S.ListTitleNumber>번호</S.ListTitleNumber>
        <S.ListTitleTitle>제목</S.ListTitleTitle>
        <S.ListTitleWriter>작성자</S.ListTitleWriter>
        <S.ListTitleDate>날짜</S.ListTitleDate>
      </S.ListTitleWrapper>

      <S.InfiniteScroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditems.map((el) => (
            <S.ListWrapper key={el._id}>
              <S.ListNumber>
                {String(el._id).slice(-4).toUpperCase()}
              </S.ListNumber>
              <S.ListTitle onClick={props.onClickMoveDetail} id={el._id}>
                {el.name}
              </S.ListTitle>
              <S.ListWriter>{el.seller.name}</S.ListWriter>
              <S.ListDate>{getDate(el.createdAt)}</S.ListDate>
            </S.ListWrapper>
          ))}
        </InfiniteScroll>
      </S.InfiniteScroll>

      <S.WrapperFooter>
        <S.SubmitButton>게시물 등록하기</S.SubmitButton>
      </S.WrapperFooter>
    </S.Wrapper>
  );
}
