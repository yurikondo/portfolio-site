// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banners = () => {
  return (
    <div>
      {/* <!-- Slider main container --> */}
      <div className="swiper w-80 h-80">
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          ...
        </div>
        {/* <!-- If we need pagination --> */}
        <div className="swiper-pagination"></div>

        {/* <!-- If we need navigation buttons --> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <!-- If we need scrollbar --> */}
        <div className="swiper-scrollbar"></div>
      </div>{" "}
    </div>
  );
};

export default Banners;
