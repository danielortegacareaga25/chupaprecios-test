import { allRoutes } from "./app/navigation";
import { RouterProvider } from "react-router-dom";

/**
 * Main entry point to application
 */
export const App = () => {
  return <RouterProvider router={allRoutes} />;
};
