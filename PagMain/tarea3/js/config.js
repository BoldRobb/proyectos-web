
function cambiarBody(color) {
    // Cambia el color de fondo del body
    document.body.style.backgroundColor = color; // Puedes cambiar este valor al color que desees
    guardarConfiguracionEnCookies('backcolor', color);
  }

function redondeoLinks(pixeles){
    var enlaces = document.querySelectorAll('a');
    pixel = pixeles +'px'
    enlaces.forEach(function(link){
        link.style.borderRadius = pixel;
    });
    guardarConfiguracionEnCookies('round-link', pixel);
}

function fondoLinks(color){
    var enlaces = document.querySelectorAll('a');
    
    enlaces.forEach(function(link){
        link.style.backgroundColor = color
    });
    guardarConfiguracionEnCookies('backcolor-link', color);
}

function textoLinks(color){
    var enlaces = document.querySelectorAll('a');
    
    enlaces.forEach(function(link){
        link.style.color = color
    });
    guardarConfiguracionEnCookies('color-link', color);
}

function sizeImagen(size){
    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
        switch (size){
            case 1:
                    imagen.style.width= "20%";
                    imagen.style.height = "auto";
                    guardarConfiguracionEnCookies('widthimg', "20%");
                    guardarConfiguracionEnCookies('heightimg', "auto");
                break; 

                case 2:
                    imagen.style.width= "50%";
                    imagen.style.height = "auto";
                    guardarConfiguracionEnCookies('widthimg', "50%");
                    guardarConfiguracionEnCookies('heightimg', "auto");
                break;         

                case 3:
                imagen.style.width= "100%";
                imagen.style.height = "auto";
                guardarConfiguracionEnCookies('widthimg', "100%");
                    guardarConfiguracionEnCookies('heightimg', "auto");
                break; 
            default:
                break;
        }

    });
}

function bordeImagen(color){
    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
        imagen.style.border = "4px solid "+color
    });
    guardarConfiguracionEnCookies('borderimg', color);

}

function borderSizeImagen(size){
    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
        switch (size){
            case 1:
                    imagen.style.borderWidth= "4px";
                    guardarConfiguracionEnCookies('bordersizeimg', "4px");
                break; 

                case 2:
                    imagen.style.borderWidth= "8px";
                    guardarConfiguracionEnCookies('bordersizeimg', "8px");
                break;         

                case 3:
                    imagen.style.borderWidth= "16px";
                    guardarConfiguracionEnCookies('bordersizeimg', "16px");
                break; 
            default:
                break;
        }

    });
}

function radiusSizeImagen(size){
    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
        switch (size){
            case 1:
                    imagen.style.borderRadius = "16px";
                    guardarConfiguracionEnCookies('borderroundimg', "16px");
                break; 

                case 2:
                    imagen.style.borderRadius = "32px";
                    guardarConfiguracionEnCookies('borderroundimg', "32px");
                break;         

                case 3:
                    imagen.style.borderRadius = "64px";
                    guardarConfiguracionEnCookies('borderroundimg', "64px");
                break; 
            default:
                break;
        }

    });
}

function sombraImagen(){
    var checkboxSombra = document.getElementById('checkSombra');

    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
        if (checkboxSombra.checked) {
            imagen.style.boxShadow = '10px 10px 10px #888888'; // Activar sombra
            guardarConfiguracionEnCookies('shadow-enabled', "10px 10px 10px #888888");
          } else {
            imagen.style.boxShadow = 'none'; // Desactivar sombra
            guardarConfiguracionEnCookies('shadow-enabled', "none");
          }
    });
}

function colorBordeTabla(color){
    var tablas = document.querySelectorAll('table')
    
    tablas.forEach(function(tabla){
        tabla.style.border="4px solid "+ color;
        
    })
    guardarConfiguracionEnCookies('tablebordercolor', color);
}

function colorFondoTabla(color){
    var tablas = document.querySelectorAll('table')
    
    tablas.forEach(function(tabla){
        tabla.style.background= color;
        
    })
    guardarConfiguracionEnCookies('tablebackcolor', color);
}

function colorTituloTabla(color){
    var tablas = document.querySelectorAll('th')
    
    tablas.forEach(function(tabla){
        tabla.style.background=color;
    })
    guardarConfiguracionEnCookies('tabletitlecolor', color);
}

