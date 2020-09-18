import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Fixtures from './components/Fixtures'
import Footer from "./components/Footer/Footer";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
      return (
          <Router>
              <div className="App">
                  <TopNav/>
                  <Route exact path='/' component = {ImageUploader} />
                  <Route path='/fixtures' component = {Fixtures} />
                  {/*<ImageUploader/>*/}
                  <Footer/>
              </div>
          </Router>
      );
  }
}

export default App;
