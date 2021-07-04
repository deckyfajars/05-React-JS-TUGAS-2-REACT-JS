import React, { Component } from "react";

class MenuKontak extends Component {
  constructor(props){
    super(props);
    this.state ={
      alm : "Jl. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur 13680"
    };
    this.state ={
      kontak : "081311212654"
    };
  }
  render(){
    return(
      <div>
        <center>
        <h3>{this.state.alm}</h3>
        <h4>Kontak Kami : {this.state.kontak}</h4>
        </center>
      </div>
    );
  }
}

export default MenuKontak;
