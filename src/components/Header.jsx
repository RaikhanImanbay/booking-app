import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled  from "styled-components";
import { DateRange } from "react-date-range";

const HeaderContainer = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`
const Container = styled.div`
    width: 100% ;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
`
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 50px;
`
const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
        border: 1px solid white;
        padding: 10px;
        border-radius: 20px;
    
`
const HeaderTitle = styled.h1`

`
const HeaderDesc = styled.p`
    margin: 20px 0;
`
const HeaderButton = styled.button`
    background-color: #0071c2;
    color: white;
    border: none;
    font-weight: 500;
    cursor: pointer;
    padding: 10px;
`
const HeaderSearch = styled.div`
    height: 30px;
    background-color: white;
    border: 3px solid #febb02;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    border-radius: 5px;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
`
const HeaderSearchItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px
`
const HeaderIcon = styled.div`
    color: lightgray;
`
const HeaderSeachInput = styled.input`
    border: none;
    outline: none;
`
const HeaderSeachText = styled.span`
    color: lightgray;
    cursor: pointer;
`

function Header() {
  return (
    <HeaderContainer>
    <Container>
        <HeaderList>
            <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </HeaderListItem>
            <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Fligts</span>
            </HeaderListItem>
            <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </HeaderListItem>
            <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </HeaderListItem>
            <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
            </HeaderListItem>
        </HeaderList>
        <HeaderTitle>
            A lifetime of discounts? It's a Genius
        </HeaderTitle>
        <HeaderDesc>
            Get rewarded for your travels - unlock instant savings of 10% or more with a free Arraybooking account
        </HeaderDesc>
        <HeaderButton>
            Sign in / Register
        </HeaderButton>
        <HeaderSearch>
            <HeaderSearchItem>
            <HeaderIcon>
            <FontAwesomeIcon icon={faBed} />
            </HeaderIcon>
            <HeaderSeachInput type="text" placeholder="Where are you going?"/>
            </HeaderSearchItem>
            <HeaderSearchItem>
            <HeaderIcon>
            <FontAwesomeIcon icon={faCalendarDays} />
            </HeaderIcon>
            <HeaderSeachText>
                date to date
            </HeaderSeachText>
            </HeaderSearchItem>
            <HeaderSearchItem>
            <HeaderIcon>
            <FontAwesomeIcon icon={faPerson} />
            </HeaderIcon>
            <HeaderSeachText>
                2 adults 2 children 1 room
            </HeaderSeachText>
            </HeaderSearchItem>
            <HeaderSearchItem>
              <HeaderButton>Search</HeaderButton>
            </HeaderSearchItem>
        </HeaderSearch>
    </Container>  
    </HeaderContainer>                           
  )
}

export default Header 