import React, { Component } from 'react'
import {Button,FormLabel,FormControl,Form,FormGroup, Spinner} from 'react-bootstrap';
import { connect } from 'react-redux'
import {getAllUserAction,loginUser} from '../actions/UserAction';
import './login.css';
import { Redirect } from 'react-router-dom';

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
    const user=JSON.parse(localStorage.getItem("loginUserApp"));
    if(user != null){
        <Redirect to="/home"/>
    }
   }
 
componentDidMount(){
    this.props.getAllUserAction(0,10,true);
}
    render() {
        const user=JSON.parse(localStorage.getItem("loginUserApp"));

        return (
            user==null?(
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
                    {this.props.user.loading == true?<Spinner animation="border"/>:(<Button type="submit" variant="outline-dark">Login</Button>)}
                     
                  </Form>
               </div>
            </div>
         </div>
         </div>):<Redirect to="/home"/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps, {getAllUserAction,loginUser})(Login)
