import JalaLogo from "/public/assets/images/media/jala-logo.png";
import eFisheryLogo from "/public/assets/images/media/efishery-logo.png";
import AzarineLogo from "/public/assets/images/media/azarine-logo.png";
import KompasLogo from "/public/assets/images/media/kompas-logo.png";
import TribunNewsLogo from "/public/assets/images/media/tribun-news-logo.png";
import JawaPosLogo from "/public/assets/images/media/jawa-pos-logo.png";

const dataMedia = [
    {
        name: "Jala",
        logo: JalaLogo,
    },
    {
        name: "eFishery",
        logo: eFisheryLogo,
    },
    {
        name: "Azarine",
        logo: AzarineLogo,
    },
    {
        name: "Kompas",
        logo: KompasLogo,
    },
    {
        name: "Tribun News",
        logo: TribunNewsLogo,
    },
    {
        name: "Jawa Pos",
        logo: JawaPosLogo,
    },
];

const SectionNewsMedia = () => {
    return (
        <section className="section-news-media flex items-center">
            <div className="container flex items-center">
                {dataMedia.map((media, index) => (
                    <div className="section-news-media__media" key={index}>
                        <img src={media.logo} alt={media.name} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionNewsMedia;
