import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Header } from "../../components/Header/Header";
import { Box, Grid } from "@mui/material";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Favorite } from "../../interfaces/favorite.interface";
import { addCart } from "../../store/reducers/slices/cartSlice";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { getCatalog } from "../../store/reducers/thunks/catalogThunk";

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const { data: items, loading } = useAppSelector((state) => state.catalog);
  const favorites = useAppSelector((state) => state.cart.items);
  const [counterItems, setCounterItems] = useState(0);

  useEffect(() => {
    dispatch(getCatalog());
  }, []);

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
      {loading && <Loading />}
      <Header data-testid="header" counter={counterItems} />
      <Grid container spacing={1} pt={10}>
        {items?.map(({ title, thumbnail, asin }) => (
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
