import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import VoteMain from "./pages/VoteMain";
import TeamVotePage from "./pages/TeamVotePage";
import MemberVotePage from "./pages/MemberVotePage";
import TeamVoteResultPage from "./pages/TeamVoteResultPage";
import MemberVoteResultPage from "./pages/MemberVoteResultPage";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/" element={<VoteMain/>} />
            <Route path="/teamvote" element={<TeamVotePage />} />
            <Route path="/membervote" element={<MemberVotePage />} />
            <Route path="/teamresult" element={<TeamVoteResultPage />} />
            <Route path="/memberresult" element={<MemberVoteResultPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
