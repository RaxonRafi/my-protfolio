import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import newProject1 from '../assets/projects/lopexatechnologies.com.png'
import newProject2 from '../assets/projects/passport.png'
import newProject3 from '../assets/projects/website.png'
import projImg1 from '../assets/projects/mosi.png'
import projImg2 from '../assets/projects/react.png'
import projImg3 from '../assets/projects/businessDic.png'
import projImg4 from '../assets/projects/desk (1).png'
import projImg5 from '../assets/projects/blackdiamond.png'
import projImg6 from '../assets/projects/mahdimart.png'
import colorSharp2 from "../assets/projects/updateScreen.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: newProject3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: newProject2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: newProject1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Dictionary App",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  const projectsCustom = [
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Dictionary App",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: newProject2,
    },
    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: projImg4,
    },

  ];

  const projectsWordPress = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: newProject3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: newProject1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Diabetes App",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: projImg6,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check Out My Projects on  LARAVEL, NODEJS and WORDPRESS</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Custom Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">WordPress</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first" title="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="second" title="second">
                    <Row>
                        {
                          projectsCustom.map((project, index) => {
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
                    <Tab.Pane eventKey="third" title="third">
                    <Row>
                        {
                          projectsWordPress.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="colorSharp2"></img>
    </section>
  )
}
