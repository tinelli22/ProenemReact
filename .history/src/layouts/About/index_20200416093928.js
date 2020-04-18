import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Container } from './styles'
import Breadcumbs from '../../components/Breadcumbs'
import Share from '../../components/Share'

export default function LayoutAbout({ children }) {
    return(
        <Container>
             <Row sm={12}>
                <Breadcumbs content={getOptions} />
            </Row>
            <Row>
                <Col sm={1} md={1}>
                    <Share />
                </Col>
                <Col sm={11} md={11}>
                    { children }
                </Col>
            </Row>
        </Container>
    )
}

const getOptions = [
    { name: 'Home', path: 'home' },
    { name: 'Tudo sobre o Enem', path: ''},
    { name: 'Língua Portuguesa', path: ''},
    { name: 'Classes gramaticais IV - As Conjunções', path: 'clas_gramaticais' },
]