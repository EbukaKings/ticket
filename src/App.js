import logo from './logo.svg';
import './App.css';
import Selection from './selection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attendee from './attendee';
import Ready from './readyticket';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Selection/>}></Route>
    <Route path='/attendee' element={<Attendee/>}></Route>
    <Route path='/readyticket' element={<Ready/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
