import { Certificacao } from "./Certificacao";
import { Experiencia } from "./Experiencia";
import { Formacao } from "./Formacao";

export interface Curriculo {
    experiencia?: Experiencia,
    certificacao?: Certificacao,
    formacao?: Formacao,
    cuidador_cpf?: string
}