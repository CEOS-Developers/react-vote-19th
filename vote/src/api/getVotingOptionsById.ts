import { AxiosResponse } from "axios";
import { customAxios } from "./customAxios";

export interface ResponseTypes {
  id: number;
  name: string;
  voteCount: number;
}

interface GetVotingOptionsByIdTypes {
  success: boolean;
  response: ResponseTypes[];
}

export async function getVotingOptionsById(
  topicID: number,
): Promise<ResponseTypes[]> {
  const { data }: AxiosResponse<GetVotingOptionsByIdTypes> =
    await customAxios.get(`/api/votingoptions/topics/${topicID}`);

  const { response } = data;
  return response;
}
