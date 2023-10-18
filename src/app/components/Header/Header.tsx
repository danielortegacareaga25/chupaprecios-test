import { Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FC } from "react";

type Props = {
  counter: number;
};

export const Header: FC<Props> = ({ counter }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"flex-end"}
      padding={"20px"}
      position={"fixed"}
      right={0}
    >
      <Badge badgeContent={counter} color="primary">
        <ShoppingCartIcon
          color={"action"}
          fontSize={"large"}
          sx={{
            padding: "5px",
            background: "white",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "transform 0.3s",
            ":hover": {
              transform: "scale(1.5)",
            },
          }}
        />
      </Badge>
    </Box>
  );
};
