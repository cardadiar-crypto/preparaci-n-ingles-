/* =========================================================
   ENGLISH B2 PREP - LOGICA DE LA APP
   Arquitectura: 28 días × 4 secciones (Grammar, Reading,
   Listening, Speaking). Cada sección: explicación (EN/ES)
   → actividad → evaluación. Examen final con calificación.
   ========================================================= */

/* ---------------- Estado y persistencia ---------------- */
const STORE_KEY = 'english-b2-progress-v2';

let state = {
  sectionsDone: {},   // { 'day-1_grammar': true }
  sectionScores: {},  // { 'day-1_grammar': { activity: pct, evaluate: pct } }
  examResult: null,   // { pct, perAspect, totalRight, totalQ }
  streakDate: null,   // 'YYYY-MM-DD' last study day
  streak: 0
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch (e) {}
  state.sectionsDone = state.sectionsDone || {};
  state.sectionScores = state.sectionScores || {};
  state.examResult = state.examResult || null;
  state.streak = state.streak || 0;
  state.streakDate = state.streakDate || null;
}
function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

/* ---------------- Helpers ---------------- */
function sectionKey(dayId, aspect) { return dayId + '_' + aspect; }
function isSectionDone(dayId, aspect) { return !!state.sectionsDone[sectionKey(dayId, aspect)]; }
function markSectionDone(dayId, aspect) { state.sectionsDone[sectionKey(dayId, aspect)] = true; }

function totalSections() {
  let n = 0;
  DAYS.forEach(d => { n += d.sections.length; });
  return n;
}
function doneSections() {
  return Object.keys(state.sectionsDone).filter(k => k && state.sectionsDone[k]).length;
}
function currentDayIndex() {
  for (let i = 0; i < DAYS.length; i++) {
    const day = DAYS[i];
    if (day.sections.some(s => !isSectionDone(day.id, s.aspect))) return i;
  }
  return DAYS.length - 1;
}
function todayStr() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + m + '-' + dd;
}
function updateStreak() {
  const t = todayStr();
  if (state.streakDate === t) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const ym = String(yesterday.getMonth() + 1).padStart(2, '0');
  const yd = String(yesterday.getDate()).padStart(2, '0');
  const yStr = yesterday.getFullYear() + '-' + ym + '-' + yd;
  if (state.streakDate === yStr) state.streak++;
  else state.streak = 1;
  state.streakDate = t;
}