function colorParrafo(color){
    var parrafos = document.querySelectorAll('p')

    parrafos.forEach(function(parrafo){
        parrafo.style.color=color
    })
    guardarConfiguracionEnCookies('textcolor', color);
}

function sizeParrafo(size){
    var parrafos = document.querySelectorAll('p')

    sizepx=size+'px'
    parrafos.forEach(function(parrafo){
        parrafo.style.fontSize=sizepx
    })
    guardarConfiguracionEnCookies('textsize', sizepx);
}

function fondoParrafo(color){
    var parrafos = document.querySelectorAll('p')

    parrafos.forEach(function(parrafo){
        parrafo.style.background=color
    })
    guardarConfiguracionEnCookies('textbackcolor', color);
}

function colorTitulo(color){
    var parrafos = document.querySelectorAll('h2')

    parrafos.forEach(function(parrafo){
        parrafo.style.color=color
    })
    guardarConfiguracionEnCookies('titlecolor', color);
}

function sizeTitulo(size){
    var parrafos = document.querySelectorAll('h2')
    sizepx=size+'px'
    parrafos.forEach(function(parrafo){
        parrafo.style.fontSize=sizepx
    })
    guardarConfiguracionEnCookies('titlesize', sizepx);
}

function fondoTitulo(color){
    var parrafos = document.querySelectorAll('h2')

    parrafos.forEach(function(parrafo){
        parrafo.style.background=color
    })
    guardarConfiguracionEnCookies('titlebackcolor', color);
}

function colorsubTitulo(color){
    var parrafos = document.querySelectorAll('h3')

    parrafos.forEach(function(parrafo){
        parrafo.style.color=color
    })
    guardarConfiguracionEnCookies('subtitlecolor', color);
}

function sizesubTitulo(size){
    var parrafos = document.querySelectorAll('h3')
    sizepx=size+'px'
    parrafos.forEach(function(parrafo){
        parrafo.style.fontSize=sizepx
    })
    guardarConfiguracionEnCookies('subtitlesize', sizepx);
}

function fondosubTitulo(color){
    var parrafos = document.querySelectorAll('h3')

    parrafos.forEach(function(parrafo){
        parrafo.style.background=color
    })
    guardarConfiguracionEnCookies('subtitlebackcolor', color);
}

function guardarConfiguracionEnCookies(nombreConfiguracion, valor) {
    document.cookie = `${nombreConfiguracion}=${valor}; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/`;
}

function cargarConfiguracionDesdeCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [nombre, valor] = cookie.trim().split('=');
        // Aplica la configuración según el nombre de la cookie y su valor
        aplicarConfiguracion(nombre, valor);
    });
}

// Función para aplicar la configuración
function aplicarConfiguracion(nombreConfiguracion, valor) {
    switch (nombreConfiguracion) {
        case 'backcolor':
            aplicarColorBody(valor);
            break;
        case 'round-link':
            aplicarredondeoLinks(valor);
            break;
            case 'backcolor-link':
                aplicarfondoLinks(valor);
                break;
            case 'color-link':
                aplicartextoLinks(valor);
                break;
            case 'widhtimg':
                aplicarsizeImagen(valor);
                break;
            case 'borderimg':
                aplicarbordeImagen(valor);
                break;  
            case 'bordersizeimg':
                aplicarborderSizeImagen(valor);
                break;    
            case 'borderroundimg':
                aplicarradiusSizeImagen(valor);
                break; 
            case 'shadow-enabled':
                aplicarsombraImagen(valor);
                break;  
            case 'tablebordercolor':
                aplicarcolorBordeTabla(valor);
                break;  
            case 'tabletitlecolor':
                aplicarcolorTituloTabla(valor);
                break;     
            case 'textcolor':
                aplicarcolorParrafo(valor);
                break;  
            case 'textsize':
                aplicarsizeParrafo(valor);
                break;  
            case 'textbackcolor':
                aplicarfondoParrafo(valor);
                break;       
            case 'titlecolor':
                aplicarcolorTitulo(valor);
                break;
            case 'titlesize':
                aplicarsizeTitulo(valor);
                break;
            case 'titlebackcolor':
                aplicarfondoTitulo(valor);
                break;
            case 'subtitlecolor':
                aplicarcolorsubTitulo(valor);
                break;
            case 'subtitlesize':
                aplicarsizesubTitulo(valor);
                break;
            case 'subtitlebackcolor':
                aplicarfondosubTitulo(valor);
                break;                         

        default:
            break;
    }
}

