import MangroveMaven from "/public/assets/images/mangrove-maven-badge.png";
import GuardianOfTheGrove from "/public/assets/images/guardian-of-the-grove-badge.png";
import MangroveMaster from "/public/assets/images/sapling-savior-badge.png";

const RowLeaderboard = ({ position, name, trees }) => {
    const titlePosition = (position) => {
        if (position <= 3) return "Mangrove Maven";
        else if (position <= 5) return "Guardian of the Grove";
        else return "Mangrove Master";
    };

    const colorPosition = (position) => {
        if (position <= 3) return "top";
        else if (position == 4) return "middle";
        else return "lower";
    };

    const badgePosition = (position) => {
        if (position <= 3) return MangroveMaven;
        else if (position <= 5) return GuardianOfTheGrove;
        else return MangroveMaster;
    };

    return (
        <div className="row-leaderboard flex">
            <div className="row-leaderboard__left flex items-center">
                <div
                    className={`row-leaderboard__position flex items-center justify-center mr-4 ${colorPosition(
                        position
                    )}`}
                >
                    <span>0{position}</span>
                </div>
                <div className="row-leaderboard__badge mr-2">
                    <img src={badgePosition(position)} alt="Badge" />
                </div>
                <div className="row-leaderboard__user flex flex-column">
                    <span>{titlePosition(position)}</span>
                    <span className="name">{name}</span>
                </div>
            </div>
            <div className="row-leaderboard__right flex items-center">
                <img
                    src="/assets/icons/ic-mangrove.png"
                    alt="Mangrove"
                    className="mr-2"
                />
                <span className="trees-count mr-1">{trees}</span>
                <span className="trees-text">Pohon</span>
            </div>
        </div>
    );
};

export default RowLeaderboard;
