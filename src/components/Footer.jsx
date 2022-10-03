import styled from "styled-components";

const FooterContainer = styled.div`
  padding-top: 10px;
  width: 100%;
  width: 1024px;
  font-size: 12px;
`;
const FooterLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;
const FooterListItem = styled.li`
  margin-bottom: 10px;
  color: #003580;
  cursor: pointer;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLists>
        <FooterList>
          <FooterListItem>Countries</FooterListItem>
          <FooterListItem>Regions</FooterListItem>
          <FooterListItem>Cities</FooterListItem>
          <FooterListItem>Districts</FooterListItem>
          <FooterListItem>Airports</FooterListItem>
          <FooterListItem>Hotels</FooterListItem>
          <FooterListItem>Places of interest</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Homes </FooterListItem>
          <FooterListItem>Apartments </FooterListItem>
          <FooterListItem>Resorts </FooterListItem>
          <FooterListItem>Villas</FooterListItem>
          <FooterListItem>Hostels</FooterListItem>
          <FooterListItem>B&Bs</FooterListItem>
          <FooterListItem>Guest houses</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Unique places to stay</FooterListItem>
          <FooterListItem>All destinations</FooterListItem>
          <FooterListItem>Discover</FooterListItem>
          <FooterListItem>Reviews</FooterListItem>
          <FooterListItem>Unpacked:Travel articles</FooterListItem>
          <FooterListItem>Travel communities </FooterListItem>
          <FooterListItem>Seasonal and holiday deals</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Car hire</FooterListItem>
          <FooterListItem>Flight finder</FooterListItem>
          <FooterListItem>Restaurant reservations</FooterListItem>
          <FooterListItem>Booking.com for Travel Agents</FooterListItem>
        </FooterList>
        <FooterList>
          <FooterListItem>Coronavirus (COVID-19) FAQs</FooterListItem>
          <FooterListItem>About Booking.com</FooterListItem>
          <FooterListItem>Customer Service help</FooterListItem>
          <FooterListItem>Partner help</FooterListItem>
          <FooterListItem>Careers</FooterListItem>
          <FooterListItem>Sustainability</FooterListItem>
          <FooterListItem>Safety resource centre</FooterListItem>
          <FooterListItem>Investor relations</FooterListItem>
          <FooterListItem>Terms & Conditions</FooterListItem>
        </FooterList>
      </FooterLists>
    </FooterContainer>
  );
}

export default Footer;
