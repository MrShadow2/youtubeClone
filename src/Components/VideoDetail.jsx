import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'
import ReactPlayer from 'react-player'
import { Box,Typography,Stack} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Videos from './Videos'
const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail,setVideoDetail] = useState(null)
  const [relatedVideos,setRelatedVideos] = useState([])
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setRelatedVideos(data.items))
  },[id]);
  if(!videoDetail?.snippet) return'Loading...'
  const {snippet:{title,channelId ,channelTitle} , statistics:{viewCount,likeCount}}=videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column',md:'row'}}>
        <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player" controls />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2} >
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{color:'#fff'}} py={1} px={2}>
            <Typography variant={{sm:'subtitle1',md:'h6'}} fontWeight="bold" color="#fff">
              {channelTitle}
              <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
            </Typography>
            <Stack direction="row">
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(viewCount).toLocaleString('en-US')} Views
              </Typography>
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(likeCount).toLocaleString('en-US')} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
        <Videos videos={relatedVideos} direction="column" />
      </Box>
      </Stack>
      
    </Box>

  )
}



export default VideoDetail