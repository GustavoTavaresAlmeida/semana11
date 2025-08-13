import { Instrument } from '../types';
import './InstrumentTable.css';

interface InstrumentTableProps {
  instruments: Instrument[];
}

export const InstrumentTable = ({ instruments }: InstrumentTableProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getStatusText = (ativo: boolean) => {
    return ativo ? 'Ativo' : 'Inativo';
  };

  const getStatusClass = (ativo: boolean) => {
    return ativo ? 'status-active' : 'status-inactive';
  };

  return (
    <div className="table-container">
      <table className="instruments-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Voltagem</th>
            <th>Ano</th>
            <th>Preço (R$)</th>
            <th>Peso (kg)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {instruments.map((instrument) => (
            <tr key={instrument.id}>
              <td className="name-cell">{instrument.nome}</td>
              <td>{instrument.tipo}</td>
              <td>{instrument.marca}</td>
              <td>{instrument.voltagem}</td>
              <td>{instrument.ano}</td>
              <td className="price-cell">{formatPrice(instrument.preco)}</td>
              <td>{instrument.peso_kg}</td>
              <td>
                <span className={`status ${getStatusClass(instrument.ativo)}`}>
                  {getStatusText(instrument.ativo)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};