import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../util/baseURL";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const response = await axios.get(`${baseURL}/product`);

    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productList = action.payload.products;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
