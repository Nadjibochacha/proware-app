import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Team from './pages/team';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/> 
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Team' element={<Team/> }/>
      </Routes>
    </div>
  );
}

export default App;
