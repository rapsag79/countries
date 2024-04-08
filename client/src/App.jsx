import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';

import Home from "./pages/Home/Home"
import Landing from "./pages/Landing/Landing"
import Detail from "./pages/Detail/Detail"
import Create from './pages/Create/Create';
import SearchBar from './components/SearchBar/SearchBar';
import Activities from './components/Activities/Activities';

const App = () => {
  
  return (
    <div>


      <Router>

      {location.pathname === "/" ? (
          <div className="nav-container">
            <Link to="/"/>
          </div>
        ): <div className="nav-container">
            <SearchBar/>
          </div>}
   
        <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={<Home />}
          />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/home/:id" element={<Detail />} />
        </Routes>
          </Router>
    </div>
  )
}

export default App