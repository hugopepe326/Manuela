/* ——— LA PÁGINA DE MANUELA · lógica ——— */

const POEMAS_INICIALES = [
  {
    titulo: "La Luna Curiosa",
    categoria: "Naturaleza",
    emoji: "🌙",
    firma: "Manuela",
    degradado: "linear-gradient(92deg,#7FB5D5,#9B7EBD)",
    fondoIcono: "#E3F1FA",
    texto: `La luna me mira\ndesde su balcón de estrellas,\nme guiña un ojito\ny me cuenta cosas bellas.\n\nMe dice que de noche\nlos sueños salen a pasear,\nque cada estrella es un deseo\nque alguien pidió al soñar.\n\nY yo le canto bajito\npara que no sienta frío,\n¡buenas noches, lunita,\endulza siempre el cielo mío!`
  },
  {
    titulo: "Mi Mejor Amiga",
    categoria: "Amistad",
    emoji: "💛",
    firma: "Manuela",
    degradado: "linear-gradient(92deg,#FFB88C,#FF7BAC)",
    fondoIcono: "#FFEEDD",
    texto: `En el recreo te busco\ny ya estás ahí,\ncon tu sonrisa grande\nguardas un lugar para mí.\n\nCompartimos el sándwich,\nlos colores y el balón,\ny cuando estoy triste\nme prestas tu corazón.\n\nSi la risa fuera oro,\ntú serías mi tesoro,\nporque una amiga como tú\nvale más que todo el oro.`
  },
  {
    titulo: "El Dragón de Colores",
    categoria: "Fantasía",
    emoji: "🐉",
    firma: "Manuela",
    degradado: "linear-gradient(92deg,#5CC8AD,#7FB5D5)",
    fondoIcono: "#DDF5EC",
    texto: `En mi jardín vive un dragón\nque no echa fuego, ¡echa color!\nSi estornuda sale rosa,\nsi bosteza, sale amor.\n\nTiene escamas de arcoíris\ny alas de papel,\nme lleva a volar bajito\nhasta el país de la miel.\n\nMe dijo un secreto al oído:\n“Los miedos se vuelven chiquitos\nsi los pintas de colores\ny les cantas bajito”.`
  },
  {
    titulo: "Lluvia de Verano",
    categoria: "Naturaleza",
    emoji: "🌧️",
    firma: "Manuela",
    degradado: "linear-gradient(92deg,#9B7EBD,#5CC8AD)",
    fondoIcono: "#EDE6F8",
    texto: `Plip, plop, cae la lluvia\nsobre el techo de cristal,\nparece que las nubes\nestán jugando a cantar.\n\nSalgo con mis botas\n¡a saltar charco tras charco!\nCada gota es una risa,\ncada trueno, un barco.\n\nCuando sale el sol de nuevo\ny el cielo se pone a brillar,\nla lluvia me deja un regalo:\nun arcoíris para jugar.`
  },
  {
    titulo: "Mi Gata Nube",
    categoria: "Animales",
    emoji: "🐱",
    firma: "Manuela",
    degradado: "linear-gradient(92deg,#FF7BAC,#FFB88C)",
    fondoIcono: "#FFE3EC",
    texto: `Mi gata se llama Nube\nporque es blanca y suavecita,\nduerme hecha bolita\ny ronronea bajita.\n\nPersigue pelusas,\nse esconde en el sillón,\ny cuando me ve triste\nme da su corazón.\n\nNube, nubecita,\nbigotes de algodón,\ngracias por quedarte\nsiempre en mi rincón.`
  },
  {
    titulo: "Si Fuera Superheroína",
    categoria: "Sueños",
    emoji: "🦸‍♀️",
    firma: "Manuela",
    degradado: "linear-gradient(92deg,#E65A8D,#7A5CA6)",
    fondoIcono: "#FFE3EC",
    texto: `Si fuera superheroína\ntendría capa de flores,\nmi poder sería la risa\ny curaría los dolores.\n\nVolaría a las escuelas\na repartir abrazos,\ny a los que están solitos\nles daría mil lazos.\n\nNo necesito máscara,\nmi sonrisa es mi señal:\n¡ser buena con todos\nes el poder más real!`
  },
  {
    titulo: "Las Frutas",
    categoria: "Naturaleza",
    emoji: "🍉",
    firma: "Manuela",
    degradado: "linear-gradient(92deg,#FF7BAC,#FFB88C)",
    fondoIcono: "#FFEEDD",
    texto: `Oigo tu melodía\npara comer una sandía.\n\nTe veo todas las mañanas\npara ir a comer una banana.\n\nPonete las zapatillas,\nasí comes una frutilla.\n\nTe quiero un montón\ny voy a saludar a melocotón.\n\nSi tú quieres ser una bailarina,\ncómete una mandarina.`
  }
];

