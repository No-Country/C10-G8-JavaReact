
package com.backend.Go.Stay.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import java.sql.Timestamp;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "residencias")
public class Residencia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    
    private String categoria;
    
    
    @ElementCollection
    private List<String> servicio; 
    
    
    private int cantidadHabitacion; 
    
    
    private int cantidadBaño;
    
    
    private int cantidadCama; 
    
    
    private boolean estadoResidencia;
    
    
    private String ubicacion;
    
    
    private double precio;
    
    
    @ElementCollection
    private List<String> imagen;
    
    
    private Timestamp fechaCreacion;
    
    
    @ManyToOne (optional = false)
    @JoinColumn (name = "usuario_id")
    @JsonIgnoreProperties("residencias")
    private Usuario usuario;
    
    @ManyToMany(mappedBy = "favoritos")
    @JsonIgnoreProperties("favoritos")
    private List<Usuario> usuarios;

    public Residencia() {
    }

    public Residencia(String categoria) {
        this.categoria = categoria;
    }

    public Residencia(int id, String categoria, List<String> servicio, int cantidadHabitacion, int cantidadBaño, int cantidadCama, boolean estadoResidencia, String ubicacion, double precio, List<String> imagen, Timestamp fechaCreacion, Usuario usuario, List<Usuario> usuarios) {
        this.id = id;
        this.categoria = categoria;
        this.servicio = servicio;
        this.cantidadHabitacion = cantidadHabitacion;
        this.cantidadBaño = cantidadBaño;
        this.cantidadCama = cantidadCama;
        this.estadoResidencia = estadoResidencia;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.imagen = imagen;
        this.fechaCreacion = fechaCreacion;
        this.usuario = usuario;
        this.usuarios = usuarios;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public List<String> getServicio() {
        return servicio;
    }

    public void setServicio(List<String> servicio) {
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

    public List<String> getImagen() {
        return imagen;
    }

    public void setImagen(List<String> imagen) {
        this.imagen = imagen;
    }

    public Timestamp getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Timestamp fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    
}
