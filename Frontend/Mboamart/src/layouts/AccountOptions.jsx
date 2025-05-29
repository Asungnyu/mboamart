import Button from "../components/CustomButton"
import { Link } from "react-router-dom";
import {MoveLeft} from "lucide-react";

function AccountOptions() {
    return (
      <div className="flex flex-col justify-center items-center w-full gap-2 h-screen bg-[#efefe6] ">
        <Link to="/">
          <MoveLeft className="absolute top-5 left-4 hover:shadow-lg hover:bg-white transition duration-500 " />
        </Link>
        <div className="card bg-white shadow-lg p-6 w-96 rounded-lg">
          <h2 className="flex items-center justify-center mb-4 font-semibold text-2xl text-[#0B081D] ">
            Sign up as:
          </h2>
          <div className="flex flex-col gap-3 ">
            <Button
              route="/signup"
              text="Customer"
              variant="secondary"
              as="choice"
            />
            <Button
              route="/signup"
              text="Vendor"
              variant="secondary"
              as="choice"
            />
          </div>
        </div>
      </div>
    );
}

export default AccountOptions;