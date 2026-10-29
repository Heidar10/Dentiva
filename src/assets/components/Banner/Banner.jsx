import Button from "../Button/Button.jsx";
import "./Banner.css";
import phoneCall from "../../images/phone-call.svg";
import doctorImage from "../../images/banner-img.webp";
import userAvatar from "../../images/user-avatar.svg";
import icon from "../../images/linkedin.svg";

export default function Banner() {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="banner__content">
                        <div className="banner__content-right">
                            <h1 className="banner__title section-title">
                                Get ready for your best ever
                                <span> Dental Experience!</span>
                            </h1>
                            <p className="banner__desc section-desc">
                                We use only the best quality materials on the
                                market in order to provide the best products to
                                our patients, So don’t worry about anything and
                                book yourself.
                            </p>
                            <div className="banner__contacts">
                                <Button
                                    className="banner__btn"
                                    text="Book an appointment"
                                ></Button>

                                <div className="banner__emergency-box">
                                    <img src={phoneCall} alt="Phone" />

                                    <div className="banner__emergency-info">
                                        <span className="emergency-title">
                                            Dental 24H Emergency
                                        </span>
                                        <a
                                            href="tel:090078601"
                                            className="banner__emergency-phone"
                                        >
                                            0900-78601
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="banner__review-card">
                                <div className="banner__review-header">
                                    <img
                                        src={userAvatar}
                                        alt="Thomas Daniel"
                                        className="banner__review-avatar"
                                    />

                                    <p className="banner__review-name">
                                        Thomas Daniel <br />
                                        <span>Sr Dental</span>
                                    </p>

                                    <a
                                        href="http://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="banner__review-linkedin"
                                    >
                                        <img src={icon} alt="LinkedIn" />
                                    </a>
                                </div>

                                <p className="banner__review-text">
                                    Top Quailty dental treatment done by field
                                    experts, <br /> Highly Recommended for
                                    everyone
                                </p>
                            </div>
                        </div>
                        <div className="banner__content-left">
                            <img src={doctorImage} alt="Doctor" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
