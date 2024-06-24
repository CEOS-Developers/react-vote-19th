import { useQuery } from "react-query";
import { getTopicsById } from "@api/getTopicsById";
import { ResponseTypes } from "@api/getTopicsById";

export function useGetTopicsById(topicID: number) {
  const result = useQuery<ResponseTypes, Error>(
    ["getTopicsById", topicID],
    () => getTopicsById(topicID),
    {
      onError: (error) => {
        console.log("해당 Topic이 존재하지 않습니다.", error);
      },
    },
  );

  return result;
}
