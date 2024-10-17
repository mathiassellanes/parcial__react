import { create } from 'zustand'
import { Pets } from '../utils/types';

type Store = {
  pets: Pets[];
  setPets: (pets: Pets[]) => void;
  addPet: (game: Pets) => void;
  removePet: (id: string) => void;
  updatePet: (game: Pets) => void;
  clearPets: () => void;
  modal: {
    isOpen: boolean;
    open: (id?: string) => void;
    close: () => void;
    petId: string;
  };
}

export const useStore = create<Store>((set) => ({
  pets: [],
  setPets: (pets: Pets[]) => set({ pets }),
  addPet: (game: Pets) => set((state) => ({ pets: [...state.pets, game] })),
  removePet: (id: string) => set((state) => ({ pets: state.pets.filter((game) => game.id !== id) })),
  updatePet: (game: Pets) => set((state) => ({ pets: state.pets.map((g) => g.id === game.id ? game : g) })),
  clearPets: () => set({ pets: [] }),
  modal: {
    isOpen: false,
    open: (id?: string) => set((state) => ({ modal: { ...state.modal, isOpen: true, ...(id && { petId: id }) } })),
    close: () => set((state) => ({ modal: { ...state.modal, isOpen: false } })),
    petId: '',
  }
}));
