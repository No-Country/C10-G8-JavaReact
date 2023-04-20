package com.backend.Go.Stay;

import com.backend.Go.Stay.entity.Residencia;
import com.backend.Go.Stay.entity.Usuario;
import com.backend.Go.Stay.repository.ComentarioRepository;
import com.backend.Go.Stay.repository.ResidenciaRepository;
import com.backend.Go.Stay.repository.UsuarioRepository;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyRunner implements CommandLineRunner {

    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    ResidenciaRepository residenciaRepository;
    @Autowired
    ComentarioRepository comentarioRepository;

    @Override
    public void run(String... args) throws Exception {//poblando DB 
        /*Residencia residencia1 = new Residencia("casa");
        Residencia residencia2 = new Residencia("depto");
        Residencia residencia3 = new Residencia("castillo");
        Residencia residencia4 = new Residencia("isla");
        residencia1.setCantidadBaño(2);
        residencia1.setCantidadCama(2);
        residencia1.setCantidadHabitacion(3);
        residencia1.setEstadoResidencia(true);
        residencia1.setPrecio(25.0);
        List<String> listaS = new ArrayList<>();
        listaS.add("blancas");
        listaS.add("desayuno");
        listaS.add("excursiones");
        residencia1.setServicio(listaS);
        residencia1.setUbicacion("Brasil");
        List<String> listaI = new ArrayList<>();
        listaI.add("https://www.turismobr.com/wp-content/uploads/2011/01/estaciones-del-ano-brasil-1.jpg");
        listaI.add("https://static9.depositphotos.com/1020341/1109/i/600/depositphotos_11094645-stock-photo-map-of-brazil-with-waving.jpg");
        listaI.add("https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/02/04125951/Playas-Brasil-9.jpg");
        listaI.add("https://encolombia.com/wp-content/uploads/2020/11/Geografia-de-Brasil.jpg");
        listaI.add("https://static.dw.com/image/57208051_303.jpg");
        residencia1.setImagen(listaI);
        residencia1.setFechaCreacion(new Timestamp(System.currentTimeMillis()));
        
        residencia2.setCantidadBaño(1);
        residencia2.setCantidadCama(1);
        residencia2.setCantidadHabitacion(2);
        residencia2.setEstadoResidencia(false);
        residencia2.setPrecio(55.2);
        List<String> listaS1 = new ArrayList<>();
        listaS1.add("blancas");
        listaS1.add("desayuno");
        residencia2.setServicio(listaS1);
        residencia2.setUbicacion("Brasil");
        List<String> listaImg1 = new ArrayList<>();
        listaImg1.add("https://www.voydeviaje.com.ar/resizer/qD4NkhBa463XmQz0XB61mZGkogw=/1023x767/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/BK7RJGUOUZCFNFLWX3SNQG67ZM.png");
        listaImg1.add("https://guia.viajobien.com/wp-content/uploads/2013/11/playas-mas-lindas-de-brasil-580x333.jpg");
        listaImg1.add("https://costamagazine.cl/wp-content/uploads/2019/10/baia-dos-porcos-1-1024x683.jpg");
        listaImg1.add("https://cdn0.casamiento.com.uy/article/2029/3_2/960/jpg/9202-fernando-de-noronha.jpeg");
        listaImg1.add("https://tn.com.ar/resizer/mCNVoJP6FsG8L-SWqAixAxTfIeQ=/arc-anglerfish-arc2-prod-artear/public/GANWA3AH6RC2HOSNSQCT5AKIE4.jpg");
        residencia2.setImagen(listaImg1);
        residencia2.setFechaCreacion(new Timestamp(System.currentTimeMillis()));
        
        
        residencia3.setCantidadBaño(1);
        residencia3.setCantidadCama(2);
        residencia3.setCantidadHabitacion(4);
        residencia3.setEstadoResidencia(true);
        residencia3.setPrecio(15.0);
        List<String> listaS2 = new ArrayList<>();
        listaS2.add("desayuno");
        listaS2.add("spa");
        residencia3.setServicio(listaS2);
        residencia3.setUbicacion("Brasil");
        List<String> listaImg2 = new ArrayList<>();
        listaImg2.add("https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/travel/brazil-travel/brasile_m.jpg.image.694.390.low.jpg");
        listaImg2.add("https://tn.com.ar/resizer/_wmR52h2GUuaa4_Roec35uiuQWs=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/GANWA3AH6RC2HOSNSQCT5AKIE4.jpg");
        listaImg2.add("https://blog.global-exchange.com/wp-content/uploads/2018/08/el-salvador-840.jpg");
        listaImg2.add("https://www.lareferencia.info/images/Brasilnodo2.png");
        listaImg2.add("https://www.fotonostra.com/albums/america/fotos/brasil.jpg");
        listaImg2.add("https://www.sherlockcomms.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/02/short-summary-history-brazil-img2.jpg.webp");
        residencia3.setImagen(listaImg2);
        residencia3.setFechaCreacion(new Timestamp(System.currentTimeMillis()));
        
        residencia4.setCantidadBaño(3);
        residencia4.setCantidadCama(3);
        residencia4.setCantidadHabitacion(1);
        residencia4.setEstadoResidencia(false);
        residencia4.setPrecio(100.0);
        List<String> listaS3 = new ArrayList<>();
        listaS3.add("desayuno");
        listaS3.add("spa");
        listaS3.add("excursiones");
        listaS3.add("blancas");
        residencia4.setServicio(listaS3);
        residencia4.setUbicacion("Alemania");
        List<String> listaImg3 = new ArrayList<>();
        listaImg3.add("https://www.turismobr.com/wp-content/uploads/2011/01/estaciones-del-ano-brasil-1.jpg");
        listaImg3.add("https://static9.depositphotos.com/1020341/1109/i/600/depositphotos_11094645-stock-photo-map-of-brazil-with-waving.jpg");
        listaImg3.add("https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/02/04125951/Playas-Brasil-9.jpg");
        listaImg3.add("https://encolombia.com/wp-content/uploads/2020/11/Geografia-de-Brasil.jpg");
        listaImg3.add("https://static.dw.com/image/57208051_303.jpg");
        residencia4.setImagen(listaImg3);
        residencia4.setFechaCreacion(new Timestamp(System.currentTimeMillis()));
        
        Usuario usuario1 = new Usuario("nicolas");
        Usuario usuario2 = new Usuario("belkis");
        usuario1.setNombreUsuario("nicolas");
        usuario2.setNombreUsuario("belkis");
        usuario1.setPassword("1234");
        usuario2.setPassword("123456");
        
        residencia1.setUsuario(usuario1);
        residencia2.setUsuario(usuario1);
        residencia3.setUsuario(usuario2);
        residencia4.setUsuario(usuario2);
        
        Set<Residencia> residenciasN = new HashSet<>();
        Set<Residencia> residenciasB = new HashSet<>();
        
        residenciasN.add(residencia1);
        residenciasN.add(residencia2);
        residenciasB.add(residencia3);
        residenciasB.add(residencia4);
        
        usuario1.setResidencias(residenciasN);
        usuario2.setResidencias(residenciasB);
        
        usuarioRepository.save(usuario1);
        usuarioRepository.save(usuario2);*/
    }

}
