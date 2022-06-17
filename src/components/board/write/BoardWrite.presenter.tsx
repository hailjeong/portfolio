// import { ChangeEvent } from 'react'
import { Modal } from "antd";
import * as S from "./BoardWrite.styles";
import DaumPostcode from "react-daum-postcode";
import { ChangeEvent } from "react";
import Uploads from "../../uploads/Uploads.container";
import { v4 as uuidv4 } from "uuid";

interface IBoardWriteUI {
  // onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  // onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  // onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onChangeInputs: (event: any) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  isEdit: boolean;
  BoardData?: any;
  isOpen: boolean;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearchAddress: () => void;
  onCompleteAddress: (data: any) => void;
  homeCode: string;
  address: string;
  addressDetail: string;
  data?: any;
  imgUrls: string[];
  onChangeImgUrls: (fileUrl: string, index: number) => void;
}

export default function BoardWriteUI(props: IBoardWriteUI) {
  return (
    <>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onClickSearchAddress}
          onCancel={props.onClickSearchAddress}
        >
          <DaumPostcode onComplete={props.onCompleteAddress} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
        <S.WrapperBody>
          <S.Input>
            <S.Label>작성자</S.Label>
            <S.Writer
              id="writer"
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeInputs}
              defaultValue={
                props.BoardData && props.BoardData?.fetchBoard.writer
              }
            />
            <S.ErrorMessage>{props.writerError}</S.ErrorMessage>
          </S.Input>

          <S.Input>
            <S.Label>비밀번호</S.Label>
            <S.Password
              id="password"
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangeInputs}
            />
            <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
          </S.Input>
        </S.WrapperBody>

        <S.Input>
          <S.Label>제목</S.Label>
          <S.ContentsTitle
            id="title"
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.BoardData && props.BoardData?.fetchBoard.title}
          />
          <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
        </S.Input>

        <S.Input>
          <S.Label>내용</S.Label>
          <S.Contents
            id="contents"
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeInputs}
            defaultValue={
              props.BoardData && props.BoardData.fetchBoard.contents
            }
          />
          <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
        </S.Input>

        <S.Input>
          <S.Label>주소</S.Label>
          <S.HomeWrapper>
            <S.Home
              placeholder="07250"
              readOnly
              value={
                props.homeCode || props.data?.fetchBoard.boardAddress?.homeCode
              }
            />
            <S.SearchButton onClick={props.onClickSearchAddress}>
              우편번호 검색
            </S.SearchButton>
          </S.HomeWrapper>
          <S.Address
            readOnly
            value={
              props.address || props.data?.fetchBoard.boardAddress?.address
            }
          />
          <S.Address
            onChange={props.onChangeAddressDetail}
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
          />
        </S.Input>

        <S.Input>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            id="youtubeUrl"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.BoardData?.fetchBoard.youtubeUrl || ""}
          />
        </S.Input>

        <S.Image>
          <S.Label>사진</S.Label>
          {props.imgUrls.map((el, index) => (
            <Uploads
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeImgUrls}
            />
          ))}
        </S.Image>

        <S.Option>
          <S.Label>메인설정</S.Label>
          <S.MoveButton type="radio" id="youtube" name="radio-button" />
          <S.MoveLabel htmlFor="youtube">유튜브</S.MoveLabel>
          <S.MoveButton type="radio" id="image" name="radio-button" />
          <S.MoveLabel htmlFor="image">사진</S.MoveLabel>
        </S.Option>

        <S.SubmitWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.SubmitWrapper>
      </S.Wrapper>
    </>
  );
}
