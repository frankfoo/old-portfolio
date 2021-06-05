import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';

import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <main className='container'>
          <ul className='navBar'>
            <h1 className='title'>FRANK FOO</h1>
            <div className='navBar-links'>
              <li className='navBar-li'>
                <Link to="/portfolio/" className='navLinks'>Home</Link>
              </li>
              <li className='navBar-li'>
                <Link to="/portfolio/about" className='navLinks'>About</Link>
              </li>
              <li className='navBar-li'>
                <Link to="/portfolio/projects" className='navLinks'>Projects</Link>
              </li>
              <li className='navBar-li'>
                <Link to="/portfolio/contact" className='navLinks'>Contact</Link>
              </li>
            </div>
          </ul>
          <Switch>
            <Route exact path="/portfolio/" component={Homepage} />
            <Route path="/portfolio/about" component={About} />
            <Route path="/portfolio/projects" component={Projects} />
            <Route path="/portfolio/contact" component={Contact} />
          </Switch>
      </main>
    </Router>
  );
}

export default App;
