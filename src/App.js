import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer/>
         <Navbar/>
         <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/error' element={<Error/>}/>
            <Route path='*' element={<Navigate to='/error'/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
