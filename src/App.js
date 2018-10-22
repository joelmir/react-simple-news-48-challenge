import React from 'react'
import { HashRouter, Route } from "react-router-dom"
import Home from './views/Home'
import Contact from './views/Contact'
import AppBar from './components/appBar/AppBar'

const App = () => {
    return(
        <HashRouter>
            <div>
                <AppBar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        </HashRouter>
    );
}

export default App