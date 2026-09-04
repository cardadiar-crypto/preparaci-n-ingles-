/* =========================================================
   ENGLISH B2 PREP V2 - LOGICA DE LA APP
   Cambios vs v1:
   - Secciones largas (15+ ejercicios) renderizadas.
   - Listening: audio con texto OCULTO por defecto. Botón
     "👁 Ver texto" para revelar si no entiendes.
   - Speaking: ejercicios orales abiertos con reconocimiento
     de voz (webkitSpeechRecognition) y retroalimentación
     comparando con palabras clave de la respuesta modelo.
   ========================================================= */

/* ---------------- Estado y persistencia ---------------- */
const STORE_KEY = 'english-b2-progress-v2';

let state = {
  sectionsDone: {},   // { 'day-1_grammar': true }
  sectionScores: {},  // { 'day-1_grammar': { activity: pct, evaluate: pct } }
  examResult: null,
  streakDate: null,
  streak: 0
};

function loadState() {
  try { const raw = localStorage.getItem(STORE_KEY); if (raw) state = JSON.parse(raw); } catch (e) {}
  state.sectionsDone = state.sectionsDone || {};
  state.sectionScores = state.sectionScores || {};
  state.examResult = state.examResult || null;
  state.streak = state.streak || 0;
  state.streakDate = state.streakDate || null;
}
function saveState() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

/* ---------------- Helpers ---------------- */
function sectionKey(dayId, aspect) { return dayId + '_' + aspect; }
function isSectionDone(dayId, aspect) { return !!state.sectionsDone[sectionKey(dayId, aspect)]; }
function markSectionDone(dayId, aspect) { state.sectionsDone[sectionKey(dayId, aspect)] = true; }

function totalSections() { let n = 0; DAYS.forEach(d => { n += d.sections.length; }); return n; }
function doneSections() { return Object.keys(state.sectionsDone).filter(k => k && state.sectionsDone[k]).length; }
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
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  const ym = String(yesterday.getMonth()+1).padStart(2,'0');
  const yd = String(yesterday.getDate()).padStart(2,'0');
  const yStr = yesterday.getFullYear()+'-'+ym+'-'+yd;
  if (state.streakDate === yStr) state.streak++; else state.streak = 1;
  state.streakDate = t;
}

