import React from 'react';

import SiteItem from './SiteItem';
import Grid from '@material-ui/core/Grid';

export default function SiteList(props) {
    
    return(

        <Grid container spacing = {2}>
            {props.siteList.map( (element) => (
            <Grid item xs = {12} lg = {6} key = {element.id}>
                <SiteItem
                    site = {element}
                    setActiveSite = {props.setActiveSite}
                    launchMode = {props.launchMode}
                ></SiteItem>
            </Grid>
            ))}

        </Grid>

    )


}