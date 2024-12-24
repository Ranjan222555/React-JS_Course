import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/register";
import AuthPage from "./Pages/Private-Rout/Auth-Page";
import ProfilePage from "./Pages/Profile/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={
            <AuthPage>
              <ProfilePage />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
