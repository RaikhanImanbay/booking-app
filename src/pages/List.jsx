import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`;
const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 5px;
  position: sticky;
  height: max-content;
`;
const ListResult = styled.div`
  flex: 3;
`;
const ListSearchTitle = styled.h1`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;
const ListSearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;
const ListSearchLabel = styled.label`
  font-size: 12px;
`;
const ListSearchInput = styled.input`
  height: 30px;
  border: none;
  padding: 5px;
`;
const ListDate = styled.span`
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ListOptionText = styled.span``;
const ListOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 12px;
`;
const ListOptionInput = styled.input`
  width: 50px;
`;
const ListOptions = styled.div`
  padding: 10px;
`;
const ListSearchButton = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;


function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <ListSearchTitle>Search</ListSearchTitle>
            <ListOptions>
            <ListSearchItem>
              <ListSearchLabel>Destination/property name</ListSearchLabel>
              <ListSearchInput placeholder={destination} type="text" />
            </ListSearchItem>
            <ListSearchItem>
              <ListSearchLabel>Check-in date</ListSearchLabel>
              <ListDate onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</ListDate>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </ListSearchItem>
            <ListSearchItem>
              <ListSearchLabel>Options</ListSearchLabel>
              
              <ListOptionItem>
                <ListOptionText>
                  Min price <small>per night</small>
                </ListOptionText>
                <ListOptionInput type="number" />
              </ListOptionItem>
            </ListSearchItem>
            <ListSearchItem>
              <ListOptionItem>
                <ListOptionText>
                  Max price <small>per night</small>
                </ListOptionText>
                <ListOptionInput type="number" />
              </ListOptionItem>
            </ListSearchItem>
            <ListSearchItem>
              <ListOptionItem>
                <ListOptionText>Adult</ListOptionText>
                <ListOptionInput type="number" min={1} placeholder={options.adult}/>
              </ListOptionItem>
            </ListSearchItem>
            <ListSearchItem>
              <ListOptionItem>
                <ListOptionText>Children</ListOptionText>
                <ListOptionInput type="number" min={0} placeholder={options.children}/>
              </ListOptionItem>
            </ListSearchItem>
            <ListSearchItem>
              <ListOptionItem>
                <ListOptionText>Room</ListOptionText>
                <ListOptionInput type="number" min={1} placeholder={options.room} />
              </ListOptionItem>
            </ListSearchItem>
            </ListOptions>
            <ListSearchButton>Search</ListSearchButton>
          </ListSearch>
          <ListResult>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </ListResult>
        </ListWrapper>
      </ListContainer>
      </div>
  );
}

export default List;
