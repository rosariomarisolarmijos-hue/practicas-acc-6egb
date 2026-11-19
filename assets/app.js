/* Genera la página a partir de datos.js. No es necesario editar este archivo. */
(function () {
  const P = typeof PRACTICA !== 'undefined' ? PRACTICA : null;
  if (!P) { document.body.insertAdjacentHTML('afterbegin', '<p style="padding:1rem">No se encontró datos.js</p>'); return; }

  // Formatos de planificación: la página usa SOLO el ciclo indicado en datos.js (ciclo: "ERCA" o "ACC").
  const CICLOS = {
    ERCA: {
      nombre: 'Ciclo de aprendizaje ERCA', corto: 'Ciclo ERCA', unidad: 'Fase',
      intro: 'Cada planificación se desarrolla en cuatro fases que forman un ciclo; cada fase tiene su propio recurso digital.',
      etapas: [
        { id: 'experiencia', nombre: 'Experiencia', guia: 'parte de una vivencia o situación concreta', sugerido: 'Video, imagen o situación real' },
        { id: 'reflexion', nombre: 'Reflexión', guia: 'analiza y comenta la experiencia', sugerido: 'Juego, preguntas u organizador' },
        { id: 'conceptualizacion', nombre: 'Conceptualización', guia: 'construye el nuevo conocimiento', sugerido: 'Presentación o infografía' },
        { id: 'aplicacion', nombre: 'Aplicación', guia: 'aplica lo aprendido', sugerido: 'Cuestionario, juego o producto' }
      ]
    },
    ACC: {
      nombre: 'Momentos de la clase ACC', corto: 'Momentos ACC', unidad: 'Momento',
      intro: 'Cada planificación se desarrolla en tres momentos sucesivos; cada momento puede tener uno o varios recursos digitales.',
      etapas: [
        { id: 'anticipacion', nombre: 'Anticipación', guia: 'activa los conocimientos previos', sugerido: 'Video y juego de exploración' },
        { id: 'construccion', nombre: 'Construcción', guia: 'aborda los nuevos contenidos', sugerido: 'Presentación o infografía' },
        { id: 'consolidacion', nombre: 'Consolidación', guia: 'aplica lo aprendido', sugerido: 'Cuestionario, juego o producto' }
      ]
    }
  };
  const CICLO = CICLOS[String(P.ciclo || 'ERCA').toUpperCase()] || CICLOS.ERCA;
  const CLAVE = CICLO === CICLOS.ACC ? 'ACC' : 'ERCA';

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = (id) => document.getElementById(id);
  // Acepta el enlace "src" o el código <iframe> completo pegado desde la plataforma.
  const srcDe = (v) => { const s = String(v || '').trim(); const m = s.match(/src\s*=\s*["']([^"']+)["']/i); return m ? m[1] : s; };

  function marco(r, titulo) {
    const src = srcDe(r.embed);
    const abrir = r.enlace || src;
    const boton = abrir ? `<a class="boton" href="${esc(abrir)}" target="_blank" rel="noopener">Abrir en una pestaña nueva ↗</a>` : '';
    if (src) {
      const prop = r.proporcion ? ` style="aspect-ratio:${esc(r.proporcion)}"` : '';
      return `<div class="marco${r.alto ? ' marco--alto' : ''}"${prop}><iframe src="${esc(src)}" title="${esc(titulo)}" loading="lazy"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture; clipboard-write"
                allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><p class="acciones">${boton}</p>`;
    }
    if (r.enlace) {
      return `<div class="marco marco--enlace"><p><strong>${esc(r.plataforma || 'Recurso')}</strong> no permite mostrarse dentro de la página.</p>${boton}</div>`;
    }
    const soloEnlace = /kahoot/i.test(r.plataforma || '');
    return `<div class="marco marco--vacio"><p><span class="marco__icono" aria-hidden="true">＋</span><strong>${soloEnlace ? 'Agrega aquí' : 'Inserta aquí'} tu recurso de ${esc(r.plataforma || 'la plataforma')}</strong><br>
      ${soloEnlace ? 'Kahoot no se puede insertar: pega el enlace del juego en <code>datos.js</code>, campo <code>enlace</code>.' : 'Pega su enlace de inserción en <code>datos.js</code>, campo <code>embed</code>.'}</p></div>`;
  }

  // Cabecera, portada y datos
  const E = P.encabezado || {};
  $('enc-titulo').textContent = E.titulo || P.titulo || '';
  const etq = $('enc-etiqueta'); if (E.etiqueta) etq.textContent = E.etiqueta; else etq.remove();
  const I = P.institucion || {};
  $('institucion-corta').textContent = [I.nombre, I.asignatura, I.grado && I.grado.split('·')[0].trim()].filter(Boolean).join(' · ');
  $('institucion').textContent = [I.nombre, I.asignatura, I.grado, I.unidad, I.anio].filter(Boolean).join(' · ');
  $('datos').innerHTML = (P.datos || []).map(([k, v]) => `<div class="ficha__item${k.toLowerCase() === 'tema' ? ' ficha__item--ancho' : ''}"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
  $('formato').innerHTML = `<span>Formato ${esc(CLAVE)}</span> ${CICLO.etapas.map((e) => esc(e.nombre)).join(' → ')}`;
  $('t-ciclo').textContent = CICLO.nombre;
  $('ciclo-intro').textContent = CICLO.intro;
  const destino = (et) => `#e-${esc((P.planificaciones || [{}])[0].numero)}-${et.id}`;
  const leyenda = CICLO.etapas.map((et, n) => `<li class="esquema__item etapa--${et.id}">
      <a href="${destino(et)}"><span class="esquema__num">${CLAVE === 'ERCA' ? n + 1 : esc(et.nombre[0])}</span>
      <span><strong>${esc(et.nombre)}</strong> ${esc(et.guia)}.<br><small>Recurso sugerido: ${esc(et.sugerido)}</small></span></a></li>`).join('');
  if (CLAVE === 'ERCA') {
    // Ciclo: cuatro fases alrededor de un círculo
    const pos = [[300, 50], [490, 200], [300, 350], [110, 200]];
    const col = ['#004C7B', '#4F8E3A', '#BF0811', '#211915'];
    const nodos = CICLO.etapas.map((et, n) => `<a href="${destino(et)}"><g>
        <rect x="${pos[n][0] - 100}" y="${pos[n][1] - 30}" width="200" height="60" rx="30" fill="${col[n]}"/>
        <text x="${pos[n][0]}" y="${pos[n][1] + 6}" text-anchor="middle">${n + 1}. ${esc(et.nombre)}</text></g></a>`).join('');
    const flechas = ['M402,62 Q478,90 490,162', 'M490,238 Q478,316 402,340', 'M198,340 Q122,316 110,238', 'M110,162 Q122,90 198,62']
      .map((d) => `<path d="${d}" marker-end="url(#punta)"/>`).join('');
    $('ciclo-esquema').innerHTML = `<div class="esquema esquema--erca">
      <svg viewBox="0 0 600 400" role="img" aria-label="Ciclo ERCA: Experiencia, Reflexión, Conceptualización y Aplicación">
        <defs><marker id="punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#9aa6ad"/></marker></defs>
        <g class="esquema__flechas">${flechas}</g>
        <circle cx="300" cy="200" r="64" class="esquema__centro"/>
        <text x="300" y="194" text-anchor="middle" class="esquema__centro-t">CICLO</text>
        <text x="300" y="220" text-anchor="middle" class="esquema__centro-t esquema__centro-t--g">ERCA</text>
        <g class="esquema__nodos">${nodos}</g>
      </svg>
      <ol class="esquema__lista">${leyenda}</ol></div>`;
  } else {
    // Secuencia: tres momentos de la clase
    $('ciclo-esquema').innerHTML = `<div class="esquema esquema--acc">
      <ol class="pasos">${CICLO.etapas.map((et, n) => `<li class="paso etapa--${et.id}"><a href="${destino(et)}">
        <span class="paso__num">${n + 1}</span><strong>${esc(et.nombre)}</strong><span>${esc(et.guia)}</span><small>Recurso sugerido: ${esc(et.sugerido)}</small></a></li>`).join('')}</ol></div>`;
  }
  $('flipbook').innerHTML = marco({ ...(P.flipbook || {}), plataforma: 'Heyzine', alto: true }, 'Planificaciones microcurriculares');

  // Menú
  const planes = P.planificaciones || [];
  const subPlanes = planes.map((pl) => `<li><a href="#plan-${esc(pl.numero)}">Planificación ${esc(pl.numero)}</a></li>`).join('');
  $('menu').innerHTML = `<ul class="menu__lista">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#datos-practica">La práctica</a></li>
      <li><a href="#ciclo">${esc(CICLO.corto)}</a></li>
      <li class="menu__grupo"><a href="#planificaciones">Planificaciones</a><ul class="menu__sub">${subPlanes}</ul></li>
      ${P.software ? '<li><a href="#software-educativo">Recurso educativo digital</a></li>' : ''}
    </ul>`;

  // Menú en celular
  const botonMenu = $('menu-boton'), cab = $('cabecera');
  botonMenu.addEventListener('click', () => {
    const abierto = cab.classList.toggle('cabecera--abierta');
    botonMenu.setAttribute('aria-expanded', abierto); botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  });
  $('menu').addEventListener('click', (e) => { if (e.target.closest('a')) { cab.classList.remove('cabecera--abierta'); botonMenu.setAttribute('aria-expanded', false); } });
  // Cabecera transparente sobre el carrusel y azul al desplazarse
  const alDesplazar = () => cab.classList.toggle('cabecera--solida', cab.getBoundingClientRect().top <= 0 && window.scrollY > document.querySelector('.encabezado').offsetHeight + 20);
  window.addEventListener('scroll', alDesplazar, { passive: true }); alDesplazar();

  // Carrusel de portada
  const diapos = (P.portada || []).filter((d) => d && d.imagen);
  if (diapos.length) {
    $('carrusel').innerHTML = diapos.map((d, k) => `<article class="diapo${k === 0 ? ' diapo--activa' : ''}" role="group" aria-roledescription="diapositiva" aria-label="${k + 1} de ${diapos.length}" ${k ? 'aria-hidden="true"' : ''}>
        <img class="diapo__img" src="${esc(d.imagen)}" alt="${esc(d.alt || '')}"${d.posicion ? ` style="object-position:${esc(d.posicion)}"` : ''} ${k ? 'loading="lazy"' : 'fetchpriority="high"'}>
        <div class="contenedor diapo__contenido"><div class="diapo__panel">
          ${k === 0 ? `<h1 class="diapo__titulo">${esc(d.titulo || '')}</h1>` : `<h2 class="diapo__titulo">${esc(d.titulo || '')}</h2>`}
          ${d.texto ? `<p class="diapo__texto">${esc(d.texto)}</p>` : ''}
          ${d.destino ? `<a class="diapo__boton" href="${esc(d.destino)}" ${k ? 'tabindex="-1"' : ''}>${esc(d.boton || 'Leer más')} <span aria-hidden="true">&gt;&gt;</span></a>` : ''}
        </div></div></article>`).join('');
    $('car-puntos').innerHTML = diapos.map((d, k) => `<button type="button" class="carrusel__punto${k === 0 ? ' carrusel__punto--activo' : ''}" aria-label="Ver imagen ${k + 1}"></button>`).join('');
    const items = [...document.querySelectorAll('.diapo')], puntos = [...document.querySelectorAll('.carrusel__punto')];
    let actual = 0, temporizador = null;
    const ir = (n) => {
      actual = (n + items.length) % items.length;
      items.forEach((it, k) => {
        const on = k === actual; it.classList.toggle('diapo--activa', on);
        on ? it.removeAttribute('aria-hidden') : it.setAttribute('aria-hidden', 'true');
        const b = it.querySelector('.diapo__boton'); if (b) on ? b.removeAttribute('tabindex') : b.setAttribute('tabindex', '-1');
      });
      puntos.forEach((p, k) => p.classList.toggle('carrusel__punto--activo', k === actual));
    };
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const iniciar = () => { if (!reducir && items.length > 1) { clearInterval(temporizador); temporizador = setInterval(() => ir(actual + 1), 6000); } };
    const detener = () => clearInterval(temporizador);
    $('car-ant').addEventListener('click', () => { ir(actual - 1); iniciar(); });
    $('car-sig').addEventListener('click', () => { ir(actual + 1); iniciar(); });
    puntos.forEach((p, k) => p.addEventListener('click', () => { ir(k); iniciar(); }));
    const car = $('inicio');
    car.addEventListener('mouseenter', detener); car.addEventListener('mouseleave', iniciar);
    car.addEventListener('focusin', detener); car.addEventListener('focusout', iniciar);
    let x0 = null;
    car.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    car.addEventListener('touchend', (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { ir(actual + (dx < 0 ? 1 : -1)); iniciar(); } x0 = null; });
    if (items.length < 2) { $('car-ant').hidden = $('car-sig').hidden = true; }
    iniciar();
  }

  // Planificaciones según el ciclo elegido
  // Cada fase o momento admite un recurso (campos recurso/plataforma/embed/enlace)
  // o varios recursos en una lista: recursos: [ {…}, {…} ]
  const listaRecursos = (e) => Array.isArray(e.recursos) ? e.recursos : (e.recurso || e.plataforma || e.embed || e.enlace ? [e] : []);
  $('planes').innerHTML = planes.map((pl) => {
    const datosEtapas = pl.etapas || pl.fases || pl.momentos || {};
    const etapas = CICLO.etapas.map((et, n) => {
      const e = datosEtapas[et.id] || {};
      const recs = listaRecursos(e);
      const lista = recs.length ? recs : [{}];
      const etiquetaBase = CLAVE === 'ERCA' ? `Fase ERCA · ${et.nombre}` : `Momento ACC · ${et.nombre}`;
      const tarjetas = lista.map((r, k) => {
        const etiqueta = etiquetaBase + (lista.length > 1 ? ` · Actividad ${k + 1}` : '');
        const actividad = r.actividad || (k === 0 ? e.actividad : '');
        return `<article class="fase">
            <p class="fase__etiqueta">${esc(etiqueta)}</p>
            ${actividad ? `<p>${esc(actividad)}</p>` : ''}
            ${r.recurso ? `<p class="fase__recurso"><strong>Recurso digital:</strong> ${esc(r.recurso)}</p>` : ''}
            ${marco(r, `${r.recurso || et.nombre} – Planificación ${pl.numero}`)}
          </article>`;
      }).join('');
      const num = CLAVE === 'ERCA' ? `${n + 1}. ` : '';
      return `<section class="etapa etapa--${et.id}" aria-labelledby="e-${pl.numero}-${et.id}">
          <h4 class="etapa__titulo" id="e-${pl.numero}-${et.id}">${num}${esc(et.nombre.toUpperCase())} <span>(${esc(et.guia)})</span></h4>
          <div class="etapa__cuerpo etapa__recursos${lista.length > 1 ? ' etapa__recursos--2' : ''}">${tarjetas}</div>
        </section>`;
    }).join('');
    return `<section class="bloque plan" id="plan-${esc(pl.numero)}" aria-labelledby="t-plan-${esc(pl.numero)}">
        <h2 class="titulo-seccion" id="t-plan-${esc(pl.numero)}">Planificación microcurricular Nro. ${esc(pl.numero)}</h2>
        <p class="plan__nombre">«${esc(pl.titulo)}»</p>
        <p class="subtitulo">${esc(pl.duracion || '')}</p>
        ${pl.destrezas ? `<p class="plan__destrezas"><strong>Destrezas con criterios de desempeño:</strong> ${esc(pl.destrezas)}</p>` : ''}
        <nav class="plan__accesos" aria-label="Ir a ${CLAVE === 'ERCA' ? 'una fase' : 'un momento'}">${CICLO.etapas.map((et, n) => `<a class="etapa--${et.id}" href="#e-${esc(pl.numero)}-${et.id}">${CLAVE === 'ERCA' ? `${n + 1}. ` : ''}${esc(et.nombre)}</a>`).join('')}</nav>
        <h3 class="plan__desarrollo">Desarrollo <span>(${CLAVE === 'ERCA' ? 'fases del ciclo ERCA que guían el proceso de aprendizaje' : 'momentos de la clase ACC que guían el proceso de aprendizaje'})</span></h3>
        ${etapas}
      </section>`;
  }).join('');

  // Recurso educativo digital
  const S = P.software;
  if (S) {
    $('software').innerHTML = `<p class="software__titulo">${esc(S.titulo || '')}</p>
      ${S.descripcion ? `<p class="subtitulo">${esc(S.descripcion)}</p>` : ''}
      <div class="software">${marco(S, S.titulo || 'Recurso educativo digital')}</div>`;
  } else {
    $('software-educativo').remove();
  }

  // Pie
  const anio = document.getElementById('anio'); if (anio) anio.textContent = new Date().getFullYear();
})();
