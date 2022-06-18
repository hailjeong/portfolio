import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 100px;
`;
export const TitleName = styled.div`
  padding-bottom: 40px;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const BoxWrapper = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
export const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SellingWrapper = styled.div`
  display: flex;
`;
export const Selling = styled.div``;
export const Selled = styled.div``;
export const Search = styled.div``;
export const SearchDate = styled.div``;
export const ListTitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
`;
export const ListTitleNumber = styled.div`
  width: 10%;
`;
export const ListTitleTitle = styled.div`
  width: 60%;
`;
export const ListTitleWriter = styled.div`
  width: 20%;
`;
export const ListTitleDate = styled.div`
  width: 10%;
`;
export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid #999999;
`;
export const ListNumber = styled.div`
  width: 10%;
  text-align: center;
`;
export const ListTitle = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
  :hover {
    color: skyblue;
  }
`;
export const ListWriter = styled.div`
  width: 20%;
  text-align: center;
`;
export const ListDate = styled.div`
  width: 10%;
  text-align: center;
`;
export const WrapperFooter = styled.div`
  padding-top: 50px;
  display: flex;
`;
export const SubmitButton = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 30px;
  border-color: #999999;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
    transition-duration: 2s;
  }
`;
