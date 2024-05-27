import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Home from "../Pages/Home";

import About from "../Pages/About";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import DashBoard from "../Pages/DashBoard";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: " ",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);
export default router;
