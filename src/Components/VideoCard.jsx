import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/contants";

const VideoCard = ({video:{id:{videoId},snippet}}) => {

  return (
    <Card className='card-h' sx={{width:{md:'320px',xs:'100%'},
    boxShadow:'none',borderRadius:'16px'}}>
        <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url} alt="thumbnail" 
                sx={{width:350,height:200,}}
            />
        </Link>
        <CardContent sx={{
            backgroundColor:'#1e1e1e',
            height:'106px'
        }}>
            <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
                <Typography variant="subtitle1"
                    fontWeight="bold" color="#fff" >
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    
                </Typography>

            </Link>



            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
        </CardContent>

    </Card>
  )
}

export default VideoCard