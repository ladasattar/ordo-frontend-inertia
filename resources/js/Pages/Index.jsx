import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionNewsMedia from "../molecules/SectionNewsMedia";
import About from "../templates/About";
import Event from "../templates/Event";
import Hero from "../templates/Hero";
import Sponsor from "../templates/Sponsor";
import Recall from "../templates/Recall";

export default function Index() {
    return (
        <main>
            <Navbar />
            <Hero />
            <SectionNewsMedia />
            <About />
            <Event />
            <Sponsor />
            <Recall />
            <Footer />
        </main>
    );
}
