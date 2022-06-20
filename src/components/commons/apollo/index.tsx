import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";

interface IProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리 렌더링 예제 --> process.browser방법
  // 기능이 업그레이드 되지 않는다.
  // if (process.browser) {
  //   console.log("지금은 브라우저다@@");
  //   localStorage.getItem("accessToken");
  // } else {
  //   console.log("지금은 프론트엔드 서버다@@(yarn dev 프로그램이다.)");
  // }

  // 2. 프리 렌더링 예제 --> typeof window 방법 (많이 사용)
  // typeof window가 있다면
  // if (typeof window !== "undefined") {
  //   console.log("지금은 브라우저다@@");
  //   localStorage.getItem("accessToken");
  // } else {
  //   console.log("지금은 프론트엔드 서버다@@(yarn dev 프로그램이다.)");
  // }

  // 3. 프리 렌더링 예제 --> useEffect 방법
  useEffect(() => {
    // 1. 기존 방식
    // const accessToken = localStorage.getItem("accessToken");
    // setAccessToken(accessToken || "");

    // 2. 새로운 방식
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // 정보를 바꿀 수 있다.
            operation.setContext({
              ...operation.getContext().headers,
              headers: {
                // 정보를 가지고 올 수 있다.
                Authorization: `Bearer ${newAccessToken}`, // accesstoken만 바꿔치기
              },
            });

            // 3-2 변경된 operation 재용청하기!!
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
