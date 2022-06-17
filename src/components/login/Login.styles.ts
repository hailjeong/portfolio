import styled from "@emotion/styled";

interface IIsActiveProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 800px;
  margin: 0 100px;
  padding-top: 40px;
`;
export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Email = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 10px;
`;
export const Password = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 10px;
`;
export const LoginStillBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Check = styled.input`
  width: 20px;
  height: 20px;
`;
export const LoginStill = styled.div`
  padding-left: 10px;
  font-size: 20px;
`;
export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #999999;
`;
export const Login = styled.button`
  width: 500px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${(props: IIsActiveProps) =>
    props.isActive ? "yellow" : ""};
`;
export const Options = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 40px;
`;
export const FindEmail = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 20px;
  border-radius: 15px;
  cursor: pointer;
`;
export const FindPassword = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 20px;
  border-radius: 15px;
  cursor: pointer;
`;
export const SignUp = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 20px;
  border-radius: 15px;
  cursor: pointer;
`;
export const Error = styled.div`
  padding-bottom: 10px;
  color: red;
`;