const IDEAS = [
  "Escribe un poema a tu peluche favorito 🧸",
  "¿Cómo suena la risa de tu mejor amiga? 💛",
  "Imagina que las nubes son helados. ¿De qué sabor es cada una? ☁️🍨",
  "Un poema para un día de lluvia con botas de colores 🌧️",
  "¿Qué te diría tu mascota si pudiera hablar? 🐾",
  "Describe el olor del pan calientito en versos 🍞",
  "Escribe sobre un dragón que tiene miedo a la oscuridad 🐉🌙",
  "Un poema para la luna cuando está redondita 🌕",
  "¿A dónde viajan tus sueños cuando duermes? 💭",
  "Escribe sobre el abrazo de mamá o papá 🤗",
  "Imagina una fiesta en el fondo del mar 🐠",
  "Un poema con las palabras: mariposa, recreo y chocolate 🦋"
];

const EMOJIS = ["🌷","🌙","🦋","🌈","🐱","🐉","⭐","🍓"];
const FONDOS = [
  { nombre: "Menta 🌿", deg: "linear-gradient(92deg,#5CC8AD,#7FB5D5)", fondo: "#DDF5EC" },
  { nombre: "Rosa 🌸", deg: "linear-gradient(92deg,#FF7BAC,#FFB88C)", fondo: "#FFE3EC" },
  { nombre: "Lila 🦋", deg: "linear-gradient(92deg,#9B7EBD,#FF7BAC)", fondo: "#EDE6F8" },
  { nombre: "Melocotón 🍑", deg: "linear-gradient(92deg,#FFB88C,#FF7BAC)", fondo: "#FFEEDD" },
  { nombre: "Cielo ☁️", deg: "linear-gradient(92deg,#7FB5D5,#9B7EBD)", fondo: "#E3F1FA" }
];
let emojiElegido = "🌷";
let fondoElegido = FONDOS[0];
let filtroActual = "todas";
let likesTotales = 0;

const grid = document.getElementById("grid-poemas");
const mensajeVacio = document.getElementById("mensaje-vacio");

function cargarPoemas() {
  try {
    const guardados = JSON.parse(localStorage.getItem("manuela_poemas") || "[]");
    return [...guardados, ...POEMAS_INICIALES];
  } catch { return [...POEMAS_INICIALES]; }
}
function poemasCreados() {
  try { return JSON.parse(localStorage.getItem("manuela_poemas") || "[]"); }
  catch { return []; }
}
let poemas = cargarPoemas();
let likes = JSON.parse(localStorage.getItem("manuela_likes") || "{}");
likesTotales = Object.values(likes).filter(Boolean).length;

function guardarLikes() {
  localStorage.setItem("manuela_likes", JSON.stringify(likes));
  document.getElementById("contador-likes").textContent = Object.values(likes).filter(Boolean).length;
}
document.getElementById("contador-likes").textContent = Object.values(likes).filter(Boolean).length;

function extracto(texto) {
  const plano = String(texto ?? "").replace(/<[^>]*>/g, " ");
  const lineas = plano.split("\n").filter(l => l.trim() !== "");
  const corto = lineas.slice(0, 3).join("\n");
  return corto.length > 140 ? corto.slice(0, 140) + "..." : corto + "...";
}

