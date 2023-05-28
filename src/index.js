import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Home/Index';
import Login from './Pages/Login';
import Empresa from './Pages/Empresas';
import 'bootstrap/dist/css/bootstrap.min.css';

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


