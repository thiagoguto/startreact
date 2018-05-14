import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="uk-offcanvas-content">
        <Header />
        <section className="uk-section uk-padding">
        <p className="App-intro">
        <span uk-icon="icon: check"></span>
          To get started, edit <code>src/App.js</code> <a href="/">testando </a> and save to reload.
        </p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
