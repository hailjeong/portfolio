import * as S from "./OldBoardCommentWrite.styles";

interface IOldBoardCommentWriteUI {
  onChangeContents: (event) => void;
  onClickQuestion: () => void;
  contents: string;
}

export default function OldBoardCommentWriteUI(props: IOldBoardCommentWriteUI) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.CommentIcon />
        <S.Comment>문의하기</S.Comment>
      </S.TopWrapper>

      <S.ContentsBody>
        <S.Contents
          onChange={props.onChangeContents}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.Bottom>
          <S.Length>{props.contents.length}/100</S.Length>
          <S.Button onClick={props.onClickQuestion}>문의하기</S.Button>
        </S.Bottom>
      </S.ContentsBody>
    </S.Wrapper>
  );
}
