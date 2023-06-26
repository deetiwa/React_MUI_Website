import React from 'react'
import Layout from '../layout/Layout'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10, ml:10, "& h4":{fontWeight:"bold", mb:2}}}>
       <Typography variant='h4'>Contact My Resturant</Typography>
       <p>Encourage your website visitors to get in touch with a contact us page that feels like a warm, friendly smile. Here are some Contact Us page examples to glean inspiration from.

A website is one of the most important marketing and branding vehicles a business can have and it is one of the primary tools that customers and clients (present and potential) will use to either find your contact details or make contact with you. So, how easy is it for website visitors to contact you?

A contact us page is not a barrier; it’s an entry. So take inspiration from how these 40 creative contact us pages are doing it.</p>
       </Box>
       <Box sx={{m:5, width:'600px', ml:10, "@media (max-width:500px)":{ width:'250px'}}}>
        <TableContainer>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white'}} align='center'>Contact Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red', pt:1}} /> 1800-180-0000 (Toll-Free)
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell>
                <MailIcon sx={{color:'skyblue', pt:1}} /> help@myrest.com
                </TableCell>
                </TableRow>

                <TableRow>
                <TableCell>
                <CallIcon sx={{color:'green', pt:1}} /> 7894561230
                </TableCell>
                </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
       </Box>
       </Layout>
  );
};

export default Contact;