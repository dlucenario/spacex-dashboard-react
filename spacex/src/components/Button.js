import React from 'react';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        backgroundColor: '#0F4C75',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#0F4C75',
            color: '#ffffff'
        }
    }
});

export default function CustomButton(props) {
    const classes = useStyles();
    return(
        <Button variant="contained" className = {clsx(classes.button)} style = {{width: props.width, height: props.height}}>
            {props.children}
        </Button>
    )
}