/* Limpia el HTML del editor: solo permite formato bonito y seguro */
function sanear(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  tmp.querySelectorAll("script, style, iframe, object, embed, link, meta").forEach(n => n.remove());
  tmp.querySelectorAll("*").forEach(n => {
    const tag = n.tagName.toLowerCase();
    if (!["b","strong","i","em","u","br","div","p","span","font"].includes(tag)) {
      n.replaceWith(document.createTextNode(n.textContent));
      return;
    }
    [...n.attributes].forEach(a => {
      if (!(a.name === "style" && tag === "span")) n.removeAttribute(a.name);
    });
    if (tag === "span") {
      const color = n.style.color;
      const align = n.parentElement?.style?.textAlign;
      n.removeAttribute("style");
      if (color && /^rgb|#/i.test(color)) n.style.color = color;
      if (n.textContent.trim() === "") n.remove();
    }
    if (tag === "font") {
      const c = n.getAttribute("color");
      const s = document.createElement("span");
      if (c) s.style.color = c;
      s.innerHTML = escapar(n.textContent);
      n.replaceWith(s);
    }
  });
  // conserva alineación centrada del editor
  tmp.querySelectorAll("div, p").forEach(n => {
    const a = n.style.textAlign;
    [...n.attributes].forEach(x => n.removeAttribute(x.name));
    if (a === "center" || a === "right") n.style.textAlign = a;
  });
  return tmp.innerHTML;
}

function colorPorCategoria(cat) {
  const mapa = {
    "Naturaleza": ["linear-gradient(92deg,#5CC8AD,#7FB5D5)", "#DDF5EC", "🌿 Naturaleza"],
    "Amistad": ["linear-gradient(92deg,#FFB88C,#FF7BAC)", "#FFEEDD", "💛 Amistad"],
    "Fantasía": ["linear-gradient(92deg,#9B7EBD,#FF7BAC)", "#EDE6F8", "🐉 Fantasía"],
    "Sueños": ["linear-gradient(92deg,#7A5CA6,#7FB5D5)", "#EDE6F8", "☁️ Sueños"],
    "Animales": ["linear-gradient(92deg,#FF7BAC,#FFB88C)", "#FFE3EC", "🐾 Animales"]
  };
  return mapa[cat] || mapa["Sueños"];
}

function renderPoemas() {
  const filtrados = poemas
    .map((p, i) => ({ ...p, idx: i }))
    .filter(p => filtroActual === "todas" || p.categoria === filtroActual);

  grid.innerHTML = "";
  mensajeVacio.classList.toggle("hidden", filtrados.length > 0);

  filtrados.forEach((p) => {
    const [deg, fondo, etiqueta] = p.degradado
      ? [p.degradado, p.fondoIcono || "#FFE3EC", p.categoria]
      : colorPorCategoria(p.categoria);
    const liked = likes[p.titulo];
    const esMio = p.mio === true;
    const cuerpo = p.textoHTML ? sanear(p.textoHTML) : escapar(p.texto);
    const esHTML = !!p.textoHTML;

    const card = document.createElement("article");
    card.className = "tarjeta-poema reveal visible";
    card.style.setProperty("--degradado", deg);
    card.style.setProperty("--fondo-icono", fondo);
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <div class="icono-poema">${p.emoji || "🌷"}</div>
        ${esMio ? `<span class="etiqueta" style="background:#DDF5EC;color:#3AA88A">✨ mío</span>` : ""}
      </div>
      <h3 class="font-titulo font-extrabold text-2xl mt-3 leading-tight">${escapar(p.titulo)}</h3>
      ${esHTML
        ? `<div class="verso-formato text-[1.35rem] leading-snug text-chocolate/85 mt-2 flex-1 overflow-hidden" style="display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical">${cuerpo}</div>`
        : `<p class="font-mano text-[1.35rem] leading-snug text-chocolate/80 mt-2 whitespace-pre-line flex-1">${escapar(extracto(p.texto))}</p>`}
      <div class="mt-4"><span class="etiqueta" style="background:${fondo};color:#4A3F55">${etiquetaConEmoji(p.categoria)}</span></div>
      <div class="flex items-center justify-between mt-4 pt-4 border-t border-dashed border-chocolate/10">
        <button class="link-leer" data-leer="${p.idx}">Leer entero →</button>
        <button class="btn-corazon ${liked ? "liked" : ""}" data-like="${escapar(p.titulo)}">${liked ? "💜" : "🤍"} <span>${liked ? "¡Me encanta!" : "Me encanta"}</span></button>
      </div>
      ${esMio ? `<button class="btn-borrar mt-2 self-end" data-borrar="${escapar(p.titulo)}">🗑 borrar</button>` : ""}
      <p class="text-xs font-bold text-chocolateSuave mt-1">— ${escapar(p.firma || "Manuela")}</p>
    `;
    grid.appendChild(card);
  });

  document.getElementById("contador-poemas").textContent = poemas.length;

  grid.querySelectorAll("[data-leer]").forEach(b =>
    b.addEventListener("click", () => abrirPoema(Number(b.dataset.leer))));
  grid.querySelectorAll("[data-like]").forEach(b =>
    b.addEventListener("click", () => toggleLike(b.dataset.like, b)));
  grid.querySelectorAll("[data-borrar]").forEach(b =>
    b.addEventListener("click", () => borrarPoema(b.dataset.borrar)));
}

function etiquetaConEmoji(cat) {
  const mapa = { "Naturaleza": "🌿 Naturaleza", "Amistad": "💛 Amistad", "Fantasía": "🐉 Fantasía", "Sueños": "☁️ Sueños", "Animales": "🐾 Animales" };
  return mapa[cat] || "🌼 " + cat;
}

function escapar(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function toggleLike(titulo, btn) {
  likes[titulo] = !likes[titulo];
  guardarLikes();
  btn.classList.toggle("liked", !!likes[titulo]);
  btn.innerHTML = likes[titulo] ? "💜 <span>¡Me encanta!</span>" : "🤍 <span>Me encanta</span>";
  if (likes[titulo]) toast("¡Gracias por tu amor! 💜");
}

function borrarPoema(titulo) {
  const creados = poemasCreados().filter(p => p.titulo !== titulo);
  localStorage.setItem("manuela_poemas", JSON.stringify(creados));
  poemas = cargarPoemas();
  renderPoemas();
  toast("Poema borrado 🗑️");
}

/* Filtros */
document.querySelectorAll("#filtros .filtro").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#filtros .filtro").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");
    filtroActual = btn.dataset.filtro;
    renderPoemas();
  });
});

/* Modal */
const modal = document.getElementById("modal");
function abrirPoema(idx) {
  const p = poemas[idx];
  if (!p) return;
  const cuerpo = p.textoHTML
    ? `<div class="verso-formato text-[1.6rem] leading-snug">${sanear(p.textoHTML)}</div>`
    : `<p class="font-mano text-[1.6rem] leading-snug whitespace-pre-line">${escapar(p.texto)}</p>`;
  document.getElementById("modal-contenido").innerHTML = `
    <div class="text-6xl mb-2">${p.emoji || "🌷"}</div>
    <span class="etiqueta" style="background:#EDE6F8;color:#7A5CA6">${etiquetaConEmoji(p.categoria)}</span>
    <h3 class="font-titulo font-extrabold text-4xl mt-3 leading-tight">${escapar(p.titulo)}</h3>
    <p class="font-mano text-2xl text-chocolateSuave">por ${escapar(p.firma || "Manuela")} ✍️</p>
    <div class="bg-white rounded-3xl p-6 mt-4 shadow-suave">
      ${cuerpo}
    </div>
    <p class="text-center mt-4 text-xl">🌸 💜 🌸</p>
  `;
  modal.classList.remove("hidden");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}
function cerrarModal() {
  modal.classList.add("hidden");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}
document.getElementById("modal-cerrar").addEventListener("click", cerrarModal);
document.getElementById("modal-fondo").addEventListener("click", cerrarModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarModal(); });
window.abrirPoema = abrirPoema;

/* Formulario */
const selector = document.getElementById("selector-emoji");
EMOJIS.forEach((e, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "emoji-opt" + (i === 0 ? " selected" : "");
  b.textContent = e;
  b.addEventListener("click", () => {
    selector.querySelectorAll(".emoji-opt").forEach(x => x.classList.remove("selected"));
    b.classList.add("selected");
    emojiElegido = e;
    if (typeof actualizarVistaPrevia === "function") actualizarVistaPrevia();
  });
  selector.appendChild(b);
});

/* ——— Editor bonito con formato ——— */
const editor = document.getElementById("editor");
const inputTitulo = document.getElementById("titulo");
const inputCat = document.getElementById("categoria");
const inputFirma = document.getElementById("firma");

/* Botones B / I / U / alinear */
document.querySelectorAll(".toolbar [data-cmd]").forEach(btn => {
  btn.addEventListener("click", () => {
    editor.focus();
    const cmd = btn.dataset.cmd;
    if (cmd === "removeFormat") {
      document.execCommand("removeFormat", false, null);
      document.execCommand("foreColor", false, "#4A3F55");
    } else {
      document.execCommand(cmd, false, null);
    }
    btn.classList.toggle("activo", cmd !== "removeFormat" && document.queryCommandState(cmd));
    actualizarVistaPrevia();
  });
});

/* Colores */
document.querySelectorAll(".tool-color").forEach(btn => {
  btn.addEventListener("click", () => {
    editor.focus();
    document.execCommand("foreColor", false, btn.dataset.color);
    actualizarVistaPrevia();
  });
});

/* Letra más grande: envuelve la selección en un span grande */
document.getElementById("tool-grande").addEventListener("click", () => {
  editor.focus();
  document.execCommand("fontSize", false, "5");
  editor.querySelectorAll('font[size="5"]').forEach(f => {
    const s = document.createElement("span");
    s.style.fontSize = "1.9rem";
    s.innerHTML = f.innerHTML;
    f.replaceWith(s);
  });
  actualizarVistaPrevia();
});

/* Estrellita rápida */
document.getElementById("tool-emoji").addEventListener("click", () => {
  editor.focus();
  document.execCommand("insertText", false, "⭐ ");
  actualizarVistaPrevia();
});

editor.addEventListener("input", () => {
  const plano = editor.innerText || "";
  document.getElementById("contador-caracteres").textContent = Math.min(plano.length, 1200);
  if (plano.length > 1200) {
    editor.innerText = plano.slice(0, 1200);
    toast("¡Hasta aquí por hoy! 1200 letras es un montón 📝");
  }
  actualizarVistaPrevia();
});
editor.addEventListener("paste", (e) => {
  e.preventDefault();
  const texto = (e.clipboardData || window.clipboardData).getData("text/plain").slice(0, 1200);
  document.execCommand("insertText", false, texto);
});

/* Selector de fondo de tarjeta */
const selectorFondo = document.getElementById("selector-fondo");
FONDOS.forEach((f, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "fondo-opt" + (i === 0 ? " selected" : "");
  b.innerHTML = `<span class="fondo-muestra" style="background:${f.deg}"></span>${f.nombre}`;
  b.addEventListener("click", () => {
    selectorFondo.querySelectorAll(".fondo-opt").forEach(x => x.classList.remove("selected"));
    b.classList.add("selected");
    fondoElegido = f;
    actualizarVistaPrevia();
  });
  selectorFondo.appendChild(b);
});

/* Vista previa en vivo */
function actualizarVistaPrevia() {
  document.getElementById("vp-emoji").textContent = emojiElegido;
  document.getElementById("vp-titulo").textContent = inputTitulo.value.trim() || "Tu título aquí...";
  const html = editor.innerHTML.trim();
  document.getElementById("vp-texto").innerHTML = html && editor.innerText.trim()
    ? sanear(html)
    : "Tus versos aparecerán aquí con todos los colores... 🌸";
  document.getElementById("vp-firma").textContent = inputFirma.value.trim() || "Manuela";
  document.getElementById("vp-cat").textContent = inputCat.value;
  document.getElementById("vista-previa").style.setProperty("--vp-degradado", fondoElegido.deg);
}
[inputTitulo, inputFirma].forEach(el => el.addEventListener("input", actualizarVistaPrevia));
inputCat.addEventListener("change", actualizarVistaPrevia);
actualizarVistaPrevia();

document.getElementById("form-poema").addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = inputTitulo.value.trim();
  const categoria = inputCat.value;
  const plano = (editor.innerText || "").trim();
  const firma = inputFirma.value.trim() || "Manuela";
  if (!titulo || !plano) {
    toast("Escribe un título y tus versos primero 🌷");
    (!titulo ? inputTitulo : editor).focus();
    return;
  }

  const textoHTML = sanear(editor.innerHTML);
  const nuevo = {
    titulo, categoria, firma,
    texto: plano.slice(0, 1200),
    textoHTML,
    emoji: emojiElegido,
    degradado: fondoElegido.deg,
    fondoIcono: fondoElegido.fondo,
    mio: true
  };
  const creados = poemasCreados();
  creados.unshift(nuevo);
  localStorage.setItem("manuela_poemas", JSON.stringify(creados));
  poemas = cargarPoemas();

  filtroActual = "todas";
  document.querySelectorAll("#filtros .filtro").forEach(b => b.classList.toggle("activo", b.dataset.filtro === "todas"));
  renderPoemas();

  e.target.reset();
  editor.innerHTML = "";
  document.getElementById("contador-caracteres").textContent = "0";
  emojiElegido = "🌷";
  document.querySelectorAll("#selector-emoji .emoji-opt").forEach((x, i) => x.classList.toggle("selected", i === 0));
  actualizarVistaPrevia();

  const ok = document.getElementById("mensaje-exito");
  ok.classList.remove("hidden");
  setTimeout(() => ok.classList.add("hidden"), 4500);
  lluviaDeAmor();
  toast("¡Poesía publicada! 🎉");
  setTimeout(() => document.getElementById("poesias").scrollIntoView({ behavior: "smooth" }), 600);
});

function lluviaDeAmor() {
  const emojis = ["💜", "🌸", "⭐", "🦋", "🌷", "✨"];
  for (let i = 0; i < 28; i++) {
    const s = document.createElement("span");
    s.className = "confetti";
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = "-4vh";
    s.style.animationDuration = (2 + Math.random() * 2) + "s";
    s.style.animationDelay = (Math.random() * 0.6) + "s";
    s.style.fontSize = (1 + Math.random() * 1.4) + "rem";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 4500);
  }
}

/* Inspiración */
document.getElementById("btn-inspiracion").addEventListener("click", () => {
  const el = document.getElementById("texto-inspiracion");
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = IDEAS[Math.floor(Math.random() * IDEAS.length)];
    el.style.opacity = 1;
  }, 200);
});

/* Menú móvil + navbar + subir */
const btnMenu = document.getElementById("btn-menu");
const menuMovil = document.getElementById("menu-movil");
btnMenu.addEventListener("click", () => menuMovil.classList.toggle("hidden"));
menuMovil.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menuMovil.classList.add("hidden")));

const btnSubir = document.getElementById("btn-subir");
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
  btnSubir.classList.toggle("hidden", window.scrollY < 500);
});
btnSubir.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* Reveal on scroll */
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); } });
}, { threshold: 0.12 });
function observarReveals() { document.querySelectorAll(".reveal:not(.visible)").forEach(el => obs.observe(el)); }

/* Estrellitas decorativas */
(function estrellas() {
  const cont = document.getElementById("estrellitas");
  const emojis = ["✦", "✧", "⋆", "✿"];
  for (let i = 0; i < 22; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[i % emojis.length];
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.color = ["#FF7BAC", "#9B7EBD", "#5CC8AD", "#FFB88C"][i % 4];
    s.style.fontSize = (8 + Math.random() * 12) + "px";
    s.style.animationDelay = (-Math.random() * 3) + "s";
    cont.appendChild(s);
  }
})();

/* Toast */
let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.opacity = 1;
  t.style.transform = "translate(-50%, 0)";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.style.opacity = 0;
    t.style.transform = "translate(-50%, 1rem)";
  }, 2200);
}

renderPoemas();
observarReveals();
