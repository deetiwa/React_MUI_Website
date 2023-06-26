import React from 'react'
import Layout from '../layout/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box sx={{my:15, textAlign:'center',
        "& h4":{fontWeight:'bold',
         my:2,fontSize:"2rem"},
          "& p":{textAlign:'justify'},
          "@media (max-width-600px)":
          {
            mt:0,
            "& h4":{
              fontSize:'1.5rem'
            }
          }
          }}>
          <Typography variant='h4'>Welcome to My Resturant</Typography>
          <p>
          “Menu Feed” is a biweekly podcast hosted by Senior Editor Patricia Cobe that delves into menu development and food and drink trends through lively conversations with chefs and operators.
          </p>
          <p>
          "A Deeper Dive" is a weekly podcast from Restaurant Business dedicated to going in-depth on the most pressing challenges and opportunities restaurant operators face today, hosted by Editor-in-Chief Jonathan Maze.
          </p>
        </Box>
        </Layout>
  );
};

export default About;