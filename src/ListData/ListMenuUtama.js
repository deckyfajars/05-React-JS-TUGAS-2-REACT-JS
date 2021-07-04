import React, { Component } from "react";

class ListMenuUtama extends Component {
  render (){
    return (
        <div>
          <h1> <center> Selamat Datang Di Warung Nusantara </center> </h1>
        <center>
          <img src={this.props.name} alt="Masakan Nusantara" width="600px" />
        </center>
        </div>
    );
  }
}

export default ListMenuUtama;
