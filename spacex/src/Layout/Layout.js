import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Appbar from '../Appbar/Appbar';

import DashboardModule from '../Dashboard/Dashboard';
import LaunchModule from '../Launch/Launch';

class Layout extends React.Component {
    render() {
        return(
            <div style = {{paddingRight: '10px'}}>
                <Grid container>
                    <Grid item lg= {2}>
                        <Sidebar/>
                    </Grid>
                    <Grid item lg= {10}>
                        <Appbar></Appbar>
                            <Switch>
                                <Route exact path="/dashboard" component = {DashboardModule}></Route>
                                <Route path="/launch" component = {LaunchModule}></Route>
                            </Switch>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default Layout;