import styled from "@emotion/styled";

interface IPageStyles {
  isActive?: boolean
}
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PrevButton = styled.span`
  cursor: pointer;
  font-size: 20px;
  :hover {
    color: blue;
  }
`
export const Page = styled.span`
  margin: 0 15px;
  cursor: ${(props: IPageStyles) => (props.isActive ? "none" : "pointer")};
  font-size: 20px;
  color: ${(props: IPageStyles) => (props.isActive ? "blue" : "black")};
`
export const NextButton = styled.span`
  cursor: pointer;
  font-size: 20px;
  :hover {
    color: blue;
  }`
