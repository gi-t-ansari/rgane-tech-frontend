import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-8 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Job Posting Platform. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
