/* =====================================================================
   PRÁCTICAS PREPROFESIONALES – RECURSOS DIGITALES · FORMATO ACC
   ---------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE DEBES EDITAR.

   Para cada recurso puedes llenar:
     embed  -> enlace de INSERCIÓN (el "src" del código <iframe>).
               Si lo llenas, el recurso se muestra dentro de la página.
     enlace -> enlace normal para abrir el recurso en otra pestaña.
               Úsalo cuando la plataforma no permite insertarlo (p. ej., Kahoot).

   Cómo obtener el enlace de inserción (embed):
     YouTube   : Compartir ▸ Insertar ▸ copia lo que está en src="…"
                 (formato: https://www.youtube.com/embed/CODIGO)
     Educaplay : en la actividad ▸ Compartir ▸ Insertar (iframe) ▸ copia el src
     Canva     : Compartir ▸ Más ▸ Insertar ▸ copia el src (termina en ?embed)
     Wayground : (antes Quizizz) Compartir ▸ Insertar ▸ copia el src
     Kahoot    : no permite insertarse; usa "enlace" con el enlace del juego
     Heyzine   : Compartir ▸ Insertar ▸ copia el src del flipbook
   ===================================================================== */

const PRACTICA = {
  // Ciclo en el que se basa la planificación: "ERCA" (4 fases) o "ACC" (3 momentos).
  // Esta plantilla usa ACC: Anticipación → Construcción → Consolidación.
  // Cada momento puede tener uno o varios recursos (lista "recursos"); cada recurso
  // lleva su propia "actividad". Si el momento tiene una sola actividad, puede ir arriba.
  ciclo: "ACC",

  carrera: "Carrera de Pedagogía de las Ciencias Experimentales Informática",
  universidad: "Universidad Nacional de Loja",
  titulo: "Prácticas preprofesionales",

  // Encabezado superior (modelo mailing institucional): título y recuadro rojo.
  encabezado: {
    titulo: "Prácticas preprofesionales",
    etiqueta: "Quinto ciclo"
  },

  // Carrusel de portada: las imágenes van en assets/img/ (puedes cambiarlas por las tuyas).
  // destino: sección a la que lleva el botón (#datos-practica, #ciclo, #planificaciones, #software-educativo).
  portada: [
    {
      imagen: "assets/img/portada-1.jpg",
      alt: "Estudiantes trabajan en equipo frente a una computadora portátil",
      titulo: "Prácticas preprofesionales",
      texto: "Diseñamos planificaciones microcurriculares de Informática y elaboramos material digital para el aprendizaje en contextos formales y no formales.",
      boton: "Leer más",
      destino: "#datos-practica"
    },
    {
      imagen: "assets/img/portada-2.jpg",
      alt: "Estudiantes de la Unidad de Educación a Distancia y en Línea frente al edificio UED",
      titulo: "Planificaciones microcurriculares",
      texto: "Tres planificaciones de Informática Educativa para sexto grado de EGB en las Escuelas Municipales de Loja, organizadas según los tres momentos de la clase ACC: Anticipación, Construcción y Consolidación.",
      boton: "Leer más",
      destino: "#planificaciones"
    },
    {
      imagen: "assets/img/portada-3.jpg",
      posicion: "68% center",   // parte de la foto que se mantiene visible en pantallas angostas
      alt: "Docente con una computadora portátil junto a niños que trabajan en el laboratorio de computación",
      titulo: "Recursos educativos digitales",
      texto: "Videos, juegos, presentaciones, cuestionarios y un software educativo en Pilas Engine para cada momento del aprendizaje.",
      boton: "Leer más",
      destino: "#ciclo"
    }
  ],
  datos: [
    ["Tema", "Planificación curricular en las instituciones educativas (diseño y planificación de modelos microcurriculares en Informática para los contextos formales y no formales, orientados a la elaboración de material digital para el aprendizaje). Septiembre 2026 – febrero 2027 · 80 horas de prácticas preprofesionales de la asignatura."],
    ["Director UEDL – UNL", "Dr. Milton Mejía Balcázar"],
    ["Encargado de la gestión académica", "Mgtr. Luis Alberto Chicaiza González"],
    ["Docente tutor académico de prácticas", "Mgtr. Diego Fernando Ortiz Cango"],
    ["Estudiante", "NOMBRES Y APELLIDOS DEL ESTUDIANTE"],
    ["Ciclo", "5"],
    ["Paralelo", "A"]
  ],

  institucion: {
    nombre: "Escuelas Municipales de Loja",
    asignatura: "Informática Educativa",
    grado: "Sexto grado de EGB (Subnivel Medio) · Paralelo «A»",
    unidad: "Unidad didáctica 2 (Bloque 3: Ofimática) · Utilizando Office: Word",
    anio: "Año lectivo 2026 – 2027"
  },

  // Documento de las planificaciones en formato flipbook (Heyzine, Issuu, Drive…)
  flipbook: {
    embed: "https://heyzine.com/flip-book/1cd065980e.html",
    enlace: "https://heyzine.com/flip-book/1cd065980e.html"
  },

  planificaciones: [
    {
      numero: 1,
      titulo: "Conozco Word y doy formato a mis textos",
      duracion: "Semana 1 · 2 horas pedagógicas",
      destrezas: "IE.3.3.1. Reconocer los elementos de la interfaz de Word. IE.3.3.2. Aplicar formato al texto (tamaño, tipo, color).",
      momentos: {
        anticipacion: {
          recursos: [
          {
            actividad: "Observan un video corto sobre las partes de la ventana de Word y cómo dar formato a un texto; comentan qué partes reconocieron.",
            recurso: "Video de YouTube «Partes de la ventana de Word para niños»",
            plataforma: "YouTube",
            embed: "https://www.youtube-nocookie.com/embed/Wsn2dOaBg34",
            enlace: "https://www.youtube.com/watch?v=Wsn2dOaBg34"
          },
          {
            actividad: "En parejas relacionan cada parte de la ventana de Word con su función y responden: ¿para qué sirve dar formato a un texto?",
            recurso: "Educaplay «Relacionar columnas: partes de Word» (8 pares)",
            plataforma: "Educaplay",
            embed: "",
            enlace: ""
          }
          ]
        },
        construccion: {
          actividad: "El docente explica la ventana de Word, el grupo Fuente y los atajos de negrita, cursiva y subrayado; los estudiantes lo repiten en su computadora.",
          recursos: [
          {
            recurso: "Presentación de Canva «Conozco Word» (7 diapositivas)",
            plataforma: "Canva",
            embed: "",
            enlace: ""
          }
          ]
        },
        consolidacion: {
          actividad: "Elaboran en Word la «Tarjeta de presentación» (Ficha 1) y juegan un Kahoot sobre las partes de Word y el formato de texto.",
          recursos: [
          {
            recurso: "Kahoot «Conozco Word» (8 preguntas)",
            plataforma: "Kahoot",
            embed: "",
            enlace: ""
          }
          ]
        }
      }
    },
    {
      numero: 2,
      titulo: "Decoro y organizo mis textos",
      duracion: "Semanas 2 y 3 · 4 horas pedagógicas",
      destrezas: "IE.3.3.3. Caracteres especiales, mayúsculas/minúsculas, autoformas, viñetas y WordArt. IE.3.3.4. Copiar, cortar y pegar. IE.3.3.5. Encabezado y pie de página. IE.3.3.6. Letra capital.",
      momentos: {
        anticipacion: {
          recursos: [
          {
            actividad: "Observan un tutorial en el que se decora un documento con WordArt, viñetas y formas, y señalan esos elementos en un cuento o revista impresa.",
            recurso: "Video de YouTube «WordArt, viñetas y formas en Word»",
            plataforma: "YouTube",
            embed: "",
            enlace: ""
          },
          {
            actividad: "Resuelven un crucigrama con los términos de la unidad y acuerdan la norma «Si copio, cito la fuente».",
            recurso: "Educaplay «Crucigrama: decoro mis textos» (9 palabras)",
            plataforma: "Educaplay",
            embed: "",
            enlace: ""
          }
          ]
        },
        construccion: {
          actividad: "El docente explica las rutas de Símbolo, Aa, Viñetas, Formas, WordArt, Encabezado/Pie de página y Letra capital, y las demuestra en Word.",
          recursos: [
          {
            recurso: "Infografía de Canva «Decora tu documento en Word»",
            plataforma: "Canva",
            embed: "",
            enlace: ""
          }
          ]
        },
        consolidacion: {
          actividad: "En parejas elaboran «Mi cuento ilustrado» (Ficha 2) y responden un cuestionario sobre las herramientas aprendidas.",
          recursos: [
          {
            recurso: "Wayground (Quizizz) «Decoro mis textos» (10 preguntas)",
            plataforma: "Wayground",
            embed: "",
            enlace: ""
          }
          ]
        }
      }
    },
    {
      numero: 3,
      titulo: "Organizo, ilustro y comparto mis documentos",
      duracion: "Semanas 4 y 5 · 4 horas pedagógicas",
      destrezas: "IE.3.3.7. Tablas. IE.3.3.8. Columnas. IE.3.3.9. Imágenes desde archivo. IE.3.3.10. Imagen de fondo y marca de agua. IE.3.3.11. Guardar en PDF.",
      momentos: {
        anticipacion: {
          recursos: [
          {
            actividad: "Observan un tutorial sobre tablas y columnas en Word y comparan la página de un periódico con un texto sin columnas.",
            recurso: "Video de YouTube «Tablas y columnas en Word»",
            plataforma: "YouTube",
            embed: "",
            enlace: ""
          },
          {
            actividad: "Completan frases sobre tablas, columnas, imágenes, marca de agua y PDF, y dialogan sobre cómo compartir documentos sin imprimir.",
            recurso: "Educaplay «Completa: organizo y comparto» (6 frases)",
            plataforma: "Educaplay",
            embed: "",
            enlace: ""
          }
          ]
        },
        construccion: {
          actividad: "El docente explica Tabla, Columnas, Imágenes, Color de página, Marca de agua y Guardar como PDF, y lo demuestra en Word.",
          recursos: [
          {
            recurso: "Presentación de Canva «Organizo, ilustro y comparto en Word» (8 diapositivas)",
            plataforma: "Canva",
            embed: "",
            enlace: ""
          }
          ]
        },
        consolidacion: {
          actividad: "En grupos de tres elaboran el «Periódico escolar sostenible» (Ficha 3) en PDF y cierran la unidad con un Kahoot de evaluación.",
          recursos: [
          {
            recurso: "Kahoot «Utilizando Office: Word» (10 preguntas)",
            plataforma: "Kahoot",
            embed: "",
            enlace: ""
          }
          ]
        }
      }
    }
  ],

  // Recurso educativo digital: software educativo elaborado en Pilas Engine.
  //  1. En Pilas Engine exporta el juego como HTML (se descarga «mi-proyecto.zip»).
  //  2. Descomprímelo: aparecen el archivo LEER y la carpeta «proyecto».
  //  3. En GitHub entra a  recursos/pilas-engine/  y sube la carpeta «proyecto» completa.
  //  4. Escribe en embed y enlace:  "recursos/pilas-engine/proyecto/index.html"
  //  Si el juego está publicado en internet, pega aquí su enlace.
  software: {
    titulo: "Software educativo",
    descripcion: "Juego educativo elaborado en Pilas Engine como recurso educativo digital de la práctica.",
    plataforma: "Pilas Engine",
    embed: "",
    enlace: "",
    proporcion: "4 / 3"
  }
};
