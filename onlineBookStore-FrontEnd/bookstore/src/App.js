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
import BooksbySubCategory from './pages/BooksbySubCategory';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/User' element={<User/>}/>
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Cart' element={<Cart/>}/>
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
          <Route path='/Fiction/ScienceFic' element={<BooksbySubCategory value={4}/>}/>
          <Route path='/Fiction/NonScienceFic' element={<BooksbySubCategory value={5}/>}/>
          <Route path='/School/primary' element={<BooksbySubCategory value={6}/>}/>
          <Route path='/School/OL' element={<BooksbySubCategory value={7}/>}/>
          <Route path='/School/AL' element={<BooksbySubCategory value={8}/>}/>
          <Route path='/ChildernsBook/Picture' element={<BooksbySubCategory value={9}/>}/>
          <Route path='/ChildernsBook/EarlyReaders' element={<BooksbySubCategory value={10}/>}/>
          <Route path='/ChildernsBook/MiddleGrade' element={<BooksbySubCategory value={11}/>}/>
          <Route path='/Science&Tec/Science' element={<BooksbySubCategory value={12}/>}/>
          <Route path='/Science&Tec/Tecnology' element={<BooksbySubCategory value={13}/>}/>
          <Route path='/R&S/R' element={<BooksbySubCategory value={14}/>}/>
          <Route path='/R&S/S' element={<BooksbySubCategory value={15}/>}/>
          <Route path='/H&F/H' element={<BooksbySubCategory value={18}/>}/>
          <Route path='/H&F/F' element={<BooksbySubCategory value={19}/>}/>
          <Route path='/C&F/C' element={<BooksbySubCategory value={16}/>}/>
          <Route path='/C&F/F' element={<BooksbySubCategory value={17}/>}/>
          <Route path='/Art/G' element={<BooksbySubCategory value={20}/>}/>
          <Route path='/Art/P' element={<BooksbySubCategory value={21}/>}/>
          <Route path='/Novel/AT' element={<BooksbySubCategory value={22}/>}/>
          <Route path='/Novel/H' element={<BooksbySubCategory value={23}/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
