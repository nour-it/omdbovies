import { configureStore } from "@reduxjs/toolkit";

import achatStore from "./achatStore";
import userStore from "./userStore";


export default configureStore({
  reducer: { achatStore, userStore },
});
