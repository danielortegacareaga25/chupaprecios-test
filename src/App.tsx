import { allRoutes } from "./app/navigation";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  return <RouterProvider router={allRoutes} />;
};
