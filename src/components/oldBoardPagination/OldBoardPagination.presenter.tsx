import { MouseEvent } from "react";
import * as S from "./OldBoardPagination.styles";

interface IPaginationUI {
  startPage?: any;
  lastPage?: any;
  isActivePage?: any;
  onClickPrev: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickNext: () => void;
  data?: any;
}

export default function OldBoardPaginationUI(props: IPaginationUI) {
  return (
    <S.Wrapper>
      <S.PrevButton onClick={props.onClickPrev}>{"<"}</S.PrevButton>
      {props.data?.fetchUseditems.map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Page
              key={index + props.startPage}
              id={String(index + props.startPage)}
              isActive={props.startPage + index === props.isActivePage}
              onClick={props.onClickPage}
            >
              {index + props.startPage}
            </S.Page>
          )
      )}
      <S.NextButton onClick={props.onClickNext}>{">"}</S.NextButton>
    </S.Wrapper>
  );
}
