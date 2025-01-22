import { configureStore } from "@reduxjs/toolkit";

import userStore from "./userStore";
import moviesStore from "./moviesStore"


export default configureStore({
  reducer: { userStore, moviesStore },
});
