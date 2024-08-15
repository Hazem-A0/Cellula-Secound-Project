
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Prediction from './components/Prediction/Prediction'; 
import './App.css';

function App() {
  return (
    <div className="App">
     <Router> {/* Wrap your entire app in a Router */}
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path='/Prediction' element={<Prediction/>} />  
          </Routes>
        </div>
      </div>
    </Router>
        
    </div>
  );
}

export default App;
