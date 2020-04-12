import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        padding: '15px',
        background: 'rgba(255,255,255,0.16)',
        boxShadow: '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)',
        borderRadius: '5px',
    },
    headerContainer: {
        marginBottom: '10px',
        display: 'inline-flex',
        alignItems: 'center',
    },
    headerImage: {
        width: '25px',
        height: '25px'
    },
    headerContent: {
        marginLeft: '10px'
    },
    headerTitle: {
        display: 'inline',
        margin: '0',
        color: '#ffffff',
        fontSize: '16px'
    },
    secondaryTitle: {
        margin: '0',
        color: '#DEE5E5',
        fontSize: '14px'
    }
});

export default function Container(props) {
    const classes = useStyles();

    let header = <span></span>;
    if(props.headerExist === true) {
        header = (
            <div className = {clsx(classes.headerContainer)}>
                <img className = {clsx(classes.headerImage)} src = {props.logo} alt='logo-icon'></img>
                <div className = {clsx(classes.headerContent)}>
                    <p className = {clsx(classes.headerTitle)}>{props.title}</p>
                    <p className = {clsx(classes.secondaryTitle)}>{props.secondaryTitle}</p>
                </div>
            </div>
        );
    }

    return(
        <div className = {clsx(classes.container)}>
            {header}            
            {props.children}
        </div>
    )
}