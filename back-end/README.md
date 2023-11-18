## ORM

Neste projeto, está sendo utilizada a versão 15 do Postgre no RDS da AWS. Utilizamos um ORM com a ferramenta `sequelize-cli` para estabelecer a conexão e criação de scripts para um banco de dados. Os scripts de criação estam disponíveis os final deste arquivo.


## Comandos para a execução do banco de dados
### Comando para gerar/atualizar tabelas no banco de dados

`npx sequelize-cli db:migrate`

Ao executar pela primeira vez este comando é criada a table "SequelizeMeta" que armazena as migrações realizadas no banco de dados atual. Migrações que ainda não foram realizadas são executadas.

### Reverter migração mais recente

`npx sequelize-cli db:migrate:undo`

 ### Popular todas as tabelas com os dados presentes nos arquivos seeders
 
 `npx sequelize-cli db:seed:all`

### Desfazer última seed executada

`npx sequelize-cli db:seed:undo`

### Desfazer a execução de uma seed específica

`npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data`
 
### Desfazer a execução de todas as seeds

`npx sequelize-cli db:seed:undo:all`

## Scripts de criação das tabelas do banco

### Condominios

CREATE TABLE IF NOT EXISTS public."Condominios"
(
    id integer NOT NULL DEFAULT nextval('"Condominios_id_seq"'::regclass),
    cnpj character varying(255) COLLATE pg_catalog."default",
    nome character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Condominios_pkey" PRIMARY KEY (id)
)

### Moradores

CREATE TABLE IF NOT EXISTS public."Moradores"
(
    id integer NOT NULL DEFAULT nextval('"Moradores_id_seq"'::regclass),
    email character varying(255) COLLATE pg_catalog."default",
    senha character varying(255) COLLATE pg_catalog."default",
    nome_completo character varying(255) COLLATE pg_catalog."default",
    residencia character varying(255) COLLATE pg_catalog."default",
    telefone character varying(255) COLLATE pg_catalog."default",
    id_condominio integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Moradores_pkey" PRIMARY KEY (id),
    CONSTRAINT "Moradores_id_condominio_fkey" FOREIGN KEY (id_condominio)
        REFERENCES public."Condominios" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

### Funcionarios

CREATE TABLE IF NOT EXISTS public."Funcionarios"
(
    id integer NOT NULL DEFAULT nextval('"Funcionarios_id_seq"'::regclass),
    email character varying(255) COLLATE pg_catalog."default",
    senha character varying(255) COLLATE pg_catalog."default",
    nome_completo character varying(255) COLLATE pg_catalog."default",
    "CPF" character varying(255) COLLATE pg_catalog."default",
    telefone character varying(255) COLLATE pg_catalog."default",
    id_condominio integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Funcionarios_pkey" PRIMARY KEY (id),
    CONSTRAINT "Funcionarios_id_condominio_fkey" FOREIGN KEY (id_condominio)
        REFERENCES public."Condominios" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

### Encomendas

CREATE TABLE IF NOT EXISTS public."Encomendas"
(
    id integer NOT NULL DEFAULT nextval('"Encomendas_id_seq"'::regclass),
    data_recebimento timestamp with time zone,
    descricao character varying(255) COLLATE pg_catalog."default",
    id_morador integer NOT NULL,
    id_funcionario integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Encomendas_pkey" PRIMARY KEY (id),
    CONSTRAINT "Encomendas_id_funcionario_fkey" FOREIGN KEY (id_funcionario)
        REFERENCES public."Funcionarios" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Encomendas_id_morador_fkey" FOREIGN KEY (id_morador)
        REFERENCES public."Moradores" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

### Localidades

CREATE TABLE IF NOT EXISTS public."Localidades"
(
    id integer NOT NULL DEFAULT nextval('"Localidades_id_seq"'::regclass),
    nome character varying(255) COLLATE pg_catalog."default",
    id_condominio integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Localidades_pkey" PRIMARY KEY (id),
    CONSTRAINT "Localidades_id_condominio_fkey" FOREIGN KEY (id_condominio)
        REFERENCES public."Condominios" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

### Reservas

CREATE TABLE IF NOT EXISTS public."Reservas"
(
    id integer NOT NULL DEFAULT nextval('"Reservas_id_seq"'::regclass),
    dia date,
    horario time without time zone,
    id_morador integer NOT NULL,
    id_localidade integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Reservas_pkey" PRIMARY KEY (id),
    CONSTRAINT "Reservas_id_localidade_fkey" FOREIGN KEY (id_localidade)
        REFERENCES public."Localidades" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Reservas_id_morador_fkey" FOREIGN KEY (id_morador)
        REFERENCES public."Moradores" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

### Forums

CREATE TABLE IF NOT EXISTS public."Forums"
(
    id integer NOT NULL DEFAULT nextval('"Forums_id_seq"'::regclass),
    data_post timestamp with time zone,
    post character varying(255) COLLATE pg_catalog."default",
    id_morador integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Forums_pkey" PRIMARY KEY (id),
    CONSTRAINT "Forums_id_morador_fkey" FOREIGN KEY (id_morador)
        REFERENCES public."Moradores" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
