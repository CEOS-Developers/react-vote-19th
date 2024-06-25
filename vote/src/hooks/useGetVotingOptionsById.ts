import { useQuery } from "react-query";
import { getVotingOptionsById } from "@api/getVotingOptionsById";
import { ResponseTypes } from "@api/getVotingOptionsById";

export function useGetVotingOptionsById(topicID: number) {
  const result = useQuery<ResponseTypes[], Error>(
    ["getVotingOptionsById", topicID],
    () => getVotingOptionsById(topicID),
    {
      onError: (error) => {
        console.log(
          "해당 Topic 또는 Voting Option이 존재하지 않습니다.",
          error,
        );
      },
    },
  );

  return result;
}
