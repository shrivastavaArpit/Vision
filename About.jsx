// About.jsx
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: center;
  color: #333;

  @media (min-width: 768px) {
    padding: 80px 40px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 800px;
  margin: 0 auto;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HighlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Highlight = styled.div`
  background: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    margin: 20px;
  }
`;

const HighlightIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #3498db;
`;

const HighlightTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const HighlightDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`;

const Aboutcompo = () => {
  return (
    <AboutSection>
      <Title>About Us</Title>
      <Description>
        Welcome to our tourist website! We are dedicated to providing you with the best travel experiences and memories. Explore the world with us and discover the beauty of diverse cultures, stunning landscapes, and exciting adventures.
      </Description>
      <HighlightsContainer>
        <Highlight>
          <HighlightIcon>🌍</HighlightIcon>
          <HighlightTitle>Global Destinations</HighlightTitle>
          <HighlightDescription>
            Discover breathtaking destinations around the globe, from pristine beaches to vibrant cities.
          </HighlightDescription>
        </Highlight>
        <Highlight>
          <HighlightIcon>🏨</HighlightIcon>
          <HighlightTitle>Exclusive Accommodations</HighlightTitle>
          <HighlightDescription>
            Stay at the finest hotels, resorts, and unique accommodations tailored to your preferences.
          </HighlightDescription>
        </Highlight>
        <Highlight>
          <HighlightIcon>🗺️</HighlightIcon>
          <HighlightTitle>Personalized Itineraries</HighlightTitle>
          <HighlightDescription>
            Enjoy custom-made itineraries that cater to your interests and ensure a memorable journey.
          </HighlightDescription>
        </Highlight>
      </HighlightsContainer>
    </AboutSection>
  );
};

export default Aboutcompo;
