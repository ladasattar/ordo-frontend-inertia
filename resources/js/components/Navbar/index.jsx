import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar container">
            <a href="/" className="navbar-brand" alt="Logo Green Haven">
                <img
                    src="/assets/images/green-haven-logo.png"
                    alt="Logo Green Haven"
                />
            </a>
            <div className="navbar-menu">
                <a href="#about">About Green Haven</a>
                <a href="#event">Event Details</a>
                <a href="#sponsors">Our Sponsors</a>
                <a href="#leaderboard">Leaderboard</a>
            </div>
            <a href="#plant">
                <button className="btn btn-outline-grey text-brand">
                    Plant a Mangrove
                </button>
            </a>
        </nav>
    );
};

export default Navbar;
