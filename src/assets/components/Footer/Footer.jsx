import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../images/footer-logo.webp";
import facebook from "../../images/social-media/facebook.svg";
import instagram from "../../images/social-media/instagram.svg";
import youtube from "../../images/social-media/youtube.svg";
import linkedin from "../../images/social-media/linkedin.svg";
import twitter from "../../images/social-media/twitter.svg";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer__top">
                        <img src={logo} alt="Logo" className="footer__logo" />

                        <div className="footer_nav">
                            <Link to="/" className="footer_nav-link">
                                Home
                            </Link>
                            <Link to="/service" className="footer_nav-link">
                                Services
                            </Link>
                            <Link to="/blog" className="footer_nav-link">
                                Blogs
                            </Link>
                            <Link to="/aboutUs" className="footer_nav-link">
                                About
                            </Link>
                            <Link to="/contact" className="footer_nav-link">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <hr className="footer__line" />

                    <div className="footer__bottom">
                        <p className="footer__desc">
                            All rights reserved ® uifry.com | Terms and
                            conditions apply!
                        </p>

                        <div className="footer__socials">
                            <a
                                href="https://facebook.com"
                                className="footer__socials-item"
                            >
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="footer__socials-item"
                            >
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <a
                                href="https://youtube.com"
                                className="footer__socials-item"
                            >
                                <img src={youtube} alt="YouTube" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="footer__socials-item"
                            >
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <a
                                href="https://twitter.com"
                                className="footer__socials-item"
                            >
                                <img src={twitter} alt="Twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
