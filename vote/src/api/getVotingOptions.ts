import { AxiosResponse } from "axios";
import { customAxios } from "./customAxios";

export interface ResponseTypes {
  id: number;
  name: string;
  voteCount: number;
}

interface GetVotingOptionsTypes {
  success: boolean;
  response: ResponseTypes[];
}

export async function getVotingOptions(): Promise<ResponseTypes[]> {
  const { data }: AxiosResponse<GetVotingOptionsTypes> =
    await customAxios.get("/api/votingoptions");

  const { response } = data;
  return response;
}
