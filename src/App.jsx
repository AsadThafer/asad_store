import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Pages/About/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className={`App`}>
      <BrowserRouter>
        <ErrorBoundary>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
