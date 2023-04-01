package com.backend.Go.Stay.Entity;

import java.io.Serializable;
import javax.persistence.*;
import lombok.*;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter 
@Entity
@Table(name="residencia")
public class Residencia implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idResidencia;
    
    //@Column(name = "tipoResidencia")
    //private String tipoResidencia; //Pendiente: Tipos de residencia podría ser una lista de tipos de residencia
    private String servicio; //Array -> Tipos de servicios que incluye, podría tener una lista de servicios
    
    private int cantidadHabitacion; //Cantidad de habitaciones
    
    private int cantidadBaño;//Cantidad de baños
    
    private int cantidadCama; //Cantidad de camas
    
    private boolean estadoResidencia;// --> Si está disponible para alquilar o no, va en tabla alquiler
    
    private String ubicacion; //Ciudad, Pais
    
    private double precio; 

}
