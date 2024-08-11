import IconDocDownload from "/public/assets/icons/ic-document-download.svg";

const EventDetail = ({ event, isActive }) => {
    return (
        <div
            className={`card-event-swiper__details__item ${
                isActive ? "active" : ""
            }`}
        >
            <div>
                <p className="date">{event?.date}</p>
                <h6>{event?.time}</h6>
                <p className="description">{event?.description}</p>
            </div>
            <hr />
            <button className="btn btn-primary">
                <img
                    src={IconDocDownload}
                    alt="Download Document"
                    className="mr-2"
                />
                View Event Details
            </button>
        </div>
    );
};

export default EventDetail;
