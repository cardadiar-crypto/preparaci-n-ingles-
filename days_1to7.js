/* DÍAS 1-7: cada día tiene 4 secciones (Grammar, Reading, Listening, Speaking) */

DAYS.push({
  id: 'day-1',
  title: 'Present Tenses',
  focus: 'Present Simple, Continuous, Perfect — the foundation for everyday speech and exams.',
  sections: [
    {
      aspect: 'grammar', title: 'Grammar: Present Tenses',
      explain: {
        en: [
          {t:'h', text:'Present Simple'},
          {t:'p', text:'Use it for habits, facts and schedules. <b>She works</b> in a hospital. <b>Water boils</b> at 100°C. The train <b>leaves</b> at 6pm.'},
          {t:'ex', text:'✦ I <b>go</b> to the gym every morning.\n✦ The sun <b>rises</b> in the east.\n✦ We <b>finish</b> class at 5.'},
          {t:'h', text:'Present Continuous'},
          {t:'p', text:'Use it for actions in progress now, or temporary situations. <b>I am studying</b> for my exam this week.'},
          {t:'ex', text:'✦ Right now: She <b>is answering</b> the phone.\n✦ Temporary: They <b>are living</b> in London for six months.'},
          {t:'h', text:'Present Perfect'},
          {t:'p', text:'Use it for experience, recent events and with for/since. It connects the past with the present.'},
          {t:'ex', text:'✦ Experience: I <b>have visited</b> Paris.\n✦ Recent: She <b>has just finished</b> the report.\n✦ For: He <b>has worked</b> here <b>for</b> 5 years.'},
          {t:'tip', text:'Key for B2: <b>for</b> + a period of time, <b>since</b> + a point in time. Use "Have you ever…?" for experience.'}
        ],
        es: [
          {t:'h', text:'Presente Simple'},
          {t:'p', text:'Úsalo para hábitos, hechos y horarios. <b>She works</b> in a hospital = Ella trabaja en un hospital. <b>Water boils</b> at 100°C = El agua hierve a 100°C. The train <b>leaves</b> at 6pm = El tren sale a las 6pm.'},
          {t:'p', text:'Presente Continuo: acciones en progreso ahora o situaciones temporales. I <b>am studying</b> = Estoy estudiando.'},
          {t:'p', text:'Presente Perfecto: experiencia, eventos recientes y con for/since. Conecta el pasado con el presente. I <b>have visited</b> Paris = He visitado París.'},
          {t:'tip', text:'Clave B2: <b>for</b> + periodo de tiempo, <b>since</b> + punto en el tiempo. "Have you ever…?" = ¿Has alguna vez…?'}
        ]
      },
      activity: [
        {q:'She ____ to the gym every morning.', options:['go','goes','is going'], correct:1},
        {q:'I ____ for my exam this week, so I\'m busy.', options:['study','am studying','studies'], correct:1},
        {q:'He ____ worked here since 2019.', options:['have','has','is'], correct:1},
        {q:'The train ____ at 6 pm.', options:['is leaving','leaves','has left'], correct:1}
      ],
      evaluation: [
        {q:'Choose the correct sentence:', options:['She has come here yesterday','She came here yesterday','She is coming yesterday'], correct:1},
        {q:'We ____ each other for six years.', options:['know','have known','are knowing'], correct:1},
        {q:'I can\'t talk now, I ____.', options:['drive','am driving','have driven'], correct:1},
        {q:'He ____ to the office every day, but today he ____ by bus.', options:['drives / is going','is driving / goes','drive / go'], correct:0}
      ]
    },
    {
      aspect: 'reading', title: 'Reading: A Daily Routine',
      explain: {
        en: [
          {t:'p', text:'<b>Text:</b> Maria is a nurse in Madrid. Every morning she <b>wakes up</b> at six, <b>has</b> breakfast and <b>takes</b> the metro to work. At the hospital she <b>checks</b> her patients and <b>writes</b> reports. Recently, she <b>has started</b> a night course to improve her English, because she <b>wants</b> to work abroad. Right now, she <b>is studying</b> online before her shift.'},
          {t:'tip', text:'Find the main idea first (gist). Then look for details. Notice which tense shows a habit, a recent event, or an action in progress.'}
        ],
        es: [
          {t:'p', text:'Maria es enfermera en Madrid. Cada mañana se despierta a las seis, desayuna y toma el metro al trabajo. Recientemente ha empezado un curso nocturno para mejorar su inglés, porque quiere trabajar en el extranjero. Ahora mismo está estudiando en línea antes de su turno.'},
          {t:'tip', text:'Encuentra la idea principal primero y luego los detalles. Observa qué tiempo verbal indica hábito, evento reciente o acción en progreso.'}
        ]
      },
      activity: [
        {q:'Where does Maria work?', options:['In a hospital','In a school','In a bank'], correct:0},
        {q:'What time does she wake up?', options:['at six','at eight','at noon'], correct:0},
        {q:'Why is she learning English?', options:['to work abroad','to travel for fun','to read books'], correct:0},
        {q:'What is she doing right now?', options:['studying online','sleeping','cooking'], correct:0}
      ],
      evaluation: [
        {q:'Main idea of the text:', options:['Maria\'s routine and her current studies','a recipe','a weather report'], correct:0},
        {q:'"Has started" is an example of…', options:['present perfect','present simple','past continuous'], correct:0},
        {q:'"Wakes up" shows a…', options:['habit','one-time past action','future plan'], correct:0},
        {q:'"Is studying" shows a(n)…', options:['action in progress','general fact','past habit'], correct:0}
      ]
    },
    {
      aspect: 'listening', title: 'Listening: Understand the Main Idea',
      explain: {
        en: [
          {t:'p', text:'In B2 listening, you often hear a monologue or announcement. Before you listen, <b>read the questions</b> so you know what to listen for. Focus on intonation and connectors such as <b>however</b>, <b>but</b> and <b>although</b>.'},
          {t:'p', text:'<b>Example announcement:</b> "Good morning, passengers. Due to a technical issue, Flight BA234 to London has been delayed by two hours. We apologise."'},
          {t:'tip', text:'Press 🔊 to hear the examples spoken aloud. Listen first for the general idea, then for numbers and details.'}
        ],
        es: [
          {t:'p', text:'En el listening B2 a menudo oirás un monólogo o un anuncio. Antes de escuchar, lee las preguntas para saber qué buscar. Presta atención a la entonación y a conectores como however, but y although.'},
          {t:'p', text:'Ejemplo de anuncio: "Buenos días, pasajeros. Debido a un problema técnico, el vuelo BA234 a Londres se ha retrasado dos horas. Nos disculpamos."'}
        ]
      },
      activity: [
        {q:'In the example, the flight is…', options:['delayed by two hours','cancelled','early'], correct:0},
        {q:'The flight is delayed because of a…', options:['technical issue','storm','strike'], correct:0},
        {q:'Before listening, you should…', options:['read the questions','close your eyes','guess random answers'], correct:0},
        {q:'A word that often signals a contrast is…', options:['however','and','also'], correct:0}
      ],
      evaluation: [
        {q:'Main idea: "Our new policy allows staff to work from home two days a week."', options:['staff can work from home 2 days','everyone must come daily','people are fired'], correct:0},
        {q:'Detail: "The seminar starts at 9:30 and ends at 1 pm with a 20-minute break." When does it end?', options:['1 pm','9:30','12:40'], correct:0},
        {q:'What should you do with intonation?', options:['listen to it to catch meaning','ignore it','copy the accent'], correct:0},
        {q:'The main goal of the first listening is…', options:['the general idea','every single word','writing down everything'], correct:0}
      ]
    },
    {
      aspect: 'speaking', title: 'Speaking: Talk About Yourself',
      explain: {
        en: [
          {t:'p', text:'In the speaking exam you give personal information and opinions. Give <b>full answers</b>, not just "yes" or "no". Use phrases to structure your ideas.'},
          {t:'list', text:'✦ Opinion: <b>In my opinion… / I believe that…</b>\n✦ Ordering: <b>first of all, secondly, finally</b>\n✦ Agreeing: <b>I totally agree / That\'s a good point.</b>\n✦ Disagreeing: <b>I see your point, but…</b>'},
          {t:'tip', text:'Speak for 30–60 seconds per answer. Add reasons and examples. Press 🔊 to hear each phrase and repeat it aloud.'}
        ],
        es: [
          {t:'p', text:'En el examen de speaking das información personal y opiniones. Da respuestas completas, no solo "sí" o "no". Usa frases para estructurar tus ideas.'},
          {t:'list', text:'✦ Opinión: In my opinion… / I believe that… = En mi opinión… / Creo que…\n✦ Ordenar: first of all, secondly, finally = primero, segundo, finalmente\n✦ Acuerdo: I totally agree = Estoy totalmente de acuerdo\n✦ Desacuerdo: I see your point, but… = Entiendo tu punto, pero…'}
        ]
      },
      activity: [
        {q:'To give your opinion:', options:['In my opinion…','Yes.','Not.'], correct:0},
        {q:'To agree strongly:', options:['I totally agree','I\'m not sure','Whatever'], correct:0},
        {q:'To order ideas:', options:['first of all, secondly, finally','anyway','maybe'], correct:0},
        {q:'To disagree politely:', options:['I see your point, but…','You\'re wrong','Impossible'], correct:0}
      ],
      evaluation: [
        {q:'"As far as I\'m concerned" is used to…', options:['introduce your opinion','ask the time','apologise'], correct:0},
        {q:'A good speaking answer is…', options:['complete, with reasons and examples','one word long','copied'], correct:0},
        {q:'To show respectful contrast:', options:['However, I believe…','I\'m right','Stop'], correct:0},
        {q:'Good answers typically last…', options:['30–60 seconds','2 words','5 minutes'], correct:0}
      ]
    }
  ]
});

