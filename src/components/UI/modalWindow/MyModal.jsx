import React from "react";

const MyModal = ({ children, visibility, setVisibility }) => {
  const modalStatus = [
    "fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-75",
  ];

  if (!visibility) {
    modalStatus.push(" hidden");
  }

  return (
    <div className={modalStatus.join(" ")} onClick={() => setVisibility(false)}>
      <div
        className="w-max bg-white rounded-2xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
