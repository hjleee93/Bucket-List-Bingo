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
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
  },
});

export const { setBingoTitle, setSize } = bingoInfoSlice.actions;



export const selectBingoTitle = (state: RootState) => state.bingoInfo.title;

export default bingoInfoSlice.reducer