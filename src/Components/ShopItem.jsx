import { Button, Card } from "react-bootstrap";

function ShopItem(props) {
  return (
    <>
      <Card style={{ width: "90vw" }} className="shadow">
        <Card.Img variant="top" src={props.picture} />
        <Card.Body>
          <Card.Title>{props.description}</Card.Title>
          <Button variant="dark" size="lg" href={props.link}>
            Order
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ShopItem;
