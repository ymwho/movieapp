import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './route/About';
import Home from './route/Home';
import Detail from './route/Detail';
import Navigation from './component/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/movie-detail' component={Detail} />
    </HashRouter>
  );
}

export default App;
