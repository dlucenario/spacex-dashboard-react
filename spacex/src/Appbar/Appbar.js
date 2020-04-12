import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appbarContainer: {
        // position: 'sticky',
        // top: '10px',
        // zIndex: '10'
    },
    appbarContainerList: {
        float: 'right'
    }
}));

export default function Appbar(props) {
    const classes = useStyles();
    return (
        <div className = {clsx(classes.appbarContainer)}>
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
        </div>
    )
}