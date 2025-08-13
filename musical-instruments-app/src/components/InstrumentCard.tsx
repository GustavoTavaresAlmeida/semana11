import { Instrument } from '../types';
import './InstrumentCard.css';

interface InstrumentCardProps {
  instrument: Instrument;
}

export const InstrumentCard = ({ instrument }: InstrumentCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getStatusColor = (ativo: boolean) => {
    return ativo ? '#4CAF50' : '#F44336';
  };

  const getStatusText = (ativo: boolean) => {
    return ativo ? 'Ativo' : 'Inativo';
  };

  return (
    <div className="instrument-card">
      <h3 className="card-title">{instrument.nome}</h3>
      
      <div className="card-content">
        <div className="card-info">
          <span className="label">Tipo:</span>
          <span className="value">{instrument.tipo}</span>
        </div>
        
        <div className="card-info">
          <span className="label">Marca:</span>
          <span className="value">{instrument.marca}</span>
        </div>
        
        <div className="card-info">
          <span className="label">Voltagem:</span>
          <span className="value">{instrument.voltagem}</span>
        </div>
        
        <div className="card-info">
          <span className="label">Ano:</span>
          <span className="value">{instrument.ano}</span>
        </div>
        
        <div className="card-info">
          <span className="label">Preço:</span>
          <span className="value">{formatPrice(instrument.preco)}</span>
        </div>
        
        <div className="card-info">
          <span className="label">Peso:</span>
          <span className="value">{instrument.peso_kg} kg</span>
        </div>
        
        <div className="card-info">
          <span className="label">Status:</span>
          <span 
            className="value status" 
            style={{ color: getStatusColor(instrument.ativo) }}
          >
            {getStatusText(instrument.ativo)}
          </span>
        </div>
      </div>
    </div>
  );
};