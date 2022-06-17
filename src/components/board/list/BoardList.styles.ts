import styled from "@emotion/styled";

interface ITextProps {
  isMatched: boolean
}

export const Wrapper = styled.div`
  width: 1000px;
  margin-left: 200px;
`
export const Table = styled.div`
  width: 100px;
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid #999999;
`
export const ListNum = styled.div`
  width: 10%;
  text-align: center;
`
export const Title = styled.div`
  width: 65%;
  text-align: center;
`
export const Writer = styled.div`
  width: 15%;
  text-align: center;
`
export const Date = styled.div`
  width: 10%;
  text-align: center;
`
export const ListNumBoard = styled.div`
  width: 10%;
  text-align: center;
`
export const TitleBoard = styled.div`
  width: 65%;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: blue;
  } 
`
export const Text = styled.span`
  color: ${(props: ITextProps) => (props.isMatched ? "skyblue" : "black")}
`
export const WriterBoard = styled.div`
  width: 15%;
  text-align: center;
`
export const DateBoard = styled.div`
  width: 10%;
  text-align: center;
`
export const TableBottom = styled.div`
  border-bottom: 1px solid #999999;
`
export const Footer = styled.div`
  display: flex;
`
export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 10px;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background-color: yellow;
    color: red;
  }
`