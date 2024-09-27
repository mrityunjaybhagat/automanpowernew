  import Slider from "react-slick";
  const commonSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const CustomSlider = ({ customSettings,children }) => {
    // Merge common settings with custom settings
    const settings = { ...commonSettings, ...customSettings };
  
    return (
      <Slider {...settings}>
        {children}
      </Slider>
    );
  };
  export default CustomSlider;
  