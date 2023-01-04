import { RouteProps } from "react-router-dom";
import { Dashboard, Auth, Users, UserView, Blank } from "../pages";

const routes: RouteProps[] = [
  { path: "/", element: <Auth /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/users", element: <Users /> },
  { path: "/users/:userId", element: <UserView /> },
  { path: "/blank", element: <Blank /> },
];

export default routes;
