import { getDate } from "../../commons/libraries/utils";
import * as S from "./OldBoardCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, MouseEvent } from "react";

interface IOldBoardCommentListUI {
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickFinalEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCancel: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: any;
  isOpen: string;
  loadFunc: () => void;
}

export default function OldBoardCommentListUI(props: IOldBoardCommentListUI) {
  return (
    <S.ListWrapper>
      <InfiniteScroll
        key={uuidv4()}
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditemQuestions.map((el) => (
          <S.Row key={el._id}>
            <S.TopWrapper>
              <S.AvatarIcon icon={<S.UserOutlinedIcon />} />
              <S.BodyWrapper>
                <S.WriterWrapper>
                  <S.Writer>{el.user.name}</S.Writer>
                </S.WriterWrapper>

                {el._id === props.isOpen ? (
                  <input
                    type="text"
                    onChange={props.onChangeContents}
                    defaultValue={el.contents}
                  />
                ) : (
                  <S.Contents>{el.contents}</S.Contents>
                )}
                {el._id === props.isOpen ? (
                  <div>
                    <button id={el._id} onClick={props.onClickEdit}>
                      수정
                    </button>
                    <button id={el.id} onClick={props.onClickCancel}>
                      취소
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </S.BodyWrapper>
              <S.Icons>
                <S.EditFilledIcon
                  id={el._id}
                  onClick={props.onClickFinalEdit}
                />
                <S.DeleteFilledIcon id={el._id} onClick={props.onClickDelete} />
              </S.Icons>
            </S.TopWrapper>
            <S.Date>{getDate(el.createdAt)}</S.Date>
          </S.Row>
        ))}
      </InfiniteScroll>
    </S.ListWrapper>
  );
}
