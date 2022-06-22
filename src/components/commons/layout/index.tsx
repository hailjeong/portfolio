import { useRouter } from "next/router";
import { ReactNode } from "react";
import BannerPage from "./banner";
import FooterPage from "./footer";
import Header from "./header/Header.container";
import NavigationPage from "./navigation";

const HIDDEN_BANNER = ["/boards/login", "/boards/signup"];

interface ILayoutPage {
  children: ReactNode;
}
export default function LayoutPage(props: ILayoutPage) {
  const router = useRouter();

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  return (
    <>
      <Header />
      {!isHiddenBanner && <BannerPage />}
      <NavigationPage />
      <div>{props.children}</div>
      <FooterPage />
    </>
  );
}
