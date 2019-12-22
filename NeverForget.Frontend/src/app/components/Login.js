import React, { Component } from 'react'
import {Button,FormLabel,FormControl,Form,FormGroup} from 'react-bootstrap';
import { connect } from 'react-redux'
import {getAllUserAction,loginUser} from '../actions/UserAction';
import './login.css';

export class Login extends Component {

   constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        loggedIn:false
    }
    this.onChange=this.onChange.bind(this);
    this.submitForm=this.submitForm.bind(this);
   }

   onChange(e){
       this.setState({
           [e.target.name]:e.target.value
       })
   }

 submitForm(e){
    e.preventDefault();
    const {username,password} = this.state;
    this.props.loginUser(username,password);
  
   }
 
componentDidMount(){
    this.props.getAllUserAction(0,10,true);
}
    render() {
        return (
            <div>
        <div className="sidenav">
            <div className="login-main-text">
               <h2>Never Forget Login</h2>
               <p>Login or register from here to access.</p>
            </div>
         </div>
        
         <div className="main">
            <div className="col-md-6 col-sm-12">
               <div className="login-form">
                  <Form onSubmit={this.submitForm}>
                     <FormGroup>
                        <FormLabel>User Name</FormLabel>
                        <FormControl 
                            type="text" 
                            placeholder="User Name" 
                            name="username" 
                            value={this.state.username}
                            onChange={this.onChange}/>
                     </FormGroup>

                     <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.onChange}/>
                     </FormGroup>

                     <Button type="submit" variant="outline-dark">Login</Button>
                     <Button  variant="outline-secondary">Register</Button>
                  </Form>
               </div>
            </div>
         </div>
         </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps, {getAllUserAction,loginUser})(Login)
