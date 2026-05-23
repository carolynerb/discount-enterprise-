import { useState } from 'react';

import {
  calculateDiscount
} from '../services/discountService';

export default function DiscountDashboard() {

  const [value, setValue] = useState('');

  const [result, setResult] = useState(null);

  function handleCalculate() {

    if (!value) return;

    const response =
      calculateDiscount(Number(value));

    setResult(response);
  }

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <div style={styles.badge}>
          Comercial
        </div>

        <h1 style={styles.title}>
          Sistema de Descontos
        </h1>

        <p style={styles.subtitle}>
          Calcule descontos automaticamente
          de forma rápida e inteligente.
        </p>

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Valor da compra
          </label>

          <input
            type="number"

            placeholder="R$ 0,00"

            value={value}

            onChange={(e) =>
              setValue(e.target.value)
            }

            style={styles.input}
          />

        </div>

        <button
          onClick={handleCalculate}
          style={styles.button}
        >
          Calcular desconto
        </button>

        {

          result && (

            <div style={styles.resultCard}>

              <div style={styles.resultHeader}>
                Resultado
              </div>

              <div style={styles.row}>
                <span>
                  Valor original
                </span>

                <strong>
                  R$ {result.originalValue}
                </strong>
              </div>

              <div style={styles.row}>
                <span>
                  Desconto aplicado
                </span>

                <strong style={styles.discount}>
                  {result.discount}%
                </strong>
              </div>

              <div style={styles.row}>
                <span>
                  Economia
                </span>

                <strong style={styles.saving}>
                  R$ {result.discountValue}
                </strong>
              </div>

              <div style={styles.divider}></div>

              <div style={styles.totalRow}>
                <span>
                  Valor final
                </span>

                <strong>
                  R$ {result.finalValue}
                </strong>
              </div>

            </div>

          )

        }

      </div>

    </div>

  );
}

const styles = {

  container: {

    minHeight: '100vh',

    display: 'flex',

    justifyContent: 'center',

    alignItems: 'center',

    padding: '32px',

    background:
      `
      linear-gradient(
        135deg,
        #fef9c3 0%,
        #f5d0fe 100%
      )
      `,

    fontFamily:
      'Inter, sans-serif'
  },

  card: {

    width: '100%',

    maxWidth: '460px',

    padding: '40px',

    borderRadius: '32px',

    background:
      'rgba(255,255,255,0.75)',

    backdropFilter: 'blur(18px)',

    border:
      '1px solid rgba(255,255,255,0.4)',

    boxShadow:
      `
      0 10px 30px rgba(0,0,0,0.08),
      0 4px 12px rgba(0,0,0,0.04)
      `,

    display: 'flex',

    flexDirection: 'column',

    gap: '24px'
  },

  badge: {

    alignSelf: 'flex-start',

    padding: '8px 14px',

    borderRadius: '999px',

    background:
      '#ede9fe',

    color: '#7c3aed',

    fontSize: '13px',

    fontWeight: '600'
  },

  title: {

    margin: 0,

    fontSize: '42px',

    lineHeight: 1.1,

    fontWeight: '700',

    color: '#3b0764'
  },

  subtitle: {

    marginTop: '-12px',

    color: '#6b7280',

    fontSize: '16px',

    lineHeight: 1.6
  },

  formGroup: {

    display: 'flex',

    flexDirection: 'column',

    gap: '10px'
  },

  label: {

    fontSize: '14px',

    fontWeight: '600',

    color: '#6b21a8'
  },

  input: {

    height: '56px',

    padding: '0 18px',

    borderRadius: '16px',

    border:
      '1px solid #e9d5ff',

    background: '#ffffff',

    fontSize: '16px',

    outline: 'none',

    color: '#111827',

    transition: 'all 0.2s ease',

    boxShadow:
      '0 2px 6px rgba(0,0,0,0.03)'
  },

  button: {

    height: '56px',

    border: 'none',

    borderRadius: '18px',

    background:
      `
      linear-gradient(
        135deg,
        #c084fc,
        #facc15
      )
      `,

    color: '#3b0764',

    fontSize: '16px',

    fontWeight: '700',

    cursor: 'pointer',

    transition:
      'all 0.25s ease',

    boxShadow:
      `
      0 10px 20px rgba(192,132,252,0.25)
      `
  },

  resultCard: {

    marginTop: '8px',

    padding: '24px',

    borderRadius: '24px',

    background:
      'rgba(255,255,255,0.85)',

    border:
      '1px solid rgba(255,255,255,0.5)',

    display: 'flex',

    flexDirection: 'column',

    gap: '18px'
  },

  resultHeader: {

    fontSize: '14px',

    fontWeight: '700',

    color: '#7c3aed',

    textTransform: 'uppercase',

    letterSpacing: '0.08em'
  },

  row: {

    display: 'flex',

    justifyContent: 'space-between',

    alignItems: 'center',

    color: '#4b5563',

    fontSize: '15px'
  },

  divider: {

    height: '1px',

    background:
      'rgba(124,58,237,0.12)'
  },

  totalRow: {

    display: 'flex',

    justifyContent: 'space-between',

    alignItems: 'center',

    fontSize: '20px',

    fontWeight: '700',

    color: '#3b0764'
  },

  discount: {

    color: '#7c3aed'
  },

  saving: {

    color: '#ca8a04'
  }

};