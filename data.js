/* =========================================================
   ENGLISH B2 PREP - ESTRUCTURA BASE
   ========================================================= */

const ASPECTS = {
  grammar:  { name: 'Grammar',  emoji: '🔤', color: '#6366f1' },
  reading:  { name: 'Reading',  emoji: '📖', color: '#06b6d4' },
  listening:{ name: 'Listening',emoji: '🎧', color: '#f59e0b' },
  speaking: { name: 'Speaking', emoji: '💬', color: '#22c55e' }
};

const ASPECT_ORDER = ['grammar','reading','listening','speaking'];

/* Cada día: { id, title, focus, sections: [ { aspect, title, explain:{en:[] es:[]}, activity:[], evaluation:[] } ] } */
/* ASTIS se rellena desde los archivos days_*.js */
const DAYS = [];

/* Examen final simulado (día 28) */
const FINAL_EXAM = {
  intro: 'Simulated B2 exam covering all four skills. Answer as best you can to get your estimated grade.',
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
      {q:'____ being tired, she finished the marathon.', options:['Despite','Although','Because'], correct:0}
    ]},
    { aspect:'reading', title:'Reading', questions: [
      {q:'Main idea: "Urban cycling is growing as cities build more bike lanes. Riders enjoy speed and health, but safety remains a concern."', options:['urban cycling grows, with a safety challenge','cycling has no problems','there are no cyclists'], correct:0},
      {q:'Detail: What are cities building?', options:['more bike lanes','more highways','stadiums'], correct:0},
      {q:'Main idea: "The printing press made books widely available, yet it threatened hand-copiers\' livelihoods."', options:['the press changed access to books and affected copiers','car prices','internet history'], correct:0},
      {q:'Detail: Who was threatened?', options:['hand-copiers','librarians','pilots'], correct:0},
      {q:'Best heading: "Many firms now offer flexible hours. This helps work-life balance but complicates team coordination."', options:['Flexible hours: benefits and a challenge','The end of work','Office history'], correct:0},
      {q:'Detail: What does flexibility complicate?', options:['team coordination','salary','marketing'], correct:0}
    ]},
    { aspect:'listening', title:'Listening', questions: [
      {q:'Announcement: "The library closes early at 4pm Friday for maintenance and reopens Monday at 8am." When does it close on Friday?', options:['4pm','8am','5pm'], correct:0},
      {q:'Why does it close early?', options:['maintenance','a party','holidays'], correct:0},
      {q:'Lecture: "The workshop has three parts: overview, practice, then questions." What comes second?', options:['practice','overview','questions'], correct:0},
      {q:'Detail: "Tickets are 30 for the public and 18 for members." How much for a member?', options:['18','30','12'], correct:0},
      {q:'Main idea: "Due to heavy snow forecasts, tomorrow\'s school bus service will be suspended."', options:['the school bus service will be suspended','there will be summer snow','schools open early'], correct:0},
      {q:'What is forecast?', options:['heavy snow','heat','light rain'], correct:0}
    ]},
    { aspect:'speaking', title:'Speaking: Language Functions', questions: [
      {q:'To agree strongly:', options:['I couldn\'t agree more','I\'m not sure','I doubt it'], correct:0},
      {q:'To disagree politely:', options:['I see your point, but…','You\'re wrong','Never'], correct:0},
      {q:'To ask the other person\'s opinion:', options:['What do you think?','Let me stop','Goodbye'], correct:0},
      {q:'To give an opinion:', options:['In my opinion…','Yes.','No.'], correct:0},
      {q:'To give a reason:', options:['because / the reason is…','no idea','whatever'], correct:0},
      {q:'To order your ideas:', options:['firstly, secondly, finally','and done','maybe'], correct:0}
    ]}
  ]
};
