import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "./Slice/counter";
import blogReducer from "./Slice/Blogslice";

const store = configureStore({
  reducer: {
    counter: counterreducer, //dont understand this
    blog: blogReducer,
  },
});

export default store;
