
package com.backend.Go.Stay.Entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter 
@Entity
@Table(name="residencia")
public class Residencia implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idResidencia")
    private int idResidencia;
    
    //@Column(name = "tipoResidencia")
    //private String tipoResidencia; //Pendiente: Tipos de residencia podría ser una lista de tipos de residencia
    @Column(name = "servicio")
    private String servicio; //Array -> Tipos de servicios que incluye, podría tener una lista de servicios
    
    @Column(name = "cantidadHabitacion")
    private int cantidadHabitacion; //Cantidad de habitaciones
    
    @Column(name = "cantidadBaño")
    private int cantidadBaño;//Cantidad de baños
    
    @Column(name="cantidadCama")
    private int cantidadCama; //Cantidad de camas
    
    @Column(name = "estadoResidencia")
    private boolean estadoResidencia; //Si está disponible para alquilar o no, va en tabla alquiler
    
    @Column(name = "ubicacion")
    private String ubicacion; 
    
    @Column(name = "precio")
    private double precio; 
    
    public Residencia(){}
    
    public Residencia (int idResidencia, String servicio, int cantidadHabitacion,
        int cantidadBaño, int cantidadCama , String ubicacion, double precio){
        this.idResidencia = idResidencia;
        //this.tipoResidencia = tipoResidencia;
        this.servicio = servicio;
        this.cantidadHabitacion = cantidadHabitacion;
        this.cantidadBaño = cantidadBaño;
        this.cantidadCama = cantidadCama;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
    @Override
    public String toString() {
        return "Residencia [idResidencia=" + idResidencia + ", servicio=" + servicio +
               
            ", ubicacion=" + ubicacion + ", precio=" + precio + "]";
    }
}
