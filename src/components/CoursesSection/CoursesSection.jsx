import React from 'react';
import { courses } from '../../data/courses';
import CourseModal from './CourseModal';
import styles from './CoursesSection.module.css';

export default function CoursesSection({ onCourseClick }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Cursos e Tutoriais Gratuitos</h2>
        <p className={styles.subtitle}>O que você precisa aprender? Clique nos cards e descubra cursos de acordo com sua necessidade.</p>

        <div className="row g-4 mt-4">
          {courses.map(course => (
            <div key={course.id} className="col-md-6 col-lg-3">
              <button
                onClick={() => onCourseClick(course)}
                className={styles.card}
                aria-label={`Ver curso ${course.title}`}
              >
                <div className="fs-1 mb-3">{course.thumbnail}</div>
                <h3 className="h5 fw-bold mb-2">{course.title}</h3>
                <p className="small text-muted mb-2">{course.platform}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className={`${styles.badge} ${
                    course.level === 'Iniciante' ? styles.beginner :
                    course.level === 'Intermediário' ? styles.intermediate : styles.advanced
                  }`}>
                    {course.level}
                  </span>
                  <span className="small text-muted">{course.duration}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}