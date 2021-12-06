export interface Prescricao {
  [index: number]: {
    id: number;
    remedio: string;
    horarios: string;
    via: string;
    paciente_cpf: string;
  };
}
