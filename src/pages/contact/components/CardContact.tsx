import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Contact } from '@services/contact.service';
import { useNavigate } from 'react-router-dom';


type propsType = {
  contact: Contact
}

export default function BasicCard({
  contact
}: propsType) {

  const navigate = useNavigate();
  const { street, city, zip, country } = contact.address || {};
  
  const goToDetails = () => {
    navigate(`/contact/details/${contact.id}`)
  }

  return (
    <Card sx={{ minWidth: 275 }} className="cursor-pointer" onClick={goToDetails}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography> */}
        <Typography variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {contact.jobPosition} at {contact.Company?.name}
        </Typography>
        <Typography variant="body2">
          { street }, { city }, { zip }, { country }
          <br />
          { contact.email }
        </Typography>
      </CardContent>
    </Card>
  );
}
