import { createAsyncThunk } from "@reduxjs/toolkit";
import { CatalogResponse } from "../../../interfaces/catalog.interface";
import { api } from "../../../api";

export const FETCH_CATALOG = "events/getCatalog";

export const getCatalog = createAsyncThunk<CatalogResponse[]>(
  FETCH_CATALOG,
  async () => {
    const { data } = await api.get(
      "/chupaprecios/customcatalog/?search=perro&selected_store=amazon&page_num=1"
    );
    return data;
  }
);
