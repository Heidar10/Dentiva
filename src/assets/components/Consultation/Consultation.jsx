import "./Consultation.css";
import Button from "../Button/Button.jsx";

export default function Consultation() {
    return (
        <>
            <section className="consultation">
                <div className="container">
                    <div className="consultation__inner">
                        <div className="consultation__content">
                            <h2 className="consultation__title section-title">
                                Leave your worries at the door and enjoy a
                                healthier, more <span>precise smile</span>
                            </h2>
                            <p className="consultation__desc section-desc">
                                We use only the best quality materials on the
                                market in order to provide the best products to
                                our patients, So don’t worry about anything and
                                book yourself.
                            </p>
                            <Button
                                text="Learn More"
                                className="consultation__btn"
                            />
                        </div>

                        <form className="consultation__form">
                            <h3 className="consultation__form-title">
                                Request Appointment
                            </h3>

                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Full Name"
                                className="consultation__form-input"
                            />
                            <input
                                type="tel"
                                name=""
                                id=""
                                placeholder="Phone Number"
                                className="consultation__form-input"
                            />
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Email Address"
                                className="consultation__form-input"
                            />
                            <button
                                type="submit"
                                className="consultation__form-btn"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
