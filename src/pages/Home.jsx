import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";
import MailList from "../components/MailList";
import Footer from "../components/Footer";

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const HomeTitle = styled.h1`
  width: 1024px;
  font-size: 20px;
`;

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <HomeContainer>
          <Featured />
          <HomeTitle>Browse by propert type</HomeTitle>
          <PropertyList />
          <HomeTitle>Homes guests love</HomeTitle>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </HomeContainer>
    </div>
  )
}

export default Home 