import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/index.jsx";
import { LoginPage } from "./pages/Login/index.jsx";
import { RegisterPage } from "./pages/Register";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [techs, setTechs] = useState();
  const [userData, setUserData] = useState();
  const [currentRoute, setCurrentRoute] = useState("/");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(currentRoute);
  }, [currentRoute]);

  useEffect(() => {}, [userData]);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setCurrentRoute={setCurrentRoute}
              setUserData={setUserData}
              setTechs={setTechs}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              setCurrentRoute={setCurrentRoute}
              setUserData={setUserData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HomePage
              setCurrentRoute={setCurrentRoute}
              setUserData={setUserData}
              userData={userData}
              techs={techs}
              setTechs={setTechs}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
