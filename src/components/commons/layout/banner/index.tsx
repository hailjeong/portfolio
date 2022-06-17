import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: ivory;
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
`;

export default function BannerPage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <Img src="/images/Banner01.png" />
        </div>
        <div>
          <Img src="/images/Banner02.png" />
        </div>
        <div>
          <Img src="/images/Banner03.png" />
        </div>
        <div>
          <Img src="/images/Banner04.png" />
        </div>
        <div>
          <Img src="/images/Banner05.png" />
        </div>
        <div>
          <Img src="/images/Banner06.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
