import logo from "../../images/logo.webp";
import { Link } from "react-router-dom";
import "./Header.css";
// import Button from "./Button.jsx";

export default function Header() {
    return (
        <>
            {/* <header className="header"> */}
            <header className="header">
                <div className="container">
                    <div className="header__background">
                        <img src={logo} alt="Logo" className="header__logo" />

                        <div className="header__nav">
                            <Link to="/" className="header__nav-link">
                                Home
                            </Link>
                            <Link to="/service" className="header__nav-link">
                                Services
                            </Link>
                            <Link to="/blog" className="header__nav-link">
                                Blogs
                            </Link>
                            <Link to="/aboutUs" className="header__nav-link">
                                About
                            </Link>
                            <Link to="/contact" className="header__nav-link">
                                Contact
                            </Link>
                        </div>

                        <Link to="/appointment" className="header__button">
                            Book Now
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
