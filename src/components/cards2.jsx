import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function cards2() {
  return (
    <Card className="text-center">
  <Button variant="danger">warning</Button>      <Card.Body>
        <Card.Title>Travel Advisory</Card.Title>
        <Card.Text>
For your safety and enjoyment, please note: Ensure you have all necessary vaccinations and follow local health guidelines. Check travel restrictions and entry requirements for your destination. Familiarize yourself with local laws and customs. Keep emergency contact numbers handy, including local services and your country’s embassy. We strongly recommend comprehensive travel insurance for health, delays, and cancellations.
        </Card.Text>
        <Button variant="primary">happy journey</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default cards2;