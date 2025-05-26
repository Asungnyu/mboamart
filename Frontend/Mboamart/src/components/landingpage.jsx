import { Link } from "react-router-dom";
import Sidebar from "./profile/Sidebar";

function LandingPage() {
  return (
        <div className="block justify-center min-h-screen bg-gray-100">
            <div className="flex justify-evenly items-center w-full h-[60px] bg-white ">
                <h1 className="font-bold text-2xl font-mono">Mboamart</h1>

                <div className="flex items-center justify-center gap-4">
                    <Link to="/auth/login">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                    <Link to="/auth/signup">
                        <button className="btn btn-success">Sign Up</button>
                    </Link>
                    <Sidebar ></Sidebar>
                </div>
            </div> 
            <h1 className="text-4xl flex justify-center items-center text-center font-bold mb-6">Welcome to VendorHub</h1>
        </div>
  );
}

export default LandingPage;
