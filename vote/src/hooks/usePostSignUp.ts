import { useMutation } from "react-query";
import { postSignUp } from "@api/postSignUp";
import { useNavigate } from "react-router-dom";

export function usePostSignUp() {
  const navigate = useNavigate();

  return useMutation(postSignUp, {
    onSuccess: () => {
      console.log("회원가입 성공");
      navigate("/signin");
    },
    onError: (error) => {
      console.log("회원가입 실패", error);
    },
  });
}
