import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      if (confirm("로그인 후 사용이 가능합니다. 로그인 하시겠습니까?")) {
        router.push(`/boards/login`);
      } else {
        router.push(`/oldboards`);
      }
    }
  }, []);
}
