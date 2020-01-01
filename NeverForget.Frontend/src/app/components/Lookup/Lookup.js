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
                   {console.log()}
            <ul className="sidebar-nav">
            
            {this.props.lookup.data.length !=0?this.props.lookup.data.data.results.map((item)=>{
                return(
                    <li key={item.id}>
                        <a href="/">{item.name}</a>
                    </li>
                )
               }):""}
             
               
           
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
