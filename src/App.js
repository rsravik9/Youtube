import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Routes, Route } from 'react-router-dom'

import { Box } from "@mui/material";

// import { Feed } from '@mui/icons-material';
// import SearchFeed from './Components/SearchFeed';
// import ChannelDetails from './Components/ChannelDetails';
// import VideoDetails from './Components/VideoDetails';
// import Navbar from './Components/Navbar';

// All From One Place:
import { Navbar, Feed, ChannelDetails, SearchFeed, VideoDetails } from './Components/AllComponents'

// For Figma:
// import About from './Figma/About';
// import Fees from './Figma/Fees';
// All Togather:
import {Navbarz, About, Fees} from './Figma/SumComponents'



// function App() {

//   return (
//     <Box sx={{ background: "#000" }}>
//       <Navbar />
//       {/* What Should Be in side the Navbar */}
//       <Routes>
//         <Route path='/' exact element={<Feed />} />

//         <Route path='/video/:id' element={<VideoDetails />} />

//         <Route path='/channel/:id' element={<ChannelDetails />} />

//         <Route path='/search/:SerachTerm' element={<SearchFeed />} />
//       </Routes>
//     </Box>

//   );

// }

function App() {

  return (
    <Box sx={{ background: "white" }}>
      <Navbarz/>
      <Routes>
        <Route path='/About' exact element={<About/>}/>
        <Route  path='/Fees' exact element={<Fees/>}  />
      </Routes>
    </Box>

  );

}

export default App;
