import "./Reassurance.css";
import Button from "../Button/Button.jsx";
import smile from "../../images/smile.webp";

export default function Reassurance() {
    return (
        <>
            <section className="reassurance">
                <div className="container">
                    <div className="reassurance__content">
                        <div className="reassurance__info">
                            <h2 className="reassurance__title">
                                Leave your worries at the door and enjoy a
                                healthier, more <span>precise smile</span>{" "}
                            </h2>
                            <p className="reassurance__desc">
                                We use only the best quality materials on the
                                market in order to provide the best products to
                                our patients, So don’t worry about anything and
                                book yourself.
                            </p>

                            <Button
                                text="Book an appointment"
                                className="reassurance__btn"
                            />
                        </div>

                        <img src={smile} alt="Smile" />
                    </div>
                </div>
            </section>
        </>
    );
}
