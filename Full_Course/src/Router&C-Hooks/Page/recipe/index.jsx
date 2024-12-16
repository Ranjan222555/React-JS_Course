import { useLocation } from "react-router-dom";
import usefetch from "../../Hooks/use-fetch";
import WindowResize from "../../Hooks/use-window-resize";

function RecipeList() {

  // const location = useLocation();        // this is for current path name
  // console.log(location)

  const {data, loading, error} = usefetch('https://dummyjson.com/recipes')

  const WindowSize = WindowResize()
 
  if(loading) return <h2>Please wait Data loading</h2>

  return (
    <div>
      <h2 style={{color:WindowSize.width <700? "red":"" }}>Recipe-list Page</h2>
      <h3>Current window width is {WindowSize.width} and heightis {WindowSize.height}</h3>
      <ul>
        {
          data?.recipes?.length >0 ? 
          data?.recipes.map((resipeitme,index )=> <div key={index}>
            <label>{resipeitme?.name}</label>
            <p>{resipeitme?.rating}</p>
            <img src={resipeitme?.image}/>
          </div>)
          :null
        }
      </ul>
    </div>
  );
}

export default RecipeList;
