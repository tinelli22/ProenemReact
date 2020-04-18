import React from 'react'
import { Container, Title, Banner } from './styles'
import { Row, Col } from 'react-bootstrap'

export default function PriceTable({ content }) {
    
    const { table, banner, title } = content;
    console.log(banner)

    return(
        <Container>
            <Row>
                <Col>
                    <Title>{title}</Title>
                    <h5>{table.first_p}</h5>
                    <h5>{table.second_p}</h5>
                    <h5>{table.third_p}</h5>
                </Col>
                <Col>
                    <Banner>
                        <div id="top">
                            <h2>{banner.title}</h2>
                        </div>
                    </Banner>   
                </Col>
            </Row>
        </Container>
    )
}