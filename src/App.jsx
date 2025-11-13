import React from 'react';
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';
import RecomecarSection from './components/RecomecarSection/RecomecarSection';
import ToolsSection from './components/ToolsSection/ToolsSection';
import CoursesSection from './components/CoursesSection/CoursesSection';
import Testimonials from './components/Testimonials/Testimonials';
import FinalCTA from './components/FinalCTA/FinalCTA';
import CourseModal from './components/CoursesSection/CourseModal';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setShowContact(true)} />
      
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <ChallengeSection />
        <RecomecarSection />  {/* NOVA SEÇÃO */}
        <ToolsSection />
        <CoursesSection onCourseClick={setSelectedCourse} />
        <Testimonials />
        <FinalCTA />
      </main>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      {showContact && (
        <ContactForm onClose={() => setShowContact(false)} />
      )}
    </>
  );
}

export default App;