import React from 'react'
import './Menu.css'

import {connect} from 'react-redux'

var mapStateToProps = (state)=>{
   return { carts : state }
}

class Menu extends React.Component
{
  render(){
    return <div className='Menu'>
        <h4>Cart Item : {this.props.carts.length} &nbsp;&nbsp;</h4>    
    </div>
  }
}

export default connect(mapStateToProps)(Menu)