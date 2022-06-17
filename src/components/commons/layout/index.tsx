import BannerPage from "./banner";
import FooterPage from "./footer";
import Header from "./header/Header.container";
import NavigationPage from "./navigation";


export default function LayoutPage(props) {
  return (
    <div>
      <Header />
      <BannerPage/>
      <NavigationPage/>
      <div>
        {props.children}
      </div>
      <FooterPage/>
    </div>

  )
}
