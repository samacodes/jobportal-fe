import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import AppliedJobs from "./Pages/AppliedJobs";

export const AppRouter = () => {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/applied-jobs",
      element: <AppliedJobs />,
    },
  ];
  return <RouterProvider router={createBrowserRouter(routes)} />;
};
