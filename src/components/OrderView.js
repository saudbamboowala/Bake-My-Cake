import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// Import your existing reusable components
import PhoneNumberInput from "./PhoneNumberInput";
import EmailInput from "./EmailInput";
import RequiredInput from "./RequiredInput";
import ZipCodeInput from "./ZipCodeInput";

const OrderView = () => { 
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {}; // passed from ProductCard
  
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Simulate persistence (API call)
    console.log("Order placed:", { ...data, product });
    reset();
    setOpen(true);
    setTimeout(() => navigate("/"), 3000);
  };

  const [open, setOpen] = React.useState(false);

  const weightOptions = [
    "2kg",
    "1kg",
    "500gm",
    "250gm",
    "6 pieces",
    "4 pieces",
  ];

  // For debugging - remove in production
  React.useEffect(() => {
    console.log("OrderView loaded with product:", product);
  }, [product]);

  if (!product) {
    return (
      <Grid container spacing={2} justifyContent="center" padding={4}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" color="error">
            No product selected. Please select a product from the menu.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate("/")}
            sx={{ mt: 2, display: "block", mx: "auto" }}
          >
            Return to Products
          </Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="center" padding={4}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Place Your Order
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Item: {product?.name}</Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <RequiredInput
          name="firstName"
          control={control}
          label="First Name"
          rules={{ required: true, minLength: 3 }}
          error={!!errors.firstName}
          helperText={errors.firstName ? "First name must be at least 3 characters" : ""}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <RequiredInput
          name="lastName"
          control={control}
          label="Last Name"
          rules={{ required: true }}
          error={!!errors.lastName}
          helperText={errors.lastName && "Last name is required"}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <EmailInput
          name="email"
          control={control}
          error={!!errors.email}
          helperText={errors.email && "Enter a valid email"}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <PhoneNumberInput
          name="phone"
          control={control}
          error={!!errors.phone}
          helperText={errors.phone && "Enter a valid 10-digit phone starting with 7, 8, or 9"}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="deliveryDate"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            validate: (value) => new Date(value) >= new Date(),
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Delivery Date"
              type="date"
              fullWidth
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(14px, -9px) scale(0.75)',
                }
              }}
              InputProps={{
                startAdornment: <></>,
              }}
              error={!!errors.deliveryDate}
              helperText={errors.deliveryDate && "Choose a valid future date"}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Controller
          name="quantity"
          control={control}
          defaultValue={1}
          rules={{ required: true, min: 1 }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Quantity"
              type="number"
              fullWidth
              error={!!errors.quantity}
              helperText={errors.quantity && "Quantity must be at least 1"}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Controller
          name="weight"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Weight / Pieces"
              fullWidth
              error={!!errors.weight}
              helperText={errors.weight && "Select a valid option"}
            >
              {weightOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <RequiredInput
          name="address"
          control={control}
          label="Address, City, State"
          rules={{ required: true }}
          error={!!errors.address}
          helperText={errors.address && "Address is required"}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <ZipCodeInput
          name="zipCode"
          control={control}
          error={!!errors.zipCode}
          helperText={errors.zipCode && "Zip Code must be a 6-digit number"}
        />
      </Grid>

      <Grid item xs={12}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit(onSubmit)}
          sx={{ mt: 2 }}
        >
          Place Order
        </Button>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        message="Order placed successfully!"
        onClose={() => setOpen(false)}
      />
    </Grid>
  );
};

export default OrderView;