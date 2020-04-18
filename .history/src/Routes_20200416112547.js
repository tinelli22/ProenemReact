import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './pages/AboutEnem/Home'

import LayoutAbout from './layouts/About'
import Content from './pages/AboutEnem/Content'


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

                    <RouteWithLayout path='/sobre/gramaticais' layout={(props) => <LayoutAbout {...props} 
                    />} component={Content} />
                   <Redirect to={"/sobre"} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}