import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Footer from "./components/Footer/Footer";
import ImageUploader from "./components/ImageUploader/ImageUploader";
//import Axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
      return (
          <div className="App">
              <TopNav/>
              <ImageUploader/>
              <Footer/>
          </div>
      );
  }
}

export default App;
