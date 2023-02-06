import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = "Hello";

const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    addNotif(state, action) {
      return action.payload;
    },
    removeNotif(state, action) {
      return "";
    },
  },
});

export const { addNotif, removeNotif } = notifSlice.actions;
export default notifSlice.reducer;
