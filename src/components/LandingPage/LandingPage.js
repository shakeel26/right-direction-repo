import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import data from '../../data.json';


const useStyles = makeStyles(theme => ({

    menuItemLink: {
        paddingLeft: "20px",
        color: 'black'
    },

    logo: {
        width: 500,
        height: 150
    },
    landingPageImage: {
        width: 750,
        height: 1100
    },
    dressName: {
        width: 500,
        height: 100
    },
    activeNavLink: {
        borderBottom: '10px solid black',
    },
}))



const LandingPage = () => {

    const classes = useStyles();

    return <>
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={0}
                alignItems="center"
            >
                <Grid item xs={12}>
                    Nice to Meet you ! Photo will come.
                </Grid>
                <Grid item xs={12}>
                    Photography by someone ! Photo will come.
                </Grid>
            </Grid>


            <Grid container spacing={2} direction="row"
                alignItems="center"
                justifyContent="center"  
                >
                {data.data.landing_page.map((item, key) =>
                    <Grid item xs={12} md={6} lg={5}>
                        <img className={classes.landingPageImage} src={item.main_image} alt="" />
                    </Grid>,  

// This should work but doesn't work

                    // {item.dress_name !== undefined ? (<Grid container spacing={2}>
                    //     <Grid item xs={12}>
                    //     <img className={classes.logo} src={item.dress_name} alt="" />
                    //     </Grid>
                    //     <Grid item xs={12}>
                    //     <img className={classes.logo} src={item.dress_description} alt="" />
                    //     </Grid>
                    // </Grid>)
                    // :
                    // ''}    
                )}

{/* // This shouldnt work but works :D */}
                            {/* {data.data.landing_page.map((item, key) =>               
                item.dress_name !== undefined ? (<Grid container spacing={2}>
                    <Grid item xs={12}>
                    <img className={classes.logo} src={item.dress_name} alt="" />
                    </Grid>
                    <Grid item xs={12}>
                    <img className={classes.logo} src={item.dress_description} alt="" />
                    </Grid>
                </Grid>)
                :
                ''
                )} */}
            </Grid>


            {data.data.landing_page.map((item, key) =>               
                item.dress_name !== undefined ? (<Grid container direction="column"
                alignItems="center"
                justifyContent="center" 
                spacing={2}>
                    <Grid item xs={12}>
                    <img className={classes.dressName} src={item.dress_name} alt="" />
                    </Grid>
                    <Grid item xs={12}>
                    <img className={classes.dressDesc} src={item.dress_description} alt="" />
                    </Grid>
                </Grid>)
                :
                ''
                )}
        </Box>
    </>
}
export default LandingPage;