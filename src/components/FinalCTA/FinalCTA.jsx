import React from 'react';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container text-center">
        <h2 className={styles.title}>O futuro não é dos robôs! É de quem aprende com eles.</h2>
        <p className={styles.subtitle}>Junte-se a milhares de pessoas 40+ que estão se reinventando digitalmente</p>
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
          <button className={styles.primary}>Entre na Comunidade Recomeçar Digital</button>
          <button className={styles.secondary}>Fazer Teste de Perfil Digital</button>
        </div>
      </div>
    </section>
  );
}