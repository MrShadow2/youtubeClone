import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Box} from '@mui/material'
import{Navbar,Feed,Channel,VideoDetail,Search} from './Components'
function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetail/>} />
          
          <Route path="/channel/:id" element={<Channel/>} />
        
          <Route path="/search/:searchTerm" element={<Search/>} />
              <Route path="*" element={<Feed/>} />
        </Routes>
      </Box>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
