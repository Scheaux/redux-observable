import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    changeSearch(state, action) {
      state.items = [];
      state.search = action.payload;
    },
    searchSkillsRequest(state, action) {
      state.items = [];
      state.loading = true;
      state.error = null;
    },
    searchSkillsSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    searchSkillsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  changeSearch,
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure
} = searchSlice.actions;

export default searchSlice.reducer;
