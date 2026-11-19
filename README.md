# Prácticas preprofesionales · Plantilla ACC

Plantilla para publicar en **GitHub Pages** las planificaciones microcurriculares basadas en los **momentos de la clase ACC** (3 momentos) y los recursos digitales de cada momento.
*Si tu planificación usa el **ciclo de aprendizaje ERCA** (Experiencia, Reflexión, Conceptualización, Aplicación), usa la plantilla **practicas-erca-6egb**.*

| Momento ACC | Propósito | Recursos del ejemplo |
|---|---|---|
| Anticipación | Activa los conocimientos previos | Video (YouTube) y juego (Educaplay) |
| Construcción | Aborda los nuevos contenidos | Presentación o infografía (Canva) |
| Consolidación | Aplica lo aprendido | Cuestionario (Kahoot o Wayground) |

Cada momento puede tener **uno o varios recursos** (lista `recursos`), cada uno con su propia `actividad`.

El ejemplo usa las tres planificaciones de **Informática Educativa, 6.º grado de EGB, Escuelas Municipales de Loja** (Unidad 2: *Utilizando Office: Word*).

---

## Contenido de la carpeta

```
index.html        → página (no se edita)
datos.js          → TUS DATOS Y ENLACES (el único archivo que editas)
assets/           → estilos, programa, logotipos e imágenes (no se editan)
recursos/         → aquí va tu juego de Pilas Engine (y PDF o imágenes propias)
.nojekyll         → archivo necesario para GitHub Pages (no lo borres)
```

---

## Paso 1. Crear tu cuenta y tu repositorio

1. Ingresa a <https://github.com> y crea tu cuenta con tu **correo institucional** (si ya tienes una, inicia sesión).
2. Arriba a la derecha pulsa **+ ▸ New repository**.
3. En **Repository name** escribe `practicas-acc-6egb` (sin espacios).
4. Marca **Public**. No marques "Add a README". Pulsa **Create repository**.

## Paso 2. Subir los archivos

1. Descomprime el archivo `practicas-acc-6egb.zip` en tu computadora.
2. En el repositorio vacío pulsa el enlace **uploading an existing file**.
3. Abre la carpeta descomprimida, selecciona **todo su contenido** (Ctrl + A) y arrástralo a la página de GitHub.
   - Arrastra **el contenido**, no la carpeta: `index.html` debe quedar en la raíz del repositorio.
   - Usa Chrome o Edge para que se suban también las carpetas `assets` y `recursos`.
4. Espera a que termine la carga y pulsa **Commit changes**.

## Paso 3. Publicar con GitHub Pages

1. En tu repositorio entra a **Settings ▸ Pages**.
2. En **Build and deployment ▸ Source** elige **Deploy from a branch**.
3. En **Branch** elige **main** y **/ (root)**. Pulsa **Save**.
4. Abre la pestaña **Actions** y espera el visto verde ✓ (1 a 2 minutos).
5. Vuelve a **Settings ▸ Pages**: arriba aparece **"Your site is live at…"** con tu dirección:
   `https://TU-USUARIO.github.io/practicas-acc-6egb/`

> Para que el enlace se vea en la página principal del repositorio: en **About** (columna derecha) pulsa ⚙️ y marca **Use your GitHub Pages website**.

## Paso 4. Escribir tus datos (`datos.js`)

Abre `datos.js`, pulsa el lápiz ✏️ (**Edit**), haz los cambios y pulsa **Commit changes**.

| Bloque | Qué cambias |
|---|---|
| `encabezado` | Título y recuadro rojo (por ejemplo, `etiqueta: "Quinto ciclo"`). |
| `portada` | Título, texto y botón de cada imagen del carrusel. |
| `datos` | Tu nombre, ciclo y paralelo. |
| `institucion` | Institución educativa, asignatura, grado, unidad y año lectivo. |
| `flipbook` | Enlace de tus planificaciones en Heyzine. |
| `planificaciones` | Título, destrezas, actividades y recursos de cada momento. |
| `software` | Tu juego de Pilas Engine (paso 6). |

**Cuidado con la escritura:** respeta las comillas `" "`, las comas al final de cada línea y las llaves `{ }`. Si la página aparece en blanco, casi siempre falta o sobra una coma o una comilla.

