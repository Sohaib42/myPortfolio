import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import AddPosts from './components/Posts/AddPosts';

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/submiting-post" component={AddPosts}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
