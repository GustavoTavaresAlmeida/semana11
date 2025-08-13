import axios from 'axios';
import { Instrument } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

export const instrumentsService = {
  async getAll(): Promise<Instrument[]> {
    try {
      const response = await api.get('/equipamentos');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar instrumentos:', error);
      throw new Error('Falha ao carregar instrumentos. Verifique se a API está rodando.');
    }
  }
};

export default api;