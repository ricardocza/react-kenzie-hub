import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login/index.jsx";
import { RegisterPage } from "./pages/Register";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
