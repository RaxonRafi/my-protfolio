import 'react-multi-carousel/lib/styles.css';
import img1 from '../assets/tech/1280px-Amazon_Web_Services_Logo.svg.png'
import img2 from '../assets/tech/1_TpbxEQy4ckB-g31PwUQPlg.png'
import img3 from '../assets/tech/768px-Antu_mongodb.svg.png'
import img4 from '../assets/tech/885px-Node.js_logo.svg.png'
import img5 from '../assets/tech/Bootstrap_logo.svg.png'
import img6 from '../assets/tech/Git-Icon-1788C.png'
import img7 from '../assets/tech/GitHub-Mark.png'
import img8 from '../assets/tech/Laravel.svg'
import img9 from '../assets/tech/Nextjs-logo.svg.png'
import img10 from '../assets/tech/PHP-logo.svg'
import img11 from '../assets/tech/React-icon.svg.png'
import img12 from '../assets/tech/Unofficial_JavaScript_logo_2.svg.png'
import img13 from '../assets/tech/images (1).png'
import img14 from '../assets/tech/images.png'
import img15 from '../assets/tech/kisspng-mysql-database-web-development-computer-icons-mysql-5b2cc2f3399385.0469886115296601472359.png'
import img16 from '../assets/tech/logo.png'

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
                                        <img alt="Js" variant="top" src={img12} />
                                        <Card.Body>
                                            <Card.Title>JavaScript</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img11} />
                                        <Card.Body>
                                            <Card.Title>React</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img4} />
                                        <Card.Body>
                                            <Card.Title>Node.js</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img14}/>
                                        <Card.Body>
                                            <Card.Title>Express.js</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img2}/>
                                        <Card.Body>
                                            <Card.Title>TypeScript</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img9} />
                                        <Card.Body>
                                            <Card.Title>Next.js</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img16} />
                                        <Card.Body>
                                            <Card.Title>Redux</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img6}/>
                                        <Card.Body>
                                            <Card.Title>Git</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img7}/>
                                        <Card.Body>
                                            <Card.Title>Github</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img3} />
                                        <Card.Body>
                                            <Card.Title>MongoDB</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img5}/>
                                        <Card.Body>
                                            <Card.Title>Bootstrap</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img10} />
                                        <Card.Body>
                                            <Card.Title>php</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img8}/>
                                        <Card.Body>
                                            <Card.Title>Laravel</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img15} />
                                        <Card.Body>
                                            <Card.Title>MySQL</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img13}/>
                                        <Card.Body>
                                            <Card.Title>Docker</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className="mySkillCard">
                                        <img alt="Js" variant="top" src={img1} />
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
