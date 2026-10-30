import AboutClinic from "../../components/AboutClinic/AboutClinic";
import Consultation from "../../components/Consultation/Consultation";
import Promo from "../../components/Promo/Promo";
import Question from "../../components/Question/Question";
import ServicesSection from "../../components/ServicesSection";
import Specialists from "../../components/Specialists/Specialists";
import "./Service.css";

export default function Service() {
    return (
        <>
            <div className="service-page">
                <div className="container">
                    <div className="service-page__info">
                        <h2 className="service-page__title section-title">
                            Services
                        </h2>
                        <p className="service-page__desc section-desc">
                            We use only the best quality materials on the market
                            in order to provide the best products to our
                            patients.
                        </p>
                    </div>
                </div>
            </div>
            <ServicesSection />
            <Consultation />
            <AboutClinic />
            <Specialists />
            <Question />
            <Promo />
        </>
    );
}
