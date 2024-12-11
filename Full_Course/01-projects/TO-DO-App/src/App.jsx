import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Todoitem from "./components/todo-item";
import Tododeatils from "./components/todo-list-Deatils";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setloding] = useState(false);
  const [todolist, settodolist] = useState([]);
  const [errormsg, seterrormsg] = useState(null);
  const [todoDeatils, settodoDetails] = useState(null);
  const [openDilog, setopenDilog] = useState(false);

  async function fetchtodolist() {
    try {
      setloding(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      if (result?.todos && result?.todos?.length > 0) {
        settodolist(result?.todos);
        setloding(false);
        seterrormsg("");
      } else {
        settodolist([]);
        setloding(false);
        seterrormsg("");
      }

      console.log(result);
    } catch (error) {
      console.log(error);
      seterrormsg("some error there");
    }
  }
  async function fetchDeatilesoftodo(gettodoid) {
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${gettodoid}`
      );
      const Deatils = await apiResponse.json();
      console.log(Deatils);
       
      if (Deatils) {
        settodoDetails(Deatils);
        setopenDilog(true);
      } else {
        settodoDetails(null);
        setopenDilog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchtodolist();
  }, []);
  return (
    <div className={styles.mainwraper}>
      <h1 className={styles.headertitle}>Simple TODO App Using Material UI</h1>
      <div className={styles.todolistwrapper}>
        {todolist && todolist?.length > 0
          ? todolist.map((todoItem) => (
              <Todoitem
                fetchDeatilesoftodo={fetchDeatilesoftodo}
                key={todoItem.todo}
                todo={todoItem}
              />
            ))
          : null}
      </div>
      <Tododeatils
        setopenDilog={setopenDilog}
        openDilog={openDilog}
        todoDeatils={todoDeatils}
        settodoDetails ={settodoDetails}
      />
    </div>
  );
}

export default App;
