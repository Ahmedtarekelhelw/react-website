import Index from "./component/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact/index";
import Naavbar from "./component/Navbar/index";
import Footer from "./component/Footer/index";
import Work from "./component/Work/index";
import Portfolio from "./component/Portfolio/index";
import Profile from "./component/Profile/index";
import About from "./component/About/index";

function App() {
  return (
    <BrowserRouter>
      <Naavbar />
      <Routes>
        <Route path="/react-website/" element={<Index />} />
        <Route path="/work" element={<Work />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
