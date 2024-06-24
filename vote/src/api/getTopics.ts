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

interface GetTopicsTypes {
  success: boolean;
  response: ResponseTypes[];
}

export async function getTopics(): Promise<ResponseTypes[]> {
  const { data }: AxiosResponse<GetTopicsTypes> =
    await customAxios.get("/api/topics");

  const { response } = data;
  return response;
}
