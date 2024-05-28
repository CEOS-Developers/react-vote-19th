import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@components/layout/RootLayout";
import Error from "@pages/Error";
import SignIn from "@pages/SignIn";
import Signup from "@pages/SignUp";
import VoteLayout from "@components/layout/VoteLayout";
import VoteMain from "@pages/Vote/VoteMain";
import SelectPart from "@pages/Vote/SelectPart";
import SelectDemo from "@pages/Vote/SelectDemo";
import VoteFront from "@pages/Vote/VoteFront";
import VoteBack from "@pages/Vote/VoteBack";
import VoteDemo from "@pages/Vote/VoteDemo";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <VoteMain /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/vote",
        element: <VoteLayout />,
        children: [
          { path: "/vote/main", element: <VoteMain /> },
          { path: "/vote/select/part", element: <SelectPart /> },
          { path: "/vote/select/demo", element: <SelectDemo /> },
          { path: "/vote/front", element: <VoteFront /> },
          { path: "/vote/back", element: <VoteBack /> },
          { path: "/vote/demo", element: <VoteDemo /> },
        ],
      },
    ],
  },
]);
