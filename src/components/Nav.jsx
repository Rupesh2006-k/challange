import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login", { replace: true });
  };

  const gmail = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="min-h-[151vh] bg-white text-black flex flex-col justify-between p-6 shadow-md">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold tracking-wide text-blue-700">ShopX</h1>

        <div className="text-sm">
          <p className="font-semibold text-black">Gmail id</p>
          <p className="truncate text-blue-700">{gmail.email}</p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            to="/home"
            className="px-4 py-2 rounded-md hover:bg-blue-100 transition font-medium text-black"
          >
            Home
          </Link>

          <Link
            to="/product"
            className="px-4 py-2 rounded-md hover:bg-blue-100 transition font-medium text-black"
          >
            Products
          </Link>

          <Link
            to="/user"
            className="px-4 py-2 rounded-md hover:bg-blue-100 transition font-medium text-black"
          >
            Users
          </Link>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
