import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Card, Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Take a look at my Skills</h2>
                        <p>As a dedicated web application developer, I possess a versatile skill set that enables me to create innovative and robust digital solutions. My expertise spans both frontend and backend technologies, allowing me to craft seamless user experiences while ensuring the functionality and performance of web applications. Here are some of the key skills that I bring to the table:</p>
                        <Container>
                            <Row>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" />
                                        <Card.Body>
                                            <Card.Title>JavaScript</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" />
                                        <Card.Body>
                                            <Card.Title>React</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png" />
                                        <Card.Body>
                                            <Card.Title>Node.js</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjituZk_YBuhNolAsCAZGXn50s-RLI6avxN5JUEuTh5Yt1TKUTj50kvyZ_NCCtmPjjsc&usqp=CAU" />
                                        <Card.Body>
                                            <Card.Title>Express.js</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://miro.medium.com/v2/resize:fit:816/1*TpbxEQy4ckB-g31PwUQPlg.png" />
                                        <Card.Body>
                                            <Card.Title>TypeScript</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" />
                                        <Card.Body>
                                            <Card.Title>Next.js</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" />
                                        <Card.Body>
                                            <Card.Title>Redux</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
                                        <Card.Body>
                                            <Card.Title>Git</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                                        <Card.Body>
                                            <Card.Title>Github</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_mongodb.svg/768px-Antu_mongodb.svg.png" />
                                        <Card.Body>
                                            <Card.Title>MongoDB</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/964px-Bootstrap_logo.svg.png" />
                                        <Card.Body>
                                            <Card.Title>Bootstrap</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" />
                                        <Card.Body>
                                            <Card.Title>php</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" />
                                        <Card.Body>
                                            <Card.Title>Laravel</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://png2.cleanpng.com/sh/14056e97990d0a485c6f305630c2e4e2/L0KzQYm3VsIzN6pteZH0aYP2gLBuTf16e6JxRdZqdHHlccTsTgdmal5pfehubHBzfbb1lL1kd551jeZucj3sc7F1k71ugaR2hJ8AYkLmc4PtU8M6QWQ9TZC5NEa8SIm9UcE2Omo7TqI6NEe1Q4aCTwBvbz==/kisspng-mysql-database-web-development-computer-icons-mysql-5b2cc2f3399385.0469886115296601472359.png" />
                                        <Card.Body>
                                            <Card.Title>MySQL</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFAyo7xbOOPMtcST31lNOwUdejzLG-UY_VTV-PLlP_gSS4CzKdGtYn_Kev7mtS_wb-_k&usqp=CAU" />
                                        <Card.Body>
                                            <Card.Title>Docker</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" />
                                        <Card.Body>
                                            <Card.Title>AWS</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
