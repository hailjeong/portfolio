import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  border: 1px solid black;
  padding-top: 40px;
  padding-left: 100px;
  padding-right: 100px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`
export const WrapperBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`
export const Input = styled.div`
  width: 100%;
  padding-bottom: 30px;
`
export const Label = styled.div`
  padding-bottom: 5px;
  font-size: 16px;
`
export const Writer = styled.input`
  width: 300px;
  height: 30px;
`
export const Password = styled.input`
  width: 300px;
  height: 30px;
`
export const ContentsTitle = styled.input`
  width: 100%;
  height: 30px;
`
export const Contents = styled.textarea`
  width: 100%;
  height: 300px;
`
// export const Word = styled.span`
//   color: ${(props: any) => (props.isMatched ? "red" : "black")};
// `
export const HomeWrapper = styled.div`
  display: flex;
`
export const Home = styled.input`
  width: 50px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const SearchButton = styled.button`
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const Address = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
`
export const Youtube = styled.input`
  width: 100%;
  height: 30px;
`
export const Image = styled.div`
  width: 100%;
  
`
export const UploadImage = styled.button`
  width: 100px;
  height: 100px;
  background-color: #bdbdbd;
  text-align: center;
`
export const Option = styled.div`
  width: 100%;
  padding-top: 20px;
`
export const MoveButton = styled.input`
  cursor: pointer;
  margin-right: 5px;
`
export const MoveLabel = styled.label`
  margin-left: 5px;
  cursor: pointer; 
`
export const SubmitWrapper = styled.div`
  margin-top: 50px;
`
export const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
`
export const ErrorMessage = styled.div`
  color: red;
`