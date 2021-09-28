import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <div className="input_wrapper">
      <textarea
        name="input"
        id="input"
        value={value}
        onChange={onChange}
        autoFocus
      ></textarea>
    </div>
  );
};

export default Input;