DAYS.push({
  id: 'day-2',
  title: 'Past Tenses',
  focus: 'Past Simple, Continuous and Past Perfect for telling stories about the past.',
  sections: [
    {
      aspect: 'grammar', title: 'Grammar: Past Tenses',
      explain: {
        en: [
          {t:'h', text:'Past Simple'},
          {t:'p', text:'A completed action in the past. <b>I visited</b> Rome last year. Regular verbs add -ed; irregular verbs change: go→went, see→saw.'},
          {t:'h', text:'Past Continuous'},
          {t:'p', text:'An action in progress at a moment in the past, often interrupted by the Past Simple.'},
          {t:'ex', text:'✦ I <b>was reading</b> when the phone <b>rang</b>.\n✦ At 8pm we <b>were having</b> dinner.'},
          {t:'h', text:'Past Perfect'},
          {t:'p', text:'An action before another past action. <b>When I arrived, they had left</b>.'},
          {t:'tip', text:'In a story: Past Simple = main action; Past Continuous = background; Past Perfect = earlier action.'}
        ],
        es: [
          {t:'h', text:'Pasado Simple'},
          {t:'p', text:'Acción completada en el pasado. I <b>visited</b> Rome = Visité Roma. Los verbos regulares añaden -ed; los irregulares cambian: go→went, see→saw.'},
          {t:'h', text:'Pasado Continuo'},
          {t:'p', text:'Acción en progreso en un momento del pasado, a menudo interrumpida por el pasado simple.'},
          {t:'h', text:'Pasado Perfecto'},
          {t:'p', text:'Acción anterior a otra acción pasada. When I arrived, they <b>had left</b> = Cuando llegué, ellos ya se habían ido.'},
          {t:'tip', text:'En un relato: Past Simple = acción principal; Past Continuous = fondo; Past Perfect = acción anterior.'}
        ]
      },
      activity: [
        {q:'When I ____ home, my mum was cooking.', options:['was arriving','arrived','had arrived'], correct:1},
        {q:'She ____ (leave) before I arrived.', options:['left','was leaving','had left'], correct:2},
        {q:'Last night at 10, I ____ TV.', options:['watched','was watching','had watched'], correct:1},
        {q:'We ____ her two years ago.', options:['met','have met','were meeting'], correct:0}
      ],
      evaluation: [
        {q:'I ____ to the shops when I saw the accident.', options:['walked','was walking','had walked'], correct:1},
        {q:'They ____ dinner when we arrived.', options:['already finished','had already finished','already finishing'], correct:1},
        {q:'By the time we got there, the film ____.', options:['started','had started','was starting'], correct:1},
        {q:'She broke her phone while she ____ it.', options:['used','was using','had used'], correct:1}
      ]
    },
    {
      aspect: 'reading', title: 'Reading: A Past Event',
      explain: {
        en: [
          {t:'p', text:'<b>Text:</b> Last summer, I <b>decided</b> to learn how to ride a bike again after twenty years. I <b>had not ridden</b> one since I was a child. On the first day, I <b>was trying</b> to balance when I <b>fell</b> twice. But I <b>did not give up</b>. By the end of the week, I <b>had already travelled</b> five kilometres without stopping.'},
          {t:'tip', text:'Notice the sequence of events. The Past Perfect (had ridden) happened before the Past Simple (decided). The Past Continuous (was trying) gives the background.'}
        ],
        es: [
          {t:'p', text:'El verano pasado decidí volver a aprender a montar en bicicleta después de veinte años. No montaba una desde que era niño. El primer día, estaba intentando mantener el equilibrio cuando me caí dos veces. Pero no me rendí. Al final de la semana, ya había recorrido cinco kilómetros sin parar.'},
          {t:'tip', text:'Observa la secuencia de eventos. El Past Perfect (had ridden) ocurrió antes que el Past Simple (decided). El Past Continuous (was trying) da el fondo.'}
        ]
      },
      activity: [
        {q:'When had the writer last ridden a bike before last summer?', options:['as a child','last week','yesterday'], correct:0},
        {q:'What happened on the first day?', options:['he fell twice','he rode 5 km','he bought a bike'], correct:0},
        {q:'What does "did not give up" mean here?', options:['he kept trying','he stopped','he rested'], correct:0},
        {q:'By the end of the week, he had…', options:['travelled 5 km without stopping','fallen many times','given up'], correct:0}
      ],
      evaluation: [
        {q:'Main idea of the text:', options:['relearning to ride a bike','a holiday abroad','a cooking plan'], correct:0},
        {q:'"Had not ridden" is…', options:['past perfect','present perfect','future'], correct:0},
        {q:'"Was trying" gives the…', options:['background action','main completed action','future plan'], correct:0},
        {q:'The actions in the text happened in…', options:['the past','the future','the present moment only'], correct:0}
      ]
    },
    {
      aspect: 'listening', title: 'Listening: Dates, Times and Numbers',
      explain: {
        en: [
          {t:'p', text:'In announcements, dates, times and numbers are key details. Listen carefully for them. <b>Example:</b> "The conference begins on the 15th of March at ten o\'clock in the morning."'},
          {t:'tip', text:'Press 🔊 to hear examples. Practise writing down numbers as you hear them. Common traps: 15 vs 50, or "half past" vs "quarter to".'}
        ],
        es: [
          {t:'p', text:'En los anuncios, las fechas, horas y números son detalles clave. Escúchalos con atención. Ejemplo: "La conferencia comienza el 15 de marzo a las diez de la mañana."'},
          {t:'tip', text:'Pulsa 🔊 para escuchar ejemplos. Practica anotar números mientras los oyes. Errores comunes: 15 vs 50, o "y media" vs "menos cuarto".'}
        ]
      },
      activity: [
        {q:'What day does the conference start?', options:['15th of March','10th of March','5th of March'], correct:0},
        {q:'What time does it start?', options:['10 am','10 pm','9 am'], correct:0},
        {q:'"Half past three" means…', options:['3:30','3:15','3:45'], correct:0},
        {q:'Which number is a common listening trap?', options:['15 vs 50','2 vs 3','100 vs 200'], correct:0}
      ],
      evaluation: [
        {q:'Listen: "The workshop costs 40 euros, but students pay 25." How much do students pay?', options:['25','40','15'], correct:0},
        {q:'"Quarter to four" means…', options:['3:45','4:15','4:45'], correct:0},
        {q:'Listen: "Join us on Tuesday the 2nd at noon." When is it?', options:['Tuesday at 12','Tuesday at 2','Monday at 12'], correct:0},
        {q:'In listening tasks, numbers and times are usually…', options:['key details','unimportant','always wrong'], correct:0}
      ]
    },
    {
      aspect: 'speaking', title: 'Speaking: Talk About a Past Experience',
      explain: {
        en: [
          {t:'p', text:'When talking about past experiences, use a clear sequence: <b>first</b>, <b>then</b>, <b>after that</b>, <b>finally</b>. Use the Past Simple for main actions and Past Continuous for background.'},
          {t:'ex', text:'✦ "Last year I <b>went</b> to Valencia. First, I <b>visited</b> the City of Arts. Then I <b>had</b> lunch with friends. I <b>was walking</b> by the beach when it <b>started</b> to rain."'},
          {t:'tip', text:'Press 🔊 to hear the example. Practise telling your own short story of a place you visited.'}
        ],
        es: [
          {t:'p', text:'Cuando hablas de experiencias pasadas, usa una secuencia clara: primero, luego, después de eso, finalmente. Usa el pasado simple para acciones principales y el pasado continuo para el fondo.'},
          {t:'ex', text:'"El año pasado fui a Valencia. Primero visité la Ciudad de las Artes. Luego almorcé con amigos. Estaba caminando por la playa cuando empezó a llover."'}
        ]
      },
      activity: [
        {q:'Which word orders a sequence?', options:['first, then, finally','however, although','but, or'], correct:0},
        {q:'Main action in a past story:', options:['past simple','present perfect','will'], correct:0},
        {q:'Background action in a past story:', options:['past continuous','future','imperative'], correct:0},
        {q:'To continue a story:', options:['then, after that','despite','because'], correct:0}
      ],
      evaluation: [
        {q:'Choose the correct sequence sentence:', options:['First I visited the museum, then I had lunch','Then I visited, first I had lunch','Had I lunch, then visited'], correct:0},
        {q:'"I was walking when it started to rain" uses…', options:['past continuous + past simple','two past perfects','present perfect twice'], correct:0},
        {q:'Which is a background clause?', options:['I was reading a book','I closed the door','He left'], correct:0},
        {q:'Good storytelling needs…', options:['clear order and a mix of tenses','no tenses','only present'], correct:0}
      ]
    }
  ]
});

