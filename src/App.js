import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Pages/Account/LogIn';
import Register from './Pages/Account/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import HomePage from './Pages/Home/HomePage/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/account' element={<LogIn></LogIn>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/checkout' element={<CheckOut></CheckOut>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
        </Routes>
    </div>
  );
}

export default App;
