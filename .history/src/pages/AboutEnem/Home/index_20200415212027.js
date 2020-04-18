import React from 'react'
import Breadcumbs from '../../../components/Breadcumbs'
import Share from '../../../components/Share'
import { Container } from './styles'

export default function Home() {

    return(
        <Container>
            <Breadcumbs content={getOptions} />
            <Share />
            <h4>Teste</h4>
        </Container>
    )
}

const getOptions = [
    { name: 'Home', path: '/sobre/home' },
    { name: 'Tudo sobre o Enem', path: ''},
    { name: 'Língua Portuguesa', path: ''},
    { name: 'Classes gramaticais IV - As Conjunções', path: '/sobre/clas_gramaticais' },
]