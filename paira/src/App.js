import React from 'react';
import './App.css';
import homePage from './components/homepage/homePage';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={homePage} />
        </Switch>
        </BrowserRouter>
      </div>
    </div>
    );
}

export default App;
