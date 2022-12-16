import { Container, Col, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
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
              <a href="https://github.com/Serendipbrity">
              <img src={navIcon4} />
              </a>
              <a href="https://www.linkedin.com/in/thanksfrom3rittani/">
                <img src={navIcon1} />
              </a>
              <a href="">
                <img src={navIcon3} />
              </a>
            </div>
            <p>Copyright 2022. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
