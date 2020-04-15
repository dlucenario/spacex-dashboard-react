import React from 'react';
import Button from '@material-ui/core/Button';
import RedditIcon from '@material-ui/icons/Reddit';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import CreateIcon from '@material-ui/icons/Create';
import MenuBookIcon from '@material-ui/icons/MenuBook';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    launchItemLinks: {
        marginTop: '15px'
    },
    linkButton: {
        marginRight: '10px',
        width: '100px',
        marginTop: '10px'
    }
});

export default function LaunchLinks(props) {
    const classes = useStyles();
    return(
        

        <div className = {classes.launchItemLinks}>
            <Button variant="contained"
            color="default" className={classes.linkButton} 
            onClick = {() => {window.open(props.links.reddit)}}
            startIcon={<RedditIcon />}>
                REDDIT
            </Button>

            <Button variant="contained" 
            onClick = {() => {window.open(props.links.blog)}}
            color="default" className={classes.linkButton} 
            startIcon={<CreateIcon />}>
                BLOG
            </Button>

            <Button variant="contained"
            onClick = {() => {window.open(props.links.wiki)}}
            color="default" className={classes.linkButton} 
            startIcon={<MenuBookIcon />}>
                WIKI
            </Button>

            <Button variant="contained" 
            onClick = {() => {window.open(props.links.rawData)}}
            color="default" className={classes.linkButton} 
            startIcon={<FindInPageIcon />}>
                DATA
            </Button>

        </div>
    )
}
