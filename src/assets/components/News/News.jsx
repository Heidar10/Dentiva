import "./News.css";
import Button from "../Button/Button";

import img1 from "../../images/news/news-img-1.webp";
import img2 from "../../images/news/news-img-2.webp";
import img3 from "../../images/news/news-img-3.webp";
import img4 from "../../images/news/news-img-4.webp";
import img5 from "../../images/news/news-img-5.webp";
import img6 from "../../images/news/news-img-6.webp";
import img7 from "../../images/news/news-img-7.webp";
import img8 from "../../images/news/news-img-8.webp";

export default function News() {
    const articles = [
        {
            id: 1,
            tag: "Self Care",
            title: "5 Simple Daily Habits for Stronger Teeth",
            description:
                "Proper brushing and flossing are essential for maintaining healthy gums. Discover key daily habits to keep your smile bright.",
            author: "Anita Jackson",
            date: "12 Oct 2026",
            image: img1, // Огляд зубів / гігієна
        },
        {
            id: 2,
            tag: "Diagnostics",
            title: "Understanding Modern Dental X-Ray Diagnostics",
            description:
                "Digital imaging helps detect potential dental issues before they become painful. Learn how low-radiation technology keeps you safe.",
            author: "Dr. Alex Rivera",
            date: "08 Oct 2026",
            image: img2, // Рентген / знімки
        },
        {
            id: 3,
            tag: "Consultation",
            title: "What to Expect During Your First Dental Checkup",
            description:
                "A comprehensive examination ensures long-term oral health and peace of mind. We walk you through every step of your consultation.",
            author: "Dr. Sarah Conner",
            date: "01 Oct 2026",
            image: img3, // Консультація з лікарем
        },
        {
            id: 4,
            tag: "Equipment",
            title: "How Advanced Technology Improves Patient Comfort",
            description:
                "Ergonomic dental chairs and modern tools allow faster, gentler procedures. Experience stress-free dental care at our clinic.",
            author: "Mark Davis",
            date: "25 Sep 2026",
            image: img4, // Крісло та обладнання
        },
        {
            id: 5,
            tag: "Self Care",
            title: "How to Choose the Right Toothbrush and Toothpaste",
            description:
                "Selecting between soft bristles and electric models can be confusing. Here is a clear guide tailored to your specific needs.",
            author: "Anita Jackson",
            date: "18 Sep 2026",
            image: img5, // Лікар дивиться знімок біля вікна
        },
        {
            id: 6,
            tag: "Clinic News",
            title: "Touring Our State-of-the-Art Treatment Rooms",
            description:
                "We designed our clinic space to promote relaxation and maximum hygiene standards. Step inside and feel at ease during your visit.",
            author: "Elena Rostova",
            date: "10 Sep 2026",
            image: img6, // Кабінет клініки
        },
        {
            id: 7,
            tag: "Surgery",
            title: "Innovations in Precision Microscopic Dentistry",
            description:
                "High-magnification optics enable ultra-precise root canal and restorative work. High precision leads to faster recovery times.",
            author: "Dr. Michael Vance",
            date: "02 Sep 2026",
            image: img7, // Операція під мікроскопом
        },
        {
            id: 8,
            tag: "Treatments",
            title: "Painless Wisdom Tooth Removal Techniques",
            description:
                "Surgical dentistry has advanced to offer smooth and pain-free extractions. Learn how our specialist team ensures your comfort.",
            author: "Dr. David Smith",
            date: "28 Aug 2026",
            image: img8, // Хірургічна операція
        },
    ];

    return (
        <>
            <section className="news">
                <div className="container">
                    <div className="news__content">
                        <div className="news__header">
                            <div className="news__info">
                                <h2 className="news__title section-title">
                                    News & Articles
                                </h2>
                                <p className="news__desc section-desc">
                                    We use only the best quality materials on
                                    the market in order to provide the best
                                    products to our patients.
                                </p>
                            </div>

                            <Button text="View All" className="news__btn" />
                        </div>

                        <div className="news__cards">
                            {articles.map((item) => (
                                <div className="news__card" key={item.id}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="news__card-img"
                                    />
                                    <span className="news__card-tag">
                                        {item.tag}
                                    </span>
                                    <h3 className="news__card-title">
                                        {item.title}
                                    </h3>
                                    <p className="news__card-desc">
                                        {item.description}
                                    </p>
                                    <span className="news__card-author">
                                        {item.author}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