/* ---------------- Router ---------------- */
const router = {
  stack: ['home'],
  go(screen) { this.stack.push(screen); this.render(screen); window.scrollTo({top:0,behavior:'smooth'}); },
  back() {
    if (this.stack.length > 1) { this.stack.pop(); this.render(this.stack[this.stack.length-1]); }
    else this.render('home');
  },
  replace(screen) { this.stack.pop(); this.stack.push(screen); this.render(screen); window.scrollTo({top:0}); },
  render(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('scr-' + screen);
    if (el) el.classList.add('active');
    const bar = document.getElementById('appbar');
    const nav = document.getElementById('bottom-nav');
    if (screen === 'welcome') { bar.style.display='none'; nav.style.display='none'; }
    else { bar.style.display='flex'; nav.style.display='flex'; }
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
  const t = { home:'Inicio', day:'Día', section:'Sección', exam:'Examen final', results:'Resultados' };
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
  const pct = total ? Math.round(done/total*100) : 0;
  document.getElementById('home-overall').textContent = `${done} de ${total} secciones · ${pct}%`;
  document.getElementById('home-bar').style.width = pct + '%';

  const cl = currentDayIndex();
  const cday = DAYS[cl];
  document.getElementById('home-desc').textContent =
    `Día ${cl+1}: ${cday.title}. Meta: 45 min–1 h · 15+ ejercicios por aspecto.`;

  const rem = document.getElementById('home-reminder');
  if (rem) {
    if (state.streak >= 2) { rem.innerHTML = `🔥 ¡${state.streak} días seguidos! Sigue así.`; rem.style.display='block'; }
    else if (state.streak === 1) { rem.innerHTML = `🎯 Regresaste hoy. ¡Vuelve mañana para mantener la racha!`; rem.style.display='block'; }
    else rem.style.display='none';
  }

  const line = document.getElementById('home-progress-line');
  line.innerHTML = '';
  [1,8,15,22].forEach((start,n) => {
    const day = DAYS[start-1];
    const doneW = day ? day.sections.every(s=>isSectionDone(day.id,s.aspect)) : false;
    const d = document.createElement('div');
    d.className = 'pl' + (doneW?' done':'');
    d.innerHTML = `<div class="dot">${doneW?'✓':n+1}</div><div class="lb">Sem ${n+1}</div>`;
    line.appendChild(d);
  });

  const grid = document.getElementById('aspect-grid');
  grid.innerHTML = '';
  const totals={}, dones={};
  ASPECT_ORDER.forEach(a=>{totals[a]=0;dones[a]=0;});
  DAYS.forEach(d=>d.sections.forEach(s=>{ totals[s.aspect]=(totals[s.aspect]||0)+1; if(isSectionDone(d.id,s.aspect)) dones[s.aspect]=(dones[s.aspect]||0)+1; }));
  ASPECT_ORDER.forEach(key=>{
    const t=totals[key]||0, dn=dones[key]||0;
    const pctA=t?Math.round(dn/t*100):0;
    const a=ASPECTS[key];
    const card=document.createElement('div');
    card.className='aspect-card';
    card.innerHTML=`<div class="pct">${pctA}%</div><div class="em">${a.emoji}</div><div class="nm">${a.name}</div><div class="st">${dn}/${t} secciones</div>`;
    grid.appendChild(card);
  });

  const list = document.getElementById('plan-list');
  list.innerHTML = '';
  DAYS.forEach((d,i)=>{
    const allDone=d.sections.every(s=>isSectionDone(d.id,s.aspect));
    const someDone=d.sections.some(s=>isSectionDone(d.id,s.aspect));
    const cur=i===currentDayIndex();
    const item=document.createElement('div');
    item.className='lesson-item'+(allDone?' done':'');
    let badge='';
    if(allDone) badge='<span class="badge" style="background:var(--green);">✓</span>';
    else if(someDone) badge='<span class="badge" style="background:var(--yellow);">en curso</span>';
    item.innerHTML=`<div class="num">${allDone?'✓':i+1}</div><div class="body"><div class="t">${i+1}. ${d.title}</div><div class="s">${d.focus}</div></div>${badge}<div class="arrow">→</div>`;
    item.onclick=()=>openDay(i);
    if(cur) item.classList.add('current-day');
    list.appendChild(item);
  });

  const fcard=document.getElementById('final-exam-card');
  fcard.onclick=()=>router.replace('exam');
  const fStatus=document.getElementById('final-exam-status');
  fStatus.textContent=state.examResult?`Puntaje anterior: ${state.examResult.pct}% · Clic para repetir.`:'Simulación de los 4 aspectos (15 preguntas c/u) con tu calificación estimada.';
}

/* ---------------- Day ---------------- */
let currentDayIndexVar=0;
function openDay(i){currentDayIndexVar=i;router.go('day');}
function currentDay(){return DAYS[currentDayIndexVar];}

function renderDay() {
  const d=currentDay();
  document.getElementById('day-title').textContent=`Día ${currentDayIndexVar+1}: ${d.title}`;
  document.getElementById('day-desc').textContent=d.focus;
  const area=document.getElementById('day-area');
  area.innerHTML='<div class="fade-in"></div>';
  const c=area.querySelector('.fade-in');
  d.sections.forEach((s,si)=>{
    const done=isSectionDone(d.id,s.aspect);
    const score=state.sectionScores[sectionKey(d.id,s.aspect)];
    const a=ASPECTS[s.aspect];
    const lit=document.createElement('div');
    lit.className='lesson-item'+(done?' done':'');
    let badge='';
    if(done) badge='<span class="badge" style="background:var(--green);">✓</span>';
    if(score && score.evaluate!==undefined) badge+=`<span class="badge">${score.evaluate}%</span>`;
    const nAct=s.activity? s.activity.length : 0;
    const nEval=s.evaluation? s.evaluation.length : 0;
    lit.innerHTML=`
      <div class="num">${a.emoji}</div>
      <div class="body" style="display:flex;flex-direction:column;gap:2px;">
        <div class="t">${s.title}</div>
        <div class="s">${nAct} actividades · ${nEval} evaluación</div>
      </div>
      ${badge}<div class="arrow">→</div>`;
    lit.onclick=()=>openSection(si);
    c.appendChild(lit);
  });
}

/* ---------------- Section ---------------- */
let currentSectionIndex=0;
let currentPart=0;
let currentLang='en';
let quizData=null;
let quizSelected=null;
let oralScores={}; // para secciones de speaking oral: {qi: score}

function openSection(si){currentSectionIndex=si;currentPart=0;currentLang='en';router.go('section');}
function currentSection(){return currentDay().sections[currentSectionIndex];}

function renderSection() {
  const d=currentDay();
  const s=currentSection();
  const a=ASPECTS[s.aspect];
  document.getElementById('sec-title').textContent=`${a.emoji} ${s.title}`;
  document.getElementById('sec-desc').textContent=`${a.name} · Día ${currentDayIndexVar+1} (${d.title})`;

  const nav=document.getElementById('sec-nav');
  const complete=document.getElementById('sec-complete');
  nav.style.display='flex';
  complete.style.display='none';
  document.getElementById('sec-prev').style.display=currentPart===0?'none':'block';

  const nextBtn=document.getElementById('sec-next');
  if(currentPart<2){ nextBtn.textContent=currentPart===0?'Ver actividades →':'Realizar evaluación →'; nextBtn.classList.remove('green'); }
  else { nextBtn.textContent='✔ Completar sección'; nextBtn.classList.add('green'); }
  nextBtn.onclick=()=>{
    if(currentPart<2){currentPart++;renderSection();window.scrollTo({top:0,behavior:'smooth'});}
    else finishSection();
  };
  document.getElementById('sec-prev').onclick=()=>{currentPart--;renderSection();window.scrollTo({top:0,behavior:'smooth'});};

  const area=document.getElementById('sec-area');
  if(currentPart===0) renderExplain(area,s);
  else if(currentPart===1) renderQuiz(area,s.activity,'activity');
  else renderQuiz(area,s.evaluation,'evaluate');
}

function renderExplain(area,s){
  area.innerHTML='<div class="fade-in"></div>';
  const c=area.querySelector('.fade-in');
  const toggle=document.createElement('button');
  toggle.className='btn sm ghost lang-toggle';
  toggle.textContent=currentLang==='en'?'🇪🇸 Ver en español':'🇬🇧 Ver en inglés';
  toggle.onclick=()=>{currentLang=currentLang==='en'?'es':'en';renderSection();};
  c.appendChild(toggle);
  const hint=document.createElement('div');
  hint.className='dict-hint';
  hint.textContent='👆 Toca cualquier palabra en inglés para ver su traducción y un ejemplo.';
  c.appendChild(hint);
  const blocks=currentLang==='en'?s.explain.en:s.explain.es;
  const wrap=document.createElement('div');
  wrap.style.marginTop='8px';
  blocks.forEach(b=>{
    if(b.t==='h') wrap.innerHTML+=`<div class="subhead">${b.text}</div>`;
    else if(b.t==='p') wrap.innerHTML+=`<div class="expl-block">${b.text}</div>`;
    else if(b.t==='ex') wrap.innerHTML+=`<div class="example">${b.text.replace(/\n/g,'<br>')}</div>`;
    else if(b.t==='tip') wrap.innerHTML+=`<div class="tip">💡 ${b.text}</div>`;
    else if(b.t==='list') wrap.innerHTML+=`<div class="expl-block">${b.text.replace(/\n/g,'<br>')}</div>`;
  });
  c.appendChild(wrap);
  if(s.aspect==='listening'||s.aspect==='speaking'){
    wrap.innerHTML+=`<div class="tts-note">🎧 Escucha con 🔊. En Evaluación el audio se escucha SIN texto: usa el botón 👁 si necesitas verlo.</div>`;
  }
  if(currentLang==='en') setupDict(wordsOfBlocks(s.explain.en));
}

function wordsOfBlocks(blocks){
  const txt=blocks.map(b=>b.text).join(' ');
  const words=txt.replace(/<[^>]*>/g,'').split(/[^A-Za-z']+/).filter(Boolean);
  return Array.from(new Set(words.map(w=>w.toLowerCase().replace(/^'+|'+$/g,'')))).filter(w=>DICT[w]);
}
function setupDict(wordList){
  const ranges=document.querySelectorAll('#sec-area .expl-block, #sec-area .example, #sec-area .subhead');
  ranges.forEach(r=>{
    const html=r.innerHTML;
    const replaced=html.replace(/(<b>)?\b([A-Za-z]+)\b(<\/b>)?/g,(m,open,word,close)=>{
      const w=word.toLowerCase();
      if(wordList.indexOf(w)!==-1) return `${open||''}<span class="dword" data-w="${w}">${word}</span>${close||''}`;
      return m;
    });
    r.innerHTML=replaced;
  });
  document.querySelectorAll('#sec-area .dword').forEach(sp=>{
    sp.addEventListener('click',(e)=>{e.stopPropagation();showDict(e.target.dataset.w);});
  });
}
function showDict(word){
  const entry=DICT[word];
  if(!entry) return;
  removeDictPopup();
  const pop=document.createElement('div');
  pop.className='dict-pop';
  pop.innerHTML=`<div class="dict-head"><span class="dict-word">${word}</span><button class="dict-x" onclick="closeDictPopup()">×</button></div><div class="dict-es">${entry.es}</div><div class="dict-ex">💬 ${entry.ex}</div>`;
  document.body.appendChild(pop);
  document.addEventListener('click',outsideDictClose);
}
function outsideDictClose(e){ if(!e.target.closest('.dict-pop')) removeDictPopup(); }
function removeDictPopup(){ const p=document.querySelector('.dict-pop'); if(p)p.remove(); document.removeEventListener('click',outsideDictClose); }
window.closeDictPopup=removeDictPopup;

/* ---------------- Quiz (Grammar / Reading / Listening & Speaking-MC) ---------------- */
function renderQuiz(area, questions, mode){
  quizData=questions;
  quizSelected=new Array(questions.length).fill(null);
  oralScores={};
  const s=currentSection();
  const aspect=s.aspect;

  area.innerHTML='<div class="fade-in"></div>';
  const c=area.querySelector('.fade-in');

  // SPEAKING ORAL: preguntas abiertas con prompt/model/keywords
  if(aspect==='speaking' && questions.length && questions[0].prompt!==undefined){
    c.innerHTML+=`<div class="quiz-dir">Speaking oral — escucha la consigna, habla, y la app compara tu respuesta con la modelo.</div>`;
    questions.forEach((q,qi)=>renderOralSpeaking(q,qi,c));
    return;
  }

  if(aspect==='listening'){
    c.innerHTML+=`<div class="listen-card"><div class="listen-note">🎧 Escucha cada audio y responde. El texto está oculto; usa 🔤 solo si no entiendes.</div></div>`;
  }
  c.innerHTML+=`<div class="quiz-dir">${mode==='activity'?'Actividad':'Evaluación'} — elige la opción correcta. ${questions.length} preguntas.</div>`;

  questions.forEach((q,i)=>{
    const qdiv=document.createElement('div');
    qdiv.className='q-block';
    qdiv.style.marginBottom='18px';
    qdiv.dataset.qindex=i;

    // LISTENING: si tiene transcript -> audio oculto + botón ver texto
    if(aspect==='listening' && q.transcript){
      qdiv.innerHTML+=`
        <div class="listen-q-head">
          <button class="btn sm ghost play-btn" onclick="speak('${q.transcript.replace(/'/g,"\\'")}')">🔊 Escuchar</button>
          <button class="btn sm ghost reveal-btn" onclick="revealTranscript(this,'${q.transcript.replace(/'/g,"\\'")}')">👁 Ver texto</button>
        </div>
        <div class="listen-transcript hidden"><b>🎧 Transcripción:</b> ${q.transcript}</div>`;
    } else if(aspect==='listening') {
      qdiv.innerHTML+=`<button class="btn sm ghost" style="margin-bottom:8px;" onclick="speak('${q.q.replace(/'/g,"\\'")}')">🔊 Escuchar</button>`;
    }
    if(aspect==='speaking') {
      qdiv.innerHTML+=`<button class="btn sm ghost" style="margin-bottom:8px;" onclick="speak('${q.q.replace(/'/g,"\\'")}')">🔊 Audio</button>`;
    }
    qdiv.innerHTML+=`<div class="quiz-q">${i+1}. ${q.q}</div>`;
    q.options.forEach((opt,oi)=>{
      const b=document.createElement('button');
      b.className='opt';
      b.textContent=opt;
      b.dataset.opt=oi;
      b.addEventListener('click',()=>selectOpt(qdiv,q,oi));
      qdiv.appendChild(b);
    });
    c.appendChild(qdiv);
  });
}

window.revealTranscript=function(btn,txt){
  const block=btn.closest('.listen-q-head');
  const trans=block.parentNode.querySelector('.listen-transcript');
  trans.classList.toggle('hidden');
  btn.textContent=trans.classList.contains('hidden')?'👁 Ver texto':'🙈 Ocultar texto';
};

/* Speaking oral */
function renderOralSpeaking(q,qi,container){
  const block=document.createElement('div');
  block.className='q-block oral-block';
  block.style.marginBottom='20px';
  const n=qi+1;
  block.innerHTML=`
    <div class="quiz-q">${n}. ${q.prompt}</div>
    <div class="oral-actions">
      <button class="btn sm ghost" onclick="speak('${q.model.replace(/'/g,"\\'")}')">🔊 Respuesta modelo</button>
    </div>
    <div class="mic-card">
      <button class="mic-btn" id="mic-${qi}" onclick="toggleMic(${qi})">🎙</button>
      <div class="mic-status" id="micstatus-${qi}">Pulsa para hablar y luego responde en inglés.</div>
    </div>
    <div class="mic-ans" id="micans-${qi}" style="display:none;"></div>
    <div class="mic-fb" id="micfb-${qi}" style="display:none;"></div>`;
  container.appendChild(block);
}

let recObjs={};
let recoSup = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
window.toggleMic=function(qi){
  const btn=document.getElementById('mic-'+qi);
  const status=document.getElementById('micstatus-'+qi);
  const ans=document.getElementById('micans-'+qi);
  const fb=document.getElementById('micfb-'+qi);
  if(!recoSup){ status.textContent='⚠️ Tu navegador no soporta reconocimiento de voz. Usa Chrome en Android.'; return; }
  if(recObjs[qi]){
    recObjs[qi].stop();
    delete recObjs[qi];
    btn.classList.remove('rec-on');
    status.textContent='⏹ Escucha detenida.';
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec=new SR();
  rec.lang='en-GB';
  rec.interimResults=false;
  rec.continuous=false;
  rec.maxAlternatives=1;
  recObjs[qi]=rec;
  btn.classList.add('rec-on');
  status.textContent='Escuchando… habla ahora.';
  rec.onresult=(e)=>{
    const text=e.results[0][0].transcript;
    ans.style.display='block';
    ans.innerHTML=`<b>Tú dijiste:</b> “${text}”`;
    delete recObjs[qi];
    btn.classList.remove('rec-on');
    status.textContent='Habla de nuevo o pasa a la siguiente.';
    showOralFeedback(qi,text,fb);
  };
  rec.onerror=(e)=>{
    status.textContent='⚠️ Error: '+e.error+' (intenta de nuevo).';
    delete recObjs[qi];
    btn.classList.remove('rec-on');
  };
  rec.onend=()=>{ if(recObjs[qi]){ delete recObjs[qi]; btn.classList.remove('rec-on'); } };
  rec.start();
};

function getOralQuestion(qi){
  const s=currentSection();
  const parts = currentPart===1 ? s.activity : s.evaluation;
  return parts[qi];
}

function showOralFeedback(qi,text,fb){
  const q=getOralQuestion(qi);
  const kws=q.keywords||[];
  const modelWords=(q.model||'').toLowerCase().replace(/[^a-z']+/g,' ').split(/\s+/).filter(w=>w.length>2);
  const said=text.toLowerCase().replace(/[^a-z']+/g,' ').split(/\s+/).filter(w=>w.length>2);
  const saidSet=new Set(said);
  const wordCount=said.length;
  let matched=0; const missed=[];
  const uniqKws=Array.from(new Set(kws));
  uniqKws.forEach(w=>{ if(saidSet.has(w)) matched++; else missed.push(w); });
  let score=0;
  if(kws.length) score=Math.round(matched/kws.length*60);
  const lengthOk = wordCount>=6;
  if(lengthOk) score+=20;
  const variety = modelWords.filter(w=>saidSet.has(w)).length;
  if(variety>=3) score+=20;
  score=Math.min(100,Math.max(0,score));
  oralScores[qi]=score;

  let band, bandColor;
  if(score>=75){ band='Excelente 🟢'; bandColor='var(--green)'; }
  else if(score>=50){ band='Bien 🟡'; bandColor='var(--yellow)'; }
  else { band='Necesitas practicar más 🔴'; bandColor='var(--red)'; }

  fb.style.display='block';
  fb.innerHTML=`
    <div class="fb-card" style="border-left-color:${bandColor};">
      <div class="fb-band" style="color:${bandColor};">${band} · ${score}/100</div>
      <div class="fb-line">📝 Longitud: ${wordCount} palabras (${lengthOk?'bien':'corta — intenta dar más detalle'})</div>
      <div class="fb-line">🎯 Palabras clave acertadas: ${matched}/${uniqKws.length}</div>
      ${missed.length?`<div class="fb-line">💡 Intenta incluir: <b>${missed.join(', ')}</b></div>`:''}
      <button class="btn sm ghost" style="margin-top:8px;" onclick="speak('${(q.model||'').replace(/'/g,"\\'")}')">🔊 Oír respuesta modelo</button>
    </div>`;
}

function selectOpt(qdiv,q,oi){
  const opts=qdiv.querySelectorAll('.opt');
  const idx=parseInt(qdiv.dataset.qindex);
  const correct=q.correct;
  opts.forEach(o=>{
    o.classList.remove('sel');
    const oIdx=parseInt(o.dataset.opt);
    if(oIdx===correct) o.classList.add('correct');
    if(oIdx===oi && oIdx!==correct) o.classList.add('wrong');
  });
  quizSelected[idx]=oi;
}

function finishSection(){
  updateStreak();
  const d=currentDay();
  const s=currentSection();
  const key=sectionKey(d.id,s.aspect);
  const isOralSpeaking = s.aspect==='speaking' && quizData && quizData.length && quizData[0].prompt!==undefined;
  state.sectionScores[key]=state.sectionScores[key]||{};
  if(isOralSpeaking){
    const vals=Object.values(oralScores).filter(v=>typeof v==='number');
    let pct = vals.length ? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length) : 0;
    if(currentPart===2) state.sectionScores[key].evaluate=pct;
    else state.sectionScores[key].activity=pct;
  } else if(quizSelected && quizData){
    let right=0;
    quizSelected.forEach((sel,i)=>{ if(sel===quizData[i].correct) right++; });
    const pct=Math.round(right/quizData.length*100);
    if(currentPart===2) state.sectionScores[key].evaluate=pct;
    else state.sectionScores[key].activity=pct;
  }
  markSectionDone(d.id,s.aspect);
  saveState();
  const complete=document.getElementById('sec-complete');
  complete.style.display='block';
  const allDayDone=d.sections.every(x=>isSectionDone(d.id,x.aspect));
  complete.innerHTML=`
    <div class="card" style="background:rgba(34,197,94,.12);border-color:var(--green);text-align:center;">
      <div style="font-size:34px;">🎉</div>
      <div style="font-weight:800;font-size:18px;margin:6px 0;">${allDayDone?'¡Día completado!':'¡Sección completada!'}</div>
      <div style="font-size:13px;color:var(--muted);">${allDayDone?'¡Practicaste los 4 aspectos hoy!':'Continúa con la siguiente sección del día.'}</div>
    </div>`;
  const nextBtn=document.getElementById('sec-next');
  nextBtn.textContent='Siguiente sección →';
  nextBtn.onclick=()=>{
    if(currentSectionIndex<d.sections.length-1) openSection(currentSectionIndex+1);
    else router.go('home');
  };
  document.getElementById('sec-prev').style.display='none';
}

/* ---------------- Texto a voz ---------------- */
function speak(text){
  if(!('speechSynthesis' in window)){alert('Tu navegador no soporta texto a voz.');return;}
  const u=new SpeechSynthesisUtterance(text.replace(/<[^>]*>/g,''));
  u.lang='en-GB';
  u.rate=0.95;
  const voices=speechSynthesis.getVoices();
  const en=voices.find(v=>v.lang.startsWith('en-GB'))||voices.find(v=>v.lang.startsWith('en'));
  if(en) u.voice=en;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
function playAll(text){speak(text);}

/* ---------------- Examen final ---------------- */
function renderExam(){
  const intro=document.getElementById('exam-intro');
  const area=document.getElementById('exam-area');
  const done=doneSections();
  const total=totalSections();
  if(done<total*0.6) intro.textContent=`⚠️ Has completado ${done}/${total} secciones. Recomendado completar al menos el 60% antes de la simulación.`;
  else intro.textContent=FINAL_EXAM.intro;
  area.innerHTML='<div class="fade-in"></div>';
  const c=area.querySelector('.fade-in');
  const totalQ=FINAL_EXAM.sections.reduce((a,s)=>a+s.questions.length,0);
  c.innerHTML=`<div class="card" style="text-align:center;"><p style="font-size:14px;color:var(--muted);margin-bottom:14px;"><b>${FINAL_EXAM.sections.length} secciones</b> · ${totalQ} preguntas · Calificación B2 estimada.</p><button class="btn" onclick="beginExam()">Comenzar examen 🏁</button></div>`;
}

let examState=null;
function beginExam(){
  examState={sectionIdx:0,answers:FINAL_EXAM.sections.map(s=>new Array(s.questions.length).fill(null))};
  renderExamSection();
}
function renderExamSection(){
  const sec=FINAL_EXAM.sections[examState.sectionIdx];
  const area=document.getElementById('exam-area');
  const intro=document.getElementById('exam-intro');
  intro.textContent=`Sección ${examState.sectionIdx+1} de ${FINAL_EXAM.sections.length}: ${sec.title}`;
  area.innerHTML='<div class="fade-in"></div>';
  const c=area.querySelector('.fade-in');
  const aspect=sec.aspect;
  if(aspect==='listening') c.innerHTML+='<div class="listen-card"><div class="listen-note">🎧 El texto está oculto; usa 🔊 y escucha, o 🔤 si no entiendes.</div></div>';
  c.innerHTML+='<div class="quiz-dir">Selecciona una opción por pregunta.</div>';
  sec.questions.forEach((q,qi)=>{
    const qdiv=document.createElement('div');
    qdiv.style.marginBottom='18px';
    qdiv.dataset.qindex=qi;
    if(aspect==='listening'){
      qdiv.innerHTML+=`<button class="btn sm ghost" style="margin-bottom:8px;" onclick="speak('${(q.q+'').replace(/'/g,"\\'")}')">🔊 Escuchar</button>`;
    }
    qdiv.innerHTML+=`<div class="quiz-q">${qi+1}. ${q.q}</div>`;
    q.options.forEach((opt,oi)=>{
      const b=document.createElement('button');
      b.className='opt';
      b.textContent=opt;
      b.dataset.opt=oi;
      if(examState.answers[examState.sectionIdx][qi]===oi) b.classList.add('sel');
      b.addEventListener('click',()=>{
        examState.answers[examState.sectionIdx][qi]=oi;
        qdiv.querySelectorAll('.opt').forEach(o=>o.classList.remove('sel'));
        qdiv.querySelectorAll('.opt')[oi].classList.add('sel');
      });
      qdiv.appendChild(b);
    });
    c.appendChild(qdiv);
  });
  const navRow=document.createElement('div');
  navRow.className='btn-row';
  if(examState.sectionIdx>0) navRow.innerHTML+=`<button class="btn ghost" id="exam-prev">← Anterior</button>`;
  const isLast=examState.sectionIdx===FINAL_EXAM.sections.length-1;
  navRow.innerHTML+=`<button class="btn ${isLast?'green':''}" id="exam-next">${isLast?'Ver mi calificación 🏆':'Siguiente sección →'}</button>`;
  c.appendChild(navRow);
  document.getElementById('exam-prev').onclick=()=>{examState.sectionIdx--;renderExamSection();window.scrollTo({top:0,behavior:'smooth'});};
  document.getElementById('exam-next').onclick=()=>{
    if(isLast) finishExam();
    else {examState.sectionIdx++;renderExamSection();window.scrollTo({top:0,behavior:'smooth'});}
  };
}

function finishExam(){
  updateStreak();
  const perAspect={};
  let totalRight=0,totalQ=0;
  const rows=[];
  FINAL_EXAM.sections.forEach((sec,si)=>{
    let right=0;
    sec.questions.forEach((q,qi)=>{
      totalQ++;
      if(examState.answers[si][qi]===q.correct){right++;totalRight++;}
    });
    const pctA=Math.round(right/sec.questions.length*100);
    perAspect[sec.aspect]=pctA;
    rows.push([ASPECTS[sec.aspect].name+' '+ASPECTS[sec.aspect].emoji,`${right}/${sec.questions.length} · ${pctA}%`]);
  });
  const pct=Math.round(totalRight/totalQ*100);
  state.examResult={pct,perAspect,totalRight,totalQ};
  saveState();
  showResults(pct,perAspect,rows);
}

function showResults(pct,perAspect,rows){
  router.replace('results');
  let grade,band;
  if(pct>=85){grade='B2/C1';band='Excelente. Muy buen nivel B2. ¡List@!';}
  else if(pct>=70){grade='B2';band='¡Bien! Nivel B2 alcanzado. Repasa los puntos débiles.';}
  else if(pct>=55){grade='B1/B2';band='Cerca del B2. Refuerza donde fallaste.';}
  else {grade='B1';band='Necesitas más práctica. Repasa los temas y vuelve a intentarlo.';}
  document.getElementById('res-grade').textContent=grade;
  document.getElementById('res-band').textContent=band;
  document.getElementById('res-pct').textContent=`${pct}% · ${state.examResult.totalRight}/${state.examResult.totalQ} aciertos`;
  const table=document.getElementById('res-table');
  table.innerHTML='<tr><th>Aspecto</th><th>Puntaje</th></tr>'+rows.map(r=>`<tr><td>${r[0]}</td><td><b>${r[1]}</b></td></tr>`).join('');
  const recs=document.getElementById('res-recs');
  recs.innerHTML='';
  const order=ASPECT_ORDER.filter(a=>perAspect[a]!==undefined);
  order.sort((a,b)=>perAspect[a]-perAspect[b]).forEach(asp=>{
    if(perAspect[asp]<70) recs.innerHTML+=`<div class="expl-block" style="border-left-color:var(--red);">🔴 <b>${ASPECTS[asp].name}</b> (${perAspect[asp]}%) — repasa los temas y vuelve a practicar.</div>`;
    else recs.innerHTML+=`<div class="expl-block" style="border-left-color:var(--green);">🟢 <b>${ASPECTS[asp].name}</b> (${perAspect[asp]}%) — buen dominio. Mantén el repaso.</div>`;
  });
}

/* ---------------- Init ---------------- */
document.addEventListener('DOMContentLoaded',()=>{
  loadState();
  updateStreak();
  document.getElementById('btn-start').onclick=()=>router.go('home');
  document.getElementById('btn-reset').onclick=()=>{
    if(confirm('¿Seguro que quieres borrar todo tu progreso?')){
      localStorage.removeItem(STORE_KEY);
      state={sectionsDone:{},sectionScores:{},examResult:null,streakDate:null,streak:0};
      location.reload();
    }
  };
  renderWelcomeProgress();
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt',(e)=>{e.preventDefault();deferredPrompt=e;const b=document.getElementById('btn-install');b.style.display='block';b.onclick=()=>deferredPrompt.prompt();});

  const remHost=document.createElement('div');
  remHost.id='home-reminder';
  remHost.className='rem-banner';
  remHost.style.display='none';
  const homeDesc=document.getElementById('home-desc');
  if(homeDesc&&homeDesc.parentNode) homeDesc.parentNode.insertBefore(remHost,homeDesc.nextSibling);

  router.render('welcome');
  if(Object.keys(state.sectionsDone).length>0) router.replace('home');
});

window.router=router;
window.speak=speak;
window.playAll=playAll;
window.beginExam=beginExam;