## Paso 5. Insertar tus recursos (iframes)

En `datos.js`, para cada momento, pega en `embed` el enlace de inserción de tu recurso:

| Plataforma | Dónde se obtiene el enlace | Forma del enlace |
|---|---|---|
| YouTube | Compartir ▸ Insertar | `https://www.youtube.com/embed/CODIGO` |
| Educaplay | Compartir ▸ Insertar | `https://es.educaplay.com/juego/…` |
| Canva | Compartir ▸ Más ▸ Insertar | `https://www.canva.com/design/…/view?embed` |
| Wayground (Quizizz) | Compartir ▸ Insertar | `https://wayground.com/embed/…` |
| Heyzine (flipbook) | Share ▸ Embed | `https://heyzine.com/flip-book/….html` |
| Kahoot | No permite insertarse | Usa el campo `enlace` con el enlace del juego |

Puedes pegar solo el enlace o el código `<iframe …>` completo; la página toma el enlace automáticamente.

Ejemplo:

```js
anticipacion: {
  recursos: [
    { actividad: "Observan un video corto sobre las partes de la ventana de Word…",
      recurso: "Video de YouTube «Partes de la ventana de Word»", plataforma: "YouTube",
      embed: "https://www.youtube.com/embed/CODIGO", enlace: "" },
    { actividad: "En parejas relacionan cada parte de Word con su función…",
      recurso: "Educaplay «Relacionar columnas: partes de Word»", plataforma: "Educaplay",
      embed: "https://es.educaplay.com/juego/1234567-partes_de_word.html", enlace: "" }
  ]
},
```

## Paso 6. Software educativo en Pilas Engine

1. En Pilas Engine exporta tu juego como **HTML** (se descarga `mi-proyecto.zip`).
2. Descomprímelo: aparecen el archivo `LEER` y la carpeta **`proyecto`**.
3. En GitHub entra a `recursos ▸ pilas-engine`, pulsa **Add file ▸ Upload files**, arrastra la carpeta **`proyecto` completa** y pulsa **Commit changes**.
4. En `datos.js`, dentro de `software`, escribe:

```js
    embed: "recursos/pilas-engine/proyecto/index.html",
    enlace: "recursos/pilas-engine/proyecto/index.html",
```

Para comprobarlo, abre `https://TU-USUARIO.github.io/practicas-acc-6egb/recursos/pilas-engine/proyecto/index.html`: si el juego funciona ahí, también se verá en la página.

## Paso 7. Ver los cambios

Cada vez que guardas (**Commit changes**), GitHub vuelve a publicar la página en 1 o 2 minutos (pestaña **Actions**, visto verde ✓). Luego recarga la página. Si no ves el cambio, pulsa **Ctrl + F5** o ábrela en una ventana de incógnito (Ctrl + Shift + N).

---

## Identidad visual (Manual Corporativo UNL)

La plantilla ya aplica el manual; **no cambies** los colores, las tipografías ni los logotipos de `assets/`.

- Colores corporativos: rojo `#BF0811`, verde `#4F8E3A`, azul `#004C7B`, negro `#211915`.
- Tipografías: Montserrat en los títulos y Arial en los textos.
- El logotipo no se estira, no se gira, no se recolorea ni se coloca dentro de cajas.
- Para cambiar las fotos del carrusel, súbelas a `assets/img/` (horizontales, mínimo 1200 px de ancho) y escribe su nombre en `imagen`.

## Antes de entregar

- [ ] La página abre en la dirección de GitHub Pages.
- [ ] Tus datos (nombre, ciclo, paralelo) son correctos.
- [ ] Cada momento de cada planificación muestra su recurso o, en Kahoot, el botón para abrirlo.
- [ ] El juego de Pilas Engine se abre y se puede jugar al final de la página.
- [ ] Los recursos son públicos (cualquier persona con el enlace puede verlos).
- [ ] No se publican fotos, nombres ni datos personales de los niños.
- [ ] Las imágenes y textos de terceros se citan en formato APA 7.

Envía al docente tutor la dirección de tu página (`https://TU-USUARIO.github.io/practicas-acc-6egb/`) por el EVA.
