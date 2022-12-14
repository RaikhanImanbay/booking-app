import styled from "styled-components";

const NavBar = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`
const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.span`
  font-weight: 500;
`
const NavItems = styled.div`

`
const NavButton = styled.button`
  margin-left: 20px;
  border: 1px #003580;
  padding: 10px 20px;
  cursor: pointer;
  color: #003580;
  font-weight: 500px;
`


function Navbar() {
  return (
    <NavBar>
      <NavContainer>
        <Logo>arraybooking</Logo>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Sign in</NavButton>
        </NavItems>
      </NavContainer>
    </NavBar>
  )
}

export default Navbar