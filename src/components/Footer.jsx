import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 className="text-white">Muhammad Rafi</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
              <a href="https://www.linkedin.com/in/md-mashruul-islam/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/webdevrafi/"><img src={navIcon3} alt="Icon" /></a>
            </div> */}
            <p>Copyright © {new Date().getFullYear()} Muhammad Rafi. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
