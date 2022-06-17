import { getDate } from "../../commons/libraries/utils";
import OldBoardPagination from "../../oldBoardPagination/OldBoardPagination.container";
import Search from "../../search/Search.container";
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
        <Search
          refetch={props.refetch}
          refetchCount={props.refetchCount}
          onChangeWord={props.onChangeWord}
        />
        <>날짜 라이브러리</>
        <S.Search>검색하기</S.Search>
      </S.SearchWrapper>

      <S.ListTitleWrapper>
        <S.ListTitleNumber>번호</S.ListTitleNumber>
        <S.ListTitleTitle>제목</S.ListTitleTitle>
        <S.ListTitleWriter>작성자</S.ListTitleWriter>
        <S.ListTitleDate>날짜</S.ListTitleDate>
      </S.ListTitleWrapper>

      {props.data?.fetchUseditems.map((el) => (
        <S.ListWrapper key={el._id}>
          <S.ListNumber>{String(el._id).slice(-4).toUpperCase()}</S.ListNumber>
          <S.ListTitle onClick={props.onClickMoveDetail} id={el._id}>
            {el.name}
          </S.ListTitle>
          <S.ListWriter>{el.writer}</S.ListWriter>
          <S.ListDate>{getDate(el.createdAt)}</S.ListDate>
        </S.ListWrapper>
      ))}

      <S.WrapperFooter>
        <OldBoardPagination
          refetch={props.refetch}
          count={props.refetchCount}
        />
        <S.SubmitButton>게시물 등록하기</S.SubmitButton>
      </S.WrapperFooter>
    </S.Wrapper>
  );
}
