import * as S from "./Header.styles";

interface IHeaderUIProps {
  onClickLogo: () => void;
  onClickLoginButton: () => void;
  onClickSignUpButton: () => void;
}

export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.Img>
        <S.LogoWrapper>
          <S.Logo src="/images/Logo.svg" onClick={props.onClickLogo} />
        </S.LogoWrapper>
        <S.Buttons>
          <S.Login onClick={props.onClickLoginButton}>로그인</S.Login>
          <S.SignUp onClick={props.onClickSignUpButton}>회원가입</S.SignUp>
        </S.Buttons>
      </S.Img>
    </S.Wrapper>
  );
}
