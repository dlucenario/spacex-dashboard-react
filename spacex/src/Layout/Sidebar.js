import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavigationList from './NavigationList';

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
        margin: '10px auto'
    },

    drawerOpen: {
        width: '230px',
        transition: 'width 1s'
    },
    drawerClose: {
        width: '65px',
        transition: 'width 1s',
    },
    listItem: {
        marginLeft:'10px'
    },
    active: {
        position: 'relative',
        "&::before": {
            content: `''`,
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: '#3282b8',
            borderRadius: '50%',
            top: '20px',
            left: '-5px'
        }
    }
}));

export default function Sidebar(props) {
    const classes = useStyles();
    return(
        <div className = {classes.sidebarContainer}>
            <IconButton style = {{marginLeft: '10px'}} onClick = {props.toggleDrawer} aria-label="github">
                <MenuIcon style = {{fill:'#ffffff'}} />
            </IconButton>
            <div className = {clsx(classes.linkContainer, {
                [classes.drawerOpen]: props.drawer,
                [classes.drawerClose]: !props.drawer,
            })}>    
                <NavigationList></NavigationList>
            </div>
        </div>

    )
}