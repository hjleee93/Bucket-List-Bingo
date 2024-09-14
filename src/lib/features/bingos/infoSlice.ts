import { RootState } from "@/lib/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface bingoInfoState {
  title: string;
  size: number;
  board: (bingoCell | null)[][];
}



export interface bingoCell {
  color?: string;
  value: string;
  isMarked?: boolean;
}

export const initialState: bingoInfoState = {
  title: '',
  size: 0,
  board: []
};

export const bingoInfoSlice = createSlice({
  name: 'bingoInfo',
  initialState,
  reducers: {
    setBingoTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setBingoSize: (state, action: PayloadAction<number>) => {
      const size = action.payload;
      state.size = size

      //creating a 2D array
      state.board = Array.from({ length: size }, () => Array(size).fill({color: null, value: '', isMarked: false}));
    },
    setBingoContent: (state, action: PayloadAction<{row: number, col: number, cell: bingoCell}>) => {
      const { row, col, cell } = action.payload;
      
      if(!cell.color) cell.color = '#ffffff';
      if(!cell.isMarked) cell.isMarked = false;
      state.board[row][col] = cell;
    }
  },
});

export const { setBingoTitle, setBingoSize, setBingoContent } = bingoInfoSlice.actions;



export const selectBingoTitle = (state: RootState) => state.bingoInfo.title;
export const selectBingoSize = (state: RootState) => state.bingoInfo.size;
export const selectBingoBoard = (state: RootState) => state.bingoInfo.board;

export default bingoInfoSlice.reducer