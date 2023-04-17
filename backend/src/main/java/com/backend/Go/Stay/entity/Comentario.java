
package com.backend.Go.Stay.entity;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Comentario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @ManyToMany(mappedBy = "comentarios")
    private Set<Usuario> usuarios = new HashSet<>();
    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}