/* ---------------- Router ---------------- */
const router = {
  stack: ['home'],
  go(screen) {
    this.stack.push(screen);
    this.render(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  back() {
    if (this.stack.length > 1) {
      this.stack.pop();
      const prev = this.stack[this.stack.length - 1];
      this.render(prev);
    } else {
      this.render('home');
    }
  },
  replace(screen) {
    this.stack.pop();
    this.stack.push(screen);
    this.render(screen);
    window.scrollTo({ top: 0 });
  },
  render(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('scr-' + screen);
    if (el) el.classList.add('active');

    const bar = document.getElementById('appbar');
    const nav = document.getElementById('bottom-nav');
    if (screen === 'welcome') { bar.style.display = 'none'; nav.style.display = 'none'; }
    else { bar.style.display = 'flex'; nav.style.display = 'flex'; }

    document.getElementById('day-chip').textContent = `Día ${currentDayIndex()+1}/28`;
    document.getElementById('bar-title').textContent = titleFor(screen);
    document.querySelectorAll('#bottom-nav button').forEach(b => b.classList.toggle('active', b.dataset.nav === screen));

    if (screen === 'home') renderHome();
    if (screen === 'day') renderDay();
    if (screen === 'section') renderSection();
    if (screen === 'exam') renderExam();
  }
};

function titleFor(screen) {
  const t = {
    home: 'Inicio', day: 'Día', section: 'Sección',
    exam: 'Examen final', results: 'Resultados'
  };
  return t[screen] || 'English B2';
}

/* ---------------- Welcome ---------------- */
function renderWelcomeProgress() {
  const wrap = document.getElementById('welcome-progress');
  wrap.innerHTML = '';
  DAYS.forEach((d, i) => {
    const done = d.sections.every(s => isSectionDone(d.id, s.aspect));
    const cur = i === currentDayIndex();
    const el = document.createElement('div');
    el.className = 'pl' + (done ? ' done' : cur ? ' current' : '');
    el.innerHTML = `<div class="dot">${done?'✓':i+1}</div><div class="lb">${i+1}</div>`;
    wrap.appendChild(el);
  });
}

/* ---------------- Home ---------------- */
function renderHome() {
  const done = doneSections();
  const total = totalSections();
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('home-overall').textContent = `${done} de ${total} secciones · ${pct}%`;
  document.getElementById('home-bar').style.width = pct + '%';

  const cl = currentDayIndex();
  const cday = DAYS[cl];
  document.getElementById('home-desc').textContent =
    `Día ${cl+1}: ${cday.title}. Tu meta: 45 min–1 h al día (todos los días practica los 4 aspectos).`;

  // reminder/streak banner
  const rem = document.getElementById('home-reminder');
  if (rem) {
    if (state.streak >= 2) {
      rem.innerHTML = `🔥 ¡${state.streak} días seguidos! Sigue así, constancia es clave.`;
      rem.style.display = 'block';
    } else if (state.streak === 1) {
      rem.innerHTML = `🎯 Regresaste hoy. ¡Vuelve también mañana para mantener tu racha!`;
      rem.style.display = 'block';
    } else {
      rem.style.display = 'none';
    }
  }

  // progress line por semanas
  const line = document.getElementById('home-progress-line');
  line.innerHTML = '';
  [1, 8, 15, 22].forEach((start, n) => {
    const day = DAYS[start - 1];
    const doneW = day ? day.sections.every(s => isSectionDone(day.id, s.aspect)) : false;
    const d = document.createElement('div');
    d.className = 'pl' + (doneW ? ' done' : '');
    d.innerHTML = `<div class="dot">${doneW?'✓':n+1}</div><div class="lb">Sem ${n+1}</div>`;
    line.appendChild(d);
  });

  // 4 aspectos globales
  const grid = document.getElementById('aspect-grid');
  grid.innerHTML = '';
  const totals = {};
  const dones = {};
  ASPECT_ORDER.forEach(a => { totals[a] = 0; dones[a] = 0; });
  DAYS.forEach(d => d.sections.forEach(s => {
    totals[s.aspect] = (totals[s.aspect] || 0) + 1;
    if (isSectionDone(d.id, s.aspect)) dones[s.aspect] = (dones[s.aspect] || 0) + 1;
  }));
  ASPECT_ORDER.forEach(key => {
    const t = totals[key] || 0;
    const dn = dones[key] || 0;
    const pctA = t ? Math.round(dn / t * 100) : 0;
    const a = ASPECTS[key];
    const card = document.createElement('div');
    card.className = 'aspect-card';
    card.innerHTML = `
      <div class="pct">${pctA}%</div>
      <div class="em">${a.emoji}</div>
      <div class="nm">${a.name}</div>
      <div class="st">${dn}/${t} secciones</div>`;
    grid.appendChild(card);
  });

  // lista de 28 días
  const list = document.getElementById('plan-list');
  list.innerHTML = '';
  DAYS.forEach((d, i) => {
    const allDone = d.sections.every(s => isSectionDone(d.id, s.aspect));
    const someDone = d.sections.some(s => isSectionDone(d.id, s.aspect));
    const cur = i === currentDayIndex();
    const item = document.createElement('div');
    item.className = 'lesson-item' + (allDone ? ' done' : '');
    let badge = '';
    if (allDone) badge = `<span class="badge" style="background:var(--green);">✓</span>`;
    else if (someDone) badge = `<span class="badge" style="background:var(--yellow);">en curso</span>`;
    item.innerHTML = `
      <div class="num">${allDone ? '✓' : i+1}</div>
      <div class="body"><div class="t">${i+1}. ${d.title}</div><div class="s">${d.focus}</div></div>
      ${badge}
      <div class="arrow">→</div>`;
    item.onclick = () => openDay(i);
    if (cur) item.classList.add('current-day');
    list.appendChild(item);
  });

  // examen final card
  const fcard = document.getElementById('final-exam-card');
  fcard.onclick = () => router.replace('exam');
  const fStatus = document.getElementById('final-exam-status');
  fStatus.textContent = state.examResult
    ? `Puntaje anterior: ${state.examResult.pct}% · Clica para repetir.`
    : 'Simulación completa de los 4 aspectos con tu calificación estimada.';
}

/* ---------------- Day ---------------- */
let currentDayIndexVar = 0;
function openDay(i) {
  currentDayIndexVar = i;
  router.go('day');
}
function currentDay() { return DAYS[currentDayIndexVar]; }

function renderDay() {
  const d = currentDay();
  document.getElementById('day-title').textContent = `Día ${currentDayIndexVar+1}: ${d.title}`;
  document.getElementById('day-desc').textContent = d.focus;

  const area = document.getElementById('day-area');
  area.innerHTML = '<div class="fade-in"></div>';
  const c = area.querySelector('.fade-in');

  d.sections.forEach((s, si) => {
    const done = isSectionDone(d.id, s.aspect);
    const score = state.sectionScores[sectionKey(d.id, s.aspect)];
    const a = ASPECTS[s.aspect];
    const lit = document.createElement('div');
    lit.className = 'lesson-item' + (done ? ' done' : '');
    let badge = '';
    if (done) badge = `<span class="badge" style="background:var(--green);">✓</span>`;
    if (score && score.evaluate !== undefined) {
      badge += `<span class="badge">${score.evaluate}%</span>`;
    }
    lit.innerHTML = `
      <div class="num">${a.emoji}</div>
      <div class="body" style="display:flex;flex-direction:column;gap:2px;">
        <div class="t">${s.title}</div>
        <div class="s" style="display:flex;gap:6px;align-items:center;">
          <span>Expl. → Activ. → Eval.</span>
        </div>
      </div>
      ${badge}
      <div class="arrow">→</div>`;
    lit.onclick = () => openSection(si);
    c.appendChild(lit);
  });
}

/* ---------------- Section (explain → activity → evaluation) ---------------- */
let currentSectionIndex = 0;
let currentPart = 0; // 0=explain, 1=activity, 2=evaluate
let currentLang = 'en'; // 'en' | 'es' translation toggle

function openSection(si) {
  currentSectionIndex = si;
  currentPart = 0;
  currentLang = 'en';
  router.go('section');
}
function currentSection() {
  return currentDay().sections[currentSectionIndex];
}

function renderSection() {
  const d = currentDay();
  const s = currentSection();
  const a = ASPECTS[s.aspect];
  document.getElementById('sec-title').textContent = `${a.emoji} ${s.title}`;
  document.getElementById('sec-desc').textContent =
    `${a.name} · Día ${currentDayIndexVar+1} (${d.title})`;

  const nav = document.getElementById('sec-nav');
  const complete = document.getElementById('sec-complete');
  nav.style.display = 'flex';
  complete.style.display = 'none';
  document.getElementById('sec-prev').style.display = currentPart === 0 ? 'none' : 'block';

  const nextBtn = document.getElementById('sec-next');
  if (currentPart < 2) {
    nextBtn.textContent = currentPart === 0 ? 'Ver actividades →' : 'Realizar evaluación →';
    nextBtn.classList.remove('green');
  } else {
    nextBtn.textContent = '✔ Completar sección';
    nextBtn.classList.add('green');
  }
  nextBtn.onclick = () => {
    if (currentPart < 2) {
      currentPart++;
      renderSection();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      finishSection();
    }
  };
  document.getElementById('sec-prev').onclick = () => {
    currentPart--;
    renderSection();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const area = document.getElementById('sec-area');
  if (currentPart === 0) renderExplain(area, s);
  else if (currentPart === 1) renderQuiz(area, s.activity, 'activity');
  else renderQuiz(area, s.evaluation, 'evaluate');
}

function langToggleButton(lang, onclick) {
  const b = document.createElement('button');
  b.className = 'btn sm ghost lang-toggle';
  b.textContent = lang === 'en' ? '🇪🇸 Ver en español' : '🇬🇧 Ver en inglés';
  b.onclick = onclick;
  return b;
}

function renderExplain(area, s) {
  area.innerHTML = '<div class="fade-in"></div>';
  const c = area.querySelector('.fade-in');

  const toggle = langToggleButton(currentLang, () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    renderSection();
  });
  c.appendChild(toggle);

  // Aviso: tocar palabras para ver su traducción
  const hint = document.createElement('div');
  hint.className = 'dict-hint';
  hint.textContent = '👆 Toca cualquier palabra en inglés para ver su traducción y un ejemplo.';
  c.appendChild(hint);

  const blocks = currentLang === 'en' ? s.explain.en : s.explain.es;
  const wrap = document.createElement('div');
  wrap.style.marginTop = '8px';
  blocks.forEach(b => {
    if (b.t === 'h') wrap.innerHTML += `<div class="subhead">${b.text}</div>`;
    else if (b.t === 'p') wrap.innerHTML += `<div class="expl-block">${b.text}</div>`;
    else if (b.t === 'ex') wrap.innerHTML += `<div class="example">${b.text.replace(/\n/g,'<br>')}</div>`;
    else if (b.t === 'tip') wrap.innerHTML += `<div class="tip">💡 ${b.text}</div>`;
    else if (b.t === 'list') wrap.innerHTML += `<div class="expl-block">${b.text.replace(/\n/g,'<br>')}</div>`;
  });
  c.appendChild(wrap);

  // audio para listening/speaking
  if (s.aspect === 'listening' || s.aspect === 'speaking') {
    wrap.innerHTML += `<div class="tts-note">🎧 En Actividades y Evaluación puedes reproducir audio (texto a voz) para practicar escucha y pronunciación.</div>`;
  }

  // hacer clic en palabras -> diccionario (solo en modo inglés)
  if (currentLang === 'en') {
    setupDict(wordsOfBlocks(s.explain.en));
  }
}

function wordsOfBlocks(blocks) {
  const txt = blocks.map(b => b.text).join(' ');
  const words = txt.replace(/<[^>]*>/g, '').split(/[^A-Za-z']+/).filter(Boolean);
  return Array.from(new Set(words.map(w => w.toLowerCase().replace(/^'+|'+$/g, '')))).filter(w => DICT[w]);
}

/* Diccionario: tocar palabra conocida del DICT mostrada como <span class="dword"> */
function setupDict(wordList) {
  const ranges = document.querySelectorAll('#sec-area .expl-block, #sec-area .example, #sec-area .subhead');
  ranges.forEach(r => {
    const html = r.innerHTML;
    const replaced = html.replace(/(<b>)?\b([A-Za-z]+)\b(<\/b>)?/g, (m, open, word, close) => {
      const w = word.toLowerCase();
      if (wordList.indexOf(w) !== -1) {
        return `${open||''}<span class="dword" data-w="${w}">${word}</span>${close||''}`;
      }
      return m;
    });
    r.innerHTML = replaced;
  });
  document.querySelectorAll('#sec-area .dword').forEach(sp => {
    sp.addEventListener('click', (e) => {
      e.stopPropagation();
      showDict(e.target.dataset.w, e.target);
    });
  });
}

function showDict(word, anchorEl) {
  const entry = DICT[word];
  if (!entry) return;
  removeDictPopup();
  const pop = document.createElement('div');
  pop.className = 'dict-pop';
  pop.innerHTML = `
    <div class="dict-head">
      <span class="dict-word">${word}</span>
      <button class="dict-x" onclick="closeDictPopup()">×</button>
    </div>
    <div class="dict-es">${entry.es}</div>
    <div class="dict-ex">💬 ${entry.ex}</div>`;
  document.body.appendChild(pop);
  document.addEventListener('click', outsideDictClose);
}

function outsideDictClose(e) {
  if (!e.target.closest('.dict-pop')) removeDictPopup();
}
function removeDictPopup() {
  const p = document.querySelector('.dict-pop');
  if (p) p.remove();
  document.removeEventListener('click', outsideDictClose);
}
window.closeDictPopup = removeDictPopup;

/* ---------------- Quiz ---------------- */
let quizData = null;
let quizSelected = null;

function renderQuiz(area, questions, mode) {
  quizData = questions;
  quizSelected = new Array(questions.length).fill(null);
  const s = currentSection();
  const aspect = s.aspect;

  area.innerHTML = '<div class="fade-in"></div>';
  const c = area.querySelector('.fade-in');

  if (aspect === 'listening') {
    c.innerHTML += `
      <div class="listen-card">
        <button class="listen-btn" onclick="speak('${questions.map(q=>q.q).join('. ').replace(/'/g,"\\'")}')">▶</button>
        <div class="listen-status">Pulsa para escuchar todas las preguntas (texto a voz)</div>
      </div>`;
  }
  if (aspect === 'speaking') {
    c.innerHTML += `<div class="tts-note">💬 Escucha con 🔊 y repite en voz alta.</div>`;
  }
  c.innerHTML += `<div class="quiz-dir">${mode === 'activity' ? 'Actividad' : 'Evaluación'} — elige la opción correcta.</div>`;

  questions.forEach((q, i) => {
    const qdiv = document.createElement('div');
    qdiv.style.marginBottom = '18px';
    qdiv.dataset.qindex = i;
    let head = `<div class="quiz-q">${i+1}. ${q.q}</div>`;
    if (aspect === 'listening') head += `<button class="btn sm ghost" style="margin-bottom:8px;" onclick="speak('${(q.q+' '+q.options.join(', ')).replace(/'/g,"\\'")}')">🔊 Escuchar</button>`;
    if (aspect === 'speaking') head += `<button class="btn sm ghost" style="margin-bottom:8px;" onclick="speak('${q.q.replace(/'/g,"\\'")}')">🔊 Audio</button>`;
    qdiv.innerHTML = head;
    q.options.forEach((opt, oi) => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.textContent = opt;
      b.dataset.opt = oi;
      b.addEventListener('click', () => selectOpt(qdiv, q, oi));
      qdiv.appendChild(b);
    });
    c.appendChild(qdiv);
  });
}

function selectOpt(qdiv, q, oi) {
  const opts = qdiv.querySelectorAll('.opt');
  const idx = parseInt(qdiv.dataset.qindex);
  const correct = q.correct;
  opts.forEach(o => {
    o.classList.remove('sel');
    const oIdx = parseInt(o.dataset.opt);
    if (oIdx === correct) o.classList.add('correct');
    if (oIdx === oi && oIdx !== correct) o.classList.add('wrong');
  });
  quizSelected[idx] = oi;
}

function finishSection() {
  updateStreak();
  const d = currentDay();
  const s = currentSection();
  const key = sectionKey(d.id, s.aspect);

  if (quizSelected && quizData) {
    let right = 0;
    quizSelected.forEach((sel, i) => { if (sel === quizData[i].correct) right++; });
    const pct = Math.round(right / quizData.length * 100);
    state.sectionScores[key] = state.sectionScores[key] || {};
    if (currentPart === 2) {
      state.sectionScores[key].evaluate = pct;
      state.sectionScores[key].activity = state.sectionScores[key].activity;
    } else {
      state.sectionScores[key].activity = pct;
    }
  }
  markSectionDone(d.id, s.aspect);
  saveState();

  const complete = document.getElementById('sec-complete');
  complete.style.display = 'block';
  const allDayDone = d.sections.every(x => isSectionDone(d.id, x.aspect));
  complete.innerHTML = `
    <div class="card" style="background:rgba(34,197,94,.12);border-color:var(--green);text-align:center;">
      <div style="font-size:34px;">🎉</div>
      <div style="font-weight:800;font-size:18px;margin:6px 0;">${allDayDone ? '¡Día completado!' : '¡Sección completada!'}</div>
      <div style="font-size:13px;color:var(--muted;">${allDayDone ? '¡Practicaste los 4 aspectos hoy!' : 'Continúa con la siguiente sección del día.'}</div>
    </div>`;
  const nextBtn = document.getElementById('sec-next');
  nextBtn.textContent = 'Siguiente sección →';
  nextBtn.onclick = () => {
    if (currentSectionIndex < d.sections.length - 1) {
      openSection(currentSectionIndex + 1);
    } else {
      router.go('home');
    }
  };
  const prevBtn = document.getElementById('sec-prev');
  prevBtn.style.display = 'none';
}

/* ---------------- Texto a voz ---------------- */
function speak(text) {
  if (!('speechSynthesis' in window)) { alert('Tu navegador no soporta texto a voz.'); return; }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-GB';
  u.rate = 0.95;
  const voices = speechSynthesis.getVoices();
  const en = voices.find(v => v.lang.startsWith('en-GB')) || voices.find(v => v.lang.startsWith('en'));
  if (en) u.voice = en;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
function playAll(text) { speak(text); }

/* ---------------- Examen final ---------------- */
function renderExam() {
  const intro = document.getElementById('exam-intro');
  const area = document.getElementById('exam-area');
  const done = doneSections();
  const total = totalSections();
  if (done < total * 0.6) {
    intro.textContent = `⚠️ Has completado ${done}/${total} secciones. Se recomienda completar al menos el 60% del plan antes de la simulación para un resultado representativo. Puedes continuar igualmente.`;
  } else {
    intro.textContent = FINAL_EXAM.intro;
  }
  area.innerHTML = '<div class="fade-in"></div>';
  const c = area.querySelector('.fade-in');
  c.innerHTML = `
    <div class="card" style="text-align:center;">
      <p style="font-size:14px;color:var(--muted);margin-bottom:14px;"><b>${FINAL_EXAM.sections.length} secciones</b> · ${FINAL_EXAM.sections.reduce((a,s)=>a+s.questions.length,0)} preguntas · Al final obtienes tu calificación estimada B2.</p>
      <button class="btn" onclick="beginExam()">Comenzar examen 🏁</button>
    </div>`;
}

let examState = null;
function beginExam() {
  examState = {
    sectionIdx: 0,
    answers: FINAL_EXAM.sections.map(s => new Array(s.questions.length).fill(null))
  };
  renderExamSection();
}
function renderExamSection() {
  const sec = FINAL_EXAM.sections[examState.sectionIdx];
  const area = document.getElementById('exam-area');
  const intro = document.getElementById('exam-intro');
  intro.textContent = `Sección ${examState.sectionIdx+1} de ${FINAL_EXAM.sections.length}: ${sec.title}`;
  area.innerHTML = '<div class="fade-in"></div>';
  const c = area.querySelector('.fade-in');
  const aspect = sec.aspect;
  if (aspect === 'listening') {
    c.innerHTML += `
      <div class="listen-card">
        <button class="listen-btn" onclick="speak('${sec.questions.map(q=>q.q).join('. ').replace(/'/g,"\\'")}')">▶</button>
        <div class="listen-status">Escuchar todas las preguntas (texto a voz)</div>
      </div>`;
  }
  if (aspect === 'speaking') {
    c.innerHTML += `<div class="tts-note">💬 Escucha con 🔊 y elige la mejor respuesta.</div>`;
  }
  c.innerHTML += `<div class="quiz-dir">Selecciona una opción por pregunta.</div>`;
  sec.questions.forEach((q, qi) => {
    const qdiv = document.createElement('div');
    qdiv.style.marginBottom = '18px';
    qdiv.dataset.qindex = qi;
    let head = `<div class="quiz-q">${qi+1}. ${q.q}</div>`;
    if (aspect === 'listening') head += `<button class="btn sm ghost" style="margin-bottom:8px;" onclick="speak('${(q.q+' '+q.options.join(', ')).replace(/'/g,"\\'")}')">🔊 Escuchar</button>`;
    if (aspect === 'speaking') head += `<button class="btn sm ghost" style="margin-bottom:8px;" onclick="speak('${q.q.replace(/'/g,"\\'")}')">🔊 Audio</button>`;
    qdiv.innerHTML = head;
    q.options.forEach((opt, oi) => {
      const b = document.createElement('button');
      b.className = 'opt';
      b.textContent = opt;
      b.dataset.opt = oi;
      if (examState.answers[examState.sectionIdx][qi] === oi) b.classList.add('sel');
      b.addEventListener('click', () => {
        examState.answers[examState.sectionIdx][qi] = oi;
        qdiv.querySelectorAll('.opt').forEach(o => o.classList.remove('sel'));
        qdiv.querySelectorAll('.opt')[oi].classList.add('sel');
      });
      qdiv.appendChild(b);
    });
    c.appendChild(qdiv);
  });

  const navRow = document.createElement('div');
  navRow.className = 'btn-row';
  if (examState.sectionIdx > 0) {
    navRow.innerHTML += `<button class="btn ghost" id="exam-prev">← Anterior</button>`;
  }
  const isLast = examState.sectionIdx === FINAL_EXAM.sections.length - 1;
  navRow.innerHTML += `<button class="btn ${isLast?'green':''}" id="exam-next">${isLast?'Ver mi calificación 🏆':'Siguiente sección →'}</button>`;
  c.appendChild(navRow);

  document.getElementById('exam-prev').onclick = () => { examState.sectionIdx--; renderExamSection(); window.scrollTo({top:0,behavior:'smooth'}); };
  document.getElementById('exam-next').onclick = () => {
    if (isLast) finishExam();
    else { examState.sectionIdx++; renderExamSection(); window.scrollTo({top:0,behavior:'smooth'}); }
  };
}

function finishExam() {
  updateStreak();
  const perAspect = {};
  let totalRight = 0, totalQ = 0;
  const rows = [];
  FINAL_EXAM.sections.forEach((sec, si) => {
    let right = 0;
    sec.questions.forEach((q, qi) => {
      totalQ++;
      if (examState.answers[si][qi] === q.correct) { right++; totalRight++; }
    });
    const pctA = Math.round(right / sec.questions.length * 100);
    perAspect[sec.aspect] = pctA;
    rows.push([ASPECTS[sec.aspect].name + ' ' + ASPECTS[sec.aspect].emoji, `${right}/${sec.questions.length} · ${pctA}%`]);
  });
  const pct = Math.round(totalRight / totalQ * 100);
  state.examResult = { pct, perAspect, totalRight, totalQ };
  saveState();
  showResults(pct, perAspect, rows);
}

function showResults(pct, perAspect, rows) {
  router.replace('results');
  let grade, band;
  if (pct >= 85) { grade = 'B2/C1'; band = 'Excelente. Muy buen nivel B2. ¡List@!'; }
  else if (pct >= 70) { grade = 'B2'; band = '¡Bien! Nivel B2 alcanzado. Repasa los puntos débiles.'; }
  else if (pct >= 55) { grade = 'B1/B2'; band = 'Cerca del B2. Refuerza donde fallaste.'; }
  else { grade = 'B1'; band = 'Necesitas más práctica. Repasa los temas y vuelve a intentarlo.'; }

  document.getElementById('res-grade').textContent = grade;
  document.getElementById('res-band').textContent = band;
  document.getElementById('res-pct').textContent = `${pct}% · ${state.examResult.totalRight}/${state.examResult.totalQ} aciertos`;

  const table = document.getElementById('res-table');
  table.innerHTML = '<tr><th>Aspecto</th><th>Puntaje</th></tr>' + rows.map(r => `<tr><td>${r[0]}</td><td><b>${r[1]}</b></td></tr>`).join('');

  const recs = document.getElementById('res-recs');
  recs.innerHTML = '';
  const order = ASPECT_ORDER.filter(a => perAspect[a] !== undefined);
  order.sort((a,b)=>perAspect[a]-perAspect[b]).forEach(asp => {
    if (perAspect[asp] < 70) {
      recs.innerHTML += `<div class="expl-block" style="border-left-color:var(--red);">🔴 <b>${ASPECTS[asp].name}</b> (${perAspect[asp]}%) — repasa los temas de ${ASPECTS[asp].name} en tu plan y vuelve a practicar.</div>`;
    } else {
      recs.innerHTML += `<div class="expl-block" style="border-left-color:var(--green);">🟢 <b>${ASPECTS[asp].name}</b> (${perAspect[asp]}%) — buen dominio. Mantén el repaso.</div>`;
    }
  });
}

/* ---------------- Init ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStreak();

  document.getElementById('btn-start').onclick = () => {
    router.go('home');
  };
  document.getElementById('btn-reset').onclick = () => {
    if (confirm('¿Seguro que quieres borrar todo tu progreso?')) {
      localStorage.removeItem(STORE_KEY);
      state = { sectionsDone:{}, sectionScores:{}, examResult:null, streakDate:null, streak:0 };
      location.reload();
    }
  };

  renderWelcomeProgress();

  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const b = document.getElementById('btn-install');
    b.style.display = 'block';
    b.onclick = () => { deferredPrompt.prompt(); };
  });

  // daily reminder (banner en home)
  const remHost = document.createElement('div');
  remHost.id = 'home-reminder';
  remHost.className = 'rem-banner';
  remHost.style.display = 'none';
  const homeDesc = document.getElementById('home-desc');
  if (homeDesc && homeDesc.parentNode) {
    homeDesc.parentNode.insertBefore(remHost, homeDesc.nextSibling);
  }

  router.render('welcome');
  if (Object.keys(state.sectionsDone).length > 0) {
    router.replace('home');
  }
});

// Exponer globalmente
window.router = router;
window.speak = speak;
window.playAll = playAll;
window.beginExam = beginExam;
