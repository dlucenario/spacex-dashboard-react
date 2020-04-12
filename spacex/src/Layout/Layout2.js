import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Appbar from '../Appbar/Appbar';
import Footer from '../Footer/Footer';

import DashboardModule from '../Dashboard/Dashboard';
import LaunchModule from '../Launch/Launch';
import NotFound from '../httpPages/NotFound';
import Building from '../httpPages/Building';

class Layout2 extends React.Component {

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
        return(
            <div style = {{margin: '20px 100px'}}>
                <Grid container spacing = {2}>
                    <Grid item>
                        <Sidebar 
                            drawer = {this.state.drawer}
                            toggleDrawer = {this.toggleDrawer}>
                        </Sidebar>
                    </Grid>
                    <Grid item lg>
                        <Appbar ></Appbar>
                        <Switch>
                            <Route exact path="/" component = {DashboardModule}></Route>
                            <Route exact path="/dashboard" component = {DashboardModule}></Route>
                            <Route path="/launch" component = {LaunchModule}></Route>
                            <Route path="/mission" component = {Building}></Route>
                            <Route path="/site" component = {Building}></Route>
                            <Route path="/about" component = {Building}></Route>
                            <Route path="/payload" component = {Building}></Route>
                            <Route path="/rocket" component = {Building}></Route> 
                            <Route path = '*' component = {NotFound}></Route>
                        </Switch>
                        <Footer></Footer>
                    </Grid>
                </Grid>
            </div>
            // <div style = {{display: 'flex'}}>
                
            //     <Grid container direction='row'>
            //         <Grid item>
            //         <Sidebar drawer = {this.state.drawer}></Sidebar>
            //         </Grid>
            //             <Grid item>
            //                 <Appbar
            //                     toggleDrawer = {this.toggleDrawer}
            //                 ></Appbar>
            //             </Grid>
            //             <Grid item>
                                // <Switch>
                                //     <Route exact path="/" component = {DashboardModule}></Route>
                                //     <Route exact path="/dashboard" component = {DashboardModule}></Route>
                                //     <Route path="/launch" component = {LaunchModule}></Route>
                                //     {/* <Route path="/launch/:id" render={(props) => (
                                //         <LaunchModule key={props.match.params.id} {...props} />)
                                //     } /> */}
                                //     <Route path="/mission" component = {Building}></Route>
                                //     <Route path="/site" component = {Building}></Route>
                                //     <Route path="/about" component = {Building}></Route>
                                //     <Route path="/payload" component = {Building}></Route>
                                //     <Route path="/rocket" component = {Building}></Route> 
                                //     <Route path = '*' component = {NotFound}></Route>
                                // </Switch>
            //             </Grid>
            //             <Grid item>
            //                 <Footer></Footer>
            //             </Grid>
            //     </Grid>
            // </div>
        );
    }
}

export default Layout2;