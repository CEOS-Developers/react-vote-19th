import { useQuery } from "react-query";
import { getTopicById } from "@api/getTopicById";
import { ResponseTypes } from "@api/getTopicById";

export default function useGetTopicById(topicID: number) {
  const result = useQuery<ResponseTypes, Error>(
    ["getTopicById", topicID],
    () => getTopicById(topicID),
    {
      onError: (error) => {
        console.log("해당 Topic이 존재하지 않습니다.", error);
      },
    },
  );

  return result;
}
