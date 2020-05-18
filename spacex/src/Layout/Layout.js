import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Appbar from './Appbar';
import Footer from './Footer';

import DashboardModule from '../Dashboard/Dashboard';
import LaunchModule from '../Launch/Launch';
import SiteModule from '../Site/Site';

import NotFound from '../httpPages/NotFound';
import Building from '../httpPages/Building';

import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    appContainer: {
        margin: '20px',
        [theme.breakpoints.down('xs')]: {
            margin: '10px 10px'
        }
    }
})

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drawer: true
        }
    }

    toggleDrawer = () => {
        this.setState({
            drawer: !this.state.drawer
        });
    }

    render() {
        const { classes } = this.props;
        
        return(
            <div className = {classes.appContainer}>
                
                <Grid container spacing = {2}>
                    <Grid item>
                        <Hidden smDown>
                            <Sidebar 
                                drawer = {this.state.drawer}
                                toggleDrawer = {this.toggleDrawer}>
                            </Sidebar>
                        </Hidden>
                    </Grid>
                    <Grid item lg>
                        <Appbar ></Appbar>
                        <Switch>
                            <Route exact path="/" component = {DashboardModule}></Route>
                            <Route exact path="/dashboard" component = {DashboardModule}></Route>
                            <Route path="/launch" component = {LaunchModule}></Route>
                            <Route path="/mission" component = {Building}></Route>
                            <Route path="/site/:mode/:id" component = {SiteModule}></Route>
                            <Route path="/site*" component = {SiteModule}></Route>
                            <Route path="/about" component = {Building}></Route>
                            <Route path="/payload" component = {Building}></Route>
                            <Route path="/rocket" component = {Building}></Route> 
                            <Route path = '*' component = {NotFound}></Route>
                        </Switch>
                        <Footer></Footer>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Layout);
