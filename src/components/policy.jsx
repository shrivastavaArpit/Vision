import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const policy = () => {
  return (
    <Container>
      <Title>Our Policies</Title>
      
      <Section>
        <SectionTitle>Privacy Policy</SectionTitle>
        <SectionContent>
          We value your privacy and are committed to protecting your personal information. Our privacy policy explains how we collect, use, and safeguard your data.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Terms of Service</SectionTitle>
        <SectionContent>
          By using our services, you agree to abide by our terms of service. Please read these terms carefully to understand your rights and obligations when using our website and services.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Cancellation Policy</SectionTitle>
        <SectionContent>
          We understand that plans can change. Our cancellation policy outlines the conditions under which you can cancel your bookings and any applicable fees.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Booking Policy</SectionTitle>
        <SectionContent>
          Our booking policy details the process of making a reservation, payment terms, and other important information to ensure a smooth booking experience.
        </SectionContent>
      </Section>
    </Container>
  );
};

export default policy;
