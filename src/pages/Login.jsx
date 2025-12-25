import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return alert("Pehle signup kar bhai 😅");

    if (email === user.email && password === user.password) {
      localStorage.setItem("isAuth", "true");
      navigate("/home");
    } else {
      alert("Wrong credentials ❌");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <form onSubmit={handleLogin} className="w-[360px] space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-gray-400">Sign in to continue</p>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Remember / Forgot */}
        <div className="flex justify-between text-sm text-gray-400">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-white" />
            Remember me
          </label>
          <span className="cursor-pointer hover:underline">
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-white text-black py-2 rounded-md font-medium hover:bg-gray-200 transition">
           Login
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
