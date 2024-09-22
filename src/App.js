import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Search from "./views/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="about-us" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
