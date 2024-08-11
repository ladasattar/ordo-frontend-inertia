import { GoChevronRight } from "react-icons/go";
import IconTickCircle from "/public/assets/icons/ic-tick-circle.svg";

const CorporateTable = ({ data }) => {
    const renderTableData = (data) => {
        if (typeof data === "boolean") {
            return data ? (
                <img
                    src={IconTickCircle}
                    alt="tick-circle"
                    style={{
                        width: "30px",
                    }}
                />
            ) : (
                ""
            );
        } else return data;
    };

    return (
        <section>
            <table className="text-center-all">
                <thead>
                    <tr>
                        <th>Benefits</th>
                        <th>Eco Trailblazers</th>
                        <th>Green Innovators</th>
                        <th>Eco Vanguard</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length > 0 &&
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.benefits}</td>
                                <td>{renderTableData(item.ecoTrailblazers)}</td>
                                <td>{renderTableData(item.greenInnovators)}</td>
                                <td>{renderTableData(item.ecoVanguard)}</td>
                            </tr>
                        ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <span>Make a Donation</span>
                        </td>
                        <td>
                            <button className="btn btn-info-white btn-sm">
                                Support Our Mission{" "}
                                <GoChevronRight className="text-xl" />
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-info-white btn-sm">
                                Support Our Mission{" "}
                                <GoChevronRight className="text-xl" />
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-info-white btn-sm">
                                Support Our Mission{" "}
                                <GoChevronRight className="text-xl" />
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </section>
    );
};

export default CorporateTable;
