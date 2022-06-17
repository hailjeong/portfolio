import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: darkblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Navigation = styled.div``;
const Menu = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;

const NAVIGATION_MENUS = [
  { name: "라이브", page: "/openapis" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고거래 게시판", page: "/oldboards" },
];

export default function NavigationPage() {
  const router = useRouter();

  const onClickMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Navigation key={el.page}>
          <Menu id={el.page} onClick={onClickMove}>
            {el.name}
          </Menu>
        </Navigation>
      ))}
    </Wrapper>
  );
}
