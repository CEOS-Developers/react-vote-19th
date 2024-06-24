import { useMutation } from "react-query";
import { postSignIn } from "@api/postSignIn";
import { useNavigate } from "react-router-dom";

export function usePostSignIn() {
  const navigate = useNavigate();

  return useMutation(postSignIn, {
    onSuccess: () => {
      console.log("로그인 성공");
      navigate("/vote/main");
    },
    onError: (error) => {
      console.log("로그인 실패", error);
    },
  });
}
