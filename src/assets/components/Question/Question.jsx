import { useState } from "react";
import "./Question.css";

export default function Question() {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            title: "•  How long does a dental appointment last?",
            desc: "Typically, a consultation lasts between 20 and 40 minutes, depending on the complexity of the case and the necessary procedures. If treatment is required, its duration is determined on an individual basis.",
        },
        {
            title: "•  Is dental treatment painful?",
            desc: "We use modern anesthesia that makes procedures comfortable. Your comfort is our priority.",
        },
        {
            title: "•  How often should you have a preventive check-up?",
            desc: "We recommend visiting the dentist at least twice a year, even if you have no complaints. This helps detect potential problems at an early stage.",
        },
        {
            title: "•  How can you prepare your child for a visit to the dentist?",
            desc: "We recommend scheduling the first preventive visit at an early age, when the first baby teeth appear. Explain to your child that the doctor will help keep their teeth healthy.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="question">
            <div className="container">
                <div className="question__content">
                    <h2 className="question__title section-title">
                        Frequently Asked Questions
                    </h2>

                    <p className="question__desc section-desc">
                        We use only the best quality materials on the market in
                        order to provide the best products to our patients.
                    </p>

                    <div className="question__accordion">
                        {questions.map((item, index) => (
                            <div
                                className={`question__accordion-item ${
                                    activeIndex === index ? "active" : ""
                                }`}
                                key={index}
                            >
                                <button
                                    className="question__accordion-title"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    {item.title}
                                    <span className="question__accordion-icon">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>
                                <hr />
                                <p className="question__accordion-hidden-desc">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
