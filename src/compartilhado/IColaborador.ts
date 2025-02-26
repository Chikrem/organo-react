export interface Colaborador {
  id: string;
  nome: string;
  cargo: string;
  imagem: string;
  favorito: boolean;
  time?: string;
  data?: string; // Adiciona a propriedade data
}