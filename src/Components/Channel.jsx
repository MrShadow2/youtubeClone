import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material'
import ChannelCard from './ChannelCard';
import Videos from './Videos';

import { fetchFromApi } from '../utils/fetchFromApi';
const Channel = () => {
  const {id}=useParams()
  const [channel,setChannel]=useState(null)
  const [videos,setVideos]=useState([])
  useEffect(() => {
  fetchFromApi(`channels?.part=snippet&id=${id}`)
    .then((data)=>setChannel(data?.items[0]));

  fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
    console.log(videos)
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          
        }}
        
          
          
         />
         <ChannelCard channelDetail={channel}
          marginTop="-93px"/>
        
        </Box>  
        <Box display="flex" p="2">
          <Box sx={{mr:{sm:'200px'}}}/>
          
          <Videos videos={videos}  />

          
        </Box>    
    </Box>
  )
}

export default Channel