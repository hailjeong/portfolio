// import '../styles/globals.css'
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import LayoutPage from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
