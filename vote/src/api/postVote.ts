import { postVoteTypes } from "types/postVoteTypes";
import { customAxios } from "./customAxios";

export async function postVote(props: postVoteTypes) {
  const { topicId, votingOptionId } = props;
  const response = await customAxios.post("/api/votes", {
    topicId: topicId,
    votingOptionId: votingOptionId,
  });

  return response?.data.data;
}
