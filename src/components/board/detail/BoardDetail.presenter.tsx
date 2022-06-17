import { MouseEvent } from "react";
import * as S from "./BoardDetail.styles";
import { getDate } from "../../commons/libraries/utils";

interface IBoardDetailUI {
  onClickLikeIcon: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDisLikeCount: (event: MouseEvent<HTMLImageElement>) => void;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickDeleteBoard: () => void;
  data?: any;
}

export default function BoardDetailUI(props: IBoardDetailUI) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.Header>
          <S.HeaderWrapper>
            <S.Profile src="/images/Vector.png" />
            <S.Name>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.Date>{getDate(props.data?.fetchBoard.createdAt)}</S.Date>
            </S.Name>
          </S.HeaderWrapper>
          <S.Icons>
            <S.LinkIcon src="/images/LinkIcon.png" />
            <S.Location src="/images/Location.png" />
          </S.Icons>
        </S.Header>

        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Images>
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Img key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </S.Images>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          <S.Youtube
            url={props.data?.fetchBoard.youtubeUrl}
            width="480px"
            height="300px"
            playing={true}
            muted={true}
            autoPlay={true}
            controls={true}
          ></S.Youtube>
          <S.Like>
            <S.Icons>
              <S.LikeIcon onClick={props.onClickLikeIcon} />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.Icons>
            <S.Icons>
              <S.DisLikeIcon onClick={props.onClickDisLikeCount} />
              <S.DisLikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DisLikeCount>
            </S.Icons>
          </S.Like>
        </S.Body>
      </S.TopWrapper>

      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDeleteBoard}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
