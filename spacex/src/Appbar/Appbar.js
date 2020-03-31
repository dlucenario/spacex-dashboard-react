import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';

import classes from './Appbar.module.css';

export default function Appbar() {
    return (
        <div className = {classes.appbarContainer}>
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