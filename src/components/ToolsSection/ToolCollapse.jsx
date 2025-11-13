import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ToolsSection.module.css';

export default function ToolCollapse({ title, icon: Icon, children, color }) {
  const [isOpen, setIsOpen] = useState(false);
  const colors = { turquoise: '#30c0adff', blue: '#081099', purple: '#491892ff' };

  return (
    <div className={styles.collapse} style={{ borderColor: colors[color] }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.header}
        style={{ backgroundColor: colors[color], color: ['blue', 'purple', 'turquoise'].includes(color) ? 'white' : '#081099' }}
        aria-expanded={isOpen}
      >
        <div className="d-flex align-items-center gap-3">
          <Icon size={24} />
          <span className="fw-bold fs-5">{title}</span>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}