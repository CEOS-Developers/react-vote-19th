import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import VoteMain from "./pages/VoteMain";
import TeamVotePage from "./pages/TeamVotePage";
import MemberVotePage from "./pages/MemberVotePage";
import TeamVoteResultPage from "./pages/TeamVoteResultPage";
import MemberVoteResultPage from "./pages/MemberVoteResultPage";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
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
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`