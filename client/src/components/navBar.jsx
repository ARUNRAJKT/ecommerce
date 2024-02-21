import React from 'react'
import { Grid, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
export default function navBar() {
    return (
        <div style={styles.navbar}>
            <Grid container>
                <Grid item sm={2}></Grid>
                <Grid item sm={4}>
                    <Typography variant='h5'>
                        PRODUCTS</Typography>
                </Grid>
                <Grid item sm={1}></Grid>
                <Grid item sm={5} >
                    <Link to='/'>
                        <Button variant="outlined" style={styles.button} >All Users</Button>
                    </Link>
                    <Link to='/addpage'>

                        <Button variant="outlined" style={styles.button} >Add User</Button>
                    </Link>
                </Grid>

            </Grid>
        </div>
    )
}
const styles = {
    navbar: {
        color: "#000000",
        padding: '20px',
        backgroundColor: "#ffffff",
        boxShadow: '0px 7px 11px -1px rgba(0, 0, 0, 0.75)',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        color: "#000000",
        marginLeft: "10px",
    },
};