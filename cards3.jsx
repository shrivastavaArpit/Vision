import Card from 'react-bootstrap/Card';
import g from '../assets/b.jpg'
// import h from '../assets/h.jpg'

function cards3() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={g} />
        <Card.Body>
          <Card.Text>
          Discover large, stunningly beautiful hotels around the world, where luxurious amenities and breathtaking architecture promise an unforgettable stay.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      {/* <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={h} />
      </Card> */}
    </>
  );
}

export default cards3;