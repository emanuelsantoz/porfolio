export type PersonaType = 
  | 'fullstack' 
  | 'ux-ui' 
  | 'mobile' 
  | 'backend' 
  | 'qa' 
  | 'automation' 
  | 'data' 
  | 'ai';

export interface PersonaConfig {
  id: PersonaType;
  label: string;
  theme: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  icon?: string;
  soundEnabled?: boolean;
}

export interface PersonaState {
  activePersona: PersonaType;
  setPersona: (persona: PersonaType) => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
}
