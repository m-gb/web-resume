import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/navbar.jsx';
import Introduction from './introduction/introduction.jsx';
import Projects from './projects/projects.jsx';
import Skills from './skills/skills.jsx';
import Contact from './contact/contact.jsx';
import Footer from './footer/footer.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <NavBar />
        <main className="container">
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
