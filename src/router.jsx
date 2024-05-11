import { createBrowserRouter } from "react-router-dom";
import App from "./Pages/App";
import Detail from "./Pages/Detail";
import NotFound from "./Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
