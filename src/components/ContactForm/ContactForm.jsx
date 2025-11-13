import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MessageSquare, X } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.telefone.match(/^\(\d{2}\) \d{4,5}-\d{4}$/)) {
      newErrors.telefone = 'Telefone inválido. Use (11) 98765-4321';
    }
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Obrigado, ${formData.nome}! Sua mensagem foi enviada.`);
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Fechar">
          <X size={24} />
        </button>

        <h3 className={styles.title}>
          <Mail className="me-2" />
          Fale com a gente
        </h3>
        <p className={styles.subtitle}>Preencha e enviaremos sua mensagem por e-mail.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>
              <Mail size={18} className="me-2" />
              Nome completo
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Paulinha Silva"
              className={errors.nome ? styles.error : ''}
            />
            {errors.nome && <span className={styles.errorText}>{errors.nome}</span>}
          </div>

          <div className={styles.field}>
            <label>
              <Phone size={18} className="me-2" />
              Telefone (WhatsApp)
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 98765-4321"
              className={errors.telefone ? styles.error : ''}
            />
            {errors.telefone && <span className={styles.errorText}>{errors.telefone}</span>}
          </div>

          <div className={styles.field}>
            <label>
              <MessageSquare size={18} className="me-2" />
              Sua mensagem
            </label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="4"
              placeholder="Como posso ajudar você a recomeçar?"
              className={errors.mensagem ? styles.error : ''}
            />
            {errors.mensagem && <span className={styles.errorText}>{errors.mensagem}</span>}
          </div>

          <button type="submit" className={styles.submit}>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}