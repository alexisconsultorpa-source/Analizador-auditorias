export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#00539F' }}>Analizador de Auditorías Puma Energy</h1>
      <p style={{ color: '#555' }}>
        Sube o arrastra el reporte en PDF de la auditoría para procesarlo de forma automática.
      </p>

      <div style={{ 
        border: '2px dashed #ccc', 
        borderRadius: '8px', 
        padding: '30px', 
        textAlign: 'center', 
        marginTop: '20px',
        background: '#f9f9f9'
      }}>
        <p>Pronto aquí estará el botón para cargar tus PDFs y ver las métricas en tiempo real.</p>
      </div>
    </main>
  );
} 
