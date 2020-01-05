import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAll} from '../../actions/LookupAction';
import {getAllNotes} from '../../actions/NoteAction';

class DropdownLookup extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.getAll(0,10,true);
    }

    handleChange(event){
        this.props.getAllNotes(0,10,true,"c#")
    }

    render() {
        return (
            <select className="form-control form-control-lg" onChange={this.handleChange}>
            {
                this.props.lookup.data.length != 0 ?this.props.lookup.data.data.results.map(item=>{
                    return(
                    <option key={item.id} value={item.id}>{item.name}</option>
                    )
                }):""
            }
         
          </select>
        )
    }
}

const mapStateToProps = state => {
    return state
};


export default connect(mapStateToProps, {getAll,getAllNotes})(DropdownLookup)
