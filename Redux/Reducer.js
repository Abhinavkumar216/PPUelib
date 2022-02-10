import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 3230,
  userTocken: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    userTocken: (state, action) => {
      state.userTocken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {userTocken} = counterSlice.actions;

export default counterSlice.reducer;
