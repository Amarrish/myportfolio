import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './components.css';


function BasicExample() {
  return (
    <>
    <Navbar  expand="lg" className="navbars">
      <Container>
        <Navbar.Brand href="#home"><h1 className='text-warning bold'>PORTFOLIO</h1></Navbar.Brand>
        {/* Add a class to the Navbar.Toggle component */}
        <Navbar.Toggle className="custom-toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='list-elements text-white ' href="#home">Home</Nav.Link>
            <Nav.Link className='list-elements text-white ' href="#skill">Skill</Nav.Link>
            <Nav.Link className='list-elements text-white ' href="#resume">Resume</Nav.Link>
            <Nav.Link className='list-elements text-white ' href="#project">Projects</Nav.Link>
            <Nav.Link className='list-elements text-white ' href="#contact">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </>
  );
}

export default BasicExample;





{/* <Nav.Link className='list-elements text-white bold' href="#action1">Home</Nav.Link>
              <Nav.Link className='list-elements text-white bold' href="#action2">Skill</Nav.Link>
              <Nav.Link className='list-elements text-white bold' href="#action2">Resume</Nav.Link>
              <Nav.Link className='list-elements text-white bold' href="#action2">Project</Nav.Link>
              <Nav.Link className='list-elements text-white bold' href="#action2">Contacts</Nav.Link>
             */}
