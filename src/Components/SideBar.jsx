import React from 'react'
import {categories} from '../utils/contants'
import {Stack} from '@mui/material';
const selectedCategory = 'New'
const SideBar = ({selectedCategory,setSelectedCategory}) => (
    <Stack
        direction="row"
        sx={{
            overflowY:'auto',
            height:{sx:'auto',md:'95%'},
            flexDirection:{md:'column'},
        }}>

        {
            categories.map((item)=>(
                <button
                    className='category-btn'
                    onClick={()=>setSelectedCategory(item.name)}
                    style={{
                        backgroundColor:selectedCategory===item.name && '#FC1503',color:'white'
                    }}
                    key={categories.name}
                >     
                    <span style={{color:item.name===selectedCategory ? 'white':'red',marginRight:'15px'}}>
                        {item.icon}
                    </span>
                    <span style={{
                        opacity:item.name===selectedCategory?'1':'0.8'
                    }}>
                        {item.name} 
                    </span>
                </button>
            ))
        }
        </Stack>
)

export default SideBar