import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Header } from "../../components/Header/Header";
import { Box, Grid } from "@mui/material";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Favorite } from "../../interfaces/favorite.interface";
import { addCart } from "../../store/reducers/slices/cartSlice";
import { FC, useEffect, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { getCatalog } from "../../store/reducers/thunks/catalogThunk";

/**
 * Catalog page is the page to show list products and header with cart logo
 */
export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const { data: items, loading } = useAppSelector((state) => state.catalog);
  const favorites = useAppSelector((state) => state.cart.items);
  const [counterItems, setCounterItems] = useState(0);

  /**
   * Hook to get the catalog data when the component is mounted
   */
  useEffect(() => {
    dispatch(getCatalog());
  }, []);

  /**
   * Method to add new item in cart store
   * @param favorite is the data to add in cart store
   */
  const handledClickAdd = (favorite: Favorite) => {
    dispatch(addCart(favorite));
  };

  /**
   * Hook to calculate the amount total of item in cart when the favorites change
   */
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
