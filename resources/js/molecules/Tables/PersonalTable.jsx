import MangroveMaven from "/public/assets/images/mangrove-maven-badge.png";
import GuardianOfTheGrove from "/public/assets/images/guardian-of-the-grove-badge.png";
import SaplingSavior from "/public/assets/images/sapling-savior-badge.png";
import MangroveMaster from "/public/assets/images/mangrove-master-badge.png";
import TreeTitan from "/public/assets/images/tree-titan-badge.png";
import SeedlingScout from "/public/assets/images/seedling-scout-badge.png";
import { GoChevronRight } from "react-icons/go";

const PersonalTable = ({ data }) => {
    const badgeTier = (tier) => {
        if (tier === "Seedling Scout") return SeedlingScout;
        else if (tier === "Sapling Savior") return SaplingSavior;
        else if (tier === "Tree Titan") return TreeTitan;
        else if (tier === "Mangrove Master") return MangroveMaster;
        else if (tier === "Guardian of the Grove") return GuardianOfTheGrove;
        else return MangroveMaven;
    };

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th className="text-left">Membership Tier</th>
                        <th>Min. Seeds</th>
                        <th>Min. Buy</th>
                        <th>Benefits</th>
                        <th>Donors</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length > 0 &&
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {
                                        <div className="flex items-center">
                                            <div className="mr-2 icon-badge">
                                                <img
                                                    src={badgeTier(item.tier)}
                                                    alt="Badge"
                                                />
                                            </div>
                                            <span>{item.tier}</span>
                                        </div>
                                    }
                                </td>
                                <td>{item.minSeeds} Seeds</td>
                                <td>IDR {item.minBuy.toLocaleString()}K</td>
                                <td>{item.benefits}</td>
                                <td>{item.donors} Donors</td>
                                <td>
                                    <a href={item.link}>
                                        <button className="btn btn-info btn-sm">
                                            Support Our Mission{" "}
                                            <GoChevronRight className="text-xl" />
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    );
};

export default PersonalTable;
