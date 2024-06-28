import { useMutation } from "react-query";
import { postVote } from "@api/postVote";
import { useNavigate } from "react-router-dom";

export function usePostVote() {
  const navigate = useNavigate();

  return useMutation(postVote, {
    onSuccess: () => {
      console.log("투표 성공");
      navigate("/vote/main");
    },
    onError: (error: any) => {
      // AxiosError 객체에서 response.data를 추출하여 접근
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (
          errorData.success === false &&
          errorData.success_or_error_code &&
          errorData.success_or_error_code.status === 400
        ) {
          const message = errorData.success_or_error_code.message;
          console.log(message);
          alert(message); // alert 창으로 메시지 출력
        } else {
          console.log("투표 실패", error);
          alert("투표에 실패하였습니다.");
        }
      } else {
        console.log("투표 실패", error);
        alert("투표에 실패하였습니다.");
      }
    },
  });
}
