import React from 'react';
import ScrollButton from './components/ScrollButon';
import HeadNav from './components/HeadNav';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Achievment from './components/Achievment';
import Capabilities from './components/Capabilities';
import Posts from './components/Posts';
import './App.css';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <HeadNav />
      <Profile />
      <Posts />
      <Skills />
      <Achievment />
      <Capabilities />
      <ScrollButton />
    </div>
  );
}

export default App;
