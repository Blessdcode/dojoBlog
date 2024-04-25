import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Create from "./components/Create";
import BlogDet from "./BlogDet";
import NotFound from "./components/notFound";



const App = () => {
  return (
   

    <Router>
      <div className="">
        <div className='content'>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDet />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