DAYS.push({
  id: 'day-3',
  title: 'Future Forms',
  focus: 'will, going to and present continuous for future plans and predictions.',
  sections: [
    {
      aspect: 'grammar', title: 'Grammar: Future Forms',
      explain: {
        en: [
          {t:'h', text:'will'},
          {t:'p', text:'Use it for spontaneous decisions, predictions and promises. <b>I\'ll help</b> you. <b>It will rain</b> tomorrow.'},
          {t:'h', text:'be going to'},
          {t:'p', text:'Use it for plans decided before, and predictions with visible evidence. <b>I\'m going to study</b> tonight. Look at the clouds — it <b>is going to rain</b>.'},
          {t:'h', text:'Present Continuous'},
          {t:'p', text:'Use it for fixed arrangements with a time or date. <b>I\'m meeting</b> my tutor at 3.'},
          {t:'tip', text:'Key for B2: do not use "will" for plans you decided earlier; use going to or present continuous.'}
        ],
        es: [
          {t:'h', text:'will'},
          {t:'p', text:'Decisiones espontáneas, predicciones y promesas. I\'ll help you = Te ayudaré. It will rain = Va a llover.'},
          {t:'h', text:'be going to'},
          {t:'p', text:'Planes decididos antes y predicciones con evidencia visible. I\'m going to study = Voy a estudiar. Mira las nubes — va a llover.'},
          {t:'h', text:'Presente Continuo'},
          {t:'p', text:'Acuerdos fijos con fecha u hora. I\'m meeting my tutor at 3 = Me reúno con mi tutor a las 3.'},
          {t:'tip', text:'Clave B2: no uses "will" para planes ya decididos; usa going to o presente continuo.'}
        ]
      },
      activity: [
        {q:'I forgot my umbrella. I ____ buy a new one. (spontaneous)', options:['will','am going to','am'], correct:0},
        {q:'We ____ a meeting with the professor at 10 tomorrow.', options:['will have','are having','going to'], correct:1},
        {q:'Look at the clouds! It ____ rain.', options:['will','is going to','has'], correct:1},
        {q:'I promise I ____ call you later.', options:['will','am going to','call'], correct:0}
      ],
      evaluation: [
        {q:'The plane ____ at 9 am tomorrow.', options:['will lands','lands','land'], correct:1},
        {q:'They ____ married in June. (fixed plan)', options:['get','are getting','will get'], correct:1},
        {q:'Be careful! You ____ drop that glass.', options:['will','are going to','do'], correct:1},
        {q:'A: This bag is heavy. B: Don\'t worry, I ____ carry it.', options:['will','am going to','carry'], correct:0}
      ]
    },
    {
      aspect: 'reading', title: 'Reading: Plans and Predictions',
      explain: {
        en: [
          {t:'p', text:'<b>Text:</b> Tomorrow is a big day. Anna <b>is going to</b> present her project at nine in the morning. She <b>has prepared</b> for weeks. After the presentation, she <b>will</b> meet her team for lunch. In the afternoon, they <b>are starting</b> a new training course. Anna thinks the project <b>will</b> be a great success because she <b>has practised</b> a lot.'},
          {t:'tip', text:'Notice: "is going to" = decided plan; "will" = prediction; "are starting" = fixed arrangement.'}
        ],
        es: [
          {t:'p', text:'Mañana es un gran día. Anna va a presentar su proyecto a las nueve de la mañana. Se ha preparado durante semanas. Después de la presentación, se reunirá con su equipo para almorzar. Por la tarde, comenzarán un nuevo curso de formación. Anna piensa que el proyecto será un gran éxito porque ha practicado mucho.'},
          {t:'tip', text:'Observa: "is going to" = plan decidido; "will" = predicción; "are starting" = acuerdo fijo.'}
        ]
      },
      activity: [
        {q:'When is Anna going to present?', options:['at 9 am','at noon','at 5 pm'], correct:0},
        {q:'She will meet her team…', options:['after the presentation','before presenting','tomorrow night'], correct:0},
        {q:'What do they start in the afternoon?', options:['a training course','a meeting','a holiday'], correct:0},
        {q:'Why does Anna think it will succeed?', options:['she has practised a lot','she is lucky','it is easy'], correct:0}
      ],
      evaluation: [
        {q:'Main idea:', options:['Anna\'s plans and prediction for tomorrow','a recipe','a weather report'], correct:0},
        {q:'"Is going to present" indicates…', options:['a decided plan','a spontaneous decision','a past action'], correct:0},
        {q:'"Will be a great success" indicates…', options:['a prediction','a fixed arrangement','a completed action'], correct:0},
        {q:'"Are starting" indicates…', options:['a fixed arrangement','an order','a wish'], correct:0}
      ]
    },
    {
      aspect: 'listening', title: 'Listening: Plans and Arrangements',
      explain: {
        en: [
          {t:'p', text:'When you hear plans and arrangements, listen for future forms and key times. <b>Example:</b> "We are moving to a new office in September. The manager will announce the exact date next week."'},
          {t:'tip', text:'Press 🔊 to hear examples. Decide if each statement is a decided plan, a prediction, or a fixed arrangement.'}
        ],
        es: [
          {t:'p', text:'Cuando oigas planes y acuerdos, escucha las formas de futuro y las horas clave. Ejemplo: "Nos mudaremos a una nueva oficina en septiembre. El gerente anunciará la fecha exacta la próxima semana."'},
          {t:'tip', text:'Pulsa 🔊 para escuchar ejemplos. Decide si cada afirmación es un plan decidido, una predicción o un acuerdo fijo.'}
        ]
      },
      activity: [
        {q:'When are they moving offices?', options:['in September','in January','today'], correct:0},
        {q:'Who will announce the exact date?', options:['the manager','the assistants','nobody'], correct:0},
        {q:'"We are moving" is a…', options:['fixed arrangement','completely new idea','past action'], correct:0},
        {q:'"The manager will announce" is…', options:['a prediction','a past fact','an order'], correct:0}
      ],
      evaluation: [
        {q:'Listen: "I\'m seeing the doctor tomorrow at 3. Then I\'ll go to the gym." What is the fixed arrangement?', options:['seeing the doctor','going to the gym','watching TV'], correct:0},
        {q:'"I\'ll go to the gym" is best seen as…', options:['a decision/prediction after the plan','a fixed time','a habit'], correct:0},
        {q:'Listen: "The prices will go up next month, so we are ordering now." Why order now?', options:['to pay less','for fun','because they close'], correct:0},
        {q:'A "fixed arrangement" usually has…', options:['a specific time or date','no plan','only a guess'], correct:0}
      ]
    },
    {
      aspect: 'speaking', title: 'Speaking: Talk About Future Plans',
      explain: {
        en: [
          {t:'p', text:'Talk about your future plans using going to for decided plans and present continuous for arrangements with a time. Use <b>will</b> for spontaneous promises or predictions.'},
          {t:'ex', text:'✦ "Next week I\'m going to start a new English course. On Monday I\'m meeting my classmates at 6. I think the course will be great."'},
          {t:'tip', text:'Press 🔊 to hear the example. Practise: say three things about your plan for tomorrow using the correct future form.'}
        ],
        es: [
          {t:'p', text:'Habla de tus planes futuros usando going to para planes decididos y presente continuo para acuerdos con hora. Usa will para promesas espontáneas o predicciones.'},
          {t:'ex', text:'"La próxima semana voy a comenzar un nuevo curso de inglés. El lunes me reúno con mis compañeros a las 6. Creo que el curso será genial."'}
        ]
      },
      activity: [
        {q:'"I\'m going to start a course" shows…', options:['a decided plan','a fixed time agreement alone','a past habit'], correct:0},
        {q:'"I\'m meeting my classmates at 6" shows…', options:['a fixed arrangement','a spontaneous idea','a fact'], correct:0},
        {q:'"I think the course will be great" shows…', options:['a prediction','an arrangement','a completed action'], correct:0},
        {q:'To make a spontaneous offer:', options:['I\'ll help you','I\'m going to help you later for sure','I helped you'], correct:0}
      ],
      evaluation: [
        {q:'Choose the correct future sentence:', options:['On Monday I\'m meeting my classmates at 6','On Monday I will meeting','On Monday I meeting'], correct:0},
        {q:'A decided plan uses…', options:['going to','past perfect','continuous only for present'], correct:0},
        {q:'A fixed arrangement with a time uses…', options:['present continuous','past simple','preterite perfect'], correct:0},
        {q:'Talking about future plans needs…', options:['correct future forms and times','only the past','no tenses'], correct:0}
      ]
    }
  ]
});

