import { postSignInTypes } from "types/postSignInTypes";
import { customAxios } from "./customAxios";
import { AxiosResponse } from "axios";

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  message: string;
}

interface FullResponse {
  success: boolean;
  response: SignInResponse;
  success_or_error_code: {
    status: number;
    message: string;
  };
}

export async function postSignIn(
  props: postSignInTypes,
): Promise<AxiosResponse<FullResponse>> {
  const { username, password } = props;
  const response = await customAxios.post<FullResponse>("/api/users/login", {
    username,
    password,
  });

  return response;
}
