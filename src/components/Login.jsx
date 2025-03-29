import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/users");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User Login"
            className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome Back!
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className=" text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="flex text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
