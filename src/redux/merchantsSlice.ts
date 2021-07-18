import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { APIConstants } from "../shared/constants";
import { AppState } from "./store";
import { Merchant } from "../types";

export interface MerchantState {
  data: Merchant[];
  isLoading: boolean;
  hasErrors: boolean;
}

const initialState: MerchantState = {
  data: [],
  isLoading: false,
  hasErrors: false,
};

export const fetchMerchants = createAsyncThunk(
  "merchants/fetchMerchants",
  async () => {
    try {
      const response = await fetch(
        APIConstants.base + APIConstants.merchantsPath
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(error);
    }
  }
);

type UpdateBillThunkPayload = {
  id: string;
  isBill: boolean;
};

type UpdateBillThunkReturnType = UpdateBillThunkPayload;

export const updateMerchantBill = createAsyncThunk<
  UpdateBillThunkReturnType,
  UpdateBillThunkPayload
>("merchants/updateMerchant", async ({ id, isBill }) => {
  try {
    const response = await fetch(
      APIConstants.base + APIConstants.merchantsPath + "/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isBill,
        }),
      }
    );
    const data = await response.json();

    return { id: data.id, isBill: data.isBill };
  } catch (error) {
    throw Error(error);
  }
});

const merchantsSlice = createSlice({
  name: "merchants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMerchants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMerchants.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.data = actions.payload;
      })
      .addCase(fetchMerchants.rejected, (state) => {
        state.isLoading = false;
        state.hasErrors = true;
      })
      .addCase(updateMerchantBill.fulfilled, (state, actions: any) => {
        const merchantIdx = state.data.findIndex(
          (mer) => mer.id === actions.payload.id
        );
        state.data[merchantIdx].isBill = actions.payload.isBill;
      });
  },
});

export const selectMerchantsData = (state: AppState) => state.merchants.data;
export const selectMerchants = (state: AppState) => state.merchants;

export const selectBilledMerchant = createSelector(
  selectMerchantsData,
  (merchants: Merchant[]) => merchants.filter((mer) => mer.isBill)
);

export const selectNotBilledMerchant = createSelector(
  selectMerchantsData,
  (merchants: Merchant[]) => merchants.filter((mer) => !mer.isBill)
);

export default merchantsSlice.reducer;
