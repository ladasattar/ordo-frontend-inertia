import { corporateData, personalData } from "../../data/tableData";
import CorporateTable from "../../molecules/Tables/CorporateTable";
import PersonalTable from "../../molecules/Tables/PersonalTable";

const Sponsor = () => {
    return (
        <section className="sponsor-section">
            <div className="container">
                <div className="sponsor-section__description">
                    <h2 className="title mb-4">Sponsorship Packages</h2>
                    <p className="paragraph">
                        Our sponsorship package offers branding, promotional
                        opportunities, and visibility at our event, ideal for
                        enhancing company presence and community engagement.
                    </p>
                </div>
                <div className="sponsor-section__personal mt-12 mb-12">
                    <h3>Personal Sponsorship Package</h3>
                    <div className="mt-8">
                        <PersonalTable data={personalData} />
                    </div>
                </div>
                <hr />
                <div className="sponsor-section__corporate mt-12">
                    <h3>Corporate Sponsorship Package</h3>
                    <div className="mt-8">
                        <CorporateTable data={corporateData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
