import { Link } from "react-router-dom";




function PagenotFound(){
    return(
        <div>
            <h2>
                Page not found !
            </h2>
            <Link to={"/home/Recipe"}>Go to the Recipe page</Link>
        </div>
    )
}

export default PagenotFound;