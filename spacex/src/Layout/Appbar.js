import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import NavigationList from './NavigationList';

const useStyles = makeStyles(theme => ({
    appbarContainer: {
        [theme.breakpoints.down('xs')]: {
            position: 'sticky',
            top: '0px',
            zIndex: '10',
            margin: '-30px -10px',
            backgroundImage: 'linear-gradient(#1B262C,#0F4C75)',
        }
    },
    appbarContainerList: {
        float: 'right',
    },
    mobileSidebar: {
        backgroundImage: 'linear-gradient(#1B262C,#0F4C75)',
        height: '100%'
    }
}));

export default function Appbar(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    return (
        <div className = {classes.appbarContainer}>
            <Hidden smUp>
                <IconButton aria-label="github" onClick = {() => setOpen(true)}>
                    <MenuIcon style = {{fill:'#ffffff'}} />
                </IconButton>
            </Hidden>
            <div className = {classes.appbarContainerList}>
                <IconButton aria-label="search">
                    <SearchIcon style = {{fill:'#ffffff'}} />
                </IconButton>
                <IconButton aria-label="notification">
                    <NotificationsIcon style = {{fill:'#ffffff'}} />
                </IconButton>
                <IconButton onClick = {() => {window.open('https://github.com/dlucenario/spacex-dashboard-react')}} aria-label="github">
                    <GitHubIcon style = {{fill:'#ffffff'}} />
                </IconButton>
            </div>

            <React.Fragment>
                <Drawer anchor="left" open={open} onClose={()=>setOpen(false)}>
                    <div className = {classes.mobileSidebar}>
                        <NavigationList></NavigationList>
                    </div>
                </Drawer>
            </React.Fragment>

        </div>
    )
}