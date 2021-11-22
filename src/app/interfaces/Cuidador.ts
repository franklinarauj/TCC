export interface Cuidador {
  cpf: String;
  nome: String;
  data_nascimento: Date;
  ativo: Boolean;
  senha: String;
  pontuacao: Number;
  sexo: String;
  email: String;
  celular: String;
  telefone: String;
  cep: String;
  uf: String;
  cidade: String;
  logradouro: String;
  latitude: String;
  longitude: String;
  enabled: Boolean;
  authorities: [];
  username: String;
  accountNonExpired: Boolean;
  accountNonLocked: Boolean;
  credentialsNonExpired: Boolean;
  password: String;
}
