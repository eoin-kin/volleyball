import { Button, Container } from "react-bootstrap";
import "./bottom.css";
function BottomBar() {
  return (
    <Container fluid>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p className="sign-up">Sign up via YourSpace:</p>
        <Button
          variant="light"
          size="lg"
          style={{
            backgroundColor: "#a70150",
            color: "rgb(248, 249, 250)",
            fontFamily: "Aldrich",
          }}
        >
          Sign Up Here
        </Button>
      </div>
    </Container>
  );
}

export default BottomBar;
