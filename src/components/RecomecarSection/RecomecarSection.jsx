import React from 'react';
import { Sparkles, Users, Heart, Rocket, RefreshCw } from 'lucide-react';
import styles from './RecomecarSection.module.css';

export default function RecomecarSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2 className={styles.title}>
              <Sparkles className="me-2" />
              O que é o RE.COMEÇAR?
            </h2>
            <p className={styles.lead}>
              Um portal feito <strong>por pessoas como você</strong> — que já se sentiram perdidas com tecnologia, mas decidiram recomeçar.
            </p>
            <p className={styles.text}>
              Aqui, <strong>não ensinamos robôs</strong>. Ensinamos <em>pessoas reais</em> a usar ferramentas simples do dia a dia: Canva, Word, IA, vídeos... tudo com linguagem clara, passo a passo e paciência.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <Users className="text-primary" />
                <span>Comunidade acolhedora 40+</span>
              </div>
              <div className={styles.feature}>
                <Heart className="text-danger" />
                <span>Feito com empatia</span>
              </div>
              <div className={styles.feature}>
                <Rocket className="text-success" />
                <span>Recomeço em 7 dias</span>
              </div>
            </div>
          </div>

          {/* ILUSTRAÇÃO COM A SUA LOGO */}
          <div className="col-md-6 text-center">
            <div className={styles.logoContainer}>
              <div className={styles.logoCircle}>
                <RefreshCw size={24} className={styles.refreshIcon} />
              </div>
              <span className={styles.logoText}>RE.COMEÇAR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}