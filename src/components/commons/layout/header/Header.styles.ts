import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-image: url("/images/Header01.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Img = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoWrapper = styled.div``;
export const Logo = styled.img`
  cursor: pointer;
  padding-left: 50px;
`;
export const Buttons = styled.div``;
export const Login = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  margin-right: 40px;
  background-color: white;
  border-color: white;
  border-radius: 15px;
  :hover {
    background-color: yellow;
    transition: 2s;
  }
`;
export const SignUp = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  margin-right: 40px;
  background-color: white;
  border-color: white;
  border-radius: 15px;
  :hover {
    background-color: yellow;
    transition: 2s;
  }
`;
export const LogoutWrapper = styled.div``;
export const Logout = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  margin-right: 40px;
  background-color: white;
  border-color: white;
  border-radius: 15px;
  :hover {
    background-color: yellow;
    transition: 2s;
  }
`;
export const LoginUser = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 10px;
  font-weight: bold;
`;
export const UserName = styled.div``;
export const Point = styled.div`
  font-weight: bold;
`;
export const ProfileIcon = styled.img`
  cursor: pointer;
`;
