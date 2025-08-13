import { useState, useEffect } from 'react';
import { instrumentsService } from '../services/api';
import { Instrument, UseInstrumentsReturn } from '../types';

export const useGetInstruments = (): UseInstrumentsReturn => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInstruments = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await instrumentsService.getAll();
      setInstruments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setInstruments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstruments();
  }, []);

  const refetch = () => {
    fetchInstruments();
  };

  return {
    instruments,
    loading,
    error,
    refetch
  };
};