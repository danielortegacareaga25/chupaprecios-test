import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hook";

/**
 * Component to protects the route and navigate to / when is invalid
 * @param children any component
 */
export const PrivateRoute: FC<{ children: any }> = ({ children }) => {
  const token = useAppSelector((x) => x.auth.bearerToken);

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};
