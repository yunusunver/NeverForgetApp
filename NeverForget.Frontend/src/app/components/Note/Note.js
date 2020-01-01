import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Note extends Component {
    render() {
        const user=JSON.parse(localStorage.getItem("loginUserApp"));

        return (
            user !=null?( <div>
                {user.username}
            </div>):(<Redirect path="/login" to="/login"/>)
           
        )
    }
}
