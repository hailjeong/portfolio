import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/store";
import LoginUI from "./Login.presenter";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [isActive, setIsActive] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (inputs.email) {
      setEmailError("");
    }
    if (inputs.password) {
      setPasswordError("");
    }
    if (inputs.email && inputs.password) {
      setIsActive(true);
    }
  };

  const onClickLoginButton = async () => {
    try {
      if (!inputs.email) {
        setEmailError("이메일을 입력해주세요!");
      }
      if (!inputs.password) {
        setPasswordError("비밀번호를 입력해주세요!");
      }
      const result = await loginUser({
        variables: {
          ...inputs,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      console.log(accessToken);
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      alert("로그인에 성공하셨습니다!!");
      router.push(`/boards`);
    } catch (error) {
      alert("회원정보가 없습니다! 회원가입 해주세요~!");
    }
  };

  const onClickSignup = () => {
    router.push(`/boards/signup`);
  };
  return (
    <LoginUI
      onClickLoginButton={onClickLoginButton}
      onChangeInputs={onChangeInputs}
      emailError={emailError}
      passwordError={passwordError}
      isActive={isActive}
      onClickSignup={onClickSignup}
    />
  );
}
