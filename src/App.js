import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import { Component } from 'react';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '3ab76105a143470e8abf691c5dfa6709'
});

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('Click!');
    app.models.predict("3ab76105a143470e8abf691c5dfa6709", "https://upload.wikimedia.org/wikipedia/commons/4/41/SmallFaces1966.png").then(
      function(response) {
          console.log(response);
      },
      function(err){

      }
    );
  }

  render(){
    return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      {/*<FaceRecognition />} */}
    </div>
  );
  }
}



export default App;
