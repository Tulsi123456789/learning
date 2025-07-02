import React, { useState } from "react";
 import { Form } from "react-bootstrap";
import "./App.css";
import Sidebar from "./sideber";

// Sample filter function
function filterCourses(courses, search, statusFilter) {
  return courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "In progress" && course.progress < 100) ||
      (statusFilter === "Done" && course.progress === 100);
    return matchesSearch && matchesStatus;
  });
}

// Course card component
function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-content">
        <h5>{course.title}</h5>
        <div className="badges">
          <span className="badge category">{course.category}</span>
          <span className="badge duration">{course.duration}</span>
        </div>
        <p>{course.desc}</p>
      </div>
      <div className="progress-bar">
        <div className="progress-fill"  style={{ width: `${course.progress}%` }}/>
        <span className="progress-label">{course.progress}%</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const courses = [
    { title: "SaaS NHT", category: "SaaS", duration: "1 week",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor ", progress: 80 },
    { title: "DevOps Basics", category: "DevOps", duration: "2 weeks",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor ", progress: 60 },
    { title: "Cloud Intro", category: "Cloud", duration: "3 days",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor ", progress: 100 },
    { title: "SaaS Pro", category: "SaaS", duration: "1 week",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt consectetur adipiscing elit, sed do eiusmod tempor ", progress: 40 }
    
  ];

  const filteredCourses = filterCourses(courses, searchValue, statusFilter);
    const filteredCourses2 = filterCourses(courses, searchValue, statusFilter);


  return (
    <div className="section">
       <Sidebar/>
      {/* Main content */}
      <div className="main-content">
        <h1>My Courses</h1>
        <hr/>
        <div className="course-scroll-wrapper">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : (
            <p>No courses found.</p>
          )}
          {filteredCourses2.length > 0 ? (
            filteredCourses2.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>

      {/* Filter panel (aside) */}
      <aside className="filter-panel p-3">
        <Form.Control
          type="text"
          placeholder="Search by course title"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="mb-3 search-input"
        />
        <Form.Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="mb-3"
        >
          <option value="All">All Courses</option>
          <option value="In progress">In Progress</option>
          <option value="Done">Completed</option>
        </Form.Select>

        <div className="filter-section">
          <strong>Filter</strong>
          <Form.Check
            type="radio"
            label="All"
            name="status"
            checked={statusFilter === "All"}
            onChange={() => setStatusFilter("All")}
          />
          <Form.Check
            type="radio"
            label="In progress"
            name="status"
            checked={statusFilter === "In progress"}
            onChange={() => setStatusFilter("In progress")}
          />
          <Form.Check
            type="radio"
            label="Done"
            name="status"
            checked={statusFilter === "Done"}
            onChange={() => setStatusFilter("Done")}
          />
        </div>

        <div className="sort-section mt-3">
          <strong>Sort by:</strong>
          <Form.Select className="mt-1">
            <option>Course title</option>
            <option>Last accessed</option>
          </Form.Select>
        </div>

        <div className="announcement-section mt-4">
          <strong>Announcements</strong>
          <div className="announcement-item mt-2">
            <p>The system will be offline<br />tomorrow from 08:00–09:00 for maintenance</p>
            <span className="dot" />
          </div>
          <div className="announcement-item mt-2">
            <p>The system will be offline<br />tomorrow from 08:00–09:00 for maintenance</p>
            <span className="dot" />
          </div>
        </div>
      </aside>
    </div>
  );
}
