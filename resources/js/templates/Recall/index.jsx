import { GoChevronRight } from "react-icons/go";
import Recall1 from "/public/assets/images/recall-1.png";
import Recall2 from "/public/assets/images/recall-2.png";
import Recall3 from "/public/assets/images/recall-3.png";
import Recall4 from "/public/assets/images/recall-4.png";
import Recall5 from "/public/assets/images/recall-5.png";

const Recall = () => {
    return (
        <section className="recall-section">
            <div className="container">
                <div className="recall-section__description mb-12">
                    <h2 className="title mb-4">
                        Donate Today and be a Guardian of the Green Belt.
                    </h2>
                    <p className="paragraph">
                        Join us in our mission to rejuvenate and protect our
                        shorelines by donating to our mangrove planting project.
                    </p>
                    <button className="btn btn-primary">
                        Support Our Mission{" "}
                        <GoChevronRight className="text-xl" />
                    </button>
                </div>
                <div className="recall-section__album">
                    <div className="recall-section__album__img">
                        <img src={Recall1} alt="Figure 1" />
                    </div>
                    <div className="recall-section__album__img">
                        <img src={Recall2} alt="Figure 2" />
                    </div>
                    <div className="recall-section__album__img">
                        <img src={Recall3} alt="Figure 3" />
                    </div>
                    <div className="recall-section__album__img">
                        <img src={Recall4} alt="Figure 4" />
                    </div>
                    <div className="recall-section__album__img">
                        <img src={Recall5} alt="Figure 5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recall;
