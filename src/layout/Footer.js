import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'#1a1a19', color:'white', padding:'3'}}>
      <Box sx={{m:3, "& svg":{
        fontSize:'50px',
        cursor:'pointer',
        mr:'2',
      },
        "& svg:hover":{
          color:'goldenrod',
          transform:'translatex(5px)',
          transition:'all 400ms',

        }
      }}>
       <InstagramIcon/>
       <TwitterIcon/>
       <YouTubeIcon/>

      </Box>
      <Typography variant='h6' sx={{"@media (mix-width:600px)":{
         fontSize:'1rem',

      }}} >
        All Right Reserved &copy; New_Project Resturent
      </Typography>
    </Box>
    </>
  )
}

export default Footer;