import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1300px;
  padding-left: 200px;
  padding-top: 100px;
  padding-right: 100px;
  height: 800px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
export const InfiniteScroll = styled.div`
  width: 100%;
`;
export const ListCardWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  border: 1px solid #000000;
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
`;
export const Detail = styled.div`
  display: flex;
  padding: 10px;
`;
export const ItemName = styled.div`
  font-size: 24px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`;
export const ItemRemarks = styled.div``;
export const ItemTags = styled.div``;
export const ItemPrice = styled.div`
  font-size: 24px;
`;
export const ItemDetail = styled.div``;
export const SellerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const SellerIcon = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;
export const Seller = styled.div`
  margin-right: 20px;
  width: 60px;
`;
export const PickImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const PickCount = styled.div``;
export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ItmePriceImg = styled.img``;
export const Time = styled.div`
  font-size: 24px;
`;
export const Buttons = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-end;
`;
export const Button = styled.button`
  width: 130px;
  height: 50px;
  border-radius: 20px;
  background-color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #000000;
    color: #ffffff;
    transition-duration: 2s;
  }
`;
