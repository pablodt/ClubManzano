create table USUARIO
(
    ID        INTEGER not null generated always as identity (start with 1, increment by 1) primary key,
    NOMBRE    VARCHAR(200),
    APELLIDOS VARCHAR(200) not null
);

create table RESERVA
(
    ID      INTEGER not null generated always as identity (start with 1, increment by 1) primary key,
    USUARIO INTEGER
        constraint RESERVA_USUARIO_ID_FK
            references USUARIO
            on delete set null,
    FECHA   DATE    not null,
    TIPO    INTEGER not null
);

