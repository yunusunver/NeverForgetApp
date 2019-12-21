import React, { Component } from 'react'
import {BrowserRouter , Router, Route} from "react-router-dom";
import Login from './app/components/Login'

export default class App extends Component {
    render() {
        return (
            <div>
            <Login/>
            </div>
        )
    }
}
