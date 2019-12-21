import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getAll} from '../actions/UserAction'
import UserReducer from '../reducers/UserReducer'

export class Login extends Component {
 
componentDidMount(){
    this.props.getAll(0,10,true);
}
    render() {
        return (
            <div>
                Login
                {
                    console.log(this.props)
                }
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
    getAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
