import { Colaborador } from "./IColaborador";

export interface CardProps {
    colaborador: Colaborador;
    corDeFundo: string;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
  }