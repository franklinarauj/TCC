export interface Paciente {
  cpf: string,
  data_cadastro: Date,
  nome: string,
  data_nascimento: Date,
  ativo: boolean,
  senha: string,
  sexo: string,
  email: string,
  celular: string,
  telefone: string,
  observacoes: string,
  cep: string,
  uf: string,
  cidade: string,
  logradouro:	string,
  latitude:	string,
  longitude:	string,
  enabled: boolean,
  authorities: []
  username: string
  accountNonExpired: boolean
  accountNonLocked: boolean
  credentialsNonExpired: boolean
  password: string
}
