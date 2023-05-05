import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Footer from './Components/Footer/Footer';
import Navbar from './Components/navabar/Nav';
import SignupForm from './Components/SignUp/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from "./Components/addProduct/AddProduct"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
       <Route path='/' exact element={<div>
        <h1>Products</h1>
       </div>}/>
      <Route element={<PrivateComponent/>} >
       <Route path='/add-product'  element={<AddProduct/>} />
       <Route path='/update-product'  element={<div>
        <h1>Update Products</h1>
       </div>} />
       <Route path='/delete-product' element={<div>
        <h1>Delete Products</h1>
       </div>} />
       <Route path='/profile' element={<div>
        <h1>Profile</h1>
       </div>} />
       </Route>
       <Route path='/signup' exact element={<SignupForm/>} />
       <Route path='/login' exact element={<Login/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
