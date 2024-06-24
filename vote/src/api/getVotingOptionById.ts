import { AxiosResponse } from "axios";
import { customAxios } from "./customAxios";

export interface ResponseTypes {
  id: number;
  name: string;
  voteCount: number;
}

interface GetVotingOptionByIdTypes {
  success: boolean;
  response: ResponseTypes;
}

export async function getVotingOptionById(
  votingOptionID: number,
): Promise<ResponseTypes> {
  const { data }: AxiosResponse<GetVotingOptionByIdTypes> =
    await customAxios.get(`/api/votingoptions/${votingOptionID}`);

  const { response } = data;
  return response;
}
