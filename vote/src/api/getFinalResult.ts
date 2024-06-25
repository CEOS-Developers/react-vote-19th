import { AxiosResponse } from "axios";
import { customAxios } from "./customAxios";

export interface ResponseTypes {
  votingOptionCount: number;
  votingOptionName: string;
  votingOptionId: number;
}

interface GetFinalResultTypes {
  success: boolean;
  response: ResponseTypes[];
}

export async function getFinalResult(
  topicID: number,
): Promise<ResponseTypes[]> {
  const { data }: AxiosResponse<GetFinalResultTypes> = await customAxios.get(
    `/api/topics/${topicID}/results`,
  );

  const { response } = data;
  return response;
}
