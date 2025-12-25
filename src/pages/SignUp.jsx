import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password || !user.mobile)
      return alert("Sab bhar 😤");

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuth", "true");
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <form onSubmit={handleSignup} className="w-[360px] space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Create account</h1>
          <p className="text-sm text-gray-400">Sign up to get started</p>
        </div>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        {/* Button */}
        <button className="w-full bg-white text-black py-2 rounded-md font-medium hover:bg-gray-200 transition">
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
