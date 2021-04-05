// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Portafolio Web',
      headerLinks: [
        { title: 'Inicio', path: '/' },
        { title: 'Acerca de', path: '/acerca' },
        { title: 'Contacto', path: '/contacto' }
      ],
      inicio: {
        title: 'Superacion',
        subTitle: 'Proyectos que marcan la diferencia',
        text: 'revisa mis proyectos'
      },
      acerca: {
        title: 'Acerca de mi'
      },
      contacto: {
        title: 'Enviar mensaje'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Portafolio Web</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Inicio</Link>
                <Link className="nav-link" to="/acerca">Acerca</Link>
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}
          
          {/* <Footer /> */}

        </Container>
      </Router>
    );
  }
}

export default App;
