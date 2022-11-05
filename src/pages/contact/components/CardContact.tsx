import * as React from 'react';
import { CardMedia, CardContent, Typography, Box, Card } from '@mui/material';
import { Contact } from '@services/contact.service';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from "@helpers/general";

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
    <Card sx={{ minWidth: 275, display: "flex" }} className="cursor-pointer" onClick={goToDetails}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={getImageUrl(contact?.imageName)}
        alt={contact.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
      </Box>
    </Card>
  );
}
