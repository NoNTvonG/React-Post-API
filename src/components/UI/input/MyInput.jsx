import React from "react"

const MyInput = (props) => {
  return (
    <input
      {...props}
      className="w-full p-2 mb-4 leading-6 border-2 border-indigo-500 rounded-lg focus:outline-none"
    />
  )
}

export default MyInput
