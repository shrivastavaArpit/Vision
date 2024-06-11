import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #E0FFD0

  ;
`;

const SignupForm = styled.form`
  background-color: #fff;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
`;

const Input = styled.input`
  width: calc(100% - 40px);
  padding: 12px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  width: calc(100% - 40px);
  padding: 12px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ErrorMsg = styled.p`
  color: red;
`;

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
    } else {
      // Add your signup logic here
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
    }
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
        <Title>Create an Account</Title>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <Button type="submit">Signup</Button>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignupPage;
