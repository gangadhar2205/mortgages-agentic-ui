import React from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../components/TextInput';
import ReusableButton from '../components/ReusableButton';
import { Button, Box, Typography, Paper } from '@mui/material';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch('password', '');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // center vertically in the right pane
        boxSizing: 'border-box',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          height: '100%',   
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#fff',
        }}
      >
       <Box sx={{ textAlign: 'center', mb: 2 }}>
    <Typography variant="h6" component="div" fontWeight={600}>
      Welcome to Sign Up
    </Typography>
    <Typography
      variant="body2"
      component="div"
      color="text.secondary"
      sx={{ mt: 0.5 }}
    >
      Join our mortgage community and unleash the power of AI Assistance in mortgage processing.
    </Typography>
  </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
          noValidate
        >
          <TextInput
            label="First Name"
            name="firstName"
            id="firstName"
            register={register}
            error={errors.firstName}
            helperText={errors.firstName && "First Name is required"}
            {...register("firstName", { required: true })}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            id="lastName"
            register={register}
            error={errors.lastName}
            helperText={errors.lastName && "Last Name is required"}
            {...register("lastName", { required: true })}
          />
          <TextInput
            label="Email"
            name="email"
            id="email"
            register={register}
            error={errors.email}
            helperText={errors.email && (errors.email.message || "Valid Email is required")}
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address"
              }
            })}
          />
          <TextInput
            label="Phone"
            name="phone"
            id="phone"
            register={register}
            error={errors.phone}
            helperText={errors.phone && (errors.phone.message || "Phone number is required")}
            type="tel"
            {...register("phone", {
              required: true,
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number"
              }
            })}
          />
          
          <TextInput
            label="Password"
            name="password"
            id="password"
            register={register}
            error={errors.password}
            helperText={errors.password && "Password is required (min 6 chars)"}
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            id="confirmPassword"
            register={register}
            error={errors.confirmPassword}
            helperText={
              errors.confirmPassword
                ? errors.confirmPassword.type === "validate"
                  ? "Passwords do not match"
                  : "Confirm Password is required"
                : ""
            }
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: value => value === password
            })}
          />
          {/* <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: '#00B06B',           // Button background
              color: '#fff',                // Button text color
              '&:hover': {
                bgcolor: '#00844A',         // Slightly darker green on hover
              },
            }}
          >
            Sign Up
          </Button> */}
          <ReusableButton
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: '#00B06B',           // Button background
              color: '#fff',                // Button text color
              '&:hover': {
                bgcolor: '#00844A',         // Slightly darker green on hover
              },
            }}
          >
            Sign Up
          </ReusableButton>

        </Box>
      </Paper>
    </Box>
  );
};
