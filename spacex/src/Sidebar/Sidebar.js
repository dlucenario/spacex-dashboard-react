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

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    sidebarContainer: {
        position: 'sticky',
        top: '30px',
    },
    linkContainer: {
        height: '85vh',
        borderRadius: '5px',
        backgroundImage: 'linear-gradient(#1B262C,#0F4C75)',
        overflow: 'hidden'
    },
    divider: {
        backgroundColor: '#FFFFFF',
        height: '2px',
        width: '85%',
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
    drawerOpen: {
        width: '200px',
        transition: 'width 1s'
    },
    drawerClose: {
        width: '50px',
        transition: 'width 1s',
    }
}));

export default function Sidebar(props) {
    const classes = useStyles();
    return(
        <div className = {classes.sidebarContainer}>
            <IconButton onClick = {props.toggleDrawer} aria-label="github">
                <MenuIcon style = {{fill:'#ffffff'}} />
            </IconButton>
            <div className = {clsx(classes.linkContainer, {
                [classes.drawerOpen]: props.drawer,
                [classes.drawerClose]: !props.drawer,
            })}>    
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
            </div>
        </div>

    )
}