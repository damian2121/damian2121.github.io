import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoute from './Route/AppRoute';
import RouteView from './Route/RouteView';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    {RouteView.map((route) => (
                        <AppRoute key={route.path} path={route.path} component={route.component} />
                    ))}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
