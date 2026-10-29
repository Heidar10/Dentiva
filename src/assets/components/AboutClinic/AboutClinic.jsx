import "./AboutClinic.css";
// import Button from "../Button/Button.jsx";
import service from "../../images/patient-dentist.webp";

export default function AboutClinic() {
    return (
        <>
            <section className="about-clinic">
                <div className="conteiner">
                    <div className="about-clinic__content">
                        <h2 className="about-clinic__title section-title">
                            We’re <span>welcoming</span> new patients and can’t
                            wait to meet you.
                        </h2>
                        <p className="about-clinic__desc section-desc">
                            We use only the best quality materials on the market
                            in order to provide the best products to our
                            patients.
                        </p>

                        <img
                            src={service}
                            alt="Patient and dentist"
                            className="about-clinic__img"
                        />

                        {/* <Button text="" className="about-clinic__btn" /> */}
                    </div>
                </div>
            </section>
        </>
    );
}
