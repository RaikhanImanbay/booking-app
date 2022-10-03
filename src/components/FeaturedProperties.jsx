import styled from "styled-components";

const FpContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const FpImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const FpItem = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const FpName = styled.span`
  color: #333;
  font-weight: bold;
`;
const FpCity = styled.span`
  font-weight: 300;
`;
const FpPrice = styled.span`
  font-weight: 500;
`;
const FpRatings = styled.div``;
const FpButton = styled.button`
  background-color: #003580;
  color: white;
  border: none;
  padding: 3px;
  margin-right: 10px;
  font-weight: bold;
`;

const FpRating = styled.span`
  font-size: 14px;
`;

function FeaturedProperties() {
  return (
    <FpContainer>
      <FpItem>
        <FpImg src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" />
        <FpName>Aparthotel Stare Miasto</FpName>
        <FpCity>Madrid</FpCity>
        <FpPrice>Starting from $120</FpPrice>
        <FpRatings>
          <FpButton>8.9</FpButton>
          <FpRating>Excellent</FpRating>
        </FpRatings>
      </FpItem>
      <FpItem>
        <FpImg src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" />
        <FpName>Four Seasons Hotel</FpName>
        <FpCity>Lisbon</FpCity>
        <FpPrice>Starting from $99</FpPrice>
        <FpRatings>
          <FpButton>8.8</FpButton>
          <FpRating>Excellent</FpRating>
        </FpRatings>
      </FpItem>
      <FpItem>
        <FpImg src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1" />
        <FpName>Comfort Suites Airport</FpName>
        <FpCity>Austin</FpCity>
        <FpPrice>Starting from $140</FpPrice>
        <FpRatings>
          <FpButton>9.3</FpButton>
          <FpRating>Exceptional</FpRating>
        </FpRatings>
      </FpItem>
      <FpItem>
        <FpImg src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1" />
        <FpName>Hilton Garden Inn</FpName>
        <FpCity>Berlin</FpCity>
        <FpPrice>Starting from $105</FpPrice>
        <FpRatings>
          <FpButton>8.8</FpButton>
          <FpRating>Excellent</FpRating>
        </FpRatings>
      </FpItem>
    </FpContainer>
  );
}

export default FeaturedProperties;
