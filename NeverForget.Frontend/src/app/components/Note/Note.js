import React, { Component } from 'react'

export default class Note extends Component {
    render() {
        const user=JSON.parse(localStorage.getItem("loginUserApp"));

        return (
            <div>
                {user.username}
            </div>
        )
    }
}
