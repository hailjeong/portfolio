import styled from "@emotion/styled";
import ReactPlayer from 'react-player'
import {DislikeTwoTone, LikeTwoTone } from '@ant-design/icons'

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px;
`
export const TopWrapper = styled.div`
  border: 1px solid black;
  padding: 30px 100px 100px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #999999;
  padding-bottom: 10px;
`
export const HeaderWrapper = styled.div`
  display: flex;
`
export const Profile = styled.img`
`
export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`
export const Writer = styled.div``
export const Date = styled.div``
export const Icons = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`
export const LinkIcon = styled.img`
  padding-left: 10px;
`
export const Location = styled.img`
  padding-right: 10px;
`
export const Body = styled.div`
  width: 100%;
`
export const Title = styled.h1`
  padding-top: 30px;
`
export const Images = styled.div`
  display: flex;
  flex-direction: column;
`
export const Img = styled.img`
  width: 500px;
  height: 200px;
  margin-bottom: 30px;
`
export const Contents = styled.div`
  padding-top: 30px;
`
export const Youtube = styled(ReactPlayer)`
  margin: auto;
  padding-top: 20px;
  padding-bottom: 40px;
`
export const Like = styled.div`
  display: flex;
  justify-content: center;
`
export const LikeIcon = styled(LikeTwoTone)`
  font-size: 30px;
  cursor: pointer;
`
export const LikeCount = styled.div`
  font-size: 20px;
`
export const DisLikeIcon = styled(DislikeTwoTone)`
  font-size: 30px;
  cursor: pointer;
`
export const DisLikeCount = styled.div`
  font-size: 20px;
`
export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`
export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin: 0px 30px;
  cursor: pointer;
  border-radius: 15px;
  :hover {
    background-color: aqua;
    transition-duration: 2s;
  }
`
