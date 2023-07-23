import logo from './logo.svg';
import './App.css';
import Nav from './Navigation_tab';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './Footer';
import Signup from './Signup';
import Add from './Add';
import Update from './Update';
import Product from './Product';
import Profile from './Profile';
import SearchBar from './Searchbar';
import Home from './Home';
import SampleProduct from './SampleProduct';
import Main from './Main';
import Navigation_tab from './Navigation_tab';

function All_nav() {
  return (
   <>
    <div className="app">
    
    
    <Router>
  
   <Routes>
   
    <Route path='/' exact element={<Nav/>}/>
    <Route path='/update' exact element={<Update/>}/>
    <Route path='/product' exact element={<Product/>}/>
    <Route path='/Profile' exact element={<Profile/>}/>
    <Route path='/add'  element={<Add/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/main' element={<Main/>}/>
       </Routes>
    </Router>
    
  
     
    
    
 </div>

 </>
  );
}

export default All_nav;

