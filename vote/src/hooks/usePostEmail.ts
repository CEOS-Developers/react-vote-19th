import { useMutation } from "react-query";
import { postEmail } from "@api/postEmail";

export function usePostEmail() {
  return useMutation(postEmail, {
    onSuccess: () => {
      console.log("이메일 인증 성공");
    },
    onError: (error) => {
      console.log("이메일 인증 실패", error);
    },
  });
}
