export interface Formacao {
    id?: number,
    instituicao?: string,
    curso?: string,
    periodo?: string,
    data_inicio?: string | null,
    data_formacao?: string | null,
    em_andamento: boolean,
    cuidador_cpf?: string
}