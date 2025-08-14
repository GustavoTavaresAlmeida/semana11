import { Navigation } from '../components/Navigation';
import { InstrumentTable } from '../components/InstrumentTable';
import { useGetInstruments } from '../hooks/useGetInstruments';

export const TableList = () => {
  const { instruments, loading, error, refetch } = useGetInstruments();

  if (loading) {
    return (
      <div className="table-list-page">
        <div className="container">
          <Navigation />
          <div className="table-loading">
            <div className="table-loading-header"></div>
            <div className="table-loading-rows">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="table-loading-row"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-list-page">
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
    <div className="table-list-page">
      <div className="container table-list-container">
        <Navigation />
        
        <div className="table-list-header">
          <h1 className="table-list-title">Lista de Instrumentos</h1>
          <p className="table-list-subtitle">
            Visualização em tabela dos instrumentos musicais cadastrados
          </p>
        </div>

        {instruments.length > 0 && (
          <div className="table-controls">
            <div className="table-info">
              <div className="table-count">
                Total de <span className="count-number">{instruments.length}</span> instrumentos encontrados
              </div>
            </div>
            <div className="table-actions">
              <button className="table-action-btn" title="Atualizar dados">
                🔄 Atualizar
              </button>
              <button className="table-action-btn" title="Exportar dados">
                📊 Exportar
              </button>
            </div>
          </div>
        )}
        
        {instruments.length === 0 ? (
          <div className="table-empty-state">
            <div className="table-empty-icon">📋</div>
            <p>Nenhum instrumento encontrado.</p>
          </div>
        ) : (
          <div className="table-main-container">
            <InstrumentTable instruments={instruments} />
          </div>
        )}
      </div>
    </div>
  );
};