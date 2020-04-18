import React from 'react'
import Breadcumbs from '../../../components/Breadcumbs'
import Share from '../../../components/Share'
import { Row, Col } from 'react-bootstrap'
import { Container } from './styles'

export default function Home() {

    return(
        <Container>
           home page
        </Container>
    )
}

const getOptions = [
    { name: 'Home', path: '/sobre/home' },
    { name: 'Tudo sobre o Enem', path: ''},
    { name: 'Língua Portuguesa', path: ''},
    { name: 'Classes gramaticais IV - As Conjunções', path: '/sobre/clas_gramaticais' },
]