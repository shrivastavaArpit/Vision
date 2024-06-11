import Carousel from 'react-bootstrap/Carousel';
import delhi from '../assets/delhi.jpg'
import dubai2 from '../assets/dubai2.jpg'
import dubai from '../assets/dubai.jpg'


function Slidebar() {
  return (
    <Carousel data-bs-theme="info">
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={dubai2}
          alt="first slide"
        />
      
        <Carousel.Caption>
          <h5>Dubai's Vibrant Nightlife</h5>
          <p>Experience Dubai's Vibrant Nightlife: Rooftop Lounges and Desert Parties</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={delhi}
          alt="second slide"
        />
        <Carousel.Caption>
          <h5>Singapore After Dark</h5>
          <p>Singapore After Dark: Spectacular Light Shows and Night Markets</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={dubai}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5> Global Nightlife Adventures</h5>
          <p>
          Global Nightlife Adventures: From Tokyo's Neon Streets to New York's Rooftop Bars
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidebar;