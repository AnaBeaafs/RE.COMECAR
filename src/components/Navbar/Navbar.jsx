import React from 'react';
import { Mail, RefreshCw, Type } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ onContactClick }) {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <header className={styles.navbar}>
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center gap-2">
          <div className={styles.logoCircle}>
            <RefreshCw size={20} className={styles.refreshIcon} />
          </div>
          <span className={styles.logoText}>RE.COMEÇAR</span>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button
            onClick={() => setFontSize(fontSize === 16 ? 20 : 16)}
            className={styles.fontBtn}
            aria-label="Aumentar/diminuir fonte"
          >
            <Type size={20} />
            <span className="d-none d-md-inline ms-1">
              {fontSize === 16 ? 'Aumentar' : 'Diminuir'}
            </span>
          </button>

          <button
            onClick={onContactClick}
            className={styles.contactBtn}
            aria-label="Abrir formulário"
          >
            <Mail size={20} />
            <span className="d-none d-md-inline ms-2">Fale Conosco</span>
          </button>
        </div>
      </div>
    </header>
  );
}