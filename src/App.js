import React, { Component } from 'react';
import DrawLogo from './DrawLogo';
import Form from './Form.jsx';
import './App.css';

export default class App extends Component {

 constructor() {
    super();

    this.state = {
      color: 'rgba(0,0,0,1)',
      url: "http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg",
      holderUrl: "",
      canvasContent: [],
      imgData: {},
      clear: false,
    };
  }


updateUrl(e) {
    this.setState({
      holderUrl: e.target.value,
    });
  }


searchUrl() {
      this.setState({
        url: this.state.holderUrl,
      });
    }


  render() {
    return (
      <div className="App">
         <div className="Header">
         <DrawLogo/>
          <div className="App-nav">
             <button className="button" type="button">Sign Up</button>
            <button className="button" type="button">Log In</button>
           </div>
          </div>
         <div className="Drawing-pad">
          <Form
           updateUrl={(e) => this.updateUrl(e)}
           searchUrl={this.searchUrl.bind(this)}
           holderUrl={this.state.holderUrl}
          />
         </div>

      </div>
    );
  }
}


