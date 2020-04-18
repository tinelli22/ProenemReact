import React from 'react'
import Breadcumbs from '../../../components/Breadcumbs'
import Share from '../../../components/Share'
import { Row, Col } from 'react-bootstrap'
import { Container } from './styles'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import ClassesGramaticais from '../ClassesGramaticais'

export default function Home() {

    let { path } = useRouteMatch()

    return(
        <Switch>
            <Route exact path={path}>
                <Container>
                home page
                </Container>
            </Route>
            <Route exact path={`${path}/clas_gramaticais`}>
                <ClassesGramaticais />
            </Route>
        </Switch>
    )
}

const getOptions = [
    { name: 'Home', path: '/sobre/home' },
    { name: 'Tudo sobre o Enem', path: ''},
    { name: 'Língua Portuguesa', path: ''},
    { name: 'Classes gramaticais IV - As Conjunções', path: '/sobre/clas_gramaticais' },
]