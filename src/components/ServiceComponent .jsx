// ServiceComponent.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiceComponent = ({ title, description, image ,servicePath }) => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(servicePath);
    }
  return (
    <Card style={{ maxWidth: '300px', margin: '20px', textAlign: 'center' , cursor: 'pointer'}}
    onClick={handleClick}  >
      <img src={image} alt={title} style={{ width: '100%', height: '150px' }} />
      <CardContent>
        <Typography variant="h6" component="h2" style={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceComponent;
