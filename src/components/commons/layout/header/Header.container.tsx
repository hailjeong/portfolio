import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGEDIN, LOGOUTUSER } from "./Header.queries";

export default function Header() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [logoutUser] = useMutation(LOGOUTUSER);

  const onClickLogo = () => {
    router.push(`/boards`);
  };

  const onClickLoginButton = () => {
    router.push(`/boards/login`);
  };

  const onClickSignUpButton = () => {
    router.push(`/boards/signup`);
  };

  const onClickLogout = async () => {
    try {
      await logoutUser();
      setAccessToken("");
      localStorage.removeItem("accessToken");
      router.push(`/oldboards`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <HeaderUI
      data={data}
      onClickLogo={onClickLogo}
      onClickLoginButton={onClickLoginButton}
      onClickSignUpButton={onClickSignUpButton}
      onClickLogout={onClickLogout}
    />
  );
}
