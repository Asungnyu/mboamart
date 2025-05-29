import { useParams, Navigate, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Auth() {
  const { type } = useParams();

  // if (!type) {
  //   return <Navigate to="/auth/login" replace />;
  // }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      {type === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

export default Auth;
