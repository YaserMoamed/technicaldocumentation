import React from "react";
import { Route , Switch, Link } from "react-router-dom";
import Home from './Components/Home'
import Css from './Components/Css';
import Html from './Components/Html';
import Javascript from './Components/Javascript';
import Navbar from './Components/Navbar';
export default () => (
  <>
  <Navbar />
<Switch> 
  <Route exact path="/" comopnent={Home} />
  <Route exact path="/html" comopnent={Html} />
  <Route exact path="/css" comopnent={Css} />
  <Route exact path="/javascript" comopnent={Javascript} />
  </Switch>
  </>
);
