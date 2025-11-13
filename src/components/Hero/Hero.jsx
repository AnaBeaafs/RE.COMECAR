import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className="container position-relative text-center" style={{ zIndex: 2 }}>
        <div className={styles.badge}>
          <Sparkles size={16} />
          Portal de Reinvenção 40+
        </div>
        <h1 className={styles.title}>
          O Futuro do Trabalho <br />
          <span className={styles.highlight}>é para Todos</span>
        </h1>
        <p className={styles.subtitle}>
          Descubra ferramentas simples, cursos gratuitos e uma comunidade que entende você. 
          <strong> Recomeçar nunca foi tão fácil.</strong>
        </p>
        <button className={styles.cta}>
          Comece sua jornada digital
        </button>
      </div>
    </header>
  );
}