import React from 'react';
import GlobalStyle from './GlobalStyle';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUsPage';
import Savez from './pages/SavezPage';
import Contact from './pages/ContactPage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import Error from './pages/ErrorPage';
import Projects from './pages/ProjectsPage';
import SingleProject from './components/SingleProject/SingleProject';
import News from './pages/NewsPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/onama" component={AboutUs} />
        <Route path="/savez" component={Savez} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/projekti" component={Projects} />
        <Route path="/porjekat/:id" component={SingleProject} />
        <Route path="/vesti" component={News} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
