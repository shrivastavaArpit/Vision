// src/components/Subscribe.jsx
import React from 'react';
import styled from 'styled-components';
import Notification, { notify } from './Notification';

const SubscribeButton = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const Subscribe = () => {
  const handleSubscribe = () => {
    notify('You have subscribed successfully!');
  };

  return (
    <div>
                    {/* <Input type="email" placeholder="Your email address" /> */}
<hr></hr>
<p>Enter your email here!!</p>
        <input type="email" placeholder="Your email address"/>
        <hr></hr>
      <SubscribeButton onClick={handleSubscribe}>
        Subscribe
      </SubscribeButton>
    
      <Notification />
      <hr></hr>
    </div>
  );
};

export default Subscribe;
