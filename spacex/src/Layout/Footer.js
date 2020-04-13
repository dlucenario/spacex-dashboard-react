import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footerContainer: {
        width: '100%',
        paddingBottom: '20px',
        color: '#ffffff'
    },
    list: {
        listStyleType: 'none',
        margin: '0',
        padding: '0'
    },
    itemList: {
        padding: '20px',
        display: 'inline',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },
    link: {
        textDecoration: 'none',
        color: '#ffffff'
    },
    endCredits: {
        float: 'right'
    }
}));

export default function Footer() {
    const classes = useStyles();
    return(
        <div className = {classes.footerContainer}>
            <Grid container>
                <Grid item lg = {8}>
                    <ul className = {classes.list}>
                        <li className = {classes.itemList}>
                            <a className = {classes.link} rel="noopener noreferrer"
                                href="https://www.koalafiedcoder.com" target="_blank">
                                about me
                            </a>
                        </li>
                        <li className = {classes.itemList}>
                            <a className = {classes.link} rel="noopener noreferrer"
                                 href="https://blog.koalafiedcoder.com" target="_blank">
                                blog
                            </a>
                        </li>
                        <li className = {classes.itemList}>
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