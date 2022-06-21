import { DeleteFilled, EditFilled, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar, Rate } from "antd";

export const ListWrapper = styled.div`
  width: 1000px;
  height: 500px;
  overflow: auto;
  margin: 0px 100px;
  padding-top: 40px;
`;
export const Row = styled.div``;
export const TopWrapper = styled.div`
  display: flex;
`;
export const AvatarIcon = styled(Avatar)`
  font-size: 20px;
`;
export const UserOutlinedIcon = styled(UserOutlined)`
  font-size: 20px;
`;
export const BodyWrapper = styled.div`
  width: 100%;
`;
export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Writer = styled.div`
  padding-left: 20px;
`;
export const RateIcon = styled(Rate)`
  padding-left: 20px;
`;
export const Contents = styled.div`
  padding-left: 20px;
`;
export const Icons = styled.div`
  display: flex;
`;
export const EditFilledIcon = styled(EditFilled)`
  font-size: 20px;
  cursor: pointer;
`;
export const DeleteFilledIcon = styled(DeleteFilled)`
  font-size: 20px;
  cursor: pointer;
`;
export const Date = styled.div`
  color: lightgray;
  padding-top: 20px;
  padding-left: 50px;
`;
