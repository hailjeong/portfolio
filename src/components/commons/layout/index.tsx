import { useRouter } from "next/router";
import { ReactNode } from "react";
import BannerPage from "./banner";
import FooterPage from "./footer";
import Header from "./header/Header.container";
import NavigationPage from "./navigation";
import SideBar from "./sideBar/SideBar.presenter";

const HIDDEN_BANNER = ["/boards/login", "/boards/signup"];
const HIDDEN_SIDE = [];

interface ILayoutPage {
  children: ReactNode;
}
export default function LayoutPage(props: ILayoutPage) {
  const router = useRouter();

  const isHiddenSide = HIDDEN_SIDE.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  return (
    <>
      <Header />
      {!isHiddenBanner && <BannerPage />}
      <NavigationPage />
      <SideBar />
      <div>{props.children}</div>
      <FooterPage />
    </>
  );
}
