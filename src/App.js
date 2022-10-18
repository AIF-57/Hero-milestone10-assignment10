import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import LogIn from './Pages/Account/LogIn';
import Register from './Pages/Account/Register';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/CheckOut/RequireAuth';
import HomePage from './Pages/Home/HomePage/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Services from './Pages/Shared/Services/Services';

function App() {
  return (
    <div className="App max-w-[1280px] mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/services' element={<Services></Services>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='/about' element={<AboutMe></AboutMe>}/>
        <Route path='/account' element={<LogIn></LogIn>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
