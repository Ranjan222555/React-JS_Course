import { useDispatch, useSelector } from "react-redux";
import {
  AddNewBlogChange,
  blogInputChange,
  HandelEditBlogButtonChange,
  setCurrentEditBlog,
} from "../store/Slice/Blogslice";

function AddNewBlog() {
  const { blog } = useSelector((state) => state);
  const { CurrentEditBlog } = blog;
  const dispatch = useDispatch();

  function onchangeinput(event) {
    dispatch(
      blogInputChange({
        [event.target.name]: event.target.value,
      })
    );
  }

  function AddNewTodoBlog(event) {
    event.preventDefault();
    if (CurrentEditBlog !== null) dispatch(HandelEditBlogButtonChange());
    else dispatch(AddNewBlogChange());

    if (CurrentEditBlog !== null)
      dispatch(
        setCurrentEditBlog({
          currentblog: null,
        })
      );
    dispatch(
      blogInputChange({
        title: "",
        Description: "",
      })
    );
    // dispatch(
    //   blogInputChange({
    //     title: "",
    //     Description: "",
    //   })
    // );
  }

  return (
    <div>
      <form onSubmit={AddNewTodoBlog}>
        <div>
          <label> Enter Blog Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Blog Title"
            onChange={onchangeinput}
            value={blog?.formdata?.title}
          />
        </div>
        <div>
          <label> Enter Blog Description</label>
          <input
            type="text"
            name="Description"
            id="Description"
            placeholder="Enter Blog Description"
            onChange={onchangeinput}
            value={blog?.formdata?.Description}
          />
        </div>
        <button style={{ background: "black", color: "white" }} type="submit">
          {blog?.CurrentEditBlog ? "Edit This Blog" : "Add New Blog"}
        </button>
      </form>
    </div>
  );
}
export default AddNewBlog;
