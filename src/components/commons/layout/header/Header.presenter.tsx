import Charge from "../../charge/Charge.container";
import * as S from "./Header.styles";

interface IHeaderUIProps {
  onClickLogo: () => void;
  onClickLoginButton: () => void;
  onClickSignUpButton: () => void;
  data?: any;
  onClickLogout: () => void;
}

export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.Img>
        <S.LogoWrapper>
          <S.Logo src="/images/Logo.svg" onClick={props.onClickLogo} />
        </S.LogoWrapper>
        {props.data ? (
          <S.Buttons>
            <S.ProfileIcon src="/images/Vector.png" />
            <S.LoginUser>
              <S.UserName>
                {props.data?.fetchUserLoggedIn.name}님 안녕하세요^^
              </S.UserName>
              <S.Point>
                포인트: {props.data?.fetchUserLoggedIn.userPoint.amount}P
              </S.Point>
            </S.LoginUser>
            <S.LogoutWrapper>
              <Charge />
              <S.Logout onClick={props.onClickLogout}>로그아웃</S.Logout>
            </S.LogoutWrapper>
          </S.Buttons>
        ) : (
          <S.Buttons>
            <S.Login onClick={props.onClickLoginButton}>로그인</S.Login>
            <S.SignUp onClick={props.onClickSignUpButton}>회원가입</S.SignUp>
          </S.Buttons>
        )}
      </S.Img>
    </S.Wrapper>
  );
}