DAYS.push({
  id: 'day-4',
  title: 'Conditionals',
  focus: 'Zero, first, second and third conditionals — hypothetical situations.',
  sections: [
    {
      aspect: 'grammar', title: 'Grammar: Conditionals',
      explain: {
        en: [
          {t:'h', text:'Zero (facts)'},
          {t:'ex', text:'If you <b>heat</b> ice, it <b>melts</b>. (present + present)'},
          {t:'h', text:'First (real future)'},
          {t:'ex', text:'If it <b>rains</b>, I <b>will stay</b> at home. (present + will)'},
          {t:'h', text:'Second (hypothetical)'},
          {t:'ex', text:'If I <b>had</b> more time, I <b>would travel</b>. (past + would)'},
          {t:'h', text:'Third (unreal past)'},
          {t:'ex', text:'If I <b>had known</b>, I <b>would have gone</b>. (past perfect + would have)'},
          {t:'tip', text:'Use "If I were you" for advice: If I <b>were</b> you, I would study more.'}
        ],
        es: [
          {t:'h', text:'Cero (hechos)'},
          {t:'p', text:'Si calientas hielo, se derrite. (presente + presente)'},
          {t:'h', text:'Primero (futuro real)'},
          {t:'p', text:'Si llueve, me quedaré en casa. (presente + will)'},
          {t:'h', text:'Segundo (hipotético)'},
          {t:'p', text:'Si tuviera más tiempo, viajaría. (pasado + would)'},
          {t:'h', text:'Tercero (pasado irreal)'},
          {t:'p', text:'Si lo hubiera sabido, habría ido. (past perfect + would have)'},
          {t:'tip', text:'Usa "If I were you" para consejos: Si yo fuera tú, estudiaría más.'}
        ]
      },
      activity: [
        {q:'If it ____ tomorrow, we will cancel the picnic.', options:['rains','rained','would rain'], correct:0},
        {q:'If I ____ you, I would take that job.', options:['was','were','am'], correct:1},
        {q:'If I had known, I ____ earlier.', options:['would come','would have come','came'], correct:1},
        {q:'If you freeze water, it ____ solid.', options:['becomes','would become','became'], correct:0}
      ],
      evaluation: [
        {q:'If I ____ taller, I could reach it. (2nd)', options:['am','were','would be'], correct:1},
        {q:'If they ____ earlier, they would have caught the train. (3rd)', options:['left','had left','would leave'], correct:1},
        {q:'If you study hard, you ____ pass. (1st)', options:['will','would','have'], correct:0},
        {q:'Water ____ if you heat it to 100°C. (zero)', options:['boils','would boil','will boil'], correct:0}
      ]
    },
    {
      aspect: 'reading', title: 'Reading: Hypothetical Situations',
      explain: {
        en: [
          {t:'p', text:'<b>Text:</b> "If I had studied harder in my twenties, I would have become a doctor. Today I work as a receptionist. If I were younger now, I would retrain in medicine. If I get the chance next year, I will take a part-time course. And if you ask me, you should follow your dream while you still can."'},
          {t:'tip', text:'Identify each conditional: had studied/would have become (3rd), were/would retrain (2nd), get/will take (1st).'}
        ],
        es: [
          {t:'p', text:'"Si hubiera estudiado más en mis veinte años, me habría convertido en médico. Hoy trabajo como recepcionista. Si yo fuera más joven ahora, me volvería a formar en medicina. Si tengo la oportunidad el año que viene, haré un curso a tiempo parcial. Y si me preguntas, deberías seguir tu sueño mientras puedas."'}
        ]
      },
      activity: [
        {q:'The speaker works as…', options:['a receptionist','a doctor','a teacher'], correct:0},
        {q:'What would he have been?', options:['a doctor','a chef','a pilot'], correct:0},
        {q:'If he were younger, he would…', options:['retrain in medicine','give up','travel'], correct:0},
        {q:'This is a hypothetical about the past:…', options:['if I had studied / would have become','if I get the chance','if you ask me'], correct:0}
      ],
      evaluation: [
        {q:'Main idea:', options:['a person\'s regrets and plans about career','a news report','a recipe'], correct:0},
        {q:'"If I were younger now" is a…', options:['2nd conditional','1st conditional','zero conditional'], correct:0},
        {q:'"If I get the chance, I will take" is a…', options:['1st conditional','3rd conditional','2nd conditional'], correct:0},
        {q:'The speaker is giving…', options:['advice','an order','a complaint'], correct:0}
      ]
    },
    {
      aspect: 'listening', title: 'Listening: Advice and Warnings',
      explain: {
        en: [
          {t:'p', text:'Conditionals often appear in advice and warnings. <b>Example:</b> "If you don\'t book early, you won\'t get a seat. If I were you, I would reserve now."'},
          {t:'tip', text:'Press 🔊 to hear examples. Listen for the "if" clauses and decide if the meaning is real, hypothetical, or about the past.'}
        ],
        es: [
          {t:'p', text:'Los condicionales suelen aparecer en consejos y advertencias. Ejemplo: "Si no reservas pronto, no conseguirás asiento. Si yo fuera tú, reservaría ahora."'},
          {t:'tip', text:'Pulsa 🔊 para escuchar ejemplos. Escucha las cláusulas "if" y decide si el significado es real, hipotético o sobre el pasado.'}
        ]
      },
      activity: [
        {q:'What happens if you don\'t book early?', options:['you won\'t get a seat','you get a discount','nothing'], correct:0},
        {q:'What does the speaker advise?', options:['to reserve now','to wait','to call later'], correct:0},
        {q:'"If I were you, I would reserve" is a…', options:['2nd conditional advice','1st conditional','zero conditional'], correct:0},
        {q:'This advice refers to…', options:['a hypothetical now','a completed action','a general fact'], correct:0}
      ],
      evaluation: [
        {q:'Listen: "If you had told me earlier, I could have helped." This is about…', options:['the past (3rd conditional)','the future','a habit'], correct:0},
        {q:'Listen: "If it rains, we\'ll stay inside." This is…', options:['1st conditional (real future)','3rd conditional','zero'], correct:0},
        {q:'To warn someone, you might say…', options:['If you don\'t hurry, you\'ll be late','I like pizza','Good morning'], correct:0},
        {q:'The main purpose of these sentences is…', options:['to give advice or warn','to ask the time','to describe scenery'], correct:0}
      ]
    },
    {
      aspect: 'speaking', title: 'Speaking: Give Advice',
      explain: {
        en: [
          {t:'p', text:'Give advice using conditionals. The 2nd conditional "If I were you, I would…" is very useful in the exam.'},
          {t:'ex', text:'✦ "If I were you, I would practise speaking every day."\n✦ "If you want to pass, you should do lots of practice tests."'},
          {t:'tip', text:'Press 🔊 to hear the sentences and repeat them. Practise giving advice for: a friend who is nervous about the exam.'}
        ],
        es: [
          {t:'p', text:'Da consejos usando condicionales. El 2º condicional "If I were you, I would…" es muy útil en el examen.'},
          {t:'ex', text:'"Si yo fuera tú, practicaría hablar todos los días." "Si quieres aprobar, deberías hacer muchos exámenes de práctica."'}
        ]
      },
      activity: [
        {q:'The best phrase for advice is…', options:['If I were you, I would…','I am you','do it now anyway'], correct:0},
        {q:'To give advice you can also use…', options:['you should / you\'d better','you are','I was'], correct:0},
        {q:'Advice about the future uses…', options:['should + base verb','past perfect alone','only "will" in past'], correct:0},
        {q:'A friend who is nervous — good advice:', options:['practise and relax','give up','worry more'], correct:0}
      ],
      evaluation: [
        {q:'Complete: If I ____ you, I wouldn\'t worry.', options:['were','am','would be'], correct:0},
        {q:'"You\'d better study" means…', options:['it\'s advisable to study','you must never study','you already studied'], correct:0},
        {q:'Give advice to someone wanting to improve listening:', options:['practise listening daily','never listen','read only'], correct:0},
        {q:'A balanced advice answer includes…', options:['the advice + a reason','just a word','no reasons'], correct:0}
      ]
    }
  ]
});

