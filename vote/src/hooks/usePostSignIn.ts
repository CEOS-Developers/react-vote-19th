import { useMutation, UseMutationResult } from "react-query";
import { postSignIn, SignInResponse } from "@api/postSignIn";
import { setCookie } from "@api/cookie";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface FullResponse {
  success: boolean;
  response: SignInResponse;
  success_or_error_code: {
    status: number;
    message: string;
  };
}

export function usePostSignIn(): UseMutationResult<
  AxiosResponse<FullResponse>,
  AxiosError,
  { username: string; password: string }
> {
  const navigate = useNavigate();

  return useMutation<
    AxiosResponse<FullResponse>,
    AxiosError,
    { username: string; password: string }
  >(postSignIn, {
    onSuccess: (response) => {
      const accessToken = response.data.response.accessToken;
      setCookie("accessToken", accessToken, { path: "/" });
      console.log("로그인 성공");
      navigate("/vote/main");
    },
    onError: (error) => {
      console.log("로그인 실패", error);
      alert("로그인 실패");
    },
  });
}
