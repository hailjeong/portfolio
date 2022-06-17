import { useRouter } from "next/router";
import { useEffect } from "react";

export const WithAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessItem")) {
      alert("회원정보가 없습니다.");
      router.push(`/boards`);
    }
  }, []);

  return <Component {...props} />;
};
