import { useQuery } from "react-query";
import { getVotingOptionsByTopicId } from "@api/getVotingOptionsByTopicId";
import { ResponseTypes } from "@api/getVotingOptionsByTopicId";

export function useGetVotingOptionsByTopicId(topicID: number) {
  const result = useQuery<ResponseTypes[], Error>(
    ["getVotingOptionsByTopicId", topicID],
    () => getVotingOptionsByTopicId(topicID),
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
