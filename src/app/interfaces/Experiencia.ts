export interface Experiencia {
    id?: number,
    cuidador_cpf?: string
    empresa?: string;
    cargo?: string;
    descricao?: string;
    data_inicio?: string | null;
    data_fim?: string | null;
    atual?: boolean;
  }
  