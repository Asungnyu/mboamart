import { Link } from "react-router-dom";
function SignupForm() {
    return (
      <div className="w-full h-screen justify-center items-center flex bg-[#efefe6]">
        <div className="card bg-white shadow-lg p-6 w-96 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-blue-500">
            Sign Up
          </h2>
          <form
            className="mt-4 justify-center items-center"
            action=""
            method="POST"
          >
            <label className="input validator flex items-center justify-center gap-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 stroke-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered mb-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full "
                required
              />
            </label>
            <label className="input validator flex items-center justify-center gap-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
              />
            </label>
            <div className="validator-hint hidden text-sm text-blue-400 ml-7 -mt-2">
              enter a valid email
            </div>
            <label className="input validator flex items-center justify-center gap-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-2 border-b-2 outline-none focus:border-sky-400 border-gray-300 "
              />
            </label>
            <p className="validator-hint text-sm text-gray-500 ml-7 -mt-2 hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            <div className="mt-2 flex justify-center items-center">
              <button className="btn btn-primary px-4 py-1 font-bold bg-sky-500 text-white rounded-sm">
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-4 flex justify-center items-center gap-1">
            Already have an account?
            <Link to="/auth/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
}
export default SignupForm;