DAYS.push({
  id: 'day-5',
  title: 'Passive Voice',
  focus: 'Forming and using the passive in different tenses.',
  sections: [
    {
      aspect: 'grammar', title: 'Grammar: Passive Voice',
      explain: {
        en: [
          {t:'p', text:'The passive uses <b>be + past participle</b>. We use it when the action or object is more important than who does it.'},
          {t:'ex', text:'✦ Active: The chef <b>cooks</b> the food.\n✦ Passive: The food <b>is cooked</b> (by the chef).\n✦ Past: The bridge <b>was built</b> in 1990.\n✦ Perfect: It <b>has been done</b>.'},
          {t:'h', text:'When to use it'},
          {t:'list', text:'✦ Processes and facts: The water <b>is heated</b>.\n✦ When the agent is obvious: My bike <b>was stolen</b>.\n✦ Formality (reports, exams).'},
          {t:'tip', text:'B2 key: transform active to passive in the same tense. Watch out for irregular past participles (written, taken, built).'}
        ],
        es: [
          {t:'h', text:'Voz pasiva'},
          {t:'p', text:'La pasiva usa be + participio pasado. La usamos cuando la acción u objeto es más importante que quien la hace.'},
          {t:'p', text:'El chef cocina la comida → La comida es cocinada (por el chef). El puente fue construido en 1990. Se ha hecho.'},
          {t:'tip', text:'Clave B2: transforma activa a pasiva en el mismo tiempo. Cuidado con participios irregulares (written, taken, built).'}
        ]
      },
      activity: [
        {q:'This report ____ by the manager tomorrow.', options:['will be written','will write','is writing'], correct:0},
        {q:'The house ____ in 2005.', options:['was built','built','is building'], correct:0},
        {q:'English ____ all over the world.', options:['is spoken','speaks','is speaking'], correct:0},
        {q:'Cars ____ in Japan → Cars ____ in Japan.', options:['make / are made','make / are making','are made / made'], correct:0}
      ],
      evaluation: [
        {q:'Change to passive: Someone is repairing the road.', options:['The road is being repaired','The road is repairing','The road repaired'], correct:0},
        {q:'The letter ____ tomorrow morning.', options:['will be sent','will send','is sending'], correct:0},
        {q:'The winners ____ announced last night.', options:['were','are','was'], correct:0},
        {q:'She has written three books →', options:['Three books have been written by her','Three books has written','Three books were writing'], correct:0}
      ]
    },
    {
      aspect: 'reading', title: 'Reading: A Process',
      explain: {
        en: [
          {t:'p', text:'<b>Text:</b> Recycled paper is made from used paper and cardboard. First, the paper is collected and sorted. Then it is soaked in water and turned into pulp. The pulp is cleaned and pressed into new sheets. Finally, the sheets are dried and cut. By using recycled paper, huge amounts of energy and water are saved every year.'},
          {t:'tip', text:'Passive forms show processes and general facts. Notice "is collected", "is pressed", "are saved".'}
        ],
        es: [
          {t:'p', text:'El papel reciclado se fabrica con papel y cartón usados. Primero, el papel se recoge y clasifica. Luego se empapa en agua y se convierte en pulpa. La pulpa se limpia y se prensa en nuevas hojas. Finalmente, las hojas se secan y cortan. Al usar papel reciclado, cada año se ahorran enormes cantidades de energía y agua.'}
        ]
      },
      activity: [
        {q:'What is recycled paper made from?', options:['used paper and cardboard','plastic','metal'], correct:0},
        {q:'What happens after the paper is soaked?', options:['it is turned into pulp','it is thrown away','it is printed'], correct:0},
        {q:'What is saved by using recycled paper?', options:['energy and water','money only','trees and time'], correct:0},
        {q:'"Is collected" is an example of…', options:['the passive voice','the active voice','a question'], correct:0}
      ],
      evaluation: [
        {q:'Main idea of the text:', options:['how recycled paper is made','how to cook','a sports result'], correct:0},
        {q:'The text uses the passive because…', options:['it describes a process','the author is angry','it is informal'], correct:0},
        {q:'"The sheets are dried" is…', options:['passive present','active past','future perfect'], correct:0},
        {q:'Passive sentences here focus on…', options:['the process, not the doer','the people doing it','the machines'], correct:0}
      ]
    },
    {
      aspect: 'listening', title: 'Listening: Processes and Reports',
      explain: {
        en: [
          {t:'p', text:'In reports and news, the passive is common. <b>Example:</b> "Ten new houses were built in the area last year. The project was financed by the town council."'},
          {t:'tip', text:'Press 🔊 to hear examples. Listen for "was/were + past participle" to catch passive statements.'}
        ],
        es: [
          {t:'p', text:'En informes y noticias, la pasiva es común. Ejemplo: "El año pasado se construyeron diez casas nuevas en la zona. El proyecto fue financiado por el ayuntamiento."'},
          {t:'tip', text:'Pulsa 🔊 para escuchar ejemplos. Escucha "was/were + participio pasado" para captar afirmaciones pasivas.'}
        ]
      },
      activity: [
        {q:'How many houses were built?', options:['ten','two','twenty'], correct:0},
        {q:'Who financed the project?', options:['the town council','a private company','nobody'], correct:0},
        {q:'"Were built" is…', options:['passive past','active present','future'], correct:0},
        {q:'Passive is common in…', options:['reports and news','sport chants','informal texting'], correct:0}
      ],
      evaluation: [
        {q:'Listen: "The decision was made by the board yesterday." The passive form is…', options:['was made','is made','will make'], correct:0},
        {q:'In "The report was finished on time", the action's doer is…', options:['not specified','clearly stated','a machine'], correct:0},
        {q:'Listen: "New rules were introduced last month." When?', options:['last month','next year','yesterday only'], correct:0},
        {q:'Using the passive in a report makes it sound…', options:['more formal','more angry','less clear always'], correct:0}
      ]
    },
    {
      aspect: 'speaking', title: 'Speaking: Describe a Process',
      explain: {
        en: [
          {t:'p', text:'You can describe processes using the passive. This can improve your range in the exam.'},
          {t:'ex', text:'✦ "First, the raw material is collected. Then it is processed. Finally, the product is packed and shipped."'},
          {t:'tip', text:'Press 🔊 to hear the example and repeat. Practise describing a simple process, such as making a cup of tea, using the passive.'}
        ],
        es: [
          {t:'p', text:'Puedes describir procesos usando la pasiva. Esto puede mejorar tu variedad en el examen.'},
          {t:'ex', text:'"Primero, la materia prima se recoge. Luego se procesa. Finalmente, el producto se empaqueta y se envía."'}
        ]
      },
      activity: [
        {q:'To describe a process, the passive helps because…', options:['it focuses on the process not the doer','it is always active','it avoids verbs'], correct:0},
        {q:'Order words for a process:', options:['first, then, finally','however, but','very, quite'], correct:0},
        {q:'"The product is packed" is…', options:['passive present','active past','future continuous'], correct:0},
        {q:'Describing "making tea" using passive:', options:['The water is boiled','I going','Water boil'], correct:0}
      ],
      evaluation: [
        {q:'Complete: Water ____ before adding the tea.', options:['is boiled','is boiling','boil'], correct:0},
        {q:'Using the passive shows…', options:['a good range of grammar','poor grammar','no verbs'], correct:0},
        {q:'A process description is good for…', options:['part 2 speaking, describing things','silence','single words'], correct:0},
        {q:'Choose the correct passive process sentence:', options:['The coffee is made first, then served','The coffee made first','Coffee is make'], correct:0}
      ]
    }
  ]
});

DAYS.push({
  id: 'day-6',
  title: 'Modal Verbs for Deduction',
  focus: 'must, can\'t, might, could — expressing certainty and possibility.',
  sections: [
    {
      aspect: 'grammar', title: 'Grammar: Modals for Deduction',
      explain: {
        en: [
          {t:'h', text:'Present deduction'},
          {t:'list', text:'✦ <b>must</b> = almost sure (positive). He <b>must be</b> ill.\n✦ <b>can\'t</b> = almost sure (negative). It <b>can\'t be</b> true.\n✦ <b>might/may/could</b> = possible. She <b>might be</b> at home.'},
          {t:'h', text:'Past deduction'},
          {t:'list', text:'✦ <b>must have + pp</b>: He <b>must have left</b> late.\n✦ <b>can\'t have + pp</b>: She <b>can\'t have gone</b>.\n✦ <b>might have + pp</b>: They <b>might have forgotten</b>.'},
          {t:'tip', text:'In deduction, "must" = certain positive; "can\'t" = certain negative; "might" = possibility.'}
        ],
        es: [
          {t:'h', text:'Deducción presente'},
          {t:'list', text:'must = casi seguro (positivo). He must be ill = Él debe estar enfermo.\ncan\'t = casi seguro (negativo). It can\'t be true = No puede ser verdad.\nmight/may/could = posible. She might be at home = Puede que esté en casa.'},
          {t:'h', text:'Deducción pasada'},
          {t:'list', text:'must have + pp: He must have left = Debe haber salido.\ncan\'t have + pp: She can\'t have gone = No puede haberse ido.\nmight have + pp: They might have forgotten = Puede que hayan olvidado.'}
        ]
      },
      activity: [
        {q:'The lights are on, so he ____ be at home.', options:['must','can\'t','should'], correct:0},
        {q:'She\'s an expert, she ____ know the answer.', options:['must','can\'t','might'], correct:0},
        {q:'That ____ be John — he\'s in London today.', options:['can\'t','must','had to'], correct:0},
        {q:'They ____ come, but I\'m not sure.', options:['might','must','can\'t'], correct:0}
      ],
      evaluation: [
        {q:'She ____ said that, she\'s very kind. (certain negative)', options:['can\'t have','must have','might have'], correct:0},
        {q:'The road is wet, it ____ have rained.', options:['must','can\'t','should'], correct:0},
        {q:'I\'m not sure, but it ____ be a good idea.', options:['might','must','can\'t'], correct:0},
        {q:'That ____ be Maria; she\'s shorter. (certain negative)', options:['can\'t','must','might'], correct:0}
      ]
    },
    {
      aspect: 'reading', title: 'Reading: Deductions in Context',
      explain: {
        en: [
          {t:'p', text:'<b>Text:</b> The lights were off and there was no answer at the door. The neighbours said they had seen a suitcase by the entrance. She must have gone on a trip. But her car was still in the driveway, so she can\'t have driven. She might have taken a taxi to the airport.'},
          {t:'tip', text:'Notice how evidence leads to each deduction: no answer + suitcase → must have gone; car still there → can\'t have driven; unknown → might have taken a taxi.'}
        ],
        es: [
          {t:'p', text:'Las luces estaban apagadas y no había respuesta en la puerta. Los vecinos dijeron que habían visto una maleta junto a la entrada. Debe haberse ido de viaje. Pero su coche seguía en la entrada, así que no puede haber conducido. Puede que haya tomado un taxi al aeropuerto.'}
        ]
      },
      activity: [
        {q:'What did the neighbours see?', options:['a suitcase','a cat','a letter'], correct:0},
        {q:'The evidence suggests she ____ gone on a trip.', options:['must have','can\'t have','might never'], correct:0},
        {q:'Her car was still there, so she ____ driven.', options:['can\'t have','must have','might have'], correct:0},
        {q:'She ____ taken a taxi to the airport.', options:['might have','can\'t have','must have for sure'], correct:0}
      ],
      evaluation: [
        {q:'Main idea:', options:['deducing where a woman has gone','a shopping list','a recipe'], correct:0},
        {q:'"Must have gone" expresses…', options:['near certainty about the past','a question','a future plan'], correct:0},
        {q:'"Can\'t have driven" expresses…', options:['certainty that it didn\'t happen','that it happened','possibility'], correct:0},
        {q:'"Might have taken" expresses…', options:['possibility','certainty','an order'], correct:0}
      ]
    },
    {
      aspect: 'listening', title: 'Listening: Making Deductions',
      explain: {
        en: [
          {t:'p', text:'In listening, you may need to infer meaning. <b>Example:</b> "He never answered my calls and his door was locked. He must have forgotten our meeting."'},
          {t:'tip', text:'Press 🔊 to hear examples. Use evidence you hear to make logical deductions.'}
        ],
        es: [
          {t:'p', text:'En el listening, puede que necesites inferir significado. Ejemplo: "Nunca respondió a mis llamadas y su puerta estaba cerrada. Debe haber olvidado nuestra reunión."'},
          {t:'tip', text:'Pulsa 🔊 para escuchar ejemplos. Usa la evidencia que oyes para hacer deducciones lógicas.'}
        ]
      },
      activity: [
        {q:'Why did the man think his friend forgot the meeting?', options:['no answers and locked door','he saw him there','he texted him'], correct:0},
        {q:'"Must have forgotten" is…', options:['a deduction about the past','a future plan','a question'], correct:0},
        {q:'The deduction is based on…', options:['evidence','a guess with no reason','a lie'], correct:0},
        {q:'If he didn\'t answer, he ____ have been busy.', options:['might','must never','will'], correct:0}
      ],
      evaluation: [
        {q:'Listen: "Her bag is still here, so she can\'t have left yet." This means…', options:['she has not left yet','she left long ago','she will never leave'], correct:0},
        {q:'Listen: "He is laughing, he must be happy." The evidence is…', options:['he is laughing','he is crying','the weather'], correct:0},
        {q:'"Might have" in listening usually means…', options:['a possible explanation','a certain fact','an order'], correct:0},
        {q:'To infer meaning, listen for…', options:['evidence and context','only numbers','only names'], correct:0}
      ]
    },
    {
      aspect: 'speaking', title: 'Speaking: Speculating',
      explain: {
        en: [
          {t:'p', text:'In some tasks you describe a photo and speculate. Use modals of deduction.'},
          {t:'ex', text:'✦ "The man must be a teacher because of the books."\n✦ "It could be a classroom. The students might be doing a test."'},
          {t:'tip', text:'Press 🔊 to hear examples and repeat. Practise: look at a photo and make three deductions using must, can\'t, might.'}
        ],
        es: [
          {t:'p', text:'En algunas tareas describes una foto y especulas. Usa modales de deducción.'},
          {t:'ex', text:'"El hombre debe ser profesor por los libros." "Podría ser un aula. Los estudiantes podrían estar haciendo un examen."'}
        ]
      },
      activity: [
        {q:'To speculate about a photo you say…', options:['he must be / he might be','he is always','I am sure of nothing ever'], correct:0},
        {q:'"It could be a classroom" expresses…', options:['possibility','certainty','an order'], correct:0},
        {q:'Good speculation includes…', options:['modals + a reason','only "yes"','no verbs'], correct:0},
        {q:'"The students might be doing a test" is…', options:['a deduction','a fixed fact','a command'], correct:0}
      ],
      evaluation: [
        {q:'Choose: They ____ be tired after the long trip. (certain positive)', options:['must','can\'t','might'], correct:0},
        {q:'To express near certainty in speaking, use…', options:['must','will not','would have'], correct:0},
        {q:'Photograph tasks want you to…', options:['speculate with modals','read a script','stay silent'], correct:0},
        {q:'A good photo description uses…', options:['modals of deduction and detail','no description','single words'], correct:0}
      ]
    }
  ]
});

DAYS.push({
  id: 'day-7',
  title: 'Reported Speech',
  focus: 'Reporting what people said, asked and told.',
  sections: [
    {
      aspect: 'grammar', title: 'Grammar: Reported Speech',
      explain: {
        en: [
          {t:'p', text:'When reporting, we usually move the tense back and change pronouns and time words.'},
          {t:'list', text:'✦ present → past: "I work" → He said he <b>worked</b>.\n✦ will → would: "I will help" → He said he <b>would</b> help.\n✦ can → could; must → had to.\n✦ now → then; today → that day; tomorrow → the next day; yesterday → the day before.'},
          {t:'h', text:'Questions and orders'},
          {t:'list', text:'✦ "Where is it?" → He asked <b>where it was</b>.\n✦ "Are you OK?" → She asked <b>if I was</b> OK.\n✦ "Open the door!" → He told me <b>to open</b> the door.'},
          {t:'tip', text:'In reported questions, do not use a question mark on the reported clause, and keep statement word order: He asked where it <b>was</b>.'}
        ],
        es: [
          {t:'p', text:'Al reportar, normalmente retrocedemos el tiempo y cambiamos pronombres y palabras de tiempo.'},
          {t:'list', text:'presente → pasado: I work → Dijo que trabajaba.\nwill → would: I will help → Dijo que me ayudaría.\ncan → could; must → had to.\nnow → then; today → that day; tomorrow → the next day; yesterday → the day before.'},
          {t:'p', text:'Preguntas: "Where is it?" → Preguntó dónde estaba. "Are you OK?" → Preguntó si estaba bien. Órdenes: "Open the door!" → Me dijo que abriera la puerta.'}
        ]
      },
      activity: [
        {q:'She said, "I love this song" → She said she ____ that song.', options:['loved','loves','was loving'], correct:0},
        {q:'He said, "I will arrive soon" → He said he ____ arrive soon.', options:['would','will','had'], correct:0},
        {q:'Direct: "Are you ready?" → She asked ____.', options:['if I was ready','was I ready','I was ready'], correct:0},
        {q:'He told me, "Close the window" → He told me ____ the window.', options:['to close','close','closing'], correct:0}
      ],
      evaluation: [
        {q:'Direct: "I have finished" → She said she ____.', options:['had finished','has finished','finished'], correct:0},
        {q:'Direct: "Where do you live?" → He asked me ____.', options:['where I lived','where did I live','where I live'], correct:0},
        {q:'Direct: "I must go" → She said she ____ go.', options:['had to','must','would'], correct:0},
        {q:'Direct: "We are leaving tomorrow" → They said they ____.', options:['were leaving the next day','are leaving tomorrow','had left'], correct:0}
      ]
    },
    {
      aspect: 'reading', title: 'Reading: An Interview Report',
      explain: {
        en: [
          {t:'p', text:'<b>Text:</b> In an interview, the director said that the company <b>was planning</b> to open two new offices. He added that sales <b>had increased</b> by 20% last year. He explained that staff <b>would</b> receive training. He also asked the journalists <b>whether they had</b> any more questions.'},
          {t:'tip', text:'Notice the tense shifts: is planning→was planning, have increased→had increased, will→would.'}
        ],
        es: [
          {t:'p', text:'En una entrevista, el director dijo que la empresa estaba planeando abrir dos nuevas oficinas. Añadió que las ventas habían aumentado un 20% el año pasado. Explicó que el personal recibiría formación. También preguntó a los periodistas si tenían más preguntas.'}
        ]
      },
      activity: [
        {q:'What is the company planning to do?', options:['open two new offices','close a store','stop sales'], correct:0},
        {q:'Sales increased by…', options:['20%','2%','50%'], correct:0},
        {q:'Staff will receive…', options:['training','a bonus','a holiday'], correct:0},
        {q:'The director asked whether they…', options:['had any more questions','were leaving','wanted lunch'], correct:0}
      ],
      evaluation: [
        {q:'Main idea:', options:['a director reporting company news','a recipe','a poem'], correct:0},
        {q:'"Had increased" is reported from…', options:['have increased','increase','increasing'], correct:0},
        {q:'"Would receive" is reported from…', options:['will receive','receive','received'], correct:0},
        {q:'Reported questions here are introduced by…', options:['whether / if','because','although'], correct:0}
      ]
    },
    {
      aspect: 'listening', title: 'Listening: Reported Conversations',
      explain: {
        en: [
          {t:'p', text:'You may hear a person retelling what someone said. <b>Example:</b> "Anna told me that she had already booked the tickets and that she would pick me up at six."'},
          {t:'tip', text:'Press 🔊 to hear examples. Notice the backshift in tenses when listening to reported speech.'}
        ],
        es: [
          {t:'p', text:'Puede que oigas a una persona contando qué dijo alguien. Ejemplo: "Anna me dijo que ya había reservado los billetes y que me recogería a las seis."'},
          {t:'tip', text:'Pulsa 🔊 para escuchar ejemplos. Observa el retroceso de tiempos al escuchar estilo indirecto.'}
        ]
      },
      activity: [
        {q:'What did Anna say she had done?', options:['booked the tickets','bought a car','met a friend'], correct:0},
        {q:'When will she pick up the speaker?', options:['at six','at noon','never'], correct:0},
        {q:'"She had booked" is reported from…', options:['she has booked','she books','she boarded'], correct:0},
        {q:'This is an example of…', options:['reported speech','direct quotation with no change','a command'], correct:0}
      ],
      evaluation: [
        {q:'Listen: "He said he was driving home." The original was probably…', options:['I am driving home','I was driving','He drives'], correct:0},
        {q:'Listen: "She told me she would call." "Would" reports…', options:['will','can','must'], correct:0},
        {q:'In reported speech, "today" becomes…', options:['that day','this day','tomorrow'], correct:0},
        {q:'To report a yes/no question use…', options:['if / whether','which','how much'], correct:0}
      ]
    },
    {
      aspect: 'speaking', title: 'Speaking: Report What Someone Said',
      explain: {
        en: [
          {t:'p', text:'In speaking, you may need to pass on information. Practise tense backshift.'},
          {t:'ex', text:'✦ "My friend said that he was going to visit London."\n✦ "She asked me if I had finished my homework."'},
          {t:'tip', text:'Press 🔊 to hear these and repeat. Practise reporting: what did your friend say yesterday?'}
        ],
        es: [
          {t:'p', text:'En speaking, puede que necesites transmitir información. Practica el retroceso de tiempos.'},
          {t:'ex', text:'"Mi amigo dijo que iba a visitar Londres." "Ella me preguntó si había terminado mis deberes."'}
        ]
      },
      activity: [
        {q:'Report: "I am going to London" → He said he ____ going to London.', options:['was','is','will'], correct:0},
        {q:'Report: "Have you finished?" → She asked me ____ I had finished.', options:['if','that','because'], correct:0},
        {q:'Report: "I will help" → He said he ____ help.', options:['would','will','is'], correct:0},
        {q:'When passing on information you…', options:['change tenses appropriately','repeat exactly always','use only present'], correct:0}
      ],
      evaluation: [
        {q:'Report: "I can swim" → He said he ____ swim.', options:['could','can','would'], correct:0},
        {q:'Report: "We won!" → They said they ____.', options:['had won','have won','win'], correct:0},
        {q:'Reporting orders uses…', options:['told + me + to + verb','asked + will','said + ing'], correct:0},
        {q:'Good reporting of a conversation shows…', options:['tense shifts and clear pronouns','no change','only greetings'], correct:0}
      ]
    }
  ]
});
