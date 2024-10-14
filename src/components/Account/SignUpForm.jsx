import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Auth.css'; // Reuse the same CSS file

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here
      console.log('Login', { email, password });
    } else {
      // Handle signup logic here
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log('Signup', { email, password });
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {!isLogin && (
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </Form>
      
      <div className="toggle-auth">
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </span>
      </div>
    </div>
  );
};

export default SignUp;
