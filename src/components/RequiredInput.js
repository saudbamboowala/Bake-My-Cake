import React from "react";

const RequiredInput = ({ label, register, name, errors }) => {
  return (
    <div>
      <label>{label}:</label>
      <input {...register(name, { required: `${label} is required` })} />
      {errors[name] && <span style={{ color: "red" }}>{errors[name].message}</span>}
    </div>
  );
};

export default RequiredInput;