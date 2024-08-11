import React from "react";
import CardEventSwiper from "../../molecules/CardEventSwiper";
import EventStepper from "../../molecules/EventStepper";
import CarouselEventImg from "/public/assets/images/carousel-event.png";

const events = [
    {
        date: "26/04/2024",
        time: "08:00 - 11:00 WIB",
        image: CarouselEventImg,
        description:
            "Join the impactful journey of planting mangroves, where you'll learn, collaborate with locals, earn recognition, and share your story through media coverage",
        agenda: "Introducing the beauty of mangroves on a journey to the planting site.",
    },
    {
        date: "27/04/2024",
        time: "07:00 - 12:00 WIB",
        image: CarouselEventImg,
        description:
            "Planting mangroves with local farmers and learning about their daily lives",
        agenda: "Working together with local farmers while planting each mangrove",
    },
    {
        date: "28/04/2024",
        time: "09:00 - 11:00 WIB",
        image: CarouselEventImg,
        description:
            "Touring the mangrove forest and learning about the ecosystem",
        agenda: "Exploring the wonders of mangrove ecotourism, an educational adventure.",
    },
    {
        date: "29/04/2024",
        time: "09:00 - 11:00 WIB",
        image: CarouselEventImg,
        description:
            "Final day of planting mangroves and receiving a mark of honor",
        agenda: "Receive a plaque & badge, a mark of honor for every tree you plant.",
    },
    {
        date: "30/04/2024",
        time: "09:00 - 11:00 WIB",
        image: CarouselEventImg,
        description:
            "Closing event, coverage by news media, and sharing your story of change",
        agenda: "Coverage & documentation by news media, share your story of change!",
    },
];

const Event = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <section className="event-section">
            <div className="container">
                <div className="event-section__description mb-12">
                    <h2 className="title mb-4">Event Summary</h2>
                    <p className="paragraph">
                        We give you a brief overview of the event to give you a
                        glimpse of what we're doing in the Green Haven Project,
                        download the detailed PDF to see how you can get
                        involved
                    </p>
                </div>
                <div className="mb-10">
                    <CardEventSwiper
                        events={events}
                        setActiveIndex={setActiveIndex}
                        activeIndex={activeIndex}
                    />
                </div>
                <EventStepper events={events} activeIndex={activeIndex} />
            </div>
        </section>
    );
};

export default Event;
