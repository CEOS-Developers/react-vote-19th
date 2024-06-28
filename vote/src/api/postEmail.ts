import { postEmailTypes } from "types/postEmailTypes";
import { customAxios } from "./customAxios";

export async function postEmail(props: postEmailTypes) {
  const { email } = props;
  const response = await customAxios.post("/api/users/verify", {
    email: email,
  });

  return response;
}
