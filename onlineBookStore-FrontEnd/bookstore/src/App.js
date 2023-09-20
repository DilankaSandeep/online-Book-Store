import logo from './logo.svg';
import './App.css';
import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './pages/User';
import Fiction from './pages/Fiction';
import SchoolBook from './pages/School';
import Categories from './pages/Categories';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/User' element={<User/>}/>
          <Route path='/Fiction'element={<Fiction/>}/>
          <Route path='/SchoolBook'element={<SchoolBook/>}/>
          <Route path='/Categories'element={<Categories/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
