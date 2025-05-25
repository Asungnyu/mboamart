import { Link } from "react-router-dom"
function LoginForm() {
    return (
      <div className="flex justify-center items-center bg-[#efefe6] w-full h-screen">
        <div className="card bg-[#ffffff] card-border bg-base-100 rounded-lg justify-center items-center shadow-xl p-6 w-96">
          <h1 className="text-3xl font-bold text-center text-blue-500">
            Login
          </h1>
          <form
            className="mt-4 justify-center items-center"
            action=""
            method="GET"
          >
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
                className="input input-bordered w-full mb-2 border-b-2 border-gray-300 focus:border-blue-400 outline-none"
              />
            </label>
            <div className="validator-hint hidden text-sm text-gray-400 ml-7 -mt-2">
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
                className="input input-bordered w-full mb-2 border-b-2 outline-none focus:border-blue-400 border-gray-300 "
              />
            </label>
            <p className="validator-hint text-sm text-gray-500 ml-7 -mt-2 hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            <div className="flex justify-center mt-2">
              <button className="btn btn-success text-white font-semibold rounded-sm bg-sky-500 px-6 py-1">
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 flex justify-center items-center gap-1 text-[#313340]">
            New User?
            <Link className="text-blue-400" to="/auth/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    );
}

export default LoginForm;