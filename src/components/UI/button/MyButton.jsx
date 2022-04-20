import React from "react"

const MyButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="p-2 text-indigo-500 border-2 border-indigo-500 rounded-lg focus:outline-none"
    >
      {children}
    </button>
  )
}

export default MyButton
