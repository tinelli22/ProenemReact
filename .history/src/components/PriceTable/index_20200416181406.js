import React from 'react'
import { Container, Title } from './styles'
import { Row, Col } from 'react-bootstrap'

export default function PriceTable({ content}) {

    return(
        <Container>
            <div id="cont">
                <Row>
                    <Col sm={6} md={6}>
                        <Title>Medicina Plus</Title>
                    </Col>
                    <Col sm={6} md={6}>
                       
                    </Col>
                </Row>
            </div>
        </Container>
    )
}