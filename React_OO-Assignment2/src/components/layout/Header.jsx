// The top of the page header 

import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import Search from '../../Search.jsx';
import SearchButton from './searchButton.jsx';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav>
              <Search className="headerItem"/>
              <SearchButton className="headerItem"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;