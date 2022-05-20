import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default class Register extends React.Component{
  constructor(){
    super();
    this.state={
      firstname:'',
      lastname:'',
      password:'',
      email:'',
      confirmpassword:'',
      checked:false
    }
    this.handlechange=this.handlechange.bind(this);
    this.handleClick=this.handleClick.bind(this);

     this.handlecheckbox=this.handlecheckbox.bind(this);
  }
  handlechange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  
}
handlecheckbox(){
  this.setState({checked:!this.state.checked});
}
handleClick(e){
  e.preventDefault();
  const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(this.state.email=='' || regex.test(this.state.email) === false){
    alert('please enter valid email')
  }
  const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

  if(this.state.password=='' || mediumRegex.test(this.state.password)===false){
    alert('please enter valid  password')
  }
  if(this.state.confirmpassword=='' || this.state.confirmpassword != this.state.password){
    alert('password and confirm password should be same')
  }
  if(this.state.firstname=='' || this.state.lastname==''){
    alert('enter firstname and last name')
  }
  if(this.state.checked===false){
    alert('click on terms and conditons')
  }
}
  render(){
        return(
                  <>
          
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" noValidate  sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstname"
                        required
                        fullWidth
                        id="firstName"
                        label="First Namee"
                        autoFocus
                        value={this.state.firstname}
                        onChange={this.handlechange}

                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastname"
                        autoComplete="family-name"
                        value={this.state.lastname}
                        onChange={this.handlechange}


                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.handlechange}

                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={this.state.password}
                        onChange={this.handlechange}

                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="confirmpassword"
                        label="ConfirmPassword"
                        type="password"
                        id="confirmpassword"
                        autoComplete="new-password"
                        value={this.state.confirmpassword}
                        onChange={this.handlechange}

                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Agree to terms and conditions."
                        value={this.state.checked}
                        onClick={this.handlecheckbox}

                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={this.handleClick}

                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>

                </>
              );
  }
    
}





