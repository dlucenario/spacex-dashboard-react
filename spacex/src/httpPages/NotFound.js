import React from 'react';
import classes from './NotFound.module.css';

import notFoundImage from '../images/404.svg';
import { Typography } from '@material-ui/core';

export default function NotFound() {
    return(
        <div className = {classes.notFoundContainer}>
            <img className = {classes.notFoundImage} src= {notFoundImage} alt = 'not-found'/>
                <Typography variant='h3'>
                    Page Not Found
                </Typography>
        </div>
    )

}