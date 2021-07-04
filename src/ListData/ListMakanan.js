import React, { Component } from "react";

class ListMakanan extends Component {
  constructor(props){
    super(props);
    this.state ={
      datalist : this.props.datalist
    };
  }
  render(){
    return(
      <div>
        <img src={this.props.name} alt = "Produk Makanan" width="100" />
      </div>
    );
  }
}

export default ListMakanan;
