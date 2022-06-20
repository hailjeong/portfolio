import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGEDIN } from "./Header.queries";

export default function Header() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  const onClickLogo = () => {
    router.push(`/boards`);
  };

  const onClickLoginButton = () => {
    router.push(`/boards/login`);
  };

  const onClickSignUpButton = () => {
    router.push(`/boards/signup`);
  };

  return (
    <HeaderUI
      data={data}
      onClickLogo={onClickLogo}
      onClickLoginButton={onClickLoginButton}
      onClickSignUpButton={onClickSignUpButton}
    />
  );
}
