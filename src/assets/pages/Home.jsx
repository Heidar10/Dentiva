// import Swiper from "../components/Swiper/Swiper";
import AboutClinic from "../components/AboutClinic/AboutClinic";
import Advantages from "../components/Advantages/Advantages";
import Banner from "../components/Banner/Banner";
import HappyClients from "../components/HappyClients/HappyClients";
import NewPatients from "../components/NewPatients/NewPatients";
import News from "../components/News/News";
import Promo from "../components/Promo/Promo";
import Question from "../components/Question/Question";
import Reassurance from "../components/Reassurance/Reassurance";
// import ServiceCard from "../components/ServiceCard/ServiceCard";
import ServicesSection from "../components/ServicesSection";
import Specialists from "../components/Specialists/Specialists";

export default function Home() {
    return (
        <>
            <Banner />
            {/* <ServiceCard /> */}
            <ServicesSection limit={3} />
            <NewPatients />
            <Advantages />
            <Reassurance />
            <AboutClinic />
            <Specialists />
            <HappyClients />
            <News />
            <Question />
            <Promo />
        </>
    );
}
