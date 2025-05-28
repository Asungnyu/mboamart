import {Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { login, get_all_vendors } from "../api/auth";
import { Mail, Lock, MoveLeft } from "lucide-react";

function LoginForm() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#efefe6]">
      <Link to="/">
        <MoveLeft className="absolute top-5 left-4 hover:shadow-lg hover:bg-white transition duration-500 " />
      </Link>
      <div className="card bg-white shadow-lg p-6 w-96 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#0B081D] mb-6">
          Login
        </h2>

        <form className="mt-4 flex flex-col gap-4">
          {/* Email Field */}
          <label className="input validator flex items-center gap-2 mt-2 text-[#313340]">
            <Mail className="w-5 h-5 text-[#365486]" />
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered border-b-2 border-gray-300 focus:border-[#365486] outline-none w-full"
            required
            pattern="^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$"
            title="Please enter a valid email address"
          />
        <form className="mt-4 flex flex-col gap-4" method="POST">
          <div>
            {/* Email Field */}
            <label className="input validator flex items-center gap-2 mt-2 text-[#0B081D]">
              <Mail className="w-5 h-5" />
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered border-b-2 border-gray-300 py-1 px-1 focus:border-[#0B081D] outline-none w-full"
              required
              pattern="^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$"
              title="Please enter a valid email address"
            />
          </div>

          <div>
            {/* Password Field */}
            <label className="input validator flex items-center gap-2 mt-2 text-[#0B081D]">
              <Lock className="w-5 h-5" />
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered border-b-2 border-gray-300 py-1 px-1 focus:border-[#0B081D] outline-none w-full"
              required
              minLength={8}
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
              title="Must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number"
            />
            <Link
              to="/passwordReset"
              className="flex items-center mt-1 font-thin px-1 text-[#365486] hover:underline"
            >
              forgot password
            </Link>
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center">
            <button
              className="btn font-semibold px-4 py-1 bg-[#365486] text-white rounded-md hover:bg-[#2a3d5c] transition duration-200"
              onClick={(e)=>get_all_vendors(e)}
              type="submit"
              className="btn btn-primary font-bold px-6 py-1 bg-[#0B081D] text-white rounded-md hover:bg-[#000411] transition"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-[#0B081D]">
          New user?
          <Link to="/signup" className="text-[#365486] hover:underline ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;