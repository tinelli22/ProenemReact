import React from 'react'
import { Container } from './styles'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import Content from '../Content'


export default function Home() {

    let { path } = useRouteMatch()

    return(
        <Switch>
            <Route exact path={path}>
            <Container>
                home page
            </Container>
            </Route>

            <Route exact path={`${path}/:homeId`}>
                <Content/>
            </Route>
        </Switch>
    )
}
