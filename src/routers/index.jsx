import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Task from "../pages/task";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Task />} path="/" />
        <Route element={<Login />} path="/auth/login" />
        <Route element={<Register />} path="/auth/register" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
