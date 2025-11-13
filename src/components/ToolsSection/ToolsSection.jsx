import React from 'react';
import { MessageCircle, Sparkles, Play, Brain } from 'lucide-react';
import { tools } from '../../data/tools';
import ToolCollapse from './ToolCollapse';
import styles from './ToolsSection.module.css';

export default function ToolsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Conheça as Ferramentas de trabalho mais utilizadas</h2>
        <p className={styles.subtitle}>Clique em cada categoria para descobrir ferramentas simples e aprender como utilizá-las gratuitamente</p>

        <div className="mt-5">
          <ToolCollapse title="Comunicação e Escritório" icon={MessageCircle} color="turquoise">
            <div className="row g-4">
              {tools.communication.map((tool, i) => (
                <div key={i} className="col-md-4">
                  <div className={styles.card}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <tool.icon size={32} />
                      <h3 className="h5 fw-bold">{tool.name}</h3>
                    </div>
                    <p className="small text-muted mb-3">{tool.description}</p>
                    <ul className="small mb-3">
                      {tool.useCases.map((use, j) => (
                        <li key={j} className="d-flex align-items-center gap-2">
                          <span className="text-success">Cria</span> {use}
                        </li>
                      ))}
                    </ul>
                    <a href={tool.learnLink} target="_blank" className={styles.link}>
                      Aprenda a usar gratuitamente →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ToolCollapse>

          <ToolCollapse title="Criação e Design" icon={Sparkles} color="blue">
            <div className="row g-4">
              {tools.design.map((tool, i) => (
                <div key={i} className="col-md-6">
                  <div className={styles.card}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <tool.icon size={32} />
                      <h3 className="h5 fw-bold">{tool.name}</h3>
                    </div>
                    <p className="small text-muted mb-3">{tool.description}</p>
                    <a href={tool.learnLink} target="_blank" className={styles.link}>
                      Aprenda a usar gratuitamente →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ToolCollapse>

          <ToolCollapse title="Vídeo e Mídias Sociais" icon={Play} color="purple">
            <div className="row g-4">
              {tools.video.map((tool, i) => (
                <div key={i} className="col-md-6">
                  <div className={styles.card}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <tool.icon size={32} />
                      <h3 className="h5 fw-bold">{tool.name}</h3>
                    </div>
                    <p className="small text-muted mb-3">{tool.description}</p>
                    <a href={tool.learnLink} target="_blank" className={styles.link}>
                      Aprenda a usar gratuitamente →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ToolCollapse>

          <ToolCollapse title="Inteligências Artificiais que te auxiliam" icon={Brain} color="turquoise">
            <div className="row g-4">
              {tools.ai.map((tool, i) => (
                <div key={i} className="col-md-4">
                  <div className={styles.card}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <tool.icon size={32} />
                      <h3 className="h5 fw-bold">{tool.name}</h3>
                    </div>
                    <p className="small text-muted mb-3">{tool.description}</p>
                    <ul className="small mb-3">
                      {tool.useCases.map((use, j) => (
                        <li key={j} className="d-flex align-items-center gap-2">
                          <span className="text-info">Cria</span> {use}
                        </li>
                      ))}
                    </ul>
                    <a href={tool.learnLink} target="_blank" className={styles.link}>
                      Aprenda a usar gratuitamente →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ToolCollapse>
        </div>
      </div>
    </section>
  );
}