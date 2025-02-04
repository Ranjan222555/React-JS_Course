import AddNewBlog from "./Blog-App/Add-new-Blog";
import BlogList from "./Blog-App/Blog-List";
import Counter_Button from "./counter/Counter-Button";
import Counter_Value from "./counter/counter-Value";

function App() {
  return (
    <div>
      {/* <h2>Redux - ToolKit</h2>
      <Counter_Button />
      <Counter_Value /> */}
      <h2>Blog List -App</h2>
      <AddNewBlog />
      <BlogList />
    </div>

 

  );
}

export default App;
