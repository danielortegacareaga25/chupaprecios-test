import { createBrowserRouter, useRouteError } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { LoginPage } from "../pages/Login/Login";
import { CatalogPage } from "../pages/Catalog/Catalog";

/**
 * Generic page to show error
 * @returns Component
 */
export default function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

/**
 * contains the configuration of routes
 */
export const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catalog",
    element: (
      <PrivateRoute>
        <CatalogPage />
      </PrivateRoute>
    ),
  },
]);
