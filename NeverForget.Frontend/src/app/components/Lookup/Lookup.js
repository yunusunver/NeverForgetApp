import React, { Component } from 'react'
import "./Lookup.css";
import {Spinner} from 'react-bootstrap';
import { connect } from 'react-redux';
import {getAll} from '../../actions/LookupAction'
 class Lookup extends Component {
     constructor(props){
         super(props);
         this.state={
             data:[]
         }
     }

    componentDidMount(){
         this.props.getAll(0,10,true);
         Promise.all([
             getAll(0,10,true)
         ])
    }

    // componentDidUpdate(){
    //     if (this.state.data != this.props.lookup.data.data &&  this.props.lookup.data.data!=undefined) {
    //         this.setState({
    //             data:this.props.lookup.data.data
    //         })
    //         this.props.getAll(0,10,true);
    //         console.log(this.state.data)
    //     }
       
    // }

    render() {
        return (
            <div id="wrapper">
                   <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
            {this.props.lookup.loading == true?(<Spinner animation="border"/>):( 
               
               this.props.lookup.data.data!=null?this.props.lookup.data.data.results.map((item)=>{
                    <li>
                        {console.log(item.name)}
                    </li>
               }):<Spinner animation="border"/>
                )}
               
             
            </ul>
        </div>
  
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return state;
}

export default connect(mapStateToProps,{getAll })(Lookup);
