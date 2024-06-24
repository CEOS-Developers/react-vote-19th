import { useQuery } from "react-query";
import { getTopics } from "@api/getTopics";
import { ResponseTypes } from "@api/getTopics";

export default function useGetTopics() {
  const result = useQuery<ResponseTypes[], Error>(["getTopics"], getTopics, {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  return result;
}

// 컴포넌트에서 이렇게 data 불러와서 쓰면 돼 !! 

// const { data } = useGetMyPageComment();

// data?.map((data) =>
//   return 
