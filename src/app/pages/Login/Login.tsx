import { FC, useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getToken } from "../../store/reducers/thunks/authThunk";
import { useNavigate } from "react-router-dom";

/**
 * Login Page is the main page to get the token to the next request
 */
export const LoginPage: FC = () => {
  const { loading, bearerToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  /**
   * Hook to get the token to the store when the component is mounted
   */
  useEffect(() => {
    dispatch(getToken());
  }, []);

  /**
   * Hook to validate if there is a token in store navigate to the catalog page
   */
  useEffect(() => {
    if (bearerToken) {
      navigate("/catalog");
    }
  }, [bearerToken, navigate]);
  return <div data-testid="login">{loading && <Loading />}</div>;
};
