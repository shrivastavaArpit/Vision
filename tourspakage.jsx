import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faPercentage, faClock, faList } from '@fortawesome/free-solid-svg-icons';
import g from '../assets/b.jpg'

// Styled components for the Tours and Packages section
const Container = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const PackageCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const PackageImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PackageContent = styled.div`
  padding: 20px;
`;

const PackageTitle = styled.h2`
  font-size: 1.5rem;
  color: #3498db;
  margin-bottom: 10px;
`;

const PackageDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const PackageDetails = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const PackageDetailItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DetailIcon = styled.span`
  margin-right: 10px;
`;

const Tourscompo = () => {
  // Sample data for packages
  const packages = [
    {
      title: 'Paris Adventure',
      description: 'Experience the beauty of Paris with our exclusive tour package. Visit iconic landmarks and enjoy the local cuisine.',
      image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600',
      price: '$1000',
      duration: '7 days',
      discount: '15%',
      includes: ['Accommodation', 'Meals', 'Guided Tours'],
    },
    {
      title: 'Tropical Getaway',
      description: 'Escape to a tropical paradise with our all-inclusive beach package. Relax on pristine beaches and enjoy water sports activities.',
      image: 'https://images.pexels.com/photos/6040266/pexels-photo-6040266.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$1500',
      duration: '10 days',
      discount: '20%',
      includes: ['Resort Stay', 'Airport Transfers', 'Excursions'],
    },
    {
        title: 'Dubai Luxury Tour',
        description: 'Experience the grandeur of Dubai with our luxury tour package. Visit iconic landmarks and indulge in luxury accommodations.',
        image: 'https://images.pexels.com/photos/8319456/pexels-photo-8319456.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$2000',
        duration: '7 days',
        discount: '10%',
        includes: ['Luxury Accommodation', 'Private Tours', 'Fine Dining'],
      },
    //   {
    //     title: 'Paris Adventure',
    //     description: 'Explore the beauty of Paris with our adventure-packed tour. Visit iconic landmarks and immerse yourself in the culture.',
    //     image: 'https://source.unsplash.com/300x200/?paris',
    //     price: '$1800',
    //     duration: '5 days',
    //     discount: '15%',
    //     includes: ['Accommodation', 'Meals', 'Guided Tours'],
    //   },
      {
        title: 'New York City Explorer',
        description: 'Discover the vibrant city of New York with our explorer package. See famous attractions and experience the bustling streets.',
        image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=600',
        price: '$2200',
        duration: '6 days',
        discount: '12%',
        includes: ['City Tours', 'Broadway Shows', 'Museum Visits'],
      },
      {
        title: 'Tokyo Cultural Tour',
        description: 'Immerse yourself in the rich culture of Tokyo with our guided tour. Explore traditional temples and taste authentic Japanese cuisine.',
        image: 'https://images.pexels.com/photos/427747/pexels-photo-427747.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$1900',
        duration: '8 days',
        discount: '18%',
        includes: ['Cultural Workshops', 'Sushi Making Class', 'Sumo Wrestling Experience'],
      },
      {
        title: 'Rome Historical Journey',
        description: 'Embark on a journey through ancient Rome with our historical tour package. Visit ancient ruins and learn about Roman history.',
        image: 'https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$1700',
        duration: '4 days',
        discount: '20%',
        includes: ['Historical Sites', 'Walking Tours', 'Italian Cuisine Tasting'],
      },
      {
        title: 'Bali Paradise Escape',
        description: 'Escape to paradise in Bali with our relaxing tour package. Enjoy pristine beaches, lush jungles, and serene temples.',
        image: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$2500',
        duration: '9 days',
        discount: '15%',
        includes: ['Beach Resorts', 'Spa Treatments', 'Island Hopping'],
      },
      {
        title: 'London Cultural Experience',
        description: 'Immerse yourself in the cultural richness of London with our curated tour. Explore historic landmarks and trendy neighborhoods.',
        image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$2100',
        duration: '7 days',
        discount: '10%',
        includes: ['Museum Visits', 'West End Shows', 'Afternoon Tea'],
      },
      {
        title: 'Sydney Adventure Tour',
        description: 'Embark on an adventure in Sydney with our action-packed tour. Experience thrilling activities and breathtaking landscapes.',
        image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$2300',
        duration: '8 days',
        discount: '12%',
        includes: ['Harbor Cruises', 'Surfing Lessons', 'Wildlife Encounters'],
      },
      {
        title: 'Goa',
        description: 'Experience the vibrant nightlife, stunning beaches, and Portuguese architecture in this coastal paradise.',
        image: 'https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$500',
        duration: '5 days',
        includes: ['Accommodation', 'Meals', 'Guided Tours'],
      },
      {
        title: 'Kerala',
        description: 'Explore the serene backwaters, lush greenery, and Ayurvedic retreats in God\'s Own Country.',
        image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: '$800',
        duration: '7 days',
        includes: ['Resort Stay', 'Airport Transfers', 'Excursions'],
      },
    // Add more packages here
  ];

  return (
    <Container>
      <Title>Discover Our Exclusive Tours and Packages</Title>
      <PackageGrid>
        {packages.map((tourPackage, index) => (
          <PackageCard key={index}>
            <PackageImage src={tourPackage.image} alt={tourPackage.title} />
            <PackageContent>
              <PackageTitle>{tourPackage.title}</PackageTitle>
              <PackageDescription>{tourPackage.description}</PackageDescription>
              <PackageDetails>
                <PackageDetailItem>
                  <DetailIcon><FontAwesomeIcon icon={faDollarSign} /></DetailIcon>
                  Price: {tourPackage.price}
                </PackageDetailItem>
                <PackageDetailItem>
                  <DetailIcon><FontAwesomeIcon icon={faClock} /></DetailIcon>
                  Duration: {tourPackage.duration}
                </PackageDetailItem>
                <PackageDetailItem>
                  <DetailIcon><FontAwesomeIcon icon={faPercentage} /></DetailIcon>
                  Discount: {tourPackage.discount}
                </PackageDetailItem>
                <PackageDetailItem>
                  <DetailIcon><FontAwesomeIcon icon={faList} /></DetailIcon>
                  Includes:
                  <ul>
                    {tourPackage.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </PackageDetailItem>
              </PackageDetails>
            </PackageContent>
          </PackageCard>
        ))}
      </PackageGrid>
    </Container>
  );
};

export default Tourscompo;
