import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FC } from "react";
import "./ProductCard.scss";

type Props = {
  title: string;
  thumbnail: string;
  handledClick: () => void;
};

/**
 *
 * @param title is the text to show in the first
 * @param  thumbnail is the url to the image
 * @param handledClick is the method to execute in the button add
 */
export const ProductCard: FC<Props> = ({ title, thumbnail, handledClick }) => {
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
