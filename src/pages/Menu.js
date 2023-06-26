import React from 'react';
import Layout from '../layout/Layout';
import {MenuList} from '../data/Data.js';
// import { ReactDOM } from 'react-dom';
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
       <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {MenuList.map((menu) => (
          <Card sx={{maxWidth:'300px', display:'flex', m:2}}>
            <CardActions>
              <CardMedia sx={{minHeight:'300px'}} component={"img"} src={menu.Image} alt={menu.name} />
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography>
                  {menu.description}
                </Typography>
              </CardContent>
            </CardActions>
          </Card>
        ))}
       </Box>
       </Layout>
  );
};

export default Menu;