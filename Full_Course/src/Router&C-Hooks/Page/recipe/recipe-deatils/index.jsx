import { useParams } from "react-router-dom";



function RecipeDeatilsPage() {

    const params = useParams();
    console.log(params)

    const {id} = params;

  return (
    <div>
      <h2> Recipe Deatils of recipe Item is - {id} </h2>
    </div>
  );
}
export default RecipeDeatilsPage;
