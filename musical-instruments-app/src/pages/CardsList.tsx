import { Navigation } from '../components/Navigation';
import { InstrumentCard } from '../components/InstrumentCard';
import { useGetInstruments } from '../hooks/useGetInstruments';

export const CardsList = () => {
  const { instruments, loading, error, refetch } = useGetInstruments();

  if (loading) {
    return (
      <div className="cards-list-page">
        <div className="container">
          <Navigation />
          <div className="cards-loading">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="cards-loading-skeleton">
                <div className="skeleton-title"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cards-list-page">
        <div className="container">
          <Navigation />
          <div className="error">
            {error}
            <br />
            <button 
              onClick={refetch}
              className="btn btn-primary mt-lg"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cards-list-page">
      <div className="container cards-list-container">
        <Navigation />
        
        <div className="cards-list-header">
          <h1 className="cards-list-title">Lista de Instrumentos</h1>
          <p className="cards-list-subtitle">
            Visualização em cards dos instrumentos musicais cadastrados
          </p>
        </div>

        {instruments.length > 0 && (
          <div className="cards-controls">
            <div className="cards-count">
              Total de <span className="count-number">{instruments.length}</span> instrumentos encontrados
            </div>
          </div>
        )}
        
        {instruments.length === 0 ? (
          <div className="cards-empty-state">
            <div className="cards-empty-icon">🎵</div>
            <p>Nenhum instrumento encontrado.</p>
          </div>
        ) : (
          <div className="cards-main-grid">
            {instruments.map((instrument) => (
              <InstrumentCard 
                key={instrument.id} 
                instrument={instrument} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};