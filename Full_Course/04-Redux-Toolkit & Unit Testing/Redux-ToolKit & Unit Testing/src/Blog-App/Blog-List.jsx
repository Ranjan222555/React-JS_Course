import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  blogInputChange,
  handelDeleteBlog,
  setBloglistOnLoad,
  setCurrentEditBlog,
} from "../store/Slice/Blogslice";

function BlogList() {
  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { bloglist } = blog;
  //   const { bloglist } = useSelector((state) => state);

  //   console.log(bloglist);

  useEffect(() => {
    dispatch(
      setBloglistOnLoad({
        BlogList: JSON.parse(localStorage.getItem("bloglist")) || [],
      })
    );
  }, []);

  function handelOnDelete(currentid) {
    dispatch(
      handelDeleteBlog({
        currentblog: currentid,
      })
    );
  }

  function handelOnEdit(currentid) {
    dispatch(
      setCurrentEditBlog({
        currentblog: currentid?.id, // i miss ?.id
      }),
      dispatch(
        blogInputChange({
          title: currentid?.title,
          Description: currentid?.Description,
        })
      )
    );
  }

  return (
    <ul>
      {bloglist?.length > 0 ? (
        bloglist.map((singleitem) => (
          <div
            style={{ border: "2px solid red", padding: "10px" }}
            key={singleitem?.id}
          >
            <h3>{singleitem?.title}</h3>
            <h3>{singleitem?.Description}</h3>
            <button onClick={() => handelOnEdit(singleitem)}>Edit Blog</button>
            <button onClick={() => handelOnDelete(singleitem.id)}>
              Delete Blog
            </button>
          </div>
        ))
      ) : (
        <h2>No Blog Added </h2>
      )}
    </ul>
  );
}
export default BlogList;
