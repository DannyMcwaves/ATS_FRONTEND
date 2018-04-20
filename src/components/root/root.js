import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from '../home/home';
import FourOhFour from '../404/404';
import './root.scss';


class Root extends Component {
    render() {
        return (
          <Router>
            <div id='homepage'>
              <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/login' component={Homepage}/>
                <Route exact path='/signup' component={Homepage}/>
                <Route component={FourOhFour}/>
              </Switch>
            </div>
          </Router>
        )
    }
}

export default Root;
