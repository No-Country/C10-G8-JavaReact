package com.backend.Go.Stay.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "alquileres")
public class Alquiler {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @NotNull
    private Date fechaIngreso;
    
    @NotNull
    private Date fechaSalida;
    
    @NotNull
    private int numeroReservacion;
    
    @NotNull
    private String tipoResidencia;
    
    @NotNull
    private int cantidadPersonas;
    
    @ManyToOne(optional = false)
    @JoinColumn(name = "usuario_id")
    @JsonIgnoreProperties("alquiler")
    private Usuario usuario;
    

    @OneToOne(mappedBy = "alquiler", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
    private Residencia residencia;
    

}