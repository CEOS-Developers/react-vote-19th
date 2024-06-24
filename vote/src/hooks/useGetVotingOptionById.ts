import { useQuery } from "react-query";
import { getVotingOptionById } from "@api/getVotingOptionById";
import { ResponseTypes } from "@api/getVotingOptionById";

export function useGetVotingOptionById(votingOptionID: number) {
  const result = useQuery<ResponseTypes, Error>(
    ["getVotingOptionById", votingOptionID],
    () => getVotingOptionById(votingOptionID),
    {
      onError: (error) => {
        console.log("Voting Option이 존재하지 않습니다.", error);
      },
    },
  );

  return result;
}
