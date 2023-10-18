import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Header } from "../../components/Header/Header";
import { Box, Grid } from "@mui/material";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Favorite } from "../../interfaces/favorite.interface";
import { addCart } from "../../store/reducers/slices/cartSlice";
import { useEffect, useState } from "react";

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.catalog.data);
  const favorites = useAppSelector((state) => state.cart.items);
  const [counterItems, setCounterItems] = useState(0);

  const handledClickAdd = (favorite: Favorite) => {
    dispatch(addCart(favorite));
  };

  useEffect(() => {
    const counterTotal = favorites.reduce((acc, curr) => {
      return acc + curr.counter;
    }, 0);
    setCounterItems(counterTotal);
  }, [favorites]);
  return (
    <Box>
      <Header counter={counterItems} />
      <Grid container spacing={1} pt={10}>
        {items.map(({ title, thumbnail, asin }) => (
          <ProductCard
            key={asin}
            title={title}
            thumbnail={thumbnail}
            asin={asin}
            handledClick={() =>
              handledClickAdd({
                title,
                thumbnail,
                asin,
              })
            }
          />
        ))}
      </Grid>
    </Box>
  );
};
