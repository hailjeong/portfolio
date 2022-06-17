import { ChangeEvent, MouseEvent } from "react";
import { getDate } from "../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import InfiniteScroll from "react-infinite-scroller";

interface ICommentListUI {
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (value) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickFinalEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCancel: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: any;
  isOpen: string;
  loadFunc: () => void;
}
export default function CommentListUI(props: ICommentListUI) {
  return (
    <S.ListWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <S.Row key={el._id}>
            <S.TopWrapper>
              <S.AvatarIcon icon={<S.UserOutlinedIcon />} />
              <S.BodyWrapper>
                <S.WriterWrapper>
                  <S.Writer>{el.writer}</S.Writer>
                  {el._id === props.isOpen ? (
                    <S.RateIcon onChange={props.onChangeRating} />
                  ) : (
                    <S.RateIcon value={el.rating} disabled />
                  )}
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
