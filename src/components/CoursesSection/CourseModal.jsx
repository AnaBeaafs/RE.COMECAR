import React from 'react';
import styles from './CoursesSection.module.css';

export default function CourseModal({ course, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Fechar">×</button>
        <div className="fs-1 mb-4">{course.thumbnail}</div>
        <h3 className="fs-3 fw-bold mb-2">{course.title}</h3>
        <p className="text-muted mb-4">{course.platform} • {course.duration}</p>
        <p className="fs-5 mb-4">{course.description}</p>
        <div className="d-flex gap-3">
          <a href={course.link} target="_blank" className={styles.cta}>Começar o Curso</a>
          <button onClick={onClose} className={styles.secondary}>Fechar</button>
        </div>
      </div>
    </div>
  );
}