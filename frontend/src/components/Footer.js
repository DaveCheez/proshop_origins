import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">&copy; A.S.G.S 2022</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
