export interface Dispositivo {
  [index: number]: {
    id: number;
    dispositivo: string;
    cuidados: string;
    paciente_cpf: string;
  };
}
