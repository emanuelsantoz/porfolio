import { create } from 'zustand';
import { PersonaType, PersonaState } from '../types/persona';

interface Store extends PersonaState {
  // Add any other global state here
  isPerformanceMode: boolean;
  togglePerformanceMode: () => void;
}

export const usePersonaStore = create<Store>((set) => ({
  activePersona: 'fullstack',
  isSoundEnabled: true,
  isPerformanceMode: false,
  setPersona: (persona: PersonaType) => set({ activePersona: persona }),
  toggleSound: () => set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
  togglePerformanceMode: () =>
    set((state) => ({ isPerformanceMode: !state.isPerformanceMode })),
}));
