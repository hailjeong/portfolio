import { Fragment, useEffect, useState } from "react";
import * as S from "./SideBar.styles";

export default function SideBar() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(sessionStorage.getItem("basket") || "[]");

    if (baskets.length > 3) {
      baskets.pop();
    }
    setBasketItems(baskets);
  }, [basketItems.length++]);

  return (
    <S.Wrapper>
      <S.ListWrapper>
        <S.TitleWrapper>
          <S.ListTitle>오늘 본 상품</S.ListTitle>
        </S.TitleWrapper>
        <S.ListImg>
          {basketItems.map((el) => (
            <Fragment key={el._id}>
              <S.Img
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : `/images/pick2.png`
                }
              />
            </Fragment>
          ))}
        </S.ListImg>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
