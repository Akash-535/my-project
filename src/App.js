import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Search from "./views/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
