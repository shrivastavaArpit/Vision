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

const List = styled.ul`
  list-style-type: disc;
  margin: 20px 0 20px 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const TermsAndConditions = () => {
  return (
    <Container>
      <Title>Terms and Conditions</Title>
      
      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <SectionContent>
          These terms and conditions govern your use of our website and services. By accessing our website, you agree to comply with and be bound by these terms.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>2. Intellectual Property Rights</SectionTitle>
        <SectionContent>
          All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to us and as such are protected from infringement by local and international legislation and treaties.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>3. Restrictions</SectionTitle>
        <SectionContent>
          You are expressly restricted from all of the following:
          <List>
            <ListItem>Publishing any website material in any media without prior consent.</ListItem>
            <ListItem>Selling, sublicensing, and/or otherwise commercializing any website material.</ListItem>
            <ListItem>Publicly performing and/or showing any website material.</ListItem>
            <ListItem>Using this website in any way that is, or may be, damaging to this website.</ListItem>
            <ListItem>Using this website in any way that impacts user access to this website.</ListItem>
            <ListItem>Using this website contrary to applicable laws and regulations.</ListItem>
          </List>
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>4. Limitation of Liability</SectionTitle>
        <SectionContent>
          In no event shall our company, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise, and our company, including its officers, directors, and employees shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>5. Indemnification</SectionTitle>
        <SectionContent>
          You hereby indemnify to the fullest extent our company from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these terms.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>6. Severability</SectionTitle>
        <SectionContent>
          If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>7. Variation of Terms</SectionTitle>
        <SectionContent>
          Our company is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>8. Governing Law & Jurisdiction</SectionTitle>
        <SectionContent>
          These terms will be governed by and interpreted in accordance with the laws of the state in which our company is based, and you submit to the non-exclusive jurisdiction of the state and federal courts located in our company's location for the resolution of any disputes.
        </SectionContent>
      </Section>
      
    </Container>
  );
};

export default TermsAndConditions;
