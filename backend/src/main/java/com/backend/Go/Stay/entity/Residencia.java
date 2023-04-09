
package com.backend.Go.Stay.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "residencias")
public class Residencia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @NotNull
    @Column(unique = true)
    private String name;
    
    @NotNull
    private String servicio; 
    
    @NotNull
    private int cantidadHabitacion; 
    
    @NotNull
    private int cantidadBaño;
    
    @NotNull
    private int cantidadCama; 
    
    @NotNull
    private boolean estadoResidencia;
    
    @NotNull
    private String ubicacion;
    
    @NotNull
    private double precio;
    
    @ManyToOne (optional = false)
    @JoinColumn (name = "usuario_id")
    @JsonIgnoreProperties("residencias")
    private Usuario usuario;

    public Residencia() {
    }

    public Residencia(String name) {
        this.name = name;
    }

    public Residencia(int id, String name, String servicio, int cantidadHabitacion, int cantidadBaño, int cantidadCama, boolean estadoResidencia, String ubicacion, double precio, Usuario usuario) {
        this.id = id;
        this.name = name;
        this.servicio = servicio;
        this.cantidadHabitacion = cantidadHabitacion;
        this.cantidadBaño = cantidadBaño;
        this.cantidadCama = cantidadCama;
        this.estadoResidencia = estadoResidencia;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.usuario = usuario;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getServicio() {
        return servicio;
    }

    public void setServicio(String servicio) {
        this.servicio = servicio;
    }

    public int getCantidadHabitacion() {
        return cantidadHabitacion;
    }

    public void setCantidadHabitacion(int cantidadHabitacion) {
        this.cantidadHabitacion = cantidadHabitacion;
    }

    public int getCantidadBaño() {
        return cantidadBaño;
    }

    public void setCantidadBaño(int cantidadBaño) {
        this.cantidadBaño = cantidadBaño;
    }

    public int getCantidadCama() {
        return cantidadCama;
    }

    public void setCantidadCama(int cantidadCama) {
        this.cantidadCama = cantidadCama;
    }

    public boolean isEstadoResidencia() {
        return estadoResidencia;
    }

    public void setEstadoResidencia(boolean estadoResidencia) {
        this.estadoResidencia = estadoResidencia;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    
    
    
}
