import React from 'react'
import { Container, Title } from './styles'
import { Row, Col } from 'react-bootstrap'

export default function PriceTable({ title, text, }) {

    return(
        <Container>
            <div id="cont">
                <Row>
                    <Col sm={6} md={6}>
                        <Title>Medicina Plus</Title>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}