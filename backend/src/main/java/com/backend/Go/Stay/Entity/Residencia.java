
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
    
    @Column(name = "tipoResidencia")
    private String tipoResidencia;
    
    @Column(name = "caracteristica")
    private String caracteristica;
    
    @Column(name = "ubicacion")
    private String ubicacion;
    
    @Column(name = "precio")
    private double precio;
    
    public Residencia(){}
    
    public Residencia (int idResidencia, String tipoResidencia, String caracteristica, 
            String ubicacion, double precio){
        this.idResidencia = idResidencia;
        this.tipoResidencia = tipoResidencia;
        this.caracteristica = caracteristica;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
    @Override
    public String toString() {
        return "Residencia [idResidencia=" + idResidencia + ", tipoResidencia=" + tipoResidencia + ", caracteristica=" + caracteristica
                + ", ubicacion=" + ubicacion + ", precio=" + precio + "]";
    }
}
