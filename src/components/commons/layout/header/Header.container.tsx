import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();

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
      onClickLogo={onClickLogo}
      onClickLoginButton={onClickLoginButton}
      onClickSignUpButton={onClickSignUpButton}
    />
  );
}
