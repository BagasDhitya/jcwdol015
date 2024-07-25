import React, { useState } from "react";
import useCustomNavigate from "../../../hooks/useCustomNavigate";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import Layout from "../../../components/Layout";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const { navigateTo } = useCustomNavigate();

  function handleRegister(e) {
    e.preventDefault();
    let valid = true;
    let errors = { email: "", password: "" };

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    }

    setError(errors);
    if (valid) {
      Cookies.set("email", email, { expires: 7 });
      Swal.fire({
        title: "Successfully registered",
        text: "Successfully registered with your account",
        icon: "success",
        confirmButtonText: "OK",
      }).then((response) => {
        if (response.isConfirmed) {
          navigateTo("/");
        }
      });
    }
  }

  return (
    <Layout>
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl text-black text-center mb-4 font-bold">
          Register
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            className="bg-white text-black shadow-md rounded-md p-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            className="bg-white text-black shadow-md rounded-md p-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default Register;
