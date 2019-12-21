import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import { applyMiddleware } from "redux"

//Reducers
import UserReducer from './app/reducers/UserReducer';
import LookupReducer from './app/reducers/LookupReducer';
import NoteReducer from './app/reducers/NoteReducer';

const reducer = combineReducers({
  user:UserReducer,
  lookup:LookupReducer,
  note:NoteReducer
});



const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"))