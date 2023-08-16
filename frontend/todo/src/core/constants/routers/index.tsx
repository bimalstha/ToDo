import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../../../features/auth/pages/LandingPage";
import TodoPage from "../../../features/todo/pages";
import TodoForm from "../../../features/todo/components/TodoForm";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/gettask", element: <TodoPage /> },

]);
