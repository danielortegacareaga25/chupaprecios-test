import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api";

export const FETCH_TOKEN = "events/getToken";

export const getToken = createAsyncThunk<string>(FETCH_TOKEN, async () => {
  const { data } = await api.post("/integration/admin/token", {
    username: "candidatoFront",
    password: "Ch8t45t!f",
  });
  return data;
});
