import { useContext } from "react";
import { AuthContext } from "../../context/context";

function ProfilePage() {
  const { user, handelLogout } = useContext(AuthContext);

  return (
    <div>
      <h3>{user.displayName}</h3>
      <p>{user.email}</p>
      <button onClick={handelLogout}>Logout</button>
    </div>
  );
}
export default ProfilePage;
