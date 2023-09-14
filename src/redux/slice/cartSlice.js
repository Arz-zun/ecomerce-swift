import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../util/baseURL";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getCartDetails = createAsyncThunk(
  "carts/getCartDetails",
  async (userId) => {
    const response = await axios.get(`${baseURL}/carts/user/${userId}`);

    return response.data;
  }
);

// add product to cart
export const addToCart = createAsyncThunk(
  "carts/addToCart",
  async (data, { dispatch, getState }) => {
    await axios
      .post(`${baseURL}/carts/add`, data, config)
      .then((response) => {
        console.log(response.data);
        dispatch(getCartDetails(getState().carts.userId));
      })
      .catch((error) => {
        console.error(error);
      });
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    cartDetails: [],
    loading: true,
    userId: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    //get cart details
    builder.addCase(getCartDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCartDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.cartDetails = action.payload.carts[0];
      state.userId = action.payload.carts[0].userId;
    });
    builder.addCase(getCartDetails.rejected, (state) => {
      state.loading = false;
    });

    //add to cart
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default cartSlice.reducer;
