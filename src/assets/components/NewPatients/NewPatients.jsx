import "./NewPatients.css";
import { useState } from "react";
import PatientImg from "../../images/patient.webp";

export default function NewPatients() {
    const [phone, setPhone] = useState("");

    return (
        <>
            <section className="new-patients">
                <div className="container">
                    <div className="new-patients__content">
                        <div className="new-patients__form">
                            <h2 className="new-patients__title">
                                We’re <span>welcoming</span> new patients and
                                can’t wait to meet you.
                            </h2>
                            <p className="new-patients__description">
                                We use only the best quality materials on the
                                market in order to provide the best products to
                                our patients, So don’t worry about anything and
                                book yourself.
                            </p>

                            <form className="new-patients__form-content">
                                <input
                                    type="tel"
                                    placeholder="Enter your Phone Number"
                                    className="new-patients__input"
                                    value={phone}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(
                                            /\D/g,
                                            "",
                                        );

                                        if (value === "") {
                                            setPhone("");
                                        } else if (value.startsWith("380")) {
                                            setPhone("+" + value.slice(0, 12));
                                        } else if (value.startsWith("0")) {
                                            setPhone(
                                                "+38" + value.slice(0, 10),
                                            );
                                        } else {
                                            setPhone(
                                                "+380" + value.slice(0, 9),
                                            );
                                        }
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="new-patients__btn"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="new-patients__img">
                            <img src={PatientImg} alt="Patient" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
