import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  height: 40px;
`;

export default function Input02(props) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
