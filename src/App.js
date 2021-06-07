import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Savez from "./pages/SavezPage";
import Contact from "./pages/ContactPage";
import ScrollToTop from "./ScrollToTop";
import Error from "./pages/ErrorPage";
import Projects from "./pages/ProjectsPage";
import SingleProject from "./components/Projects/SingleProject";
import News from "./pages/NewsPage";
import SingleNews from "./components/News/SingleNews";

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
        <Route path="/projekti" exact component={Projects} />
        <Route path="/porjekat/:title" component={SingleProject} />
        <Route path="/vesti" component={News} />
        <Route path="/vest/:title" component={SingleNews} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
