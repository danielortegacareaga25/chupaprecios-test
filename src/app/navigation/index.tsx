import { createBrowserRouter, useRouteError } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { LoginPage } from "../pages/Login";
import { CatalogPage } from "../pages/Catalog/Catalog";

const Catalog = () => {
  // Coloca aquí el contenido de tu página de inicio de sesión
  return <div>Catalog Page</div>;
};

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

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
