import React from 'react'
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';

function Header(props) {
  const user=JSON.parse(localStorage.getItem("loginUserApp"));
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Never Forget App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mx-auto">
            <FormControl type="text" placeholder="Kod başlığını giriniz..." className="mr-sm-2" />
            <Button variant="outline-success">Ara</Button>
          </Form>
          <Nav className="ml-auto">
     
            <Nav.Link href="/home">Anasayfa</Nav.Link>
            <NavDropdown title={user.username} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ayarlar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Çıkış</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header

