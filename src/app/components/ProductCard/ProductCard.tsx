import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FC } from "react";
import "./ProductCard.scss";

type Props = {
  asin: string;
  title: string;
  thumbnail: string;
  handledClick: () => void;
};

export const ProductCard: FC<Props> = ({
  title,
  thumbnail,
  handledClick,
  asin,
}) => {
  return (
    <Grid item xs={12} sm={4} md={3} flexDirection={"column"} className="item">
      <p className="item__text">{title}</p>
      <img className="item__img" src={thumbnail} alt={title} />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handledClick}
      >
        Agregar
      </Button>
    </Grid>
  );
};
