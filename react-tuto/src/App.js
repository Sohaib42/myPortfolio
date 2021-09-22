import React from 'react';
import ScrollButton from './components/ScrollButon';
import HeadNav from './components/HeadNav';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Achievment from './components/Achievment';
import Capabilities from './components/Capabilities';
import Posts from './components/Posts/Posts';
import './App.css';


function App() {
  return (
    <div className="App">
        <HeadNav/>
        <Profile/>
        <Posts />
        <Skills/>
        <Achievment/>
        <Capabilities/>
        <ScrollButton/>
    </div>
  );
}

export default App; 
