// Signup.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = 'Passwords do not match';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <Paper elevation={3} style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem' }}>
      <Typography variant="h5" align="center">Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
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
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <Box textAlign="center" mt={2}>
          <Button type="submit" variant="contained" color="primary">Sign Up</Button>
        </Box>
        <Typography align="center" variant="body2" className='mt-2'>
           "Already have an account? "
    
          <a href={ "/login"}>
            { "Login"}
          </a>
        </Typography>
      </form>
    </Paper>
  );
};

export default Signup;
