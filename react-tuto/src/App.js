import ScrollButton from './components/ScrollButon';
import HeadNav from './components/HeadNav';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Achievment from './components/Achievment';
import Capabilities from './components/Capabilities';
import HighOrderTest from './components/HighOrder';
import './App.css';


function App() {
  return (
    <div className="App">
        <HeadNav/>
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