function aplicarColorBody(color) {
    // Cambia el color de fondo del body
    document.body.style.backgroundColor = color; // Puedes cambiar este valor al color que desees
    
  }
function aplicarredondeoLinks(pixeles){
    var enlaces = document.querySelectorAll('a');

    enlaces.forEach(function(link){
        link.style.borderRadius = pixeles;
    });

}
function aplicarfondoLinks(color){
    var enlaces = document.querySelectorAll('a');
    
    enlaces.forEach(function(link){
        link.style.backgroundColor = color
    });

}
function aplicartextoLinks(color){
    var enlaces = document.querySelectorAll('a');
    
    enlaces.forEach(function(link){
        link.style.color = color
    });
}
function aplicarsizeImagen(size){
    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){

                    imagen.style.width= size;
                    imagen.style.height = "auto";
               

    });
}
function aplicarbordeImagen(color){
    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
        imagen.style.borderColor = color
    });

}
function aplicarborderSizeImagen(size){
    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
                    imagen.style.borderWidth= size;

    });
}
function aplicarradiusSizeImagen(size){
    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
                    imagen.style.borderRadius = size;
    });
}
function aplicarsombraImagen(valor){

    var imagenes = document.querySelectorAll('img');

    imagenes.forEach(function(imagen){
        
            imagen.style.boxShadow = valor; // Activar sombra

    });
}
function aplicarcolorBordeTabla(color){
    var tablas = document.querySelectorAll('table')
    
    tablas.forEach(function(tabla){
        tabla.style.border="4px solid "+ color;
        
    })
    guardarConfiguracionEnCookies('tablebordercolor', color);
}
function aplicarcolorFondoTabla(color){
    var tablas = document.querySelectorAll('table')
    
    tablas.forEach(function(tabla){
        tabla.style.background= color;
        
    })

}
function aplicarcolorTituloTabla(color){
    var tablas = document.querySelectorAll('th')
    
    tablas.forEach(function(tabla){
        tabla.style.background=color;
    })
}
function aplicarcolorParrafo(color){
    var parrafos = document.querySelectorAll('p')

    parrafos.forEach(function(parrafo){
        parrafo.style.color=color
    })
}

function aplicarsizeParrafo(size){
    var parrafos = document.querySelectorAll('p')
    parrafos.forEach(function(parrafo){
        parrafo.style.fontSize=size
    })

}

function aplicarfondoParrafo(color){
    var parrafos = document.querySelectorAll('p')

    parrafos.forEach(function(parrafo){
        parrafo.style.background=color
    })

}

function aplicarcolorTitulo(color){
    var parrafos = document.querySelectorAll('h2')

    parrafos.forEach(function(parrafo){
        parrafo.style.color=color
    })

}

function aplicarsizeTitulo(size){
    var parrafos = document.querySelectorAll('h2')

    parrafos.forEach(function(parrafo){
        parrafo.style.fontSize=size
    })

}

function aplicarfondoTitulo(color){
    var parrafos = document.querySelectorAll('h2')

    parrafos.forEach(function(parrafo){
        parrafo.style.background=color
    })

}

function aplicarcolorsubTitulo(color){
    var parrafos = document.querySelectorAll('h3')

    parrafos.forEach(function(parrafo){
        parrafo.style.color=color
    })

}

function aplicarsizesubTitulo(size){
    var parrafos = document.querySelectorAll('h3')
    parrafos.forEach(function(parrafo){
        parrafo.style.fontSize=size
    })

}

function aplicarfondosubTitulo(color){
    var parrafos = document.querySelectorAll('h3')

    parrafos.forEach(function(parrafo){
        parrafo.style.background=color
    })

}
function limpiarCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
window.addEventListener('load', cargarConfiguracionDesdeCookies);

