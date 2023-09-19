import logo from './logo.svg';
import './App.css';
import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './pages/User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/User' element={<User/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
