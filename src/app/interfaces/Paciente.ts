export interface Paciente {
  cpf: String,
  data_cadastro: Date,
  nome: String,
  data_nascimento: Date,
  ativo: Boolean,
  senha: String,
  sexo: String,
  email: String,
  celular: String,
  telefone: String,
  observacoes: String,
  cep: String,
  uf: String,
  cidade: String,
  logradouro:	String,
  latitude:	String,
  longitude:	String,
  enabled: Boolean,
  authorities: []
  username: String
  accountNonExpired: Boolean
  accountNonLocked: Boolean
  credentialsNonExpired: Boolean
  password: String
}
