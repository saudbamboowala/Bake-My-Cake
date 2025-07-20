import React from "react";

const ZipCodeInput = ({ register, errors }) => {
  return (
    <div>
      <label>Zip Code:</label>
      <input 
        type="text" 
        {...register("zipCode", { 
          required: "Zip Code is required",
          pattern: { value: /^\d{6}$/, message: "Zip Code must be 6 digits" }
        })} 
      />
      {errors.zipCode && <span style={{ color: "red" }}>{errors.zipCode.message}</span>}
    </div>
  );
};

export default ZipCodeInput;