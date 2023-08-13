import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../../features/auth/pages/LandingPage";
import TodoPage from "../../../features/todo/pages";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/tasks", element: <TodoPage /> },
]);
