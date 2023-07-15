import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

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
  ];
  return <RouterProvider router={createBrowserRouter(routes)} />;
};
