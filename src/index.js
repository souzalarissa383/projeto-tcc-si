import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Home/Index'
import Login from './components/Login'
import Empresa from './components/Empresas'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/empresa" component={Empresa} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


