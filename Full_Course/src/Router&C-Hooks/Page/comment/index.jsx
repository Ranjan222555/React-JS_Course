import usefetch from "../../Hooks/use-fetch";

function CommentsList() {

  const {data,loading}= usefetch('https://dummyjson.com/comments')
  if(loading) return <h2>Please wait Comments loading</h2>
  return (
    <div>
      <h2>Comment-list Page</h2>
      <ul>
        {
          data?.comments?.length >0 ? 
          data?.comments.map((commentitem, index) => <div key={index}>
            <p>{commentitem?.body }</p>
            <p>{commentitem?.user?.fullName }</p>
            <label>{commentitem?.likes}</label>
          </div>)
          :null
        }
      </ul>
    </div>
  );
}

export default CommentsList;
