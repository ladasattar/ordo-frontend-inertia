import { GoChevronRight } from "react-icons/go";

const CardSupportPorogress = ({ target, progress }) => {
    const percentage = (progress / target) * 100;

    return (
        <div className="card-support-progress">
            <div className="card-support-progress__details">
                <div className="card-support-progress__details-wrapper">
                    <img
                        src="/assets/icons/ic-mangrove.png"
                        alt="Mangrove"
                        className="card-support-progress__details__icon"
                    />
                    <div className="card-support-progress__details__count">
                        <span className="card-support-progress__details-progress">
                            {progress.toLocaleString()}
                        </span>
                        <span className="card-support-progress__details-target">
                            / {target.toLocaleString()} Pohon
                        </span>
                    </div>
                </div>
                <button className="btn btn-primary">
                    Support Our Mission <GoChevronRight className="text-xl" />
                </button>
            </div>
            <div className="card-support-progress__progress">
                <div
                    className="card-support-progress__progress-bar"
                    style={{ width: `${percentage.toFixed(1)}%` }}
                ></div>
            </div>
        </div>
    );
};

export default CardSupportPorogress;
