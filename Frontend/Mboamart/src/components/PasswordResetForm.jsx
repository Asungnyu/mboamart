import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function PasswordResetForm() {
  return (
    <div className="flex h-screen w-full justify-center items-center bg-[#efefe6]">
      <div className="card bg-white shadow-lg p-6 w-96 rounded-lg">
        <h2 className="flex justify-center items-center font-semibold text-2xl">
          Reset password
        </h2>
        <div>
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
        <div className="flex justify-center items-center mt-4 ">
          <button
            type="submit"
            className="btn btn-primary px-6 py-1 font-bold bg-[#0B081D] text-white rounded-sm hover:bg-[#000411] transition"
          >
            send code
          </button>
        </div>
        <p className="flex justify-center items-center mt-2">
          <Link to="/login" className="text-[#365486] hover:underline">
            Return to login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default PasswordResetForm;
