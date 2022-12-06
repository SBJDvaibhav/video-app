import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
function movieCard(props) {
  let baseUrl = "https://www.themoviedb.org/t/p/w440_and_h660_face/";
  let imageUrl = baseUrl + props.image;
  return (
    <Card key={props.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className="test">
        <Card.Text>{props.vote}</Card.Text>
        <Card.Title>{props.title}</Card.Title>
        <Button>{props.buttonLable}</Button>
      </Card.Body>
    </Card>
  );
}

export default movieCard;
