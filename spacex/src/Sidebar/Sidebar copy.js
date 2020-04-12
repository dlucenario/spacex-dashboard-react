import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import titleIcon from '../images/icons/shuttle.svg';
import dashboardIcon from '../images/icons/dashboard.svg';
import launchIcon from '../images/icons/rocket.svg';
import missionIcon from '../images/icons/target.svg';
import siteIcon from '../images/icons/pin.svg';
import infoIcon from '../images/icons/info.svg';
import payloadIcon from '../images/icons/product.svg';
import rocketIcon from '../images/icons/project.svg';

import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    sidebar: {
        height: '85vh',
        marginLeft: '20px',
        marginTop: '40px',
        borderRadius: '5px',
        backgroundImage: 'linear-gradient(#1B262C,#0F4C75)',
    },
    divider: {
        backgroundColor: '#FFFFFF',
        height: '2px',
        width: '90%',
        margin: '0 auto'
    },
    navImg: {
        width: '25px',
        height: '25px'
    },
    navText: {
        textTransform: 'uppercase',
        fontSize: '16px',
        color: '#ffffff'
    },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function Sidebar(props) {
    const classes = useStyles();

    return(
        <div>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: props.drawer,
                        [classes.drawerClose]: !props.drawer,
                    })}
                    classes={{
                        paper: clsx(classes.sidebar, {
                            [classes.drawerOpen]: props.drawer,
                            [classes.drawerClose]: !props.drawer,
                        }),
                    }}
                >
                    
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <img className = {classes.navImg} src= {titleIcon} alt = 'title-logo'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.navText}>space-x</Typography>}
                        />
                    </ListItem>
                    <Divider classes={{root: classes.divider}} />

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/dashboard">
                        <ListItemIcon>
                            <img className = {classes.navImg} src= {dashboardIcon} alt = 'dashboard-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.navText}>dashboard</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/launch">
                        <ListItemIcon>
                            <img className = {classes.navImg} src= {launchIcon} alt = 'launch-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.navText}>launches</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/mission">
                        <ListItemIcon>
                            <img className = {classes.navImg} src= {missionIcon} alt = 'mission-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.navText}>missions</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/site">
                        <ListItemIcon>
                            <img className = {classes.navImg} src= {siteIcon} alt = 'mission-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.navText}>sites</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/about">
                        <ListItemIcon>
                            <img className = {classes.navImg} src= {infoIcon} alt = 'info-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.navText}>about</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/payload">
                        <ListItemIcon>
                            <img className = {classes.navImg} src= {payloadIcon} alt = 'payload-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.navText}>payload</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/rocket">
                        <ListItemIcon>
                            <img className = {classes.navImg} src= {rocketIcon} alt = 'info-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.navText}>rockets</Typography>}
                        />
                    </ListItem>
                </List>
                
            </Drawer>
        </div>
    )
}