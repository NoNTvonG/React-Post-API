import React from "react"

const MySelect = ({ defaultValue, options, value, onChange }) => {
  return (
    <select
      className="border-2 text-indigo-500 py-2 border-indigo-500 rounded-lg focus:outline-none cursor-pointer"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default MySelect
