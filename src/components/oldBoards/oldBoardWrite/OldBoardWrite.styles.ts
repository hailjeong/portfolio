import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Aa = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
export const Wrapper = styled.form`
  width: 1200px;
  padding-left: 100px;
  padding-top: 80px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #999999;
`;
export const Title = styled.div`
  margin-bottom: 40px;
`;
export const TitleName = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
export const InputsWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const MapOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const ReactQuillText = styled(ReactQuill)`
  width: 100%;
  height: 300px;
`;
export const Map = styled.div`
  width: 300px;
  height: 200px;
  background-color: #999999;
`;
export const MapLat = styled.input`
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
`;
export const MapLng = styled.input`
  width: 100%;
  margin-left: 10px;
`;
export const Address = styled.input``;
export const AddressDetail = styled.input``;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
`;

export const Img = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  background-color: #999999;
`;
export const ImgImg = styled.div`
  display: flex;
`;
export const Options = styled.div`
  width: 100%;
  padding-bottom: 30px;
`;
export const PictureLabel = styled.label`
  font-size: 16px;
  margin-right: 30px;
`;
export const SubmitButton = styled.div``;

export const Error = styled.div`
  color: red;
`;
