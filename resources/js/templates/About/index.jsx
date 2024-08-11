import JCILogo from "/public/assets/images/jci-logo.png";
import GreenHavenProjectLogo from "/public/assets/images/green-haven-project-logo.png";

const About = () => {
    return (
        <section className="about-communities container">
            <div className="about-communities___logo">
                <div className="about-communities___logo__img">
                    <img src={JCILogo} alt="JCI Logo" />
                </div>
                <div className="about-communities___logo__img">
                    <img
                        src={GreenHavenProjectLogo}
                        alt="Green Haven Project Logo"
                    />
                </div>
            </div>
            <div className="about-communities__desc">
                <h2 className="title">About Green Haven Project</h2>
                <p className="paragraph">
                    The Green Haven Project - Mangrove aims to restore coastal
                    ecosystems and raise awareness by planting mangroves and
                    educating participants about the importance of these areas.
                    This six-hour event will involve JCI members, local farmers,
                    and students, focusing on combating beach erosion and
                    promoting ESG values.
                </p>
            </div>
            <div className="about-communities__transformation">
                <div className="flex flex-column justify-center items-center">
                    <figure>
                        <img
                            src="/assets/images/before-landscape.jpg"
                            alt="Before"
                        />
                        <figcaption>Before mangroves were planted</figcaption>
                    </figure>
                </div>
                <div className="flex flex-column justify-center items-center">
                    <figure>
                        <img
                            src="/assets/images/after-landscape.png"
                            alt="Ater"
                        />
                        <figcaption>After mangroves were planted</figcaption>
                    </figure>
                </div>

                <div className="about-communities__overlay-icon">
                    <img src="/assets/icons/ic-curved.png" alt="Overlay Icon" />
                    <span>TRANSFORMATION</span>
                </div>
            </div>
        </section>
    );
};

export default About;
