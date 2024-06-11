// FAQs.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FAQsSection = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
  color: #333;

  @media (min-width: 768px) {
    padding: 80px 40px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 800px;
  margin: 0 auto;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const FAQsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  overflow: hidden;
  transition: max-height 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 20px;
  background: #2c3e50;
  color: #fff;
  font-size: 1.5rem;
  text-align: left;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #34495e;
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Answer = styled.div`
  padding: 20px;
  background: #f9f9f9;
  font-size: 1rem;
  color: #7f8c8d;
  border-top: 1px solid #ddd;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const FAQsCompo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a wide range of travel services including personalized itineraries, exclusive accommodations, and guided tours to global destinations.',
    },
    {
      question: 'How can I book a trip?',
      answer:
        'You can book a trip by visiting our booking page, selecting your desired destination and package, and following the on-screen instructions.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Our cancellation policy allows you to cancel your booking up to 48 hours before the scheduled departure with a full refund. Please refer to our terms and conditions for more details.',
    },
    {
      question: 'Do you offer group discounts?',
      answer:
        'Yes, we offer discounts for group bookings. Please contact our support team for more information on group rates and packages.',
    },
  ];

  return (
    <FAQsSection>
      <Title>Frequently Asked Questions</Title>
      <Description>
        Find answers to the most commonly asked questions about our services and offerings. If you have any other queries, feel free to contact us.
      </Description>
      <FAQsContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <QuestionButton onClick={() => toggleFAQ(index)}>
              {faq.question}
              <Icon isOpen={openIndex === index}>{openIndex === index ? '▲' : '▼'}</Icon>
            </QuestionButton>
            {openIndex === index && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQsContainer>
    </FAQsSection>
  );
};

export default FAQsCompo;
