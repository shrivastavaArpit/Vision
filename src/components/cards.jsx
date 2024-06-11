import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import e from '../assets/c.jpg'

function Cards() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            {/* <Card.Img variant="top" src="delhi" /> */}
            <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={e}
          alt="First slide"
        />
            <Card.Body>
              <Card.Title>TIMES SQUARE</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;