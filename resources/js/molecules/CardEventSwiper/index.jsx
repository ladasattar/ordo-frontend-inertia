import Slider from "../../components/Swiper/Slider";
import EventDetail from "../EventDetail";

const CardEventSwiper = ({ events, setActiveIndex, activeIndex }) => {
    return (
        <section className="card-event-swiper">
            <div className="card-event-swiper__details">
                {events?.length > 0 &&
                    events.map((event, index) => (
                        <div key={index}>
                            <EventDetail
                                event={event}
                                isActive={activeIndex === index}
                            />
                        </div>
                    ))}
            </div>
            <div className="card-event-swiper__slider">
                <Slider slides={events} setActiveIndex={setActiveIndex} />
            </div>
        </section>
    );
};

export default CardEventSwiper;
