import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../views/dashboard/dashboard';
import NotFound from '../views/404/notFound';
import Login from '../views/login/login';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='*' component={NotFound} />
    </Switch>
);

export default Routes;