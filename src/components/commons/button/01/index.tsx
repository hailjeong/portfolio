import styled from "@emotion/styled";

const Button = styled.button`
  width: 400px;
  height: 40px;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
