import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Home from "../Pages/Home";

import Team from "../Pages/Team";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
// import DashBoard from "../Pages/DashBoard";
import SignUp from "../Pages/SignUp";
import Handpainted from "./../Pages/Handpainted";
import Kids from "./../Pages/Kids";
import Adult from "./../Pages/Adult";
import Gallery from "./../Pages/Gallery";
import BagsDetails from "./../Pages/BagsDetails";
import DashBoard from "./../Pages/DashBoard";

import PrivateRoutes from "./Private/PrivateRoutes";
import AllBags from "../Pages/AllBags";
import AddBag from "../Pages/AddBag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/bags"),
      },
      {
        path: "/bags/:id",
        element: <BagsDetails></BagsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bags/${params.id}`),
      },

      {
        path: "/aboutUs",
        element: <Team></Team>,
      },

      {
        path: "/Handpainted",
        element: <Handpainted></Handpainted>,
      },

      {
        path: "/Kids",
        element: <Kids></Kids>,
      },
      {
        path: "/Adult",
        element: <Adult></Adult>,
      },

      {
        path: "/Gallery",
        element: <Gallery></Gallery>,
      },
      // {
      //   path: "/Adult",
      //   element: <Handpainted></Handpainted>
      // },

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
    path: "dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoutes>
            <DashBoard></DashBoard>
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard/all-bags",
        element: (
          <PrivateRoutes>
            <AllBags></AllBags>
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard/add-bags",
        element: (
          <PrivateRoutes>
            <AddBag></AddBag>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
