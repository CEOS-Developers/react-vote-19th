import { AxiosResponse } from "axios";
import { customAxios } from "./customAxios";

export interface ResponseTypes {
  id: number;
  name: string;
  voteCount: number;
}

interface GetVotingOptionsByTopicIdTypes {
  success: boolean;
  response: ResponseTypes[];
}

export async function getVotingOptionsByTopicId(
  topicID: number,
): Promise<ResponseTypes[]> {
  const { data }: AxiosResponse<GetVotingOptionsByTopicIdTypes> =
    await customAxios.get(`/api/votingoptions/topics/${topicID}`);

  const { response } = data;
  return response;
}
