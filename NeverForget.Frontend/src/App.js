import React, { Component } from 'react'
import {BrowserRouter , Router, Route, Switch, Redirect} from "react-router-dom";
import Login from './app/components/Login'
import Home from './app/components/Home/Home';
import Note from './app/components/Note/Note';

export default class App extends Component {

    render() {
        return (
         
            <BrowserRouter>
               <Switch>
                <Route exact strict path="/login" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/note" component={Note}/>
                <Route exact path="/logout" component={()=>localStorage.removeItem("loginUserApp")} />
                </Switch>
            </BrowserRouter>
        )
    }
}