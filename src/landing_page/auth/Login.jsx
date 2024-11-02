// Login.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login form submitted", formData);
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <Paper
      elevation={3}
      style={{ maxWidth: 400, margin: "2rem auto", padding: "2rem" }}
    >
      <Typography variant="h5" align="center">
        Log In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Box textAlign="center" mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </Box>
        <Typography align="center" variant="body2" className="mt-2">
           "dont have an account? "
    
          <a href={ "/signup"}>
            { "Sign up"}
          </a>
        </Typography>
      </form>
    </Paper>
  );
};

export default Login;
