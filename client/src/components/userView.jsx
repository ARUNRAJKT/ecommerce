import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserView.css';
import { Button } from '@mui/material'; 

export default function UserView() {
  const [proDetails, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4004/")
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, [proDetails]);

  const deletePro = (id) => {
    console.log(id);
    axios.delete(`http://localhost:4004/deletePro/${id}`)
      .then(function (res) {
        console.log('Product deleted');
     
      })
      .catch(function (error) {
        const message = error.response.data.message;
        alert(message);
        console.log(error);
      });
  };



  return (
    <div className="user-view-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {proDetails.map((product, index) => (
            <tr key={index}>
              <td>{product.proId}</td>
              <td>{product.proName}</td>
              <td>{product.proPrice}</td>
              <td>
                <Button
                  variant="contained"
                  color="success"

                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => { deletePro(product._id) }}
                >
                  Delete
                </Button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
