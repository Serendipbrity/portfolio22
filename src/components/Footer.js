import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
