import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;
const SearchItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;
const SearchItemImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const SiTitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;
const SiDistance = styled.span`
  font-size: 12px;
`;
const SiTaxiOp = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;
const SiSubtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
const SiFeatures = styled.span`
  font-size: 12px;
`;
const SiCancelOp = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;
const SiCancelOpSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`;
const SearchItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SiRatings = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SiRating = styled.span`
  font-weight: 500;
`;
const SiRatingButton = styled.button`
  background-color: #003580;
  color: white;
  padding: 5px;
  font-weight: bold;
  border: none;
`;
const SiDetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const SiPrice = styled.span`
  font-size: 24px;
`;
const SiTaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;
const SiCheckButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

function SearchItem() {
  return (
    <Container>
      <SearchItemImg src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
      <SearchItemDesc>
        <SiTitle>Tower Street Apartments</SiTitle>
        <SiDistance>500m from center</SiDistance>
        <SiTaxiOp>Free airport taxi</SiTaxiOp>
        <SiSubtitle> Studio Apartment with Air conditioning</SiSubtitle>
        <SiFeatures>Entire studio • 1 bathroom • 21m² 1 full bed</SiFeatures>
        <SiCancelOp>Free cancellation </SiCancelOp>
        <SiCancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </SiCancelOpSubtitle>
      </SearchItemDesc>
      <SearchItemDetails>
        <SiRatings>
          <SiRating>Excellent</SiRating>
          <SiRatingButton>8.9</SiRatingButton>
        </SiRatings>
        <SiDetailTexts>
          <SiPrice>$112</SiPrice>
          <SiTaxOp>Includes taxes and fees</SiTaxOp>
          <SiCheckButton>See availability</SiCheckButton>
        </SiDetailTexts>
      </SearchItemDetails>
    </Container>
  );
}

export default SearchItem;
