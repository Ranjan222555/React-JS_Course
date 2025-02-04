import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formdata: {
    title: "",
    Description: "",
  },
  bloglist: [],
  CurrentEditBlog: null,
};

export const blogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    blogInputChange: (state, actions) => {
      let copydata = { ...state.formdata };
      copydata = {
        ...copydata,
        ...actions.payload,
      };
      state.formdata = copydata;
    },
    AddNewBlogChange: (state, actions) => {
      console.log("AddNewBlogChange");
      state.bloglist.push({
        id: nanoid(),
        ...state.formdata,
      });
      state.formdata = {
        title: "",
        Description: "",
      };

      localStorage.setItem("bloglist", JSON.stringify(state.bloglist));
    },
    setBloglistOnLoad: (state, actions) => {
      state.bloglist = actions.payload.BlogList;
    },
    handelDeleteBlog: (state, action) => {
      // console.log(action.payload);
      const { payload } = action;
      const { currentblog } = payload;
      let cpyBloglist = [...state.bloglist];
      cpyBloglist = cpyBloglist.filter(
        (blogItems) => blogItems.id !== currentblog
      );
      state.bloglist = cpyBloglist;
      localStorage.setItem("bloglist", JSON.stringify(cpyBloglist));
    },
    setCurrentEditBlog: (state, action) => {
      // console.log(action);
      const { currentblog } = action.payload;
      state.CurrentEditBlog = currentblog;
      // console.log(currentblog);
    },
    HandelEditBlogButtonChange: (state, action) => {
      console.log("HandelEditBlogButtonChange");

      let copyBloglist = [...state.bloglist];
      const findindexOfCurrBlog = copyBloglist.findIndex(
        (blogItems) => blogItems.id === state.CurrentEditBlog
      );

      copyBloglist[findindexOfCurrBlog] = {
        ...copyBloglist[findindexOfCurrBlog],
        ...state.formdata,
      };
      state.bloglist = copyBloglist;
      localStorage.setItem("bloglist", JSON.stringify(copyBloglist));
    },
  },
});

export const {
  blogInputChange,
  AddNewBlogChange,
  setBloglistOnLoad,
  handelDeleteBlog,
  setCurrentEditBlog,
  HandelEditBlogButtonChange,
} = blogSlice.actions;
export default blogSlice.reducer;
