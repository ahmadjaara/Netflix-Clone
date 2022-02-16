import {Nav,Navbar,Container} from "react-bootstrap";
function Navbartop() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Netflip</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Favlist">Favarite list</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbartop;
