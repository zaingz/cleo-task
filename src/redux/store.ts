import { configureStore } from "@reduxjs/toolkit";
import merchantsReducer, { MerchantState } from "./merchantsSlice";

export interface AppState {
  merchants: MerchantState;
}

export default configureStore({
  reducer: {
    merchants: merchantsReducer,
  },
});
