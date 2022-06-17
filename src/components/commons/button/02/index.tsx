import styled from "@emotion/styled";

const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "skyblue" : "")};
`;

export default function Button02(props) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
