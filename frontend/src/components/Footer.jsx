import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    // console.log("object",currentYear)
  return (
    <div>
      <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>ProShop &copy; {currentYear}</p>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
