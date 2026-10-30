import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header/Header.jsx";
import Home from "./assets/pages/Home.jsx";
import Blogs from "./assets/pages/Blogs/Blogs.jsx";
import Contact from "./assets/pages/Contact.jsx";
import AboutUs from "./assets/pages/AboutUs.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import Service from "./assets/pages/Service/Service.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/blog" element={<Blogs />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

/////......///
