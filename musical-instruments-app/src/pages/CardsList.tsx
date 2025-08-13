import { Navigation } from '../components/Navigation';
import { InstrumentCard } from '../components/InstrumentCard';
import { useGetInstruments } from '../hooks/useGetInstruments';

export const CardsList = () => {
  const { instruments, loading, error, refetch } = useGetInstruments();

  if (loading) {
    return (
      <div className="container">
        <Navigation />
        <div className="loading">Carregando instrumentos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <Navigation />
        <div className="error">
          {error}
          <br />
          <button 
            onClick={refetch}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Navigation />
      <h1 className="page-title">Lista de Instrumentos</h1>
      
      {instruments.length === 0 ? (
        <div className="loading">Nenhum instrumento encontrado.</div>
      ) : (
        <div className="cards-grid">
          {instruments.map((instrument) => (
            <InstrumentCard 
              key={instrument.id} 
              instrument={instrument} 
            />
          ))}
        </div>
      )}
    </div>
  );
};