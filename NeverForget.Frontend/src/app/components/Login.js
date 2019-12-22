import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getAllUserAction} from '../actions/UserAction';
import './login.css';

export class Login extends Component {

    // state={
    //     username:'',
    //     password:''
    // }
 
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
                  <form>
                     <div className="form-group">
                        <label>User Name</label>
                        <input type="text" class="form-control" placeholder="User Name"/>
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"/>
                     </div>
                     <button type="submit" class="btn btn-black">Login</button>
                     <button type="submit" class="btn btn-secondary">Register</button>
                  </form>
               </div>
            </div>
         </div>
         </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        user:state.user
    }
)

const mapDispatchToProps = {
    getAllUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
