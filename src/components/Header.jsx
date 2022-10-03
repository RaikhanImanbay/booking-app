import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const HeaderContainer = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
  margin: ${(props) =>
    props.list ? "20px 0px 0px 0px" : "20px 0px 100px 0px"};
`;
const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;
const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  border: 1px solid white;
  padding: 10px;
  border-radius: 20px;
`;
const HeaderTitle = styled.h1``;
const HeaderDesc = styled.p`
  margin: 20px 0;
`;
const HeaderButton = styled.button`
  background-color: #0071c2;
  color: white;
  border: none;
  font-weight: 500;
  padding: 10px;
`;
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
`;
const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HeaderIcon = styled.div`
  color: lightgray;
`;
const HeaderSeachInput = styled.input`
  border: none;
  outline: none;
`;
const HeaderSeachText = styled.span`
  color: lightgray;
  cursor: pointer;
`;
const DateInfo = styled.div`
  position: absolute;
  top: 50px;
  z-index: 2;
`;
const Options = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;
const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
const OptionText = styled.span``;
const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;
const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;
  :disabled {
    cursor: not-allowed;
  }
`;
const OptionCounterNumber = styled.span``;

function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <HeaderContainer>
      <Container list>
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
        {type !== "list" && (
          <>
            <HeaderTitle>A lifetime of discounts? It's a Genius</HeaderTitle>
            <HeaderDesc>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Arraybooking account
            </HeaderDesc>
            <HeaderButton>Sign in / Register</HeaderButton>
            <HeaderSearch>
              <HeaderSearchItem>
                <HeaderIcon>
                  <FontAwesomeIcon icon={faBed} />
                </HeaderIcon>
                <HeaderSeachInput
                  type="text"
                  placeholder="Where are you going?"
                />
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderIcon>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </HeaderIcon>
                <HeaderSeachText
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</HeaderSeachText>
                <DateInfo>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                    />
                  )}
                </DateInfo>
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderIcon>
                  <FontAwesomeIcon icon={faPerson} />
                </HeaderIcon>
                <HeaderSeachText
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</HeaderSeachText>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <OptionText>Adult</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.adult}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Children</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.children}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Room</OptionText>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <OptionCounterNumber>
                          {options.room}
                        </OptionCounterNumber>
                        <OptionCounterButton
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderButton>Search</HeaderButton>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </Container>
    </HeaderContainer>
  );
}

export default Header;