function configInicial() {
    limpiarCookie('backcolor');

    limpiarCookie('round-link')

    limpiarCookie('backcolor-link');

    limpiarCookie('color-link')

    limpiarCookie('widhtimg')

    limpiarCookie('borderimg')

    limpiarCookie('bordersizeimg')
  
    limpiarCookie('borderroundimg')

    limpiarCookie('shadow-enabled')

    limpiarCookie('tablebordercolor')

    limpiarCookie('tabletitlecolor')
    
    limpiarCookie('textcolor')
 
    limpiarCookie('textsize')

    limpiarCookie('textbackcolor')
      
    limpiarCookie('titlecolor')

    limpiarCookie('titlesize')

    limpiarCookie('titlebackcolor')

    limpiarCookie('subtitlecolor')

    limpiarCookie('subtitlesize')

    limpiarCookie('subtitlebackcolor')
        
    
    var root = document.documentElement;

    // Aplicar variables CSS
    root.style.setProperty('--colormain', '#011936');
    root.style.setProperty('--colorsec', '#82A3A1');
    root.style.setProperty('--colorter', '#465362');
    root.style.setProperty('--colorresaltado', '#C0DFA1');
    root.style.setProperty('--fontsize', '20px');
    root.style.setProperty('--alturaheader', '9%');
    
    // Aplicar estilos al body
    document.body.style.backgroundColor = 'var(--colormain)';
    document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    document.body.style.overflowX = 'hidden';
    
    // Aplicar estilos al header
    var header = document.querySelector('header');
    if (header) {
      header.style.textAlign = 'center';
      header.style.backgroundColor = 'var(--colorter)';
      header.style.flex = 'auto';
      header.style.marginBottom = '1%';
      header.style.width = '100%';
      header.style.height = 'var(--alturaheader)';
    }
    
    // Aplicar estilos a los enlaces dentro de .LinksHead
    var linksHead = document.querySelector('.LinksHead');
    if (linksHead) {
      linksHead.style.marginLeft = '3%';
      linksHead.style.marginRight = '3%';
    }
    var enlaces = document.querySelectorAll('a');
    enlaces.forEach(function(enlace) {
      enlace.style.color = 'var(--colorresaltado)';
      enlace.style.textDecoration = 'none';
      enlace.style.background= 'none';
    });


    // Estilo para .leftInf
    var leftInf = document.querySelector('.leftInf');
    if (leftInf) {
      leftInf.style.marginLeft = '1%';
      leftInf.style.borderRadius = '15px';
      leftInf.style.backgroundColor = 'var(--colorsec)';
      leftInf.style.textAlign = 'justify';
      leftInf.style.width = '60%';
      leftInf.style.float = 'left';
      leftInf.style.marginBottom = '1%';
      leftInf.style.padding = '2%';
    }

    // Estilo para párrafos (p)
    var parrafos = document.querySelectorAll('p');
    parrafos.forEach(function(parrafo) {
      parrafo.style.fontSize = '20px';
      parrafo.style.color = 'black';
      parrafo.style.background = 'none';
    });

    var parrafos = document.querySelectorAll('h2');
    parrafos.forEach(function(parrafo) {
      parrafo.style.background = 'none';
      parrafo.style.fontSize = '1.5em';
      parrafo.style.color = 'black';
    });
    var parrafos = document.querySelectorAll('h3');
    parrafos.forEach(function(parrafo) {
        parrafo.style.background = 'none';
        parrafo.style.fontSize = '24px';
        parrafo.style.color = 'black';
    });
    var parrafos = document.querySelectorAll('h4');
    parrafos.forEach(function(parrafo) {
        parrafo.style.backgroundColor = 'none';
        parrafo.style.fontSize = '16px';
        parrafo.style.color = 'black';
    });
    var tablas = document.querySelectorAll('table')
    
    tablas.forEach(function(tabla){
        tabla.style.background= 'none';
        tabla.style.border='none';
        
    })
    var tablas = document.querySelectorAll('th')
    
    tablas.forEach(function(tabla){
        tabla.style.background='none';
    })

    var imagenes = document.querySelectorAll('img')
    
    imagenes.forEach(function(imagen){
        imagen.style.border='none';
        imagen.style.borderRadius='none';
        imagen.style.width='auto';
        imagen.style.height='auto';
    })
  };