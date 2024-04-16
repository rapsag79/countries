import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home/Home"
import Landing from "./pages/Landing/Landing"
import Detail from "./pages/Detail/Detail"
import Create from './pages/Create/Create';
import SearchBar from './components/SearchBar/SearchBar';
import Activities from './components/Activities/Activities';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div>
      <Header />
      </div>
      {location.pathname !== "/" && (
        <div> 
          <SearchBar />
        </div>
      )}

      <section>

      <Routes>
        <Route path="/activities" element={<Activities />} />
         <Route path="/create" element={<Create />} />
         <Route path="/" element={<Landing />} />
         <Route
          path="/home"
          element={<Home />}
          />
        <Route path="/home/:id" element={<Detail />} />
      </Routes>
      </section>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
