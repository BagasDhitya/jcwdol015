import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleTheme: function (state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("theme", state.darkMode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});
