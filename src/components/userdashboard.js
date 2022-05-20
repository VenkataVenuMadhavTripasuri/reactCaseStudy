import React from 'react';
import{Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';


export default class UserDashboard extends React.Component {
    constructor(){
        super();
       
    }
    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to href="/login">Login</Nav.Link>

                    <Nav.Link href="/register">Signup</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        );
    }
}
