import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center h-full bg-gray-800 text-white py-4 px-6 sm:px-12">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-sm">
          &copy; Made with React <span className="text-orange-400"> ♥ </span> by <span className="text-orange-400">Sachin</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
