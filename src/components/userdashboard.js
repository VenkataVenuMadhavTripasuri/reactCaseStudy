import React from 'react';
import{Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import EditProfile from './editprofile';
import MyProfile from './myprofile';

export default class UserDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={enableEdit:false}
       this.enableEditComponent=this.enableEditComponent.bind(this);

    }
    enableEditComponent(){
        this.setState({enableEdit:!this.state.enableEdit})
    }
    
   
    render(){
        if(this.state.enableEdit==true){
            return(
                <>
                <button onClick={this.enableEditComponent}>View Profile</button>
                <MyProfile/>
                </>
            );
        }
        else{
            return(
                <>
                <button onClick={this.enableEditComponent}>Edit Profile</button>
                <EditProfile/>
                </>
            );

        }
        }
    }
        // if(this.props.isLoggedIn=="false"){
        //     return(
        //         <>
        //         <p>Have you logedin</p>
        //        </>
        //     );
        // }
        // if(this.props.isLoggedIn=="true"){
        //     return (
        //         <Navbar bg="dark" variant="dark">
        //             <Container>
        //             <Navbar.Brand href="#home">Home</Navbar.Brand>
        //             <Nav className="me-auto">
        //                 <Nav.Link to href="/login">Login</Nav.Link>

        //                 <Nav.Link href="/register">Signup</Nav.Link>
        //             </Nav>
        //             </Container>
        //         </Navbar>
        //     );
        // }
    
