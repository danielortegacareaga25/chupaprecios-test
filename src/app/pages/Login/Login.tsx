import { FC, useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getToken } from "../../store/reducers/thunks/authThunk";
import { useNavigate } from "react-router-dom";

export const LoginPage: FC = () => {
  const { loading, bearerToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (bearerToken) {
      navigate("/catalog");
    }
  }, [bearerToken, navigate]);
  return <div data-testid="login">{loading && <Loading />}</div>;
};
