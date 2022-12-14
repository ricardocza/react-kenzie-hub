import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/index.jsx";
import { LoginPage } from "./pages/Login/index.jsx";
import { RegisterPage } from "./pages/Register";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { UserProvider } from "./context/UserContext.jsx";
import { TechProvider } from "./context/TechContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";

function App() {
  return (
    <UserProvider>
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
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <TechProvider>
                <ModalProvider>
                  <HomePage />
                </ModalProvider>
              </TechProvider>
            }
          />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
