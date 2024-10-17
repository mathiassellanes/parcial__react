import axios from "axios";
import { Pets, PetsWithoutId } from "../utils/types";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`
});

export const getPets = async () => {
  const response = await api.get('/pets');

  return response.data;
}

export const getPet = async (id: string) => {
  const response = await api.get(`/pets/${id}`);

  return response.data;
}

export const createPet= async (data: PetsWithoutId) => {
  const response = await api.post('/pets', data);

  return response.data;
}

export const updatePet = async (id: string, data: Pets) => {
  const response = await api.put(`/pets/${id}`, data);

  return response.data;
}

export const deletePet = async (id: string) => {
  const response = await api.delete(`/pets/${id}`);

  return response.data;
}

export default api;
