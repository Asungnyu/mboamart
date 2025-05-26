

import {Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function LoginForm() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#efefe6]">
      <div className="card bg-white shadow-lg p-6 w-96 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#2a2a2a]">
          Login
        </h2>

        <form className="mt-4 flex flex-col gap-4" method="POST">
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

          {/* Password Field */}
          <label className="input validator flex items-center gap-2 mt-2 text-[#313340]">
            <Lock className="w-5 h-5 text-[#365486]" />
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered border-b-2 border-gray-300 focus:border-[#365486] outline-none w-full"
            required
            minLength={8}
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
            title="Must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number"
          />

          {/* Submit Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="btn font-semibold px-4 py-1 bg-[#365486] text-white rounded-md hover:bg-[#2a3d5c] transition duration-200"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 flex justify-center items-center gap-1 text-[#313340] text-sm">
          New user?
          <Link to="/auth/signup" className="text-[#365486] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;