import { createSlice } from "@reduxjs/toolkit";

// Initial State: empty array for API data
const initialState = [];

const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setApiData: (_state, action) => {
      const data = Array.isArray(action.payload) ? action.payload : [];
      return data;
    },
    clearApiData: () => [],
  },
});

export const { setApiData, clearApiData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
