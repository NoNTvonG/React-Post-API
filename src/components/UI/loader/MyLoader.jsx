import React from "react";

const MyLoader = ({ children }) => {
  return (
    <div className="pt-6">
      <h2 className="text-center text-2xl">{children}</h2>
    </div>
  );
};

export default MyLoader;
