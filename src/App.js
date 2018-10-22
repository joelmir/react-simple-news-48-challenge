import React from 'react'
import { HashRouter, Route } from "react-router-dom"
import Home from './views/Home'
import Contact from './views/Contact'

const App = () => {
    return(
        <HashRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        </HashRouter>
    );
}

export default App