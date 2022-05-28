create table USUARIO
(
    ID        INTEGER not null generated always as identity (start with 1, increment by 1) primary key,
    NOMBRE    VARCHAR(200),
    APELLIDOS VARCHAR(200),
    EMAIL     VARCHAR(200) not null,
    PASSW     VARCHAR(200) not null
);

create table ACTIVIDAD
(
    ID      INTEGER not null generated always as identity (start with 1, increment by 1) primary key,
    FECHA   DATE    not null,
    HORA    TIME    not null,
    TIPO    INTEGER not null,
    PLAZAS  INTEGER not null
);

create table RESERVA
(
    ID      INTEGER not null generated always as identity (start with 1, increment by 1) primary key,
    ACTIVIDAD INTEGER
        constraint RESERVA_ID_ACTIVIDAD_FK
            references ACTIVIDAD
            on delete cascade,
    USUARIO INTEGER
        constraint RESERVA_ID_USUARIO_FK
            references USUARIO
            on delete cascade
);

