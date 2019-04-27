import React, { Component } from "react";

const InputField = ({ onChange, value, errors, id, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        id={id}
        type="text"
        className="form-control"
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default InputField;
