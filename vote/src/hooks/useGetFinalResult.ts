import { useQuery } from "react-query";
import { getFinalResult } from "@api/getFinalResult";
import { ResponseTypes } from "@api/getFinalResult";

export function useGetFinalResult(topicID: number) {
  const result = useQuery<ResponseTypes, Error>(
    ["getFinalResult", topicID],
    () => getFinalResult(topicID),
    {
      onError: (error) => {
        console.log("해당 Topic이 존재하지 않습니다.", error);
      },
    },
  );

  return result;
}
