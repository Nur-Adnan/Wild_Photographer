import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Blogs from './components/Pages/Blogs/Blogs';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import Footer from './components/Pages/Footer/Footer';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import Register from './components/Pages/Register/Register';
import Services from './components/Pages/Services/Services';
import RequireAuth from './Firebase/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/"element={<Home></Home>}></Route>
        <Route path="/home"element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkOut" element={<RequireAuth>
        <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
