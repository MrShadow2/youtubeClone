import React from 'react'
import { Link } from 'react-router-dom'
import {Stack} from '@mui/material';
import {logo} from '../utils/contants'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{backgroundColor:'#000',position:'sticky',top:0,justifyContent:'space-between'}}>
        <Link to="/" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="logo" height={45}/>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar