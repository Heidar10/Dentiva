import "./HappyClients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import arrowLeft from "../../images/specialists/arrow-left-white.svg";
import arrowRight from "../../images/specialists/arrow-right-white.svg";

import person1 from "../../images/happy-clients/person-1.svg";
import person2 from "../../images/happy-clients/person-2.svg";
import person3 from "../../images/happy-clients/person-3.svg";
import person4 from "../../images/happy-clients/person-4.svg";
import person5 from "../../images/happy-clients/person-5.svg";

export default function HappyClients() {
    const сlients = [
        {
            name: "John Doe",
            text: "The clinic staff made me feel welcome and comfortable right from the start. All procedures were quick, painless, and performed at the highest professional level. I am extremely satisfied with my new smile and would recommend this clinic to everyone.",
            rating: 4.5,
            image: person1,
        },
        {
            name: "Sarah Smith",
            text: "I had a fear of dentists for years, but this place completely changed my perspective. The doctor explained every step clearly and used modern equipment throughout the treatment. My teeth look amazing now and I couldn't be happier with the outcome.",
            rating: 5,
            image: person2,
        },
        {
            name: "Michael Fox",
            text: "The quality of service here is simply outstanding compared to other clinics I visited. Every staff member is friendly, caring, and truly dedicated to patient comfort. I appreciate their attention to detail and will definitely return for regular checkups.",
            rating: 4,
            image: person3,
        },
        {
            name: "Emily Blunt",
            text: "Booking an appointment was fast, easy, and completely hassle-free on their website. The clinic is spotlessly clean and equipped with the latest modern dental technology. I felt well cared for and my entire treatment went smooth and painless.",
            rating: 5,
            image: person4,
        },
        {
            name: "Anna Foden",
            text: "The quality of service here is simply outstanding compared to other clinics I visited. Every staff member is friendly, caring, and truly dedicated to patient comfort. I appreciate their attention to detail and will definitely return for regular checkups.",
            rating: 5,
            image: person5,
        },
    ];
    return (
        <>
            <section className="happy-clients">
                <div className="container">
                    <div className="happy-clients__content">
                        <h2 className="happy-clients__title section-title">
                            Our <span>Happy Clients</span>
                        </h2>
                        <p className="happy-clients__desc section-desc">
                            We use only the best quality materials on the market
                            in order to provide the best products to our
                            patients.
                        </p>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView={3.2}
                            loop={true}
                            watchOverflow={true}
                            navigation={{
                                nextEl: ".happy-clients__button-next",
                                prevEl: ".happy-clients__button-prev",
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1.2, spaceBetween: 16 },
                                768: { slidesPerView: 2.2, spaceBetween: 20 },
                                992: { slidesPerView: 3.2, spaceBetween: 24 },
                            }}
                            className="happy-clients__swiper"
                        >
                            {сlients.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="happy-clients__slide"
                                >
                                    <div className="happy-clients__card">
                                        <div className="happy-clients__header">
                                            <img
                                                src={item.image}
                                                alt="Person"
                                                className="happy-clients__img"
                                            />

                                            <div className="happy-clients__info">
                                                <p className="happy-clients__name">
                                                    {item.name}
                                                </p>
                                                <div className="happy-clients__stars">
                                                    {[...Array(5)].map(
                                                        (_, i) => {
                                                            const starValue =
                                                                i + 1;

                                                            const currentClass =
                                                                item.rating >=
                                                                starValue
                                                                    ? "star-full"
                                                                    : item.rating >
                                                                            i &&
                                                                        item.rating <
                                                                            starValue
                                                                      ? "star-half"
                                                                      : "star-empty";

                                                            return (
                                                                <span
                                                                    key={i}
                                                                    className={`star ${currentClass}`}
                                                                >
                                                                    ★
                                                                </span>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="happy-clients__desc section-desc">
                                            {item.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="happy-clients__nav">
                            <button
                                className="happy-clients__button-prev"
                                aria-label="Previous slide"
                            >
                                <img src={arrowLeft} alt="Arrow Left" />
                            </button>
                            <button
                                className="happy-clients__button-next"
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
