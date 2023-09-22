import logo from './logo.svg';
import './App.css';
import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './pages/User';
import Categories from './pages/Categories';
import Books from './pages/Book';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/User' element={<User/>}/>
          <Route path='/Business'element={<Books value={1}/>}/>
          <Route path='/Fiction'element={<Books value={2}/>}/>
          <Route path='/SchoolBook'element={<Books value={3}/>}/>
          <Route path='/ChildernsBook'element={<Books value={4}/>}/>
          <Route path='/Science&Tecnology'element={<Books value={5}/>}/>
          <Route path='/Religous&Spiritiality'element={<Books value={6}/>}/>
          <Route path='/CookBook'element={<Books value={7}/>}/>
          <Route path='/Health&Fitness'element={<Books value={8}/>}/>
          <Route path='/Arts'element={<Books value={9}/>}/>
          <Route path='/Novels'element={<Books value={10}/>}/>
          <Route path='/Categories'element={<Categories/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
