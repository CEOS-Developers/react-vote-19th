import { useQuery } from "react-query";
import { getVotingOptions } from "@api/getVotingOptions";
import { ResponseTypes } from "@api/getVotingOptions";

export function useGetVotingOptions() {
  const result = useQuery<ResponseTypes[], Error>(
    ["getVotingOptions"],
    getVotingOptions,
    {
      onError: (error) => {
        console.log("Voting Option이 존재하지 않습니다.", error);
      },
    },
  );

  return result;
}
