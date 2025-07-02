import './App.css';
import Sidebar from './sideber';
import React, { useState } from "react";
 import { Form } from "react-bootstrap";


// Dummy filter function
function filterCourses(courses, search, status) {
  return courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      status === "All" ||
      (status === "In progress" && course.progress < 100) ||
      (status === "Done" && course.progress === 100);
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
        <div className="progress-fill" style={{ width: `${course.progress}%` }} />
        <span className="progress-label">{course.progress}%</span>
      </div>
    </div>
  );
}

function AllCourses() {
  const [searchValue, setSearchValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const courses = [
    {
      title: "SaaS NHT",
      category: "SaaS",
      duration: "1 week",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      progress: 80
    },
     
    {
      title: "SaaS Pro",
      category: "SaaS",
      duration: "1 week",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      progress: 40
    }
  ];

  const filteredCourses = filterCourses(courses, searchValue, statusFilter);

  return (
    <div className='section'>
      <Sidebar />
      <div className="main-content">
        <h1>All Courses</h1>
        <hr />
 
     
        <div className="accordion" id="accordionExample1">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne1">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                Technical Support
              </button>
            </h2>
            <div id="collapseOne1" className="accordion-collapse  " aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
              <div className="accordion-body">
            <div className="course-scroll-wrapper">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))
                  ) : (
                    <p>No courses found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                TechFin
              </button>
            </h2>
            <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo1" data-bs-parent="#accordionExample1">
              <div className="accordion-body">
<div className="course-scroll-wrapper">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))
                  ) : (
                    <p>No courses found.</p>
                  )}
                </div>              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                SaaS
              </button>
            </h2>
            <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#accordionExample1">
              <div className="accordion-body">
    <div className="course-scroll-wrapper">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))
                  ) : (
                    <p>No courses found.</p>
                  )}
                </div>
                              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                Legal
              </button>
            </h2>
            <div id="collapseFour1" className="accordion-collapse collapse" aria-labelledby="headingFour1" data-bs-parent="#accordionExample1">
              <div className="accordion-body">
<div className="course-scroll-wrapper">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))
                  ) : (
                    <p>No courses found.</p>
                  )}
                </div>              </div>
            </div>
          </div>

        </div>
      </div>
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
                  type="Checkbox"
                  label="All"
                  name="status"
                  checked={statusFilter === "All"}
                  onChange={() => setStatusFilter("All")}
                />
                <Form.Check
                  type="checkbox"
                  label="In progress"
                  name="status"
                  checked={statusFilter === "In progress"}
                  onChange={() => setStatusFilter("In progress")}
                />
                <Form.Check
                  type="checkbox"
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
              </aside>
    </div>
  );
}

export default AllCourses;
