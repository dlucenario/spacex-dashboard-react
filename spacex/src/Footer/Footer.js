import React from 'react';
import classes from './Footer.module.css';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function Footer() {
    return(
        <div className = {classes.footerContainer}>
            <Grid container>
                <Grid item lg = {8}>
                    <ul>
                        <li>
                            <a className = {classes.link} rel="noopener noreferrer"
                                href="https://www.koalafiedcoder.com" target="_blank">
                                about me
                            </a>
                        </li>
                        <li>
                            <a className = {classes.link} rel="noopener noreferrer"
                                 href="https://blog.koalafiedcoder.com" target="_blank">
                                blog
                            </a>
                        </li>
                        <li>
                            <a className = {classes.link} rel="noopener noreferrer"
                             href="https://docs.spacexdata.com" target="_blank">
                                data
                            </a>
                        </li>
                    </ul>
                </Grid>
                <Grid item lg = {4}>
                <div className = {classes.endCredits}>
                    <Typography>
                        © 2020 Project Led by Dominic Lucenario
                    </Typography>
                </div>
                </Grid>
            </Grid>

        </div>
    )
}