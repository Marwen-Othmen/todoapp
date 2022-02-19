import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
 
        <>

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">TO-DO-APP</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

</>
  
  )
}

export default Header