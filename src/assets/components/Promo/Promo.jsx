import Button from "../Button/Button";
import "./Promo.css";
import img from "../../images/presentation.webp";

export default function Promo() {
    return (
        <>
            <section className="Promo">
                <div className="container">
                    <div className="promo__content">
                        <div className="promo__info">
                            <h2 className="promo__title section-title">
                                Dental Website that's gonna shake the game rules
                                up.
                            </h2>
                            <p className="promo__desc section-desc">
                                We use only the best quality materials on the
                                market in order to provide the best products to
                                our patients.
                            </p>
                            <Button text="Learn more" className="promo__btn" />
                        </div>

                        <img
                            src={img}
                            alt="presentation"
                            className="promo__img"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
