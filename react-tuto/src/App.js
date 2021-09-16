import React from 'react';
import ScrollButton from './components/ScrollButon';
import HeadNav from './components/HeadNav';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Achievment from './components/Achievment';
import Capabilities from './components/Capabilities';
import HighOrderTest from './components/HighOrder';
import './App.css';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
        <HeadNav/>
        <p>{!data ? "Loading..." : data}</p>
        <Profile/>
        <Skills/>
        <Achievment/>
        <Capabilities/>
        <ScrollButton/>
        <HighOrderTest/>
    </div>
  );
}

export default App; 
