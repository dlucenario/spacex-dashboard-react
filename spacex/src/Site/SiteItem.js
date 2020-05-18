import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import launchSiteImage1 from '../images/sites/launch-site-1.jpeg';
import landSiteImage1 from '../images/sites/land-site.jpg';

const useStyles = makeStyles({
    root: {

    },
    media: {
      height: 140,
      filter: 'grayscale(50%)'
    },
    cardContent: {
        background: '#383838',
        boxShadow: '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)',
    },
    siteName: {
        color: '#ffffff',
        fontSize: '22px',
        margin: '0',
    },
    siteMeta: {
        color: '#DEE5E5',
        fontSize: '16px',
        textTransform: 'capitalize',
        margin: '0',
    },
    link: {
      textDecoration: 'none'
    }
});

export default function SiteItem(props) {
    const classes = useStyles();
    
    const site = props.site ? props.site : '';

    let region = '';
    if(site.location !== undefined){
        if(site.location.region !== undefined) {
            region = site.location.region;
        }
    }

    const path = props.launchMode ? `launch/${site.site_id}` : `land/${site.id}`;

    return (
        // <Card className={classes.root} onClick = { () => {props.setActiveSite(props.site,props.launchMode)}}>
        <Link to= {`/site/${path}`} className = {classes.link}>
          <Card className = {classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.launchMode ? launchSiteImage1 : landSiteImage1}
                title="Site"
              />
              <CardContent className = {classes.cardContent}>
                <Grid container direction = "column" justify="center" alignItems="flex-end" spacing = {1}>
                  <Grid item>
                    <p className = {classes.siteName}>
                        {props.launchMode ? site.name : site.full_name}
                    </p>
                  </Grid>
                  <Grid item>
                    <p className = {classes.siteMeta}>
                        {site.status}
                    </p>
                  </Grid>
                  <Grid item>
                    <p className = {classes.siteMeta}>
                        {region}
                    </p>
                  </Grid>

                </Grid>

              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      );

}