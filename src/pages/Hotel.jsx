import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;
const BookNowButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HotelTitle = styled.h1`
  font-size: 24px;
`;
const HotelLocation = styled.span``;
const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;
const HotelPriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;
const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const HotelImgWrapper = styled.div`
  width: 33%;
`;
const HotelImg = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
const HotelDetailsTexts = styled.div`
  flex: 3;
`;
const HotelDTitle = styled.h1``;
const HotelDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;
const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const HotelPriceTitle = styled.h1`
  font-size: 18px;
  color: #555;
`;
const HotelPriceDesc = styled.span`
  font-size: 14px;
`;
const HotelPrice = styled.h2`
  font-weight: 300;
`;
const HotelPriceButton = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;
const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 999;
  display: flex;
  align-items: center;
`;
const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderImg = styled.img`
  width: 85%;
  height: 70vh;
`;
const CancelButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: lightgray;
  cursor: pointer;
`;

const ArrowLeft = styled.div`
  margin: 20px;
  font-size: 40px;
  color: lightgray;
  cursor: pointer;
`;
const ArrowRight = styled.div`
  margin: 20px;
  font-size: 40px;
  color: lightgray;
  cursor: pointer;
`;

function Hotel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderOpen, setSliderOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideIndex(i);
    setSliderOpen(true);
  };
 
  const handleSlide = (direction) => {
    let newSlideIndex;
    if(direction ==="left"){
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex-1
    } else {
      newSlideIndex = slideIndex === 5 ? 0 : slideIndex+1
    }

    setSlideIndex(newSlideIndex);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <HotelContainer>
        {sliderOpen && (
          <Slider>
            <CancelButton
              onClick={() => {
                setSliderOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </CancelButton>
            <ArrowLeft>
              <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=>handleSlide("left")} />
            </ArrowLeft>
            <SliderWrapper>
              <SliderImg src={photos[slideIndex].src} />
            </SliderWrapper>
            <ArrowRight>
              <FontAwesomeIcon icon={faCircleArrowRight}  onClick={()=>handleSlide("right")} />
            </ArrowRight>
          </Slider>
        )}
        <HotelWrapper>
          <BookNowButton>Reserve or Book Now!</BookNowButton>
          <HotelTitle>Grand Hotel</HotelTitle>
          <HotelAddress>
            <FontAwesomeIcon icon={faLocationDot} />
            <HotelLocation>Tartu 11, 71004 Viljandi, Estonia</HotelLocation>
          </HotelAddress>
          <HotelDistance>Excellent location – 500m from center</HotelDistance>
          <HotelPriceHighlight>
            {" "}
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighlight>
          <HotelImages>
            {photos.map((photo, i) => (
              <HotelImgWrapper>
                <HotelImg onClick={() => handleOpen(i)} src={photo.src} />
              </HotelImgWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <HotelDetailsTexts>
              <HotelDTitle>Stay in the heart of City</HotelDTitle>
              <HotelDesc>
                You're eligible for a Genius discount at Grand Hotel Viljandi!
                To save at this property, all you have to do is sign in. 4-star
                Grand Hotel Viljandi is situated in the centre of Viljandi town.
                It offers Art Deco rooms with free Wi-Fi, a minibar and period
                furniture. All elegant rooms at the Grand Hotel are decorated
                with warm colours and stylish details. Each has a modern
                bathroom with a hairdryer and toiletries. All rooms offer a
                seating area. You can visit a solarium, gym, various saunas and
                a hot tub on site. Front desk staff is at your disposal 24 hours
                a day and can arrange shuttle transport or laundry services. A
                buffet breakfast is served at the hotel’s spacious restaurant,
                which offers international dishes. You can have a drink at the
                bar. Grand Hotel Viljandi is housed in a restored historic
                building and situated 500 m from the town’s bus station. Free
                parking is provided on site.
              </HotelDesc>
            </HotelDetailsTexts>
            <HotelDetailsPrice>
              <HotelPriceTitle>Perfect for a 9-night stay</HotelPriceTitle>
              <HotelPriceDesc>
                Located in the real heart of Tartu, this property has an
                excellent location score of 9.8!
              </HotelPriceDesc>
              <HotelPrice>
                <b>$945</b> (9 nights)
              </HotelPrice>
              <HotelPriceButton>Reserve or Book Now!</HotelPriceButton>
            </HotelDetailsPrice>
          </HotelDetails>
        </HotelWrapper>
        <MailList />
        <Footer />
      </HotelContainer>
    </div>
  );
}

export default Hotel;
