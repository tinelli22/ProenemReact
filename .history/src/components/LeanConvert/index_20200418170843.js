import React from 'react'
import { Row, Form } from 'react-bootstrap'
import { Container } from './styles'

export default function LeanConvert() {

    return(
        <Container>
            <Row>
                <h2>Cadastre-se</h2>
            </Row>
            <Row>
                <span>
                    E receba em primeira-mão todas as novidades dos VESTIBULARES, OFERTAS, PROMOÇÕES e MUITO MAIS! 
                </span>
            </Row>
            <Row id="form">
                <Form.Control type="text" placeholder="Nome" />
                <Form.Control type="email" placeholder="Email" />
            </Row>
        </Container>
    )
}