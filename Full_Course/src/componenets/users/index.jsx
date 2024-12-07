import { useEffect, useState } from "react"




export default function User(){

    const [user, setuser] = useState([]);
    const [pending, setpending] = useState(false)

    async function fetchuesr() {
        try {
            setpending(true)
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            
            
            if (result?.users){
                setuser(result?.users);
                setpending(false);
            }else{
                setuser([]);
                setpending(false);
            }
        console.log(result);
        } catch (error) {
           console.log(error);
        }
    }

    // function Showuserlistonclick(){    // use a fun on button to fetch data from api
    //     fetchuesr();
    // };

    // useEffect(()=>{        // this is fro page lode first time
    //     fetchuesr()
    // },[])

    console.log(user);
    if (pending) return <h2>pending Deatails please wait</h2>
    

    return(
    <div>
        <h3>All users List</h3>
        <button onClick={fetchuesr}>Click for Show Users LIst</button>
        <ul>
            {
                user && user.length > 0 ?
                user.map(useritem => <li key={useritem?.id}>
                    <p>{useritem?.firstName} {useritem?.lastName}</p>
                </li>): <h2>No user found please wait</h2>
            }
        </ul>
    </div>
)
}
