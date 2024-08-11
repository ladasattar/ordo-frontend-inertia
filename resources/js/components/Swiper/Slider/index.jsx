import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Slider = ({ slides, setActiveIndex }) => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            autoplay={{ delay: 4000 }}
            loop={true}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
        >
            {slides?.length > 0 &&
                slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide?.image} alt={slide?.agenda} />
                    </SwiperSlide>
                ))}

            <button
                ref={navigationPrevRef}
                className="btn btn-primary swiper-navigation--custom prev"
            >
                <GoChevronLeft className="text-2xl" />
            </button>
            <button
                ref={navigationNextRef}
                className="btn btn-primary swiper-navigation--custom next"
            >
                <GoChevronRight className="text-2xl" />
            </button>
        </Swiper>
    );
};

export default Slider;
