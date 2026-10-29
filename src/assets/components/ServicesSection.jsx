import ServiceCard from "./ServiceCard/ServiceCard";
import { servicesData } from "../../data/servicesData";
import "./ServiceCard/ServiceCard.css"; // або залишіть ваші стилі

export default function ServicesSection({ limit }) {
    // Якщо передано limit, обрізаємо масив (наприклад, до 3 штук для головної)
    const displayedServices = limit
        ? servicesData.slice(0, limit)
        : servicesData;

    return (
        <section className="services-section">
            <div className="container">
                <div className="service-card__content">
                    {displayedServices.map((item) => (
                        <ServiceCard
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
