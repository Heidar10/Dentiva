// import "./ServiceCard.css";
// import arrow from "../../images/arrow.svg";
// import icon1 from "../../images/serviceCard/icon-1.svg";
// import icon2 from "../../images/serviceCard/icon-2.svg";
// import icon3 from "../../images/serviceCard/icon-3.svg";

// export default function ServiceCard() {
//     const data = [
//         {
//             icon: icon1,
//             title: "Root Canal Treatment",
//             description:
//                 "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
//             link: "/services/root-canal",
//         },
//         {
//             icon: icon2,
//             title: "Cosmetic Dentist",
//             description:
//                 "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
//             link: "/services/cosmetic-dentist",
//         },
//         {
//             icon: icon3,
//             title: "Dental Implants",
//             description:
//                 "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
//             link: "/services/dental-implants",
//         },
//     ];

//     return (
//         <section className="service-card">
//             <div className="container">
//                 <div className="service-card__content">
//                     {data.map((item, index) => (
//                         <div className="service-card__item" key={index}>
//                             <img
//                                 src={item.icon}
//                                 alt={item.title}
//                                 className="service-card__icon"
//                             />
//                             <h3 className="service-card__title">
//                                 {item.title}
//                             </h3>
//                             <p className="service-card__description">
//                                 {item.description}
//                             </p>
//                             <a href={item.link} className="service-card__link">
//                                 Learn more
//                                 <img src={arrow} alt="arrow" />
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

import "./ServiceCard.css";
import arrow from "../../images/arrow.svg";

export default function ServiceCard({ icon, title, description, link }) {
    return (
        <div className="service-card__item">
            <img src={icon} alt={title} className="service-card__icon" />
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__description">{description}</p>
            <a href={link} className="service-card__link">
                Learn more
                <img src={arrow} alt="arrow" />
            </a>
        </div>
    );
}
