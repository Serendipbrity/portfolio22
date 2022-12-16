import { Container, Col, Row } from "react-bootstrap";
import linkdInIcon from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import downloadIcon from '../assets/img/file-download-import-icon.svg';
import githubIcon from "../assets/img/nav-icon4.svg";
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
            <div className="social-icon social-icons-footer-only">
              <a href="https://github.com/Serendipbrity">
              <img src={githubIcon} />
              </a>
              <a href="https://www.linkedin.com/in/thanksfrom3rittani/">
                <img src={linkdInIcon} />
              </a>
              <a href="">
                <img src={downloadIcon} fill='white'/>
              </a>
            </div>
            <p>Copyright 2022. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
