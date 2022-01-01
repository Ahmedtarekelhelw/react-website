import Index from "./component/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Naavbar from "./component/Navbar/index";
import Footer from "./component/Footer/index";

function App() {
  return (
    <BrowserRouter>
      <Naavbar />
      <Routes>
        <Route path="/react-website/" element={<Index />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
