import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  { name: "Paulinha, 42 anos", role: "Criadora de Mídia Escolar", text: "Achei que nunca aprenderia a usar o Canva. Hoje crio posts para o colégio inteiro!", image: "Designer" },
  { name: "João, 55 anos", role: "Freelancer Digital", text: "Aprendi a editar vídeos e agora trabalho de casa com clientes do Brasil todo!", image: "Vídeo Maker" },
  { name: "Maria, 48 anos", role: "Assistente Administrativa", text: "O Excel era um mistério. Hoje organizo planilhas e sou referência na empresa!", image: "Adm" }
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Histórias de Recomeço</h2>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4">
              <div className={styles.card}>
                <div className="fs-1 mb-3">{t.image}</div>
                <p className={styles.quote}>"{t.text}"</p>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}