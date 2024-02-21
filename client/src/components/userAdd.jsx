import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react';
import axios from 'axios';
export default function UserAdd() {
  const [input, SetInput] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetInput((values) => ({ ...values, [name]: value }))

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);   
    axios.post('http://localhost:4004/addPro', input)
      .then(response => {
        alert('Product added successfully');
      })
      .catch(error => {
        console.error('Error adding product:', error);
        alert('Error adding product');
      });
  }
  
  return (
    <center>
      <Paper elevation={0} style={styles.paper}>
        <Typography variant='h2' style={styles.heading}>
          Add Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                style={styles.textField}
                name='proId'
                label='Product ID'
                variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                style={styles.textField}
                name='proName'
                label='Product Name'
                variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <TextField  type="number"
                onChange={handleChange}
                style={styles.textField}
                name='proPrice'
                label='Product Price'
                variant='outlined' />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={styles.button}
            >Add Product</Button>
          </Grid>
        </form>
      </Paper>
    </center>
  )
}
const styles = {
  paper: {
    background: 'rgba(255, 255, 255, 0.14)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(3.6px)',
    WebkitBackdropFilter: 'blur(3.6px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '20px',
    width: '85%',
    margin: 'auto',
    marginTop: '40px'
  },
  heading: {
    marginBottom: '20px',
  },
  textField: {
    width: '100%',
    marginBottom: '20px',
  },
  button: {
    width: '60%',
    margin: 'auto',

  },
};