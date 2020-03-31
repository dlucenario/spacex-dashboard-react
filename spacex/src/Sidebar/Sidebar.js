import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import titleIcon from '../images/icons/shuttle.svg';
import dashboardIcon from '../images/icons/dashboard.svg';
import launchIcon from '../images/icons/rocket.svg';
import missionIcon from '../images/icons/target.svg';
import siteIcon from '../images/icons/pin.svg';
import infoIcon from '../images/icons/info.svg';
import payloadIcon from '../images/icons/product.svg';
import rocketIcon from '../images/icons/project.svg';

const useStyles = makeStyles({
    divider: {
      backgroundColor: '#FFFFFF',
      height: '2px'
    },
});

export default function Sidebar() {
    const materialClasses = useStyles();
    return(
        <div className = {classes.sidebarContainer}>
            <div className = {classes.headerSiderbar}>
                <Typography className = {classes.title} variant="h6">
                    <strong>DASHBOARD</strong>
                </Typography>
            </div>

            <div className = {classes.linkContainer}>
                <List component="nav">
                    <ListItem>
                        <ListItemIcon>
                            <img className = {classes.imageLogo} src= {titleIcon} alt = 'title-logo'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography className = {classes.title} variant="h6">space-x</Typography>}
                        />
                    </ListItem>
                    <Divider classes={{root: materialClasses.divider}} />

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/dashboard">
                        <ListItemIcon>
                            <img className = {classes.imageLogo} src= {dashboardIcon} alt = 'dashboard-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography variant="h6">dashboard</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem}   component = {NavLink} to="/launch">
                        <ListItemIcon>
                            <img className = {classes.imageLogo} src= {launchIcon} alt = 'launch-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography variant="h6">launch</Typography>}
                        />
                    </ListItem>

                    <ListItem button  className = {classes.listItem} component = {NavLink} to="/mission">
                        <ListItemIcon>
                            <img className = {classes.imageLogo} src= {missionIcon} alt = 'mission-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography variant="h6">mission</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/site">
                        <ListItemIcon>
                            <img className = {classes.imageLogo} src= {siteIcon}  alt = 'site-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography variant="h6">site</Typography>}
                        />
                    </ListItem>

                    <ListItem button className = {classes.listItem} component = {NavLink} to="/about">
                        <ListItemIcon>
                            <img className = {classes.imageLogo} src= {infoIcon}  alt = 'info-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography variant="h6">about</Typography>}
                        />
                    </ListItem>

                    <ListItem button  className = {classes.listItem} component = {NavLink} to="/payload">
                        <ListItemIcon>
                            <img className = {classes.imageLogo} src= {payloadIcon} alt = 'payload-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography variant="h6">payload</Typography>}
                        />
                    </ListItem>

                    <ListItem button  className = {classes.listItem} component = {NavLink} to="/rocket">
                        <ListItemIcon>
                            <img className = {classes.imageLogo} src= {rocketIcon} alt = 'rocket-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography
                            primary={<Typography variant="h6">rocket</Typography>}
                        />
                    </ListItem>


                </List>


            </div>
        </div>
    )
}