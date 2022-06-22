import { MouseEvent } from "react";
import * as S from "./CommentWirte.styles";

interface ICommentWirteUI {
  contents: string;
  inputs: any;
  setRating: number;
  onChangeInputs: (event: any) => void;
  onClickRate: (event: any) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function CommentWirteUI(props: ICommentWirteUI) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.CommentIcon />
        <S.Comment>댓글</S.Comment>
        <S.RateIcon onChange={props.onClickRate} value={props.setRating} />
      </S.TopWrapper>

      <S.Input>
        <S.Writer
          id="writer"
          value={props.inputs.writer}
          onChange={props.onChangeInputs}
          type="text"
          placeholder="작성자"
        />
        <S.Password
          id="password"
          value={props.inputs.password}
          onChange={props.onChangeInputs}
          type="password"
          placeholder="비밀번호"
        />
      </S.Input>

      <S.ContentsBody>
        <S.Contents
          id="contents"
          value={props.inputs.contents}
          maxLength={100}
          onChange={props.onChangeInputs}
          placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.Bottom>
          <S.Length>{props.contents.length}/100</S.Length>
          <S.Button onClick={props.onClickSubmit}>등록하기</S.Button>
        </S.Bottom>
      </S.ContentsBody>
    </S.Wrapper>
  );
}
