import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage"; // example
import ProfilePage from "./pages/ProfilePage"
import PasswordResetPage from "./pages/PasswordResetPage"
import AccountOptionsPage from "./pages/AccountOptionsPage"
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/passwordReset" element={<PasswordResetPage />} />
          <Route path="/getstarted" element={<AccountOptionsPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;