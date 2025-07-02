import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
 import Login from './Login';
import Home from './Home';
import AllCourses from './AllCourses';
import Sidebar from './sideber';
import Dashboard from './Dashboard';
function App() {
  return (
    <div>
    <Router>
       <Routes>
        <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
        <Route path="/AllCourses" element={<AllCourses />} />
            <Route path='/Sidebar' element={<Sidebar/>} />
            <Route path='/Dashboard' element={<Dashboard/>}/>
 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
