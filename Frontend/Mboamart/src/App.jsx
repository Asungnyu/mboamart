import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import LandingPage from "./components/landingpage";
import Auth from "./components/Auth"
import './App.css'


function App() {

  return (
    <>
      
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/auth" element={<Navigate to='/auth/login' replace />} />
          <Route path="/auth/:type" element={<Auth />} />
        </Routes>
      </Router>
      
    </>

  );
}

export default App;
