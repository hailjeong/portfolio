import { MessageFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1000px;
  margin: 0px 100px;
  `
export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
`
export const CommentIcon = styled(MessageFilled)`
  font-size: 20px;
  padding-right: 10px;
`
export const Comment = styled.div`
  font-size: 20px;
  padding-right: 10px;
`
export const RateIcon = styled(Rate)`
  font-size: 20px;
`
export const Input = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
`
export const Writer = styled.input`
  width: 150px;
  height: 30px;
  margin-right: 30px;
  border: 1px solid lightgray;
`
export const Password = styled.input`
  width: 150px;
  height: 30px;
  margin-right: 30px;
  border: 1px solid lightgray;
`
export const ContentsBody = styled.div`
  width: 100%;
  border: 1px solid lightgray;
`
export const Contents = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: 1px solid lightgray;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Length = styled.div`
  width: 100%;
  color: #999999;
`
export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 15px;
`