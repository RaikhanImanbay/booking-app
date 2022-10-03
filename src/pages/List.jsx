import Header from '../components/Header';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

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
  border-radius: 10px;
  position: sticky;
`;
const ListResult = styled.div`
 flex: 3;
`;
const ListSearchTitle = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;
const ListSearchItem = styled.div``;
const ListSearchLabel = styled.label``;
const ListSearchInput = styled.input``;


function List() {
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <ListSearchTitle>Search</ListSearchTitle>
            <ListSearchItem>
              <ListSearchLabel>Destination</ListSearchLabel>
              <ListSearchInput type="text"/>
            </ListSearchItem>
            <ListSearchItem>
              <ListSearchLabel>Check-in date</ListSearchLabel>
              <ListSearchInput type="text"/>
            </ListSearchItem>
            <ListSearchItem>
              <ListSearchLabel>Check-out date</ListSearchLabel>
              <ListSearchInput type="text"/>
            </ListSearchItem>
          </ListSearch>
          <ListResult>
          </ListResult>
        </ListWrapper>
      </ListContainer>
    </div>
  )
}

export default List