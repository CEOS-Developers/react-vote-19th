import { postSignUpTypes } from "types/postSignUpTypes";
import { customAxios } from "./customAxios";

export async function postSignUp(props: postSignUpTypes) {
  const { username, password, email, part, team, name, role } = props;
  const response = await customAxios.post("/api/users/signup", {
    username: username,
    password: password,
    email: email,
    part: part,
    team: team,
    role: role,
    name: name,
  });

  return response;
}
