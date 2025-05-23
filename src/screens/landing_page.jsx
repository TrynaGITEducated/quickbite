import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Cafeteria Pre-Order</h1>
      <p className="mb-6 text-lg">Order meals in advance and skip the line!</p>
      <button
        className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700"
        onClick={() => navigate("/home")}
      >
        Enter
      </button>
    </div>
  );
};

export default LandingPage;
