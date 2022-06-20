import Button02 from "../../commons/button/02";
import Input02 from "../../commons/input/02";
import MapPage from "../../map/Map.presenter";
import OldBoardUploads from "../../oldBoardUploads/OldBoardUploads.container";
import * as S from "./OldBoardWrite.styles";
import { v4 as uuidv4 } from "uuid";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

interface IOldBoardWriteUI {
  isEdit: boolean;
  itemdata?: any;
  register: any;
  handleSubmit: any;
  formState: any;
  onClickSubmit: (data) => void;
  onChangeContents: (value) => void;
  onClickEdit: (data) => void;
  onChangeImgUrls: (fileUrl: string, index: number) => void;
  imgUrls: string[];
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function OldBoardWriteUI(props: IOldBoardWriteUI) {
  return (
    <S.Wrapper
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickSubmit
      )}
    >
      <S.Title>
        <S.TitleName>
          {props.isEdit ? "상품 수정하기 페이지" : "상품 등록하기 페이지"}
        </S.TitleName>
      </S.Title>
      <S.InputsWrapper>
        <S.Label>상품명</S.Label>
        <Input02
          type="text"
          placeholder="상품명을 작성해주세요."
          register={props.register("name")}
          defaultvalue={props.itemdata && props.itemdata.fetchUseditem.name}
        />
        <S.Error>{props.formState.errors.name?.message}</S.Error>
      </S.InputsWrapper>

      <S.InputsWrapper>
        <S.Label>한줄요약</S.Label>
        <Input02
          type="text"
          placeholder="상품평을 작성해주세요."
          register={props.register("remarks")}
          defaultvalue={props.itemdata && props.itemdata.fetchUseditem.remarks}
        />
        <S.Error>{props.formState.errors.remarks?.message}</S.Error>
      </S.InputsWrapper>

      <S.InputsWrapper>
        <S.Label>상품설명</S.Label>
        <ReactQuill
          onChange={props.onChangeContents}
          // defaultvalue={props.itemdata && props.itemdata.fetchUseditem.contents}
        />
        <S.Error>{props.formState.errors.contents?.message}</S.Error>
      </S.InputsWrapper>

      <S.InputsWrapper>
        <S.Label>판매가격</S.Label>
        <Input02
          type="text"
          placeholder="판매 가격을 입력해주세요."
          register={props.register("price")}
          defaultvalue={props.itemdata && props.itemdata.fetchUseditem.price}
        />
        <S.Error>{props.formState.errors.price?.message}</S.Error>
      </S.InputsWrapper>

      <S.InputsWrapper>
        <S.Label>태그입력</S.Label>
        <Input02 type="text" placeholder="#태그 #태그 #태그" />
      </S.InputsWrapper>

      <S.MapOption>
        <S.InputsWrapper>
          <S.Label>거래위치</S.Label>
          <MapPage />
        </S.InputsWrapper>
        <S.InputsWrapper>
          <S.Label>GPS</S.Label>
          <S.Buttons>
            <button>위도(LAT)</button>
            <button>경도(LNG)</button>
          </S.Buttons>

          <S.Label>주소</S.Label>
          <Input02 type="text" />
          <Input02 type="text" />
        </S.InputsWrapper>
      </S.MapOption>

      <S.InputsWrapper>
        <S.Label>사진 첨부</S.Label>
        {props.imgUrls.map((el, index) => (
          <OldBoardUploads
            key={uuidv4()}
            index={index}
            fileUrl={el}
            onChangeFileUrls={props.onChangeImgUrls}
          />
        ))}
      </S.InputsWrapper>

      <S.Options>
        <S.Label>메인설정</S.Label>
        <input type="radio" id="picture1" name="picture" />
        <S.PictureLabel htmlFor="picture1">사진 1</S.PictureLabel>
        <input type="radio" id="picture2" name="picture" />
        <S.PictureLabel htmlFor="picture">사진 2</S.PictureLabel>
      </S.Options>

      <S.SubmitButton>
        <Button02
          isActive={props.formState.isValid}
          title={props.isEdit ? "수정하기" : "등록하기"}
        />
      </S.SubmitButton>
    </S.Wrapper>
  );
}
