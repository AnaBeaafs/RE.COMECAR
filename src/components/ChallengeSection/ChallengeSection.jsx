import React from 'react';
import styles from './ChallengeSection.module.css';

export default function ChallengeSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-8">
            <h2 className={styles.title}>O Desafio do Novo Mercado</h2>
            <p className={styles.text}>
              Automação e IA estão mudando tudo. Muitas profissões estão desaparecendo, 
              mas <strong>novas oportunidades surgem todos os dias</strong>.
            </p>
            <p className={styles.text}>
              Quem aprender o básico do digital pode se recolocar, crescer e até criar 
              seu próprio negócio. Não é sobre ser jovem — é sobre estar disposto a aprender.
            </p>
          </div>
          <div className="col-md-4">
            <div className={styles.stat}>
              <p className={styles.number}>60%</p>
              <p className={styles.label}>das vagas de 2030 ainda nem existem.</p>
              <small>Fonte: World Economic Forum</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}