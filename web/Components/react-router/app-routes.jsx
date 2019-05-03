import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home.jsx';


const Routes = (props) => (
    <Router  {...props} >
        
        <div>
            <Route exact path="/" name="Home" component={Home} />
           

        </div>

    </Router>

);

export default Routes;