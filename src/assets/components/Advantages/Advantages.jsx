import "./Advantages.css";
import doctor from "../../images/doctor.webp";
import shieldDone from "../../images/shieldDone.svg";
import Button from "../Button/Button.jsx";

export default function Advantages() {
    return (
        <>
            <section className="advantages">
                <div className="container">
                    <div className="advantages__content">
                        <div className="advantages__img">
                            <img src={doctor} alt="Doctor" />
                        </div>

                        <div className="advantages__info">
                            <h2 className="advantage__title section-title">
                                Why choose <span>Smile</span> for all your
                                dental treatments?
                            </h2>
                            <p className="advantage__desc section-desc">
                                We use only the best quality materials on the
                                market in order to provide the best products to
                                our patients.
                            </p>

                            <div className="advantages__list">
                                <div className="advantages__list-item">
                                    <img src={shieldDone} alt="Shield Done" />
                                    <p className="advatages__list-item-text">
                                        Top quality dental team
                                    </p>
                                </div>
                                <div className="advantages__list-item">
                                    <img src={shieldDone} alt="Shield Done" />
                                    <p className="advatages__list-item-text">
                                        State of the art dental services
                                    </p>
                                </div>
                                <div className="advantages__list-item">
                                    <img src={shieldDone} alt="Shield Done" />
                                    <p className="advatages__list-item-text">
                                        Discount on all dental treatment
                                    </p>
                                </div>
                                <div className="advantages__list-item">
                                    <img src={shieldDone} alt="Shield Done" />
                                    <p className="advatages__list-item-text">
                                        Enrollment is quick and easy
                                    </p>
                                </div>
                            </div>

                            <Button
                                text="Book an appointment"
                                className="advatages__btn"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
