import React from 'react';
import classes from './NotFound.module.css';

import buildingImage from '../images/building.svg';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Building() {
    return(
        <div className = {classes.notFoundContainer}>
            <img className = {classes.notFoundImage} src= {buildingImage} alt = 'building'/>
            <div style = {{display: 'block'}}>
                <Typography variant='h3'>
                    Still working on it :)
                </Typography>
                <Typography variant='h6'>
                    Want to contribute to this project? 
                </Typography>
                <Button onClick = {() => {window.open('https://github.com/dlucenario/spacex-dashboard-react')}} 
                        variant="contained"
                        size="large" 
                        startIcon={<GitHubIcon />}>
                    GitHub Page
                </Button>
            </div>

        </div>
    )

}