 import "./App.css";
import Sidebar from "./sideber"; // Make sure this file exists
import CountUp from "react-countup";
import React, { useEffect, useState } from "react";


function Dashboard() {
  const progressData = [
     { title: "React crash course", progress: 80 },
    { title: "NextJs crash course", progress: 50 },
    { title: "NextJs crash course", progress: 40 },
    { title: "NextJs crash course", progress: 10 },
  ];

  const [animatedProgress, setAnimatedProgress] = useState(
    progressData.map(() => 0)
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progressData.map(course => course.progress));
    }, 200); // delay to trigger CSS transition
    return () => clearTimeout(timeout);
  }, []);

  const recentlyAccessed = {
        today: ["React crash course"],
    yesterday: ["a very long course name"],
    older: ["React crash course", "React crash course", "React crash course"],


  };
  return (
    <>
      <div className="section">
        <Sidebar />
        <div className="main-content">
          <h1>Dashboard</h1>
          <hr />

          <div className="dashboard">
      <div className="stats">
        <div>
          <h2><CountUp end={2} duration={1.5} /></h2>
          <p>Courses in progress</p>
        </div>
        <div>
          <h2><CountUp end={5} duration={1.5} /></h2>
          <p>Finished Courses</p>
        </div>
        <div>
          <h2><CountUp end={5} duration={1.5} /></h2>
          <p>Earned badges</p>
        </div>
      </div>
    

            <div className="progress-section">
      <h4>Progress chart</h4>
      {progressData.map((course, index) => (
        <div key={index} className="progress-bar-wrapper">
          <span className="course-title">{course.title}</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${animatedProgress[index]}%` }}
            ></div>
            <span className="progress-label">{course.progress}%</span>
          </div>
        </div>
      ))}

      <div className="recent-section">
        <h4>Recently accessed</h4>
        {Object.entries(recentlyAccessed).map(([period, courses]) => (
          <div key={period}>
            <p className="access-time">
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </p>
            <ul>
              {courses.map((course, index) => (
                <li key={index}>• {course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
