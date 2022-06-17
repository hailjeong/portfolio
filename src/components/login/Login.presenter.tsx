import * as S from "./Login.styles";

interface ILoginUI {
  emailError: string;
  passwordError: string;
  onChangeInputs: (event) => void;
  onClickLoginButton: () => void;
  isActive: boolean;
}

export default function LoginUI(props: ILoginUI) {
  return (
    <S.Wrapper>
      <S.Inputs>
        <S.Email
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={props.onChangeInputs}
        />
        <S.Error>{props.emailError}</S.Error>
      </S.Inputs>
      <S.Inputs>
        <S.Password
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={props.onChangeInputs}
        />
        <S.Error>{props.passwordError}</S.Error>
      </S.Inputs>

      <S.LoginStillBox>
        <S.Check type="checkbox" />
        <S.LoginStill>로그인 상태 유지</S.LoginStill>
      </S.LoginStillBox>

      <S.Button>
        <S.Login onClick={props.onClickLoginButton} isActive={props.isActive}>
          로그인하기
        </S.Login>
      </S.Button>

      <S.Options>
        <S.FindEmail>이메일 찾기</S.FindEmail>
        <S.FindPassword>비밀번호 찾기</S.FindPassword>
        <S.SignUp>회원가입</S.SignUp>
      </S.Options>
    </S.Wrapper>
  );
}
