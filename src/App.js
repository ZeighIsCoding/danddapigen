import React from "react";
import Navbar from "./components";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Blogs from "./blogs";
import SignUp from "./signup";
import Contact from "./contact";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                /> */}
            </Routes>
        </Router>
    );
}
 
export default App;
