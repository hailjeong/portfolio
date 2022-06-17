import styled from "@emotion/styled";

const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 16px;
`;

export default function Input01(props) {
  return <Input type={props.type} {...props.register} />;
}
