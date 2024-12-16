import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Productlist from "./componenets/product";
import User from "./componenets/users";
// import Textofcontext from "./componenets/context-consept/text";
import Formcomponent from "./componenets/form";
import Registercomponent from "./componenets/form/register";
import Loginrcomponent from "./componenets/form/login";
import Functionalcomponent from "./componenets/class&Function/functional-component";
import Classbasecomponent from "./componenets/class&Function/classbase-component";
import Usereducerexample from "./componenets/class&Function/use-reducer";
import Buttonofcontext from "./context/context-consept/button";
import {
  Link,
  Route,
  Router,
  Routes,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import RecipeList from "./Router&C-Hooks/Page/recipe";
import CommentsList from "./Router&C-Hooks/Page/comment";
import RecipeDeatilsPage from "./Router&C-Hooks/Page/recipe/recipe-deatils";
import PagenotFound from "./Router&C-Hooks/Page/pageNotfound";
import Header from "./Router&C-Hooks/Component/Header";
import Layout from "./Router&C-Hooks/Component/Layout";
import Hookform from "./Router&C-Hooks/Hooks/hook-Form";
import UseRefHook from "./Router&C-Hooks/Hooks/Hook-UseRef-Memo-Callback/Use-Ref-Example";
import UseMemoHooks from "./Router&C-Hooks/Hooks/Hook-UseRef-Memo-Callback/Use-Memo-Example";
import UseCallbackHooks from "./Router&C-Hooks/Hooks/Hook-UseRef-Memo-Callback/Use-Callback-Example";
import ReactQueryExample from "./Router&C-Hooks/React query/React-Query";

// let dummyproduct = ["product 1", "product 2", "product 3"];

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/Home",
      element: <Layout />,
      children: [
        {
          path: "Recipess",
          element: <RecipeList />,
        },
        {
          path: "commentss",
          element: <CommentsList />,
        },
        {
          path: "Recipess/:id",
          element: <RecipeDeatilsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <PagenotFound />,
    },
    {
      path: "hookform",
      element: <Hookform />,
    },
    {
      path: "/useRef",
      element: <UseRefHook />,
    },

    {
      path: "useMemo",
      element: <UseMemoHooks />,
    },
    {
      path: "usecallback",
      element: <UseCallbackHooks />,
    },
    {
      path: "reactQuery",
      element: <ReactQueryExample/>
    },
  ]);
  return element;
}

function App() {
  // const [count, setCount] = useState(0);

  const nanigate = useNavigate();

  return (
    <Fragment>
      <div>
        <h1>React Js 2024</h1>
        {/* <Classbasecomponent/> */}
        {/* <Functionalcomponent/> */}
        {/* <Productlist listofproduct={dummyproduct} name="Ranjan" city="Balasore" /> */}
        {/* nested components= App->Productlist->productitem-> someotheritem -> button component */}
        {/* <User/> */}
        {/* <Buttonofcontext/> */}
        {/* <Textofcontext/> */}
        {/* <Usereducerexample/> */}
        {/* <Formcomponent/> */}
        {/* <div style={{display:"flex", gap: "50px"}}>
        <Loginrcomponent/>
        <Registercomponent />
      </div> */}
      </div>
      {/* <div>
        <button onClick={() => nanigate("/home/Recipe")}>Recipe</button>{" "}
        <button onClick={() => nanigate("/home/comment")}>Comment</button>
        <Link to={"/home/Recipe"}>Another way to navigate</Link>{" "}
      </div>
      <div>
        <Routes>
          <Route path="/Home" element={<Layout />}>
            <Route path="Recipe" element={<RecipeList />} />
            <Route path="comment" element={<CommentsList />} />
            <Route path="Recipe/:id" element={<RecipeDeatilsPage />} />
          </Route>
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </div> */}
      <CustomRoutes />
    </Fragment>
  );
}

export default App;
