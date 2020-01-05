import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNoteList extends Component {
constructor(props){
    super(props);
}
  
    
    render() {
        return (
            <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
             
            </tbody>
          </table>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps)(TableNoteList)
