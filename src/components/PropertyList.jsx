import styled from "styled-components"

const PropertyContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;
const PropertyListItem = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    flex: 1;
`;
const PropertyListImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;
const PropertyListTitles = styled.div`

`;
const PropertyListTitle = styled.h1`
    font-size: 18px;
    color: #444;
`;
const PropertyListDesc = styled.h2`
    font-size: 14px;
    font-weight: 300;
`;

function PropertyList() {
  return (
    <PropertyContainer>
        <PropertyListItem>
            <PropertyListImg src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="/>
            <PropertyListTitles>
                <PropertyListTitle>Hotels</PropertyListTitle>
                <PropertyListDesc>233 hotels</PropertyListDesc>
            </PropertyListTitles>
         </PropertyListItem>
         <PropertyListItem>
            <PropertyListImg src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"/>
            <PropertyListTitles>
                <PropertyListTitle>Apartments</PropertyListTitle>
                <PropertyListDesc>2331 hotels</PropertyListDesc>
            </PropertyListTitles>
         </PropertyListItem>
         <PropertyListItem>
            <PropertyListImg src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"/>
            <PropertyListTitles>
                <PropertyListTitle>Resorts</PropertyListTitle>
                <PropertyListDesc>233 hotels</PropertyListDesc>
            </PropertyListTitles>
         </PropertyListItem>
         <PropertyListItem>
            <PropertyListImg src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"/>
            <PropertyListTitles>
                <PropertyListTitle>Villas</PropertyListTitle>
                <PropertyListDesc>233 hotels</PropertyListDesc>
            </PropertyListTitles>
         </PropertyListItem>
         <PropertyListItem>
            <PropertyListImg src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"/>
            <PropertyListTitles>
                <PropertyListTitle>Cabins</PropertyListTitle>
                <PropertyListDesc>233 hotels</PropertyListDesc>
            </PropertyListTitles>
         </PropertyListItem>
    </PropertyContainer>
  )
}

export default PropertyList