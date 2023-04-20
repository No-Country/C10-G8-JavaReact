package com.backend.Go.Stay.controller;

import com.backend.Go.Stay.entity.Comentario;
import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Rol;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.security.Dto.JwtDto;
import com.backend.Go.Stay.security.Dto.LoginUsuario;
import com.backend.Go.Stay.security.Dto.Mensaje;
import com.backend.Go.Stay.security.Dto.NuevoUsuario;
import com.backend.Go.Stay.security.Enums.RolNombre;
import com.backend.Go.Stay.security.Jwt.JwtProvider;
import com.backend.Go.Stay.service.MainService;
import com.backend.Go.Stay.service.RolService;
import com.backend.Go.Stay.service.UsuarioService;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    MainService mainService;
    
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    RolService rolService;

    @Autowired
    JwtProvider jwtProvider;

    //List de todos los usuarios
    @GetMapping("usuario/traer")
    public ResponseEntity<List<Usuario>> usuarios() {
        List<Usuario> usuarios = mainService.usuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }
    // List de todas las residencias
    @GetMapping("residencia/traer")
    public ResponseEntity<List<Residencia>> residencias() {
        List<Residencia> residencias = mainService.residencias();
        return new ResponseEntity(residencias, HttpStatus.OK);
    }
    // Get de todas las Residencias filtro por Ubicacion
    @GetMapping("/residencia/{ubicacion}")
    public ResponseEntity<List<Residencia>> getResidenciaByPais(@PathVariable("ubicacion") String ubicacion){
        return new ResponseEntity<>(mainService.getResidenciaByPais(ubicacion), HttpStatus.FOUND);
    }
    
    // Post de Usuario para crear usuario
    @PostMapping("usuario/crear")
    public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
        Set<Residencia> residencias = usuario.getResidencias();
        if (residencias != null && !residencias.isEmpty()) {
            for (Residencia r : residencias) {
                r.setUsuario(usuario);
            }
        }
        Usuario savedUsuario = mainService.guardarUsuario(usuario);
        return new ResponseEntity<>(savedUsuario, HttpStatus.CREATED);
    }
    //Post de Comentario para crear comentario
    @PostMapping("comentario/crear")
    public void crearComentario(@RequestBody Comentario comentario) {
        mainService.guardarComentario(comentario);
    }
    //Get para traer 1 Usuario por ID
    @GetMapping(path = {"usuario/traer/{id}"})
    public Usuario traerUsuario(@PathVariable("id") int id) {

        return mainService.traerUsuario(id);
    }
    //Get para traer 1 Residencia por ID
    @GetMapping(path = {"residencia/traer/{id}"})
    public Residencia traerResidencia(@PathVariable("id") int id) {

        return mainService.traerResidencia(id);
    }
    //Post de Residencia para crear Residencia
    @PostMapping("residencia/crear")
    public ResponseEntity<Object> crearResidencia(@RequestBody Residencia residencia) {
        Residencia savedResidencia = mainService.guardarResidencia(residencia);
        return ResponseEntity.status(HttpStatus.CREATED).body("Residencia creada con el ID: " + savedResidencia.getId());
    }
    
    //Security
    
    @PostMapping("/auth/nuevo")
    public ResponseEntity<?> nuevo(@Valid @RequestBody NuevoUsuario nuevoUsuario, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) 
            return new ResponseEntity(new Mensaje("campos mal puestos o email invalido"), HttpStatus.BAD_REQUEST);        
        if (usuarioService.existsByNombreUsuario(nuevoUsuario.getNombreUsuario())) 
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);        
        if (usuarioService.existsByEmail(nuevoUsuario.getEmail())) 
            return new ResponseEntity(new Mensaje("ese email ya existe"), HttpStatus.BAD_REQUEST);
        Usuario usuario =
                new Usuario(nuevoUsuario.getNombre(), nuevoUsuario.getNombreUsuario(), nuevoUsuario.getEmail(),
                        passwordEncoder.encode(nuevoUsuario.getPassword()));
        Set<Rol> roles = new HashSet<>();
        roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
        if (nuevoUsuario.getRoles().contains("admin")) 
            roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
        usuario.setRoles(roles);
        usuarioService.save(usuario);
        return new ResponseEntity(new Mensaje("usuario guardado"), HttpStatus.CREATED);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUsuario loginUsuario, BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            return new ResponseEntity(new Mensaje("campos mal puestos"), HttpStatus.BAD_REQUEST);
        Authentication authentication =
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUsuario.getNombreUsuario(), loginUsuario.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        JwtDto jwtDto = new JwtDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());
        return new ResponseEntity(jwtDto, HttpStatus.OK);
    }
}
