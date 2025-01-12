import { Button, Container } from "react-bootstrap";

function BottomBar() {
  return (
    <Container fluid>
      <div className="bottom-nav">
        <p>Sign up via YourSpace:</p>
        <Button
          variant="light"
          style={{ backgroundColor: "#a70150", color: "rgb(248, 249, 250)" }}
        >
          Sign Up Here
        </Button>
      </div>
    </Container>
  );
}

export default BottomBar;
