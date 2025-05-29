import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, MoveLeft } from "lucide-react";

function SignupForm() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  // Validation patterns
  const namePattern = /^[a-zA-Z\s'-]{2,50}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  // Validate single field
  const validateField = (name, value) => {
    let error = "";

    if (name === "fullname") {
      if (!value) {
        error = "Full name is required.";
      } else if (!namePattern.test(value)) {
        error =
          "Full name should be 2-50 characters and contain only letters, spaces, apostrophes, or hyphens.";
      }
    } else if (name === "email") {
      if (!value) {
        error = "Email is required.";
      } else if (!emailPattern.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "password") {
      if (!value) {
        error = "Password is required.";
      } else if (!passwordPattern.test(value)) {
        error =
          "Password must be at least 8 characters with uppercase, lowercase, and a number.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    validateField(name, value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields on submit
    Object.entries(form).forEach(([name, value]) => validateField(name, value));

    // If no errors, proceed (mock submit)
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (!hasErrors) {
      alert("Form submitted successfully!");
      // proceed with form submission logic here
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#efefe6]">
      <Link to="/">
        <MoveLeft className="absolute top-5 left-4 hover:shadow-lg hover:bg-white transition duration-500 " />
      </Link>
      <div className="card bg-white shadow-lg p-8 w-96 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#0B081D] mb-6">
          Sign Up
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-2 text-[#0B081D] font-semibold">
              <User className="w-5 h-5" />
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              className={`w-full border-b-2 py-1 px-1 outline-none ${
                errors.fullname
                  ? "border-red-500 focus:border-red-600"
                  : "border-gray-300 focus:border-[#0B081D]"
              }`}
              value={form.fullname}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            {errors.fullname && (
              <p className="text-red-600 text-sm mt-1">{errors.fullname}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-[#0B081D] font-semibold">
              <Mail className="w-5 h-5" />
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`w-full border-b-2 py-1 px-1 outline-none ${
                errors.email
                  ? "border-red-500 focus:border-red-600"
                  : "border-gray-300 focus:border-[#0B081D]"
              }`}
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="flex items-center gap-2 text-[#0B081D] font-semibold">
              <Lock className="w-5 h-5" />
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
              className={`w-full border-b-2 py-1 px-1 outline-none ${
                errors.password
                  ? "border-red-500 focus:border-red-600"
                  : "border-gray-300 focus:border-[#0B081D]"
              }`}
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary px-6 py-1 font-bold bg-[#0B081D] text-white rounded-sm hover:bg-[#000411] transition"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-[#0B081D]">
          Already have an account?
          <Link to="/login" className="text-[#1E40AF] hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
