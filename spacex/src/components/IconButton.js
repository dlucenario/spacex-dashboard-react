import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        backgroundColor: '#d3d3d3',
        color: '#0F4C75',
        borderRadius: '50%',
        '&:hover': {
            backgroundColor: '#d3d3d3',
            color: '#0F4C75'
        }
    }
});

export default function CustomIconButton(props) {
    const classes = useStyles();
    return(
        <IconButton className = {classes.button} onClick = {props.action} aria-label="delete">
            {props.children}
        </IconButton>
    )
}