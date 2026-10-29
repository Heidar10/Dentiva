import "./Specialists.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import doc1 from "../../images/specialists/doctor-1.webp";
import doc2 from "../../images/specialists/doctor-2.webp";
import doc3 from "../../images/specialists/doctor-3.webp";
import doc4 from "../../images/specialists/doctor-4.webp";
import doc5 from "../../images/specialists/doctor-5.webp";
import doc6 from "../../images/specialists/doctor-6.webp";
import doc7 from "../../images/specialists/doctor-7.webp";
import linkedinIcon from "../../images/social-media/linkedin-2.svg";

import arrowLeft from "../../images/specialists/arrow-left-black.svg";
import arrowRight from "../../images/specialists/arrow-right-black.svg";

export default function Specialists() {
    const specialists = [
        {
            name: "Daniel Carter",
            role: "General Dentist",
            image: doc5,
            link: "#",
        },
        {
            name: "Sophia Mitchell",
            role: "Cosmetic Dentist",
            image: doc6,
            link: "#",
        },
        { name: "Jim Carry", role: "Orthodontist", image: doc1, link: "#" },
        { name: "Wade Warren", role: "Endodontist", image: doc2, link: "#" },
        { name: "Jenny Wilson", role: "Periodontist", image: doc3, link: "#" },
        {
            name: "Jacob Jones",
            role: "Pediatric Dentist",
            image: doc4,
            link: "#",
        },
        {
            name: "Anna Muller",
            role: "Prosthodontist",
            image: doc7,
            link: "#",
        },
    ];
    return (
        <>
            <section className="specialists">
                <div className="container">
                    <div className="specialists__content">
                        <h2 className="specialists__title section-title">
                            Meet our <span>specialists</span>
                        </h2>
                        <p className="specialists__desc section-desc">
                            We use only the best quality materials on the market
                            in order to provide the best products to our
                            patients.
                        </p>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={4.2}
                            loop={true}
                            navigation={{
                                nextEl: ".specialists-button-next",
                                prevEl: ".specialists-button-prev",
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1.2, spaceBetween: 16 },
                                768: { slidesPerView: 2.2, spaceBetween: 20 },
                                992: { slidesPerView: 3.2, spaceBetween: 24 },
                                1200: { slidesPerView: 4.2, spaceBetween: 24 },
                            }}
                            className="specialists__swiper"
                        >
                            {specialists.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="specialists__slide"
                                >
                                    <div className="specialist-card">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="specialist-card__img"
                                        />
                                        <a
                                            href={item.link}
                                            className="specialist-card__social"
                                            aria-label="LinkedIn"
                                        >
                                            <img
                                                src={linkedinIcon}
                                                alt="LinkedIn"
                                            />
                                        </a>
                                        <div className="specialist-card__info">
                                            <h3 className="specialist-card__name">
                                                {item.name}
                                            </h3>
                                            <p className="specialist-card__role">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="specialists__nav">
                            <button
                                className="specialists-button-prev"
                                aria-label="Previous slide"
                            >
                                <img src={arrowLeft} alt="Arrow Left" />
                            </button>
                            <button
                                className="specialists-button-next"
                                aria-label="Next slide"
                            >
                                <img src={arrowRight} alt="Arrow Right" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
