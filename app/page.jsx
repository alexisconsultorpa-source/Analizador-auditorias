'use client';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Por favor selecciona un archivo PDF primero.');
      return;
    }

    setLoading(true);
    setMessage('Procesando reporte de auditoría...');

    setTimeout(() => {
      setLoading(false);
      setMessage('¡Estructura lista para conectar con Supabase e IA!');
    }, 2000);
  };

  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#00539F', marginBottom: '8px' }}>Analizador de Auditorías Puma Energy</h1>
      <p style={{ color: '#555', marginBottom: '24px' }}>
        Sube o arrastra el reporte en PDF de la estación para extraer métricas, evaluaciones y hallazgos sin errores.
      </p>

      <form onSubmit={handleUpload} style={{
        border: '2px dashed #00539F',
        borderRadius: '12px',
        padding: '30px',
        textAlign: 'center',
        background: '#f9f9f9'
      }}>
        <input 
          type="file" 
          accept=".pdf" 
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginBottom: '16px', display: 'block', margin: '0 auto 16px auto' }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{
            background: '#00539F',
            color: '#fff',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Analizando...' : 'Analizar y Guardar en Base de Datos'}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: '20px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
          {message}
        </p>
      )}
    </main>
  );
}
