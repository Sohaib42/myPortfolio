import {Container , Row , Col} from 'react-bootstrap';
import HeadNav from './components/HeadNav';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Achievment from './components/Achievment';
import Capabilities from './components/Capabilities';
import './App.css';

function App() {
  return (
    <div className="App">
        <HeadNav/>
        <Profile/>
        <Skills/>
        <Achievment/>
        <Capabilities/>
    </div>
  );
}

export default App;
