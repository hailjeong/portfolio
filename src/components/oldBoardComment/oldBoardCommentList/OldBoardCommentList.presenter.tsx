import { getDate } from "../../commons/libraries/utils";
import * as S from "./OldBoardCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function OldBoardCommentListUI() {
  return (
    <S.ListWrapper>
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      > */}
      {/* {props.data?.fetchBoardComments.map((el) => ( */}
      <S.Row>
        <S.TopWrapper>
          <S.AvatarIcon icon={<S.UserOutlinedIcon />} />
          <S.BodyWrapper>
            <S.WriterWrapper>
              <S.Writer></S.Writer>
            </S.WriterWrapper>

            <S.Contents></S.Contents>
          </S.BodyWrapper>
          <S.Icons>
            <S.EditFilledIcon
            // id={el._id}
            // onClick={props.onClickFinalEdit}
            />
            <S.DeleteFilledIcon />
          </S.Icons>
        </S.TopWrapper>
        <S.Date></S.Date>
      </S.Row>
      {/* ))} */}
      {/* </InfiniteScroll> */}
    </S.ListWrapper>
  );
}
