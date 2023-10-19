import { Box, CircularProgress } from "@mui/material";
import "./Loading.scss";

/**
 * Component to show a progress icon in all the page in front
 */
export const Loading = () => {
  return (
    <Box className="loading__container">
      <CircularProgress />
    </Box>
  );
};
