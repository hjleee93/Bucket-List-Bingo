import { RootState } from "@/lib/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface bingoInfoState {
  title: string;
  size: number;
}

export const initialState: bingoInfoState = {
  title: '',
  size: 0,
};

export const bingoInfoSlice = createSlice({
  name: 'bingoInfo',
  initialState,
  reducers: {
    setBingoTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setBingoSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
  },
});

export const { setBingoTitle, setBingoSize } = bingoInfoSlice.actions;



export const selectBingoTitle = (state: RootState) => state.bingoInfo.title;
export const selectBingoSize = (state: RootState) => state.bingoInfo.size;

export default bingoInfoSlice.reducer