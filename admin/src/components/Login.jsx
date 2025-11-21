import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });
      if(response.data.success){
        setToken(response.data.token);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
        toast.error(error.message);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-md p-8 w-96 max-w-md ">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Admin Panel</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-4 min-w-72">
            <p className="mb-2 text-gray-700 font-medium"> Email Address</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6 min-w-72">
            <p className="mb-2 text-gray-700 font-medium">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-md px-4 py-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
