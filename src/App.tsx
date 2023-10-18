import { useEffect } from "react";
import { useAppDispatch } from "./app/store/hook";
import { getToken } from "./app/store/reducers/thunks/authThunk";
import { allRoutes } from "./app/navigation";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getToken());
  }, []);

  return <RouterProvider router={allRoutes} />;
};
