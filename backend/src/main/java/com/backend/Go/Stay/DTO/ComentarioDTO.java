
package com.backend.Go.Stay.DTO;

public class ComentarioDTO {
    private String descripcion;
    private int usuarioId;

    public ComentarioDTO() {
    }
    
    public ComentarioDTO(String descripcion, int usuarioId) {
        this.descripcion = descripcion;
        this.usuarioId = usuarioId;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }
    
    
    
}
