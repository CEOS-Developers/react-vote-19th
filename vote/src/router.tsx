import { createBrowserRouter } from "react-router-dom";
import Error from "@pages/Error";
import SignIn from "@pages/SignIn";
import Signup from "@pages/SignUp";
import VoteLayout from "@components/layout/VoteLayout";
import VoteMain from "@pages/Vote/VoteMain";
import SelectPart from "@pages/Vote/SelectPart";
import SelectDemo from "@pages/Vote/SelectDemo";
import VotePart from "@pages/Vote/VotePart";
import VoteDemo from "@pages/Vote/VoteDemo";
import ResultPart from "@pages/Result/ResultPart";
import ResultDemo from "@pages/Result/ResultDemo";
import ResultsOnly from "@pages/ResultsOnly/ResultsOnly";
import ResultsOnlyDemo from "@pages/ResultsOnly/ResultsOnlyDemo";
import ResultsOnlyPart from "@pages/ResultsOnly/ResultsOnlyPart";
import Interceptors from "@components/Interceptors";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Interceptors />,
    errorElement: <Error />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <Signup /> },

      { path: "/results-only", element: <ResultsOnly /> },
      { path: "/results-only/demo", element: <ResultsOnlyDemo /> },
      { path: "results-only/:type", element: <ResultsOnlyPart /> },

      {
        path: "/vote",
        element: <VoteLayout />,
        children: [
          { path: "/vote/main", element: <VoteMain /> },
          { path: "/vote/select/part", element: <SelectPart /> },
          { path: "/vote/select/demo", element: <SelectDemo /> },
          { path: "/vote/:type", element: <VotePart /> },
          { path: "/vote/demo", element: <VoteDemo /> },
        ],
      },

      { path: "/result/:type", element: <ResultPart /> },
      { path: "/result/demo", element: <ResultDemo /> },
    ],
  },
]);
