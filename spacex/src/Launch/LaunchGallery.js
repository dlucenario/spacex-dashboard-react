import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    galleryTitle: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: '32px',
        padding: '20px'
    }
  });

export default function LaunchGallery(props) {
    const materialClasses = useStyles();

    let gallery = <Grid item><p>No Available Images</p></Grid>;
    if(props.gallery !== undefined && props.gallery.length !== 0) {
        gallery = props.gallery.map( (element) => {
            const galleryElement = 
                <Grid item key = {element}>
                    <img alt='gallery-item'
                        style={{width:'25vw', height: '20vw'}} 
                        src={element}>
                    </img>
                </Grid>
            return galleryElement;
        })
    }
    return(
        <div>

            <Grid container spacing={2} alignItems="center" justify="center">
                {gallery}
            </Grid>
        </div>
    )
}