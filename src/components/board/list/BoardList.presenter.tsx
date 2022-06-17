import * as S from "./BoardList.styles";
import { MouseEvent } from "react";
import { getDate } from "../../commons/libraries/utils";
import Pagination from "../../pagination/Pagination.container";
import Search from "../../search/Search.container";
import { v4 as uuidv4 } from "uuid";

interface IBoardListUI {
  data?: any;
  onClickToMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickToMoveNewBoard: () => void;
  refetch?: any;
  keyword: string;
  onChangeWord: (value) => void;
  count: number;
  refetchCount?: any;
}

export default function BoardListUI(props: IBoardListUI) {
  return (
    <S.Wrapper>
      <S.Table />
      <Search
        refetch={props.refetch}
        refetchCount={props.refetchCount}
        onChangeWord={props.onChangeWord}
      />
      <S.Row>
        <S.ListNum>번호</S.ListNum>
        <S.Title>제목</S.Title>
        <S.Writer>작성자</S.Writer>
        <S.Date>날짜</S.Date>
      </S.Row>

      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ListNumBoard>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ListNumBoard>
          <S.TitleBoard id={el._id} onClick={props.onClickToMoveDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <S.Text key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.Text>
              ))}
          </S.TitleBoard>
          <S.WriterBoard>{el.writer}</S.WriterBoard>
          <S.DateBoard>{getDate(el.createdAt)}</S.DateBoard>
        </S.Row>
      ))}

      <S.TableBottom />
      <S.Footer>
        <Pagination refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickToMoveNewBoard}>
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
