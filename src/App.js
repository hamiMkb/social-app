import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';

export default function App() {
   return (
          
          <Router>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>

              </Routes>
          </Router>
          
);}
 



