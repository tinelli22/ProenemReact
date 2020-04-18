import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './pages/AboutEnem/Home'
import { Breadcrumb } from 'react-bootstrap'




export default function Routes() {

    return(
        <Router>
            <div>
                <Header />
                <Switch>
                   <Route exact path={'/sobre'}>
                        <Breadcrumb />   
                        <Home />
                   </Route>
                   <Redirect to={"/sobre"} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}