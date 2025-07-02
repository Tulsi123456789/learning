import './App.css';
import IE from './IE.png';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/AllCourses'); // Use correct route with leading slash
  };

  const goTo = () => {
    navigate('/Home'); // Use correct route with leading slash
  };

  const goToDash = () => {
    navigate('/Dashboard'); // Use correct route with leading slash
  };

  return (
    <div className="sidebar">
      <div className="title-section">
        <img src={IE} alt="logo" className="logo" />
        <h5 className="title">IE Network Solutions</h5>
        <p className="subtitle">Learning Management System</p>
        <hr />
        <div className="button-class">
          <button onClick={goTo} className="button">My Courses</button>
          <button onClick={goToContact} className="button">All Courses</button>
          <button onClick={goToDash} className="button">Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
