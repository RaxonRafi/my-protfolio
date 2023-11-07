import React from 'react';
import oxylogo from '../assets/img/oxyjon.png'
import pakallogo from '../assets/img/pakal.png'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Experience = () => {
    return (
        <section>
            <Container className="Experience-section pb-5">
                <h1 className='global-heading'>Experiences</h1>
                <p className='text-dark text-center'>These are the companies that I have worked in and was able to gain experience from.</p>
                <Row>
                    <Col lg={12} className="d-flex justify-content-center">
                        <Card className='experience-card'>
                            <Card.Body>
                                <div className='d-flex'>
                                    <div>
                                        <img src={oxylogo} alt="oxyjon" />
                                    </div>
                                    <div className='company-info'>
                                        <span className='company-name'>Oxyjon</span><br />
                                        <span className='designation'>Web Developer</span>
                                        <p className='responsibilities'>
                                            Worked on a mobile application for medical teams to manage their patient. I also worked on a project which is a medicine protocol service for the patients.
                                        </p>
                                        <span className='responsibilities'>Technologies I used:</span>
                                        <div className='tech-used'>
                                            <span>PHP</span>
                                            <span>Laravel</span>
                                            <span>JavaScript</span>
                                            <span>Bootstrap</span>
                                            <span>MySQL</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={12}  className="d-flex justify-content-center">
                        <Card className='experience-card'>
                            <Card.Body>
                                <div className='d-flex'>
                                    <div>
                                        <img src={pakallogo} alt="oxyjon" />
                                    </div>
                                    <div className='company-info'>
                                        <span className='company-name'>Global Technologies Pakal</span><br />
                                        <span className='designation'>Backend Developer</span>
                                        <p className='responsibilities'>
                                            Worked on a Business Dictionary App to manage their business. It's help's people to find a service in Mexico, Also it will help a business to grow more and reach more customers
                                        </p>
                                        <span className='responsibilities'>Technologies I used:</span>
                                        <div className='tech-used'>
                                            <span>JavaScrip</span>
                                            <span>Node.js</span>
                                            <span>Express.js</span>
                                            <span>React.js</span>
                                            <span>MySQL</span>
                                            <span>Docker</span>
                                            <span>AWS</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;
