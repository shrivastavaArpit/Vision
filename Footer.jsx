import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;
`;

const ColumnTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const cards = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <ColumnTitle>Contact Us</ColumnTitle>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main Street, Anytown, USA</p>
          <p><FontAwesomeIcon icon={faPhone} /> (123) 456-7890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@touristwebsite.com</p>
          <SocialLinks>
          <Link href="https://www.instagram.com/arpitshrivastava_77?igsh=bW1ocjRzOHVhN2h6"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>

            {/* <Link href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
            <Link href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></Link> */}
          </SocialLinks>
        </Column>
        <Column>
          <ColumnTitle>Quick Links</ColumnTitle>
          <Link href="About">About Us</Link>
          <Link href="tourspakage">Tours and Packages</Link>
          {/* <Link href="#">Destinations</Link>
          <Link href="#">Blog</Link> */}
          <Link href="FAQs">FAQs</Link>
          {/* <Link href="">Contact Us</Link> */}
        </Column>
        <Column>
          <ColumnTitle>Customer Support</ColumnTitle>
          {/* <Link href="#">Help Center</Link> */}
          <Link href="policy">Our Policies</Link>
          {/* <Link href="#">Cancellation Policies</Link> */}
          <Link href="tc">Terms and Conditions</Link>
          {/* <Link href="#">Privacy Policy</Link> */}
        </Column>
        <Column>
          <ColumnTitle></ColumnTitle>
          <Newsletter>
            {/* <Input type="email" placeholder="Your email address" /> */}
           <Link href="subscibe"> <Button>Subscribe for more update</Button></Link> 
          </Newsletter>
        </Column>
      </FooterContent>
    </FooterContainer>
  );
};

export default cards;
