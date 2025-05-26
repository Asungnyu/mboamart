
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage"; // example

import { BrowserRouter as Router } from "react-router-dom";
import ProfileRoute from "./components/routes/profileRoute";
import "./App.css";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>

    <>
      {/* <Router>
        <ProfileRoute />
      </Router> */}
    </>
  );
}
export default App;