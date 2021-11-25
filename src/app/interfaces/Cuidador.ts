export interface Cuidador {
  cpf: string;
  nome: string;
  data_nascimento: Date;
  ativo: boolean;
  senha: string;
  pontuacao: Number;
  sexo: string;
  email: string;
  celular: string;
  cep: string;
  uf: string;
  cidade: string;
  logradouro: string;
  latitude: string;
  longitude: string;
  enabled: boolean;
  authorities: [];
  username: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  password: string;
}
