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
    onError: (error) => {
      console.log("투표 실패", error);
    },
  });
}
