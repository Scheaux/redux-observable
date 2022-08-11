import { createSlice } from '@reduxjs/toolkit';

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    items: [],
    loading: true,
    error: null
  },
  reducers: {
    setItems(state, action) {
      // state.items = action.payload;
      state.loading = true;
      state.error = null;
    },
    setItemsSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    setItemsError(state, action) {
      state.items = [];
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { setItems, setItemsSuccess, setItemsError } = servicesSlice.actions;

export default servicesSlice.reducer;
