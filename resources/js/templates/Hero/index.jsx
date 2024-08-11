import React from "react";
import CardSupportPorogress from "../../molecules/CardSupportProgress";
import RowLeaderboard from "../../molecules/RowLeaderboard";

const leaderboard = [
    {
        position: 1,
        name: "Budi Hartanto",
        trees: 350,
    },
    {
        position: 2,
        name: "Dewi Sartika",
        trees: 330,
    },
    {
        position: 3,
        name: "Eko Wahyudi",
        trees: 200,
    },
    {
        position: 4,
        name: "Rina Kartika",
        trees: 190,
    },
    {
        position: 5,
        name: "Agus Prasetyo",
        trees: 140,
    },
    {
        position: 6,
        name: "Irfan Setiawan",
        trees: 80,
    },
];

const Hero = () => {
    const target = 10000;
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            setProgress(5690);
        }, 1000);
    }, []);

    return (
        <section className="hero">
            <section className="hero__left flex flex-column">
                <div className="container">
                    <div className="badge badge-grey mb-4">
                        <span>Green Haven Project - Mangrove</span>
                    </div>
                    <h1 className="title">
                        Green Horizons Await, Join Us in Planting{" "}
                        {target.toLocaleString()} Mangroves!
                    </h1>
                    <CardSupportPorogress target={target} progress={progress} />
                </div>
                <div className="hero__img">
                    <img
                        src="/assets/images/hero.png"
                        alt="Mangrove Landscape"
                    />
                </div>
            </section>
            <section className="hero__right flex-1">
                <div className="mb-7">
                    <h2 className="title">Leaderboard</h2>
                    <div className="flex">
                        <button className="btn btn-outline-secondary btn-lg mr-3">
                            Most Donation
                        </button>
                        <button className="btn btn-outline-grey btn-lg">
                            Most Recent
                        </button>
                    </div>
                </div>
                <div className="leaderboard">
                    {leaderboard.map((item, index) => (
                        <RowLeaderboard
                            key={index}
                            position={item.position}
                            name={item.name}
                            trees={item.trees}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Hero;
