export interface Instrument {
  id: number;
  nome: string;
  tipo: string;
  marca: string;
  ano: number;
  preco: number;
  ativo: boolean;
  voltagem: string;
  peso_kg: number;
}

export interface UseInstrumentsReturn {
  instruments: Instrument[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}