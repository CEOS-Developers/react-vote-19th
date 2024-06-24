import { AxiosResponse } from "axios";
import { customAxios } from "./customAxios";

export interface VotingOptionDtoTypes {
  id: number;
  name: string;
}

export interface ResponseTypes {
  id: number;
  name: string;
  minimumVotesRequired: number;
  votingOptionDto: VotingOptionDtoTypes[];
}

interface GetTopicsByIdTypes {
  success: boolean;
  response: ResponseTypes;
}

export async function getTopicsById(topicID: number): Promise<ResponseTypes> {
  const { data }: AxiosResponse<GetTopicsByIdTypes> = await customAxios.get(
    `/api/topics/${topicID}`,
  );

  const { response } = data;
  return response;
}
