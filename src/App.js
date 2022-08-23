import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./components/ProductList";
import Home from "./pages/Home";
import TaskManager from "./components/TaskManager";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
