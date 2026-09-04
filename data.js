/* =========================================================
   ENGLISH B2 PREP V2 - ESTRUCTURA BASE
   Cambios vs v1:
   - Secciones con 15+ ejercicios reales.
   - Listening: preguntas con 'transcript' (audio oculto) +
     pregunta visible + opciones. Botón para revelar texto.
   - Speaking: ejercicios ORALES abiertos { prompt, model,
     keywords } con reconocimiento de voz y retroalimentación.
   ========================================================= */

const ASPECTS = {
  grammar:  { name: 'Grammar',  emoji: '🔤', color: '#6366f1' },
  reading:  { name: 'Reading',  emoji: '📖', color: '#06b6d4' },
  listening:{ name: 'Listening',emoji: '🎧', color: '#f59e0b' },
  speaking: { name: 'Speaking', emoji: '💬', color: '#22c55e' }
};

const ASPECT_ORDER = ['grammar','reading','listening','speaking'];

/* Cada día: { id, title, focus, sections:[ {aspect,title,explain:{en:[] es:[]},activity:[],evaluation:[]} ] } */
const DAYS = [];

/* Examen final simulado: 4 aspectos, alargado (15 por aspecto) */
const FINAL_EXAM = {
  intro: 'Simulated B2 exam covering all four skills with 15 questions per aspect. Answer as best you can to get your estimated grade.',
  sections: [
    { aspect:'grammar', title:'Grammar & Use of English', questions: [
      {q:'If I ____ more time, I would have called you.', options:['had had','had','have'], correct:0},
      {q:'The report ____ by Friday.', options:['will be submitted','will submit','is submitting'], correct:0},
      {q:'She denied ____ the money.', options:['taking','to take','take'], correct:0},
      {q:'This is the house ____ I grew up.', options:['where','which','who'], correct:0},
      {q:'He can\'t ____ the tickets; they were sold out.', options:['have bought','buying','to buy'], correct:0},
      {q:'I look forward to ____ from you.', options:['hearing','hear','heard'], correct:0},
      {q:'We ____ living here since 2015.', options:['have been','has been','had been'], correct:0},
      {q:'By the time we arrived, the show ____.', options:['had started','starts','is starting'], correct:0},
      {q:'She told me she ____ call me later.', options:['would','will','was'], correct:0},
      {q:'____ being tired, she finished the marathon.', options:['Despite','Although','Because'], correct:0},
      {q:'I wish I ____ harder when I was at school.', options:['had studied','study','have studied'], correct:0},
      {q:'The project ____ completed by the time the manager returned.', options:['had been','has been','was being'], correct:0},
      {q:'Neither the students nor the teacher ____ aware of the change.', options:['was','were','are'], correct:0},
      {q:'She suggested ____ the meeting until Friday.', options:['postponing','to postpone','postpone'], correct:0},
      {q:'Hardly ____ arrived when the alarm went off.', options:['had we','we had','did we'], correct:0}
    ]},
    { aspect:'reading', title:'Reading', questions: [
      {q:'Main idea: "Urban cycling is growing as cities build more bike lanes. Riders enjoy speed and health, but safety remains a concern."', options:['urban cycling grows, with a safety challenge','cycling has no problems','there are no cyclists'], correct:0},
      {q:'Detail: What are cities building?', options:['more bike lanes','more highways','stadiums'], correct:0},
      {q:'Main idea: "The printing press made books widely available, yet it threatened hand-copiers\' livelihoods."', options:['the press changed access to books and affected copiers','car prices','internet history'], correct:0},
      {q:'Detail: Who was threatened?', options:['hand-copiers','librarians','pilots'], correct:0},
      {q:'Best heading: "Many firms now offer flexible hours. This helps work-life balance but complicates team coordination."', options:['Flexible hours: benefits and a challenge','The end of work','Office history'], correct:0},
      {q:'Detail: What does flexibility complicate?', options:['team coordination','salary','marketing'], correct:0},
      {q:'Reference: "The chairman resigned and this angered the board." What does "this" refer to?', options:['the resignation','the board','anger'], correct:0},
      {q:'Inference: "Sales dropped sharply after the negative review, and they never fully recovered." We can infer the review', options:['seriously damaged sales','had no effect','increased sales'], correct:0},
      {q:'Synonym: "The findings are crucial for the project." The closest meaning of crucial is', options:['essential','useless','temporary'], correct:0},
      {q:'Opinion: "Although some criticize the plan, its benefits clearly outweigh the costs." The writer', options:['supports the plan','opposes it','is neutral'], correct:0},
      {q:'Detail: "Thirty percent of respondents said they exercise daily, while twenty percent said weekly." How many exercise daily?', options:['30%','20%','50%'], correct:0},
      {q:'Main idea: "Virtual classrooms offer flexibility but lack face-to-face interaction, which many learners miss."', options:['virtual learning: flexible but less interactive','online is perfect','classes are cancelled'], correct:0}
    ]},
    { aspect:'listening', title:'Listening', questions: [
      {q:'Announcement: "The library closes early at 4pm Friday for maintenance and reopens Monday at 8am." When does it close on Friday?', options:['4pm','8am','5pm'], correct:0},
      {q:'Why does it close early?', options:['maintenance','a party','holidays'], correct:0},
      {q:'Lecture: "The workshop has three parts: overview, practice, then questions." What comes second?', options:['practice','overview','questions'], correct:0},
      {q:'Detail: "Tickets are 30 for the public and 18 for members." How much for a member?', options:['18','30','12'], correct:0},
      {q:'Main idea: "Due to heavy snow forecasts, tomorrow\'s school bus service will be suspended."', options:['the school bus service will be suspended','there will be summer snow','schools open early'], correct:0},
      {q:'What is forecast?', options:['heavy snow','heat','light rain'], correct:0},
      {q:'"We recommend booking at least a week ahead, as weekend slots fill quickly." When should you book?', options:['a week ahead or more','the same day','never'], correct:0},
      {q:'"The trainer asked us to complete part three at home." What should you do at home?', options:['part three','part one','nothing'], correct:0}
    ]},
    { aspect:'speaking', title:'Speaking: Language Functions', questions: [
      {q:'To agree strongly, you say:', options:['I couldn\'t agree more','I\'m not sure','I doubt it'], correct:0},
      {q:'To disagree politely:', options:['I see your point, but…','You\'re wrong','Never'], correct:0},
      {q:'To ask the other person\'s opinion:', options:['What do you think?','Let me stop','Goodbye'], correct:0},
      {q:'To give an opinion:', options:['In my opinion…','Yes.','No.'], correct:0},
      {q:'To give a reason:', options:['because / the reason is…','no idea','whatever'], correct:0},
      {q:'To order your ideas:', options:['firstly, secondly, finally','and done','maybe'], correct:0}
    ]}
  ]
};
