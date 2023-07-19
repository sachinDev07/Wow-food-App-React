import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="max-w-md px-8 py-12 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Thank You for Your Order!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We appreciate your business and will process your order shortly. Here
          are the details:
        </p>
        <div className="bg-gray-100 px-6 py-4 rounded-lg">
          <p className="text-lg text-gray-700 mb-2">
            Order ID: <span className="text-gray-900">123456789</span>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Date: <span className="text-gray-900">{currentDate}</span>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Total Amount: <span className="text-gray-900">$99.99</span>
          </p>
        </div>
        <Link to="/">
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
