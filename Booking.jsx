import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// Styled components for the Booking Ticket section
const Background = styled.div`
  background-image: url('https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=6000');
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5); /* Transparent white background */
  padding: 40px;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 32px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  grid-column: span 2;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;

const Note = styled.p`
  margin-top: 20px;
  color: #555;
`;

const BookingTicket = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking logic here
  };

  return (
    <Background>
      <Container>
        <Title>Book Your Tickets</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <Label htmlFor="destination">Destination</Label>
            <Input type="text" id="destination" name="destination" required />
          </div>
          <div>
            <Label htmlFor="departureDate">Departure Date</Label>
            <Input type="date" id="departureDate" name="departureDate" required />
          </div>
          <div>
            <Label htmlFor="passengerCount">Number of Passengers</Label>
            <Input type="number" id="passengerCount" name="passengerCount" min="1" required />
          </div>
          <div>
            <Label htmlFor="additionalDetails">Additional Details</Label>
            <TextArea id="additionalDetails" name="additionalDetails" rows="4" />
          </div>
          
        </Form>
        <hr></hr>
        <Link href="payment"> <Button>Book Now</Button></Link>
        {/* <Link href="subscibe"> <Button>Subscribe for more update</Button></Link>  */}

        <Note>We'll contact you shortly to confirm your booking.</Note>
      </Container>
    </Background>
  );
};

export default BookingTicket;
