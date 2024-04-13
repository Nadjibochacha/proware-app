import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Team from './pages/team';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/> 
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Team' element={<Team/> }/>
        <Route path='/Contact' element={<Contact/> }/>
      </Routes>
    </div>
  );
}

export default App;
