import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';

import DashboardModule from '../Dashboard/Dashboard';
import NotFound from '../httpPages/NotFound';
import Building from '../httpPages/Building';

class Layout extends React.Component {
    render() {
        return(
            <div style = {{paddingRight: '10px'}}>
                <Grid container>
                    <Grid item lg= {2}>
                        <Sidebar/>
                    </Grid>
                    <Grid item lg= {10}>
                        <div style = {{paddingBottom: '150px'}}>
                        <Appbar></Appbar>
                            <Switch>
                                <Route exact path="/" component = {DashboardModule}></Route>
                                <Route exact path="/dashboard" component = {DashboardModule}></Route>
                                <Route path="/launch" component = {Building}></Route>
                                <Route path="/mission" component = {Building}></Route>
                                <Route path="/site" component = {Building}></Route>
                                <Route path="/about" component = {Building}></Route>
                                <Route path="/payload" component = {Building}></Route>
                                <Route path="/rocket" component = {Building}></Route> 
                                <Route path = '*' component = {NotFound}></Route>
                            </Switch>
                           
                        </div>
                        <Footer></Footer>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default Layout;