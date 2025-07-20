import React from "react";

const PhoneNumberInput = ({ register, errors }) => {
  return (
    <div>
      <label>Phone Number:</label>
      <input 
        type="text" 
        {...register("phone", { 
          required: "Phone number is required",
          pattern: {
            value: /^[789]\d{9}$/,
            message: "Phone number must be 10 digits starting with 7, 8, or 9"
          }
        })} 
      />
      {errors.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}
    </div>
  );
};

export default PhoneNumberInput;