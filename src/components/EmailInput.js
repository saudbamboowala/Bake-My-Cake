import React from "react";

const EmailInput = ({ register, errors }) => {
  return (
    <div>
      <label>Email:</label>
      <input 
        type="email" 
        {...register("email", { 
          required: "Email is required", 
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" }
        })} 
      />
      {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
    </div>
  );
};

export default EmailInput;