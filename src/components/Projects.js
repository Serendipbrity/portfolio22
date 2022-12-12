import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/Gators.png';
import projImg2 from '../assets/img/BelizeFS.png';
import projImg3 from '../assets/img/GameSaver.png';
import LoremIpsum from "react-lorem-ipsum";

export const Projects = () => {
  const projects = [
    {
      title: "Gators Newsletter",
      description: "Elementary School Website",
      imgUrl: projImg1,
    },
    {
      title: "Belize National Fire Service",
      description: "Organize Fire Station Info",
      imgUrl: projImg2,
    },
    {
      title: "Game Saver",
      description: "Organize Company Routes/Info",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            {/* <p> */}
            <LoremIpsum p={1} />
            {/* </p> */}
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
         
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                             )
                        })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <LoremIpsum />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <LoremIpsum />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
