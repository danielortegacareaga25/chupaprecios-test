import { Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FC } from "react";

type Props = {
  counter: number;
};

/**
 * Component to add in the top in the page to show card icon inside
 * @param counter is the number to show in cart icon
 * @returns
 */
export const Header: FC<Props> = ({ counter }) => {
  return (
    <Box
      data-testid="header"
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
