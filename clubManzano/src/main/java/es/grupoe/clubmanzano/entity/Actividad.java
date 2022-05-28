package es.grupoe.clubmanzano.entity;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Objects;

@Entity
public class Actividad {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID")
    private Integer id;
    @Basic
    @Column(name = "FECHA")
    private Date fecha;
    @Basic
    @Column(name = "HORA")
    private Time hora;
    @Basic
    @Column(name = "TIPO")
    private Integer tipo;
    @Basic
    @Column(name = "PLAZAS")
    private Integer plazas;
    @OneToMany(mappedBy = "actividad")
    private List<Reserva> reservas;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Time getHora() {
        return hora;
    }

    public void setHora(Time hora) {
        this.hora = hora;
    }

    public Integer getTipo() {
        return tipo;
    }

    public void setTipo(Integer tipo) {
        this.tipo = tipo;
    }

    public Integer getPlazas() {
        return plazas;
    }

    public void setPlazas(Integer plazas) {
        this.plazas = plazas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Actividad actividad = (Actividad) o;
        return Objects.equals(id, actividad.id) && Objects.equals(fecha, actividad.fecha) && Objects.equals(hora, actividad.hora) && Objects.equals(tipo, actividad.tipo) && Objects.equals(plazas, actividad.plazas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fecha, hora, tipo, plazas);
    }

    public List<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(List<Reserva> reservas) {
        this.reservas = reservas;
    }
}
