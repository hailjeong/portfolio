import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  height: 50px;
`;

export default function Input02(props) {
  return (
    <Input
      type={props.type}
      // value={props.lat}
      placeholder={props.placeholder}
      {...props.register}
      defaultValue={props.defaultValue}
    />
  );
}
