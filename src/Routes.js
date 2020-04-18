import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './pages/AboutEnem/Home'
import Gramaticais from './pages/AboutEnem/Gramaticais'

import LayoutAbout from './layouts/About'


function RouteWithLayout({layout, component, ...rest}){

    return (
      <Route exact {...rest} render={(props) =>
        React.createElement( layout, props, React.createElement(component, props)) 
      }/>
    );
}

export default function Routes() {

    return(
        <Router>
            <div>
                <Header />
                <Switch>
                    <RouteWithLayout path='/sobre' layout={(props) => <LayoutAbout {...props} 
                    />} component={Home} />

                    <RouteWithLayout path='/gramaticais' layout={(props) => <LayoutAbout {...props} 
                    />} component={Gramaticais} />

                   <Redirect to={"/sobre"} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}