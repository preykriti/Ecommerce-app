import { ShopContext } from "@/context/ShopContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [currentPage, setCurrentPage] = useState("LOGIN");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentPage === "SIGN UP") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      const data = error?.response?.data;

      // express-validator errors
      if (data?.errors) {
        data.errors.forEach((err) => toast.error(err.msg));
        return;
      }

      // normal error message
      toast.error(data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center flex-col gap-2 mt-16 w-[80%] sm:w-[30%] m-auto"
    >
      <div className="flex items-center gap-2 mb-3">
        <p className="text-3xl font-bold text-slate-400">{currentPage}</p>
        <hr className="h-[2px] bg-slate-400 w-10" />
      </div>
      {currentPage === "LOGIN" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          className="border border-slate-800 w-full px-3 py-1.5"
        ></input>
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        className="border border-slate-800 w-full px-3 py-1.5"
      ></input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="border border-slate-800 w-full px-3 py-1.5"
      ></input>
      <div className="flex w-full justify-between text-xs text-slate-600">
        <p className="">Forgot your password?</p>
        {currentPage === "SIGN UP" ? (
          <p onClick={() => setCurrentPage("LOGIN")} className="cursor-pointer">
            Login Here
          </p>
        ) : (
          <p
            onClick={() => setCurrentPage("SIGN UP")}
            className="cursor-pointer"
          >
            Create an account
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentPage === "SIGN UP" ? "SIGN UP" : "SIGN IN"}
      </button>
    </form>
  );
};

export default Login;
