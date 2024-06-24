import { postSignInTypes } from "types/postSignInTypes";
import { customAxios } from "./customAxios";

export async function postSignIn(props: postSignInTypes) {
  const { username, password } = props;
  const response = await customAxios.post("/api/users/login", {
    username: username,
    password: password,
  });

  return response;
}
