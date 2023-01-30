export interface Cnae {
    id: number;
    nome: string;
    codigo: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Setor {
    id: number;
    nome: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Empresa {
    id: number;
    CNPJ: string;
    nome_empresa: string;
    nome_fantasia: string;
    numero_funcionarios: number;
    numero_filial: number;
    filial: boolean;
    setor_id: number;
    cnae_id: number;
    telefone: string;
    linkedin: string;
    DDD: string;
    createdAt: Date;
    updatedAt: Date;
    cnae: Cnae;
    setor: Setor;
}

export interface Area {
    id: number;
    nome: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Cargo {
    id: number;
    nome: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ILead {
    id: number;
    nome: string;
    cargo_id: number;
    area_id: number;
    empresa_id: number;
    telefone: string;
    linkedin: string;
    DDD: string;
    createdAt: Date;
    updatedAt: Date;
    empresa: Empresa;
    area: Area;
    cargo: Cargo;
}