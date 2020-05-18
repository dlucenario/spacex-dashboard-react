import React from 'react';
import  { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import Grid from '@material-ui/core/Grid';

import Fade from '@material-ui/core/Fade';

import SiteMetric from './SiteMetric';
import SiteList from './SiteList';
import SiteDetail from './SiteDetail';

// import SiteItem from './SiteItem';

class Site extends React.Component{

    constructor() {
        super();
        this.state = {
            launchMode: true
        }
    }

    switchToLaunchMode = () => {
        this.setState({
            launchMode: true
        })
    }

    switchToLandMode = () => {

        this.setState({
            launchMode: false
        })
    }
  
    componentDidMount() {

        if(this.props.match.params.id !== undefined) {
            if(this.props.match.params.mode === 'land') {
                this.switchToLandMode();
                this.props.getLaunchSites(undefined,false);
                this.props.getLandSites(this.props.match.params.id,false);
            } else if(this.props.match.params.mode === 'launch') {
                this.switchToLaunchMode();
                this.props.getLaunchSites(this.props.match.params.id,false);
                this.props.getLandSites(undefined,false);
            }
        } else {
            this.switchToLandMode();
            this.props.getLaunchSites(undefined,true);
            this.props.getLandSites(undefined,false);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          this.onRouteChanged();
        }
      }
    
      onRouteChanged() {
          if(this.state.launchMode === true) {
            for(let x = 0; x < this.props.launchSites.length; x++) {
                if(this.props.match.params.id === this.props.launchSites[x].site_id) {
                    this.props.setActiveSite(this.props.launchSites[x],true);
                    break;
                }
            }
          } else {
            for(let x = 0; x < this.props.landSites.length; x++) {
                if(this.props.match.params.id === this.props.landSites[x].id) {
                    this.props.setActiveSite(this.props.landSites[x],false);
                    break;
                }
            }
          }
      }
    

    render() {

        const title = this.state.launchMode ? 'Launch Pads' : 'Land Pads'
        const siteList = this.state.launchMode ? this.props.launchSites : this.props.landSites;

        return(
            <Fade in = {true} timeout = {500}>
                <Grid container direction = 'row' spacing = {2}>
                    <Grid item xs = {12} lg = {12}>
                        <Grid container spacing = {2}>
                            <Grid item xs = {12} lg = {7}>

                               <SiteMetric
                                    launchSitesLength = {this.props.launchSites.length}
                                    landSitesLength = {this.props.landSites.length}
                                    switchToLaunchMode = {this.switchToLaunchMode}
                                    switchToLandMode = {this.switchToLandMode}
                               />

                                <h2 style = {{color:'#ffffff'}}> {title} </h2>
                                <SiteList
                                    siteList = {siteList}
                                    setActiveSite = {this.props.setActiveSite}
                                    launchMode = {this.state.launchMode}
                                ></SiteList>

                            </Grid>

                            <Grid item xs = {12} lg = {5}>
                                <SiteDetail
                                    activeSite = {this.props.activeSite}
                                    launchMode = {this.state.launchMode}
                                ></SiteDetail>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Fade>

        )
    }
}

const mapStateToProps = state => {
    return {
        launchSites: state.siteReducer.launchSites,
        landSites: state.siteReducer.landSites,
        activeSite: state.siteReducer.activeSite
        // launches: state.launchReducer.launchListDetailed,
        // upcomingLaunchLength: state.launchReducer.upcomingLaunchLength,
        // finishedLaunchLength: state.launchReducer.finishedLaunchLength,
        // oneLaunch: state.launchReducer.oneLaunch
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getLaunchSites: (siteId,willInitialize) => dispatch(actions.getLaunchSites(siteId,willInitialize)),
        getLandSites: (siteId,willInitialize) => dispatch(actions.getLandSites(siteId,willInitialize)),
        setActiveSite: (site,launchMode) => dispatch(actions.setActiveSite(site,launchMode))
        // getLaunchList: () => dispatch(actions.getLaunchListDetailed()),
        // getUpcomingLaunches: (all) => dispatch(actions.getUpcomingLaunches(all)),
        // getOneLaunch: (id) => dispatch(actions.getOneLaunch(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Site);
