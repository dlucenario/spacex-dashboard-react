import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CustomIconButton from '../components/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
const useStyles = makeStyles({
    galleryTitle: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: '32px',
        padding: '20px'
    },
    imageContainer: {
        position: 'relative',
        '&:hover $image': {
            opacity: '0.3'
        },
        '&:hover $middle': {
            opacity: '1'
        },
        '&:hover $text': {
            opacity: '1'
        }
    },
    textContainer: {
        position: 'absolute',
        bottom: '3%',
        left: '50%',
        transform: 'translate(-50%)'
    },
    text: {
        color: '#ffffff',
        opacity: '0'
    },
    middle: {
        position: 'absolute',
        top: '10%',
        right: '5%',
        opacity: '0',
        transition: '1s ease',
    },
    image: {
        width: '20vw',
        height: '20vw',
        transition: '1s ease'
    }
  });

export default function LaunchGallery(props) {
    const classes = useStyles();

    let gallery = <Grid item><p>No Available Images</p></Grid>;
    if(props.gallery !== undefined && props.gallery.length !== 0) {
        gallery = props.gallery.map( (element,index) => {
            const galleryElement = 
                <Grid item key = {element}>
                    <div className = {classes.imageContainer}>
                        <img
                            className = {classes.image} 
                            alt='gallery-item'
                            src={element}>
                        </img>
                        <div className = {classes.middle}>
                            <CustomIconButton action = {() => {window.open(element)}}>
                                <PageviewIcon></PageviewIcon>
                            </CustomIconButton>
                        </div>
                        <div className = {classes.textContainer}>
                            <p className = {classes.text}>
                                {props.missionName} - Image {index+1}
                            </p>
                        </div>
                    </div>
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