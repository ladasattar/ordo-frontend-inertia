const EventStepper = ({ events, activeIndex }) => {
    return (
        <section className="event-stepper">
            {events?.map((event, index) => (
                <div key={index} className="event-stepper__step">
                    <div
                        className={`event-stepper__step__bar mb-6 ${
                            activeIndex === index ? "active" : ""
                        }`}
                    ></div>
                    <div>
                        <h6 className="event-stepper__step__number">
                            {index + 1}
                        </h6>
                        <p className="paragraph">{event.agenda}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default EventStepper;
