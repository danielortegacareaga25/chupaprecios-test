import { Box, CircularProgress } from "@mui/material";
import "./Loading.scss";

export const Loading = () => {
  return (
    <Box className="loading__container">
      <CircularProgress />
    </Box>
  );
};
