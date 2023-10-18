import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hook";

export const PrivateRoute: FC<{ children: any }> = ({ children }) => {
  const token = useAppSelector((x) => x.auth.bearerToken);

  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" />;
  }

  // authorized so return child components
  return children;
};
