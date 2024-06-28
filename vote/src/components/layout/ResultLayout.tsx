import { useNavigate } from "react-router-dom";
import VoteHeader from "@components/common/VoteHeader";
import VoteBtn from "@components/common/VoteBtn";

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();

  return (
    <>
      <VoteHeader />
      <>{children}</>
      <VoteBtn text="돌아가기" onClick={() => navigate("/vote/main")} />
    </>
  );
}
