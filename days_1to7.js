/* DÃA 1 - Present Tenses (extendido, nuevo formato) */
DAYS.push({
  id:'day-1', title:'Present Tenses',
  focus:'Present Simple, Continuous and Perfect in depth.',
  sections:[

  { aspect:'grammar', title:'Grammar: Present Tenses',
    explain:{ en:[
      {t:'h',text:'Present Simple'},
      {t:'p',text:'Habits, facts and schedules. <b>She works</b> in a hospital. <b>Water boils</b> at 100Â°. The train <b>leaves</b> at 6.'},
      {t:'h',text:'Present Continuous'},
      {t:'p',text:'Actions in progress now, or temporary situations. <b>I am studying</b> this week.'},
      {t:'h',text:'Present Perfect'},
      {t:'p',text:'Experience, recent events, for/since. Connects past and present. <b>I have visited</b> Paris.'},
      {t:'tip',text:'Key B2: <b>for</b> + period, <b>since</b> + point. "Have you everâ€¦?" for experience.'}
    ], es:[
      {t:'h',text:'Presente Simple'},
      {t:'p',text:'HÃ¡bitos, hechos, horarios. She works = Ella trabaja. The train leaves = El tren sale.'},
      {t:'p',text:'Presente Continuo: en progreso o temporal. I am studying = Estoy estudiando.'},
      {t:'p',text:'Presente Perfecto: experiencia, recientes, for/since. I have visited = He visitado.'}
    ]},
    activity:[
      {q:'She ____ to the gym every morning.', options:['go','goes','is going'], correct:1},
      {q:'I ____ for my exam this week, so I am busy.', options:['study','am studying','studies'], correct:1},
      {q:'He ____ worked here since 2019.', options:['have','has','is'], correct:1},
      {q:'The train ____ at 6 pm.', options:['is leaving','leaves','has left'], correct:1},
      {q:'They ____ in London for six months; it is temporary.', options:['live','are living','lives'], correct:1},
      {q:'____ you ever been to Brazil?', options:['Have','Has','Do'], correct:0},
      {q:'Water ____ at 100 degrees Celsius.', options:['boil','boils','is boiling'], correct:1},
      {q:'Look! The bus ____.', options:['comes','is coming','has come'], correct:1},
      {q:'She ____ English since she was a child.', options:['learns','has learnt','is learning'], correct:1},
      {q:'The meeting ____ at 9 tomorrow morning.', options:['starts','is starting','has started'], correct:0},
      {q:'I usually ____ coffee, but today I ____ tea.', options:['drink / am drinking','am drinking / drink','drinks / drinks'], correct:0},
      {q:'We ____ each other for years.', options:['know','have known','are knowing'], correct:1},
      {q:'She ____ dinner right now in the kitchen.', options:['makes','is making','has made'], correct:1},
      {q:'They ____ that new restaurant twice this month.', options:['visit','are visiting','have visited'], correct:2},
      {q:'How long ____ you live here?', options:['do','are','have'], correct:2}
    ],
    evaluation:[
      {q:'Choose the correct sentence:', options:['She has come here yesterday','She came here yesterday','She is coming yesterday'], correct:1},
      {q:'We ____ each other for six years.', options:['know','have known','are knowing'], correct:1},
      {q:'I cannot talk now, I ____.', options:['drive','am driving','have driven'], correct:1},
      {q:'He ____ to work every day, but today he ____ by bus.', options:['drives / is going','is driving / goes','drive / go'], correct:0},
      {q:'She ____ to Rome on holiday twice.', options:['goes','has gone','is going'], correct:1},
      {q:'____ you understanding this lesson?', options:['Do','Are','Have'], correct:1},
      {q:'This dish ____ delicious. What ____ you putting in it?', options:['tastes / are','is tasting / do','taste / are'], correct:0},
      {q:'My sister ____ in a bank since she finished university.', options:['works','is working','has worked'], correct:2},
      {q:'Be quiet! The baby ____ sleep.', options:['sleeps','is sleeping','has slept'], correct:1},
      {q:'I have known him ____ 2010.', options:['for','since','during'], correct:1},
      {q:'She has worked here ____ five years.', options:['since','for','from'], correct:1},
      {q:'Every Saturday we ____ to the market.', options:['go','are going','have gone'], correct:0},
      {q:'He ____ just ____ the report; it is ready.', options:['has / finished','is / finishing','did / finish'], correct:0},
      {q:'Look at those clouds! It ____ rain.', options:['looks like it will','is going to look','is looking'], correct:0},
      {q:'I ____ (never) ____ such a beautiful place.', options:['have never seen','am never seeing','never see'], correct:0}
    ]
  },

  { aspect:'reading', title:'Reading: A Daily Routine',
    explain:{ en:[
      {t:'p',text:'<b>Text:</b> Maria is a nurse in Madrid. Every morning she wakes up at six, has breakfast and takes the metro to work. At the hospital she checks her patients and writes reports. Recently, she has started a night course to improve her English, because she wants to work abroad. Right now, she is studying online before her shift.'},
      {t:'tip',text:'Find the main idea (gist) first, then details. Notice which tense shows habit, recent event or action in progress.'}
    ], es:[
      {t:'p',text:'Maria es enfermera en Madrid. Cada maÃ±ana se despierta a las seis, desayuna y toma el metro al trabajo. Recientemente ha empezado un curso nocturno de inglÃ©s. Ahora estÃ¡ estudiando en lÃ­nea.'}
    ]},
    activity:[
      {q:'Where does Maria work?', options:['In a hospital','In a school','In a bank'], correct:0},
      {q:'What time does she wake up?', options:['at six','at eight','at noon'], correct:0},
      {q:'Why is she learning English?', options:['to work abroad','to travel for fun','to read books'], correct:0},
      {q:'What is she doing right now?', options:['studying online','sleeping','cooking'], correct:0},
      {q:'How does she get to work?', options:['by metro','by car','by bike'], correct:0},
      {q:'What does she do at the hospital?', options:['checks patients and writes reports','sells medicines','drives patients'], correct:0},
      {q:'"Has started" shows a ____ action.', options:['recent','future','habitual past'], correct:0},
      {q:'"Wakes up" shows a ____.', options:['habit','one-time action','plan'], correct:0},
      {q:'"Is studying" shows ____.', options:['action in progress','general fact','past habit'], correct:0},
      {q:'The main idea of the text is Maria\'s ____.', options:['routine and studies','holiday','favourite food'], correct:0},
      {q:'Maria wants to improve her English because she ____.', options:['wants to work abroad','enjoys grammar','has a test tomorrow'], correct:0},
      {q:'How does she travel to work?', options:['by metro','by bus','on foot'], correct:0},
      {q:'The word "recently" most relates to ____ tense.', options:['present perfect','past simple','future'], correct:0},
      {q:'What is the writer\'s purpose?', options:['describe a routine','sell a product','give weather'], correct:0},
      {q:'Before her shift, Maria is ____.', options:['studying','sleeping','working out'], correct:0}
    ],
    evaluation:[
      {q:'Main idea of the text:', options:['Maria\'s routine and studies','a recipe','a weather report'], correct:0},
      {q:'"Has started" is an example ofâ€¦', options:['present perfect','present simple','past continuous'], correct:0},
      {q:'"Wakes up" shows aâ€¦', options:['habit','one-time past action','future plan'], correct:0},
      {q:'"Is studying" shows a(n)â€¦', options:['action in progress','general fact','past habit'], correct:0},
      {q:'Maria works withâ€¦', options:['patients','students','animals'], correct:0},
      {q:'She is improving her English with a ____ course.', options:['night','morning','weekend-only'], correct:0},
      {q:'Where does Maria live?', options:['Madrid','London','Paris'], correct:0},
      {q:'The text is written mostly in the ____.', options:['present tense','past only','future only'], correct:0},
      {q:'Before her shift, Maria is ____.', options:['studying online','sleeping','shopping'], correct:0},
      {q:'The word "checks" in the text means ____.', options:['examines','pays','cleans'], correct:0},
      {q:'What is likely true about Maria?', options:['she is hard-working','she is lazy','she dislikes English'], correct:0},
      {q:'"A night course" means a course that happens ____.', options:['in the evening','on the roof','at midnight only'], correct:0},
      {q:'Which detail is NOT mentioned?', options:['her salary','her breakfast','the metro'], correct:0},
      {q:'Maria took the metroâ€¦', options:['to work','nowhere','to the beach'], correct:0},
      {q:'The overall tone of the text is ____.', options:['neutral and descriptive','angry','funny'], correct:0}
    ]
  },

  { aspect:'listening', title:'Listening: Understand the Main Idea',
    explain:{ en:[
      {t:'p',text:'In B2 listening, you hear a monologue or announcement. Before listening, read the questions. Focus on intonation and connectors such as <b>however, but, although</b>.'},
      {t:'tip',text:'Press ðŸ”Š to hear each audio. The text is hidden â€” listen first. Use ðŸ‘ to reveal if you get stuck.'}
    ], es:[
      {t:'p',text:'En el listening B2 oirÃ¡s anuncios. Lee las preguntas antes. El texto estÃ¡ oculto; usa el botÃ³n ðŸ‘ si lo necesitas.'}
    ]},
    activity:[
      {transcript:'Good morning, passengers. Due to a technical issue, Flight BA234 to London has been delayed by two hours.', q:'What happened to the flight?', options:['it was delayed two hours','it was cancelled','it was early'], correct:0},
      {transcript:'Passengers should re-check the departure screen in thirty minutes.', q:'When should passengers check again?', options:['in thirty minutes','in two hours','immediately'], correct:0},
      {transcript:'The seminar starts at nine thirty and ends at one, with a break at eleven.', q:'When does the seminar end?', options:['at one','at nine thirty','at eleven'], correct:0},
      {transcript:'Parking for visitors is free at the weekend but costs five pounds during the week.', q:'When is parking free?', options:['at the weekend','during the week','never'], correct:0},
      {transcript:'Although it was raining all morning, the match still went ahead as planned.', q:'What happened to the match?', options:['it took place as planned','it was cancelled','it was moved indoors'], correct:0},
      {transcript:'The library will close early on Friday for maintenance and reopen on Monday.', q:'Why will the library close early?', options:['for maintenance','for a holiday','for a party'], correct:0},
      {transcript:'Tickets cost thirty for the general public and eighteen for members.', q:'How much is a member ticket?', options:['eighteen','thirty','twelve'], correct:0},
      {transcript:'Please have your boarding pass and passport ready; we will begin boarding shortly.', q:'What must passengers have ready?', options:['boarding pass and passport','a ticket only','an invitation'], correct:0},
      {transcript:'The manager has emailed the new schedule to all employees already.', q:'How were employees informed?', options:['by email','by phone','by letter'], correct:0},
      {transcript:'We only have two tickets left for tonight\'s show, in the back row.', q:'How many tickets are left?', options:['two','none','twenty'], correct:0},
      {transcript:'If you arrive late, please enter quietly and take a seat at the back.', q:'What should late arrivals do?', options:['enter quietly and sit at the back','talk loudly','stand outside'], correct:0},
      {transcript:'The train to Oxford departs from platform three every half hour.', q:'How often does the Oxford train leave?', options:['every half hour','every hour','once a day'], correct:0},
      {transcript:'Although the boss seemed unhappy, he did not complain about the report.', q:'How did the boss seem?', options:['unhappy but silent','very angry and loud','delighted'], correct:0},
      {transcript:'The meeting has been moved to Friday because the board room is booked on Thursday.', q:'When is the meeting now?', options:['Friday','Thursday','Monday'], correct:0},
      {transcript:'We apologise for the delay; the cause was a signal failure.', q:'What caused the delay?', options:['a signal failure','bad weather','a strike'], correct:0}
    ],
    evaluation:[
      {transcript:'Our new policy allows staff to work from home two days a week.', q:'What does the new policy allow?', options:['home work two days a week','everyone works daily','staff are fired'], correct:0},
      {transcript:'The final answer is due next Monday by midnight, no extensions.', q:'When is the deadline?', options:['next Monday midnight','tomorrow','next month'], correct:0},
      {transcript:'Although she was tired, she finished the whole exam in time.', q:'What did she do?', options:['finished in time','gave up','fainted'], correct:0},
      {transcript:'The discount applies only to items over twenty pounds.', q:'Which items have a discount?', options:['those over twenty pounds','all items','toy items only'], correct:0},
      {transcript:'Please confirm your booking by email before Thursday, or it will be cancelled.', q:'What must you do before Thursday?', options:['confirm by email','call the office','pay in person'], correct:0},
      {transcript:'The tour starts at ten and there is a small break at noon.', q:'When is the break?', options:['at noon','at ten','at two'], correct:0},
      {transcript:'We managed to finish the project ahead of schedule.', q:'The project finishedâ€¦', options:['early','late','never'], correct:0},
      {transcript:'The new canteen is open from seven to six, and coffee is free before nine.', q:'When is coffee free?', options:['before nine','after six','at noon'], correct:0},
      {transcript:'He said he would call back in ten minutes, but he hasn\'t yet.', q:'Has he called back?', options:['no, not yet','yes, quickly','unknown'], correct:0},
      {transcript:'We recommend booking at least a week in advance, as weekend slots fill quickly.', q:'When should you book?', options:['a week ahead','same day','never'], correct:0},
      {transcript:'The trainer asked us to complete part three at home.', q:'What should you do at home?', options:['complete part three','do nothing','read part one'], correct:0},
      {transcript:'Tickets for the concert sold out within an hour of going on sale.', q:'Tickets sold outâ€¦', options:['in an hour','in a week','they did not sell out'], correct:0},
      {transcript:'Although it seems complicated, the task is actually quite simple.', q:'How is the task described?', options:['simple despite appearance','impossible','extremely hard'], correct:0},
      {transcript:'The report has been corrected and sent to the director this morning.', q:'What happened to the report?', options:['was corrected and sent','was discarded','is still drafts'], correct:0},
      {transcript:'Due to the public holiday, the office will be closed on Wednesday.', q:'Why is the office closed?', options:['public holiday','a strike','renovation'], correct:0}
    ]
  },

  { aspect:'speaking', title:'Speaking: Talk About Yourself',
    explain:{ en:[
      {t:'p',text:'In the speaking exam you give personal information and opinions. Give <b>full answers</b>, not just "yes" or "no". Use phrases: <b>In my opinionâ€¦ / I believe thatâ€¦</b> and <b>first of all, secondly, finally</b>.'},
      {t:'tip',text:'Speak for 30â€“60 seconds. Add reasons and examples. Practise out loud with the microphone (ðŸŽ™).'}
    ], es:[
      {t:'p',text:'En el speaking das informaciÃ³n y opiniones. Da respuestas completas. Usa: In my opinion = En mi opiniÃ³n; first of all = primero.'}
    ]},
    activity:[
      {prompt:'Introduce yourself: name, where you live, and what you do.', model:'My name is Maria and I live in Madrid. I am a nurse and I work in a hospital near the centre of the city.', keywords:['name','live','work','hospital','city']},
      {prompt:'Describe what you usually do on a typical day.', model:'On a normal day I wake up at seven, have breakfast and go to work by metro. In the evening I relax or study English online.', keywords:['wake','breakfast','work','evening','study']},
      {prompt:'Talk about your hobbies and free time.', model:'In my free time I like reading and cooking. I also enjoy going to the gym with my friends.', keywords:['free','time','reading','cooking','enjoy']},
      {prompt:'Say why you are learning English and your goal.', model:'I am learning English because I want to work abroad. My goal is to pass the B2 exam and get a better job.', keywords:['learning','because','goal','exam','job']},
      {prompt:'Describe a typical weekend for you.', model:'At the weekend I usually visit my family and we have lunch together. Sometimes we go to the cinema.', keywords:['weekend','family','lunch','cinema','together']},
      {prompt:'Talk about your job or studies and what you like about them.', model:'I work as a nurse and I really like helping people. It is hard work but very rewarding.', keywords:['nurse','helping','people','rewarding','work']},
      {prompt:'Say what makes you happy.', model:'What makes me happiest is spending time with my friends and family. I also love travelling and seeing new places.', keywords:['happy','friends','family','travelling','places']},
      {prompt:'Talk about a place you would love to visit and why.', model:'I would love to visit London because it has so much history and culture. I also want to practise my English there.', keywords:['visit','london','history','culture','english']}
    ],
    evaluation:[
      {prompt:'Talk about your daily routine in as much detail as you can.', model:'Every day I wake up early, have breakfast with coffee, and take the bus to work. After work, I study English and then have dinner.', keywords:['wake','breakfast','bus','work','study','dinner']},
      {prompt:'Describe your best friend and why you get along.', model:'My best friend is called Ana. We get along because we share the same sense of humour and we both love sports.', keywords:['friend','called','get','along','humour','sports']},
      {prompt:'Say what you plan to do in the next year.', model:'In the next year I plan to pass my English exam, travel to the United Kingdom and maybe change my job.', keywords:['plan','exam','travel','kingdom','change','job']},
      {prompt:'Talk about your favourite food and when you usually eat it.', model:'My favourite food is pasta, especially at the weekend with my family. I usually cook it on Sundays.', keywords:['favourite','pasta','weekend','family','sundays','cook']},
      {prompt:'Describe a happy memory from your past.', model:'A happy memory is my graduation day. My whole family came and we celebrated together with a big dinner.', keywords:['memory','graduation','family','celebrated','dinner']},
      {prompt:'Say whether you prefer a big city or a small town, and why.', model:'I prefer a big city because there is more to do, but I also like how peaceful a small town can be.', keywords:['prefer','big','city','peaceful','town','more']},
      {prompt:'Talk about something you are good at.', model:'I am good at cooking. I learned from my grandma and I can make many traditional dishes.', keywords:['good','cooking','grandma','traditional','dishes']}
    ]
  }
  ]
});


/* DÃA 2 - Past Tenses (extendido) */
DAYS.push({
  id:'day-2', title:'Past Tenses',
  focus:'Past Simple, Continuous and Past Perfect.',
  sections:[

  { aspect:'grammar', title:'Grammar: Past Tenses',
    explain:{ en:[
      {t:'h',text:'Past Simple'},
      {t:'p',text:'A completed action in the past. <b>I visited</b> Rome. Irregular: goâ†’went, seeâ†’saw.'},
      {t:'h',text:'Past Continuous'},
      {t:'p',text:'Action in progress at a moment, often interrupted. <b>I was reading when the phone rang</b>.'},
      {t:'h',text:'Past Perfect'},
      {t:'p',text:'Action before another past action. <b>When I arrived, they had left</b>.'}
    ], es:[
      {t:'h',text:'Pasado Simple'},
      {t:'p',text:'AcciÃ³n completada. I visited = VisitÃ©. I went = Fui.'},
      {t:'p',text:'Pasado Continuo: en progreso, a menudo interrumpido. I was reading = Estaba leyendo.'},
      {t:'p',text:'Pasado Perfecto: acciÃ³n anterior. They had left = Ellos se habÃ­an ido.'}
    ]},
    activity:[
      {q:'I ____ my friend yesterday at the station.', options:['meet','met','was meeting'], correct:1},
      {q:'When I arrived, the meeting ____ already ____.', options:['had / started','has / started','was / starting'], correct:0},
      {q:'While she ____, the phone rang.', options:['cooked','was cooking','had cooked'], correct:1},
      {q:'He ____ the report at 5 o\'clock last Friday.', options:['finishes','finished','has finished'], correct:1},
      {q:'At 9pm last night I ____ TV.', options:['watched','was watching','had watched'], correct:1},
      {q:'She realized she ____ her keys at home.', options:['forgot','had forgotten','is forgetting'], correct:1},
      {q:'____ you ____ to the concert last month?', options:['Did / go','Have / gone','Do / go'], correct:0},
      {q:'We ____ dinner when the lights went out.', options:['had','were having','have'], correct:1},
      {q:'By 10 am, the team ____ the project.', options:['finished','had finished','was finishing'], correct:1},
      {q:'He ____ his homework before he went out.', options:['did','had done','was doing'], correct:1},
      {q:'The teacher ____ the lesson when we entered.', options:['started','had started','starts'], correct:1},
      {q:'A: What ____ you ____ when I called?', options:['was / doing','were / doing','did / doing'], correct:1},
      {q:'They ____ to the beach last weekend.', options:['go','went','have gone'], correct:1},
      {q:'She ____ that movie three times in her life.', options:['saw','had seen','has seen'], correct:2},
      {q:'It ____ raining when we left the house.', options:['was','were','had'], correct:0}
    ],
    evaluation:[
      {q:'Choose the correct past sentence:', options:['I have seen him yesterday','I saw him yesterday','I see him yesterday'], correct:1},
      {q:'When we reached the station, the train ____.', options:['already left','had already left','leaves'], correct:1},
      {q:'While they ____ football, it started to rain.', options:['played','were playing','had played'], correct:1},
      {q:'She ____ to say goodbye before she travelled.', options:['had called','was calling','has called'], correct:0},
      {q:'The bus ____ at nine this morning.', options:['arrived','has arrived','had arrived'], correct:0},
      {q:'I was tired because I ____ all day.', options:['worked','had worked','have worked'], correct:1},
      {q:'When I phoned her, she ____ in the shower.', options:['was','were','is'], correct:0},
      {q:'They ____ the tickets online two weeks ago.', options:['bought','have bought','had bought'], correct:0},
      {q:'He said he ____ never ____ to that city.', options:['had / been','has / been','was / been'], correct:0},
      {q:'Which is correct?', options:['I was watching TV while she cooked','I watching TV','I was cook'], correct:0},
      {q:'By the time the firemen arrived, the fire ____.', options:['had stopped','has stopped','stops'], correct:0},
      {q:'She ____ her homework, so she could relax.', options:['finished','had finished','finishes'], correct:1},
      {q:'____ you ____ the news yesterday?', options:['Did / watch','Have / watch','Are / watching'], correct:0},
      {q:'While we ____, someone stole our bag.', options:['shopped','were shopping','had shopped'], correct:1},
      {q:'He was hungry because he ____ breakfast.', options:['didn\'t have','hasn\'t had','hadn\'t had'], correct:2}
    ]
  },

  { aspect:'reading', title:'Reading: A Past Event',
    explain:{ en:[
      {t:'p',text:'<b>Text:</b> Last summer, Maria went to London to improve her English. She stayed with a host family for three weeks. Every day she attended classes in the morning and visited museums in the afternoon. The course was challenging, but by the end she had learnt many new words and felt much more confident.'},
      {t:'tip',text:'Notice which actions are completed (past simple), in progress (past continuous), or happened earlier (past perfect).'}
    ], es:[
      {t:'p',text:'El verano pasado, Maria fue a Londres para mejorar su inglÃ©s. Se quedÃ³ con una familia anfitriona tres semanas. Al final habÃ­a aprendido muchas palabras.'}
    ]},
    activity:[
      {q:'Where did Maria go last summer?', options:['London','Paris','Madrid'], correct:0},
      {q:'How long did she stay?', options:['three weeks','one month','two days'], correct:0},
      {q:'Who did she stay with?', options:['a host family','her aunt','a hotel'], correct:0},
      {q:'What did she do in the mornings?', options:['attended classes','worked','slept'], correct:0},
      {q:'What did she do in the afternoons?', options:['visited museums','swam','cooked'], correct:0},
      {q:'How was the course?', options:['challenging','boring','free'], correct:0},
      {q:'By the end she had ____ new words.', options:['learnt','forgotten','printed'], correct:0},
      {q:'How did she feel at the end?', options:['more confident','tired of English','lost'], correct:0},
      {q:'"Stayed with a host family" means she ____.', options:['lived with them temporarily','refused them','worked there'], correct:0},
      {q:'Which tense describes her finished summer actions?', options:['past simple','future','present continuous'], correct:0},
      {q:'"By the end she had learnt many words" uses ____.', options:['past perfect','past simple only','present'], correct:0},
      {q:'What was the purpose of her trip?', options:['improve her English','see the Queen','work'], correct:0},
      {q:'Where is Madrid in this story?', options:['where she started from','her destination','unknown'], correct:0},
      {q:'The text\'s overall purpose is to ____.', options:['recount a past experience','advertise','give a recipe'], correct:0},
      {q:'In the mornings she ____ to classes.', options:['went','never went','slept through'], correct:0}
    ],
    evaluation:[
      {q:'Maria went to London to ____.', options:['improve her English','find a job','meet her cousin'], correct:0},
      {q:'She stayed ____ with a host family.', options:['for three weeks','for six months','a night'], correct:0},
      {q:'The host family means ____.', options:['a local family she lived with','her pets','a hotel brand'], correct:0},
      {q:'Classes were ____.', options:['in the morning','in the evening','skipped'], correct:0},
      {q:'In the afternoons she ____ museums.', options:['visited','closed','worked at'], correct:0},
      {q:'Which word means "difficult but rewarding"?', options:['challenging','easy','boring'], correct:0},
      {q:'"By the end she had learnt many words" shows an action ____.', options:['completed before the end','happening now','that will happen'], correct:0},
      {q:'The main idea of the text is ____.', options:['a trip to learn English','a shopping trip','a cooking class'], correct:0},
      {q:'Maria improved most clearly in her ____.', options:['vocabulary and confidence','handwriting','cooking'], correct:0},
      {q:'The story is told in the ____.', options:['past tense','present tense','future tense'], correct:0},
      {q:'Why did she need the host family?', options:['to practise English at home','for free food only','she was lost'], correct:0},
      {q:'Which statement is probably true?', options:['the trip was successful','Maria disliked it all','she stayed home'], correct:0},
      {q:'"Challenging but rewarding" suggests the course was ____.', options:['hard but useful','impossible','not worth it'], correct:0},
      {q:'After three weeks, Maria probably felt ____.', options:['more confident','worse','the same'], correct:0},
      {q:'Each morning she ____ to museums in the afternoon.', options:['attended classes then went out','stayed in bed','cooked at noon'], correct:0}
    ]
  },

  { aspect:'listening', title:'Listening: Past Details',
    explain:{ en:[
      {t:'p',text:'Listen for time markers like <b>yesterday, last week, ago, when, while, by the time</b> and sequence words <b>first, then, finally</b>.'},
      {t:'tip',text:'Listen first without the text. Then reveal to check dates, numbers and order.'}
    ], es:[
      {t:'p',text:'Escucha los marcadores de tiempo: yesterday, while, by the time. El texto estÃ¡ oculto primero.'}
    ]},
    activity:[
      {transcript:'Last week we moved the meeting from Wednesday to Thursday because the manager was away.', q:'When was the meeting moved to?', options:['Thursday','Wednesday','Friday'], correct:0},
      {transcript:'The shop closed at six yesterday because it was a public holiday.', q:'Why did the shop close early?', options:['public holiday','a strike','too few customers'], correct:0},
      {transcript:'While I was waiting for the bus, I saw an old friend from school.', q:'What was the person doing?', options:['waiting for the bus','buying a ticket','driving'], correct:0},
      {transcript:'By the time we arrived, the film had already started.', q:'What happened?', options:['the film had started before we arrived','we saw the whole film','the film was cancelled'], correct:0},
      {transcript:'He lost his wallet on the train yesterday and had to cancel his cards.', q:'Where did he lose his wallet?', options:['on the train','at the cinema','at home'], correct:0},
      {transcript:'The interview went well last Friday and she got the job the same afternoon.', q:'When did she get the offer?', options:['the same afternoon','a month later','the next year'], correct:0},
      {transcript:'We had already booked the hotel when my boss changed the dates of the trip.', q:'What did they do before the boss changed the dates?', options:['booked the hotel','cancelled everything','bought flights'], correct:0},
      {transcript:'Last summer they visited five different countries in just two weeks.', q:'How many countries did they visit?', options:['five','two','ten'], correct:0},
      {transcript:'While I was cooking, the phone rang and it was my mother.', q:'What was the person doing when the phone rang?', options:['cooking','sleeping','shopping'], correct:0},
      {transcript:'She had finished all her work before the deadline, so she left early.', q:'Why did she leave early?', options:['she had finished her work','she was fired','the office closed'], correct:0},
      {transcript:'Yesterday the museum was closed for a private event, so we went to the park.', q:'What did they do instead?', options:['went to the park','went home','went shopping'], correct:0},
      {transcript:'He broke his leg last winter and had to stop playing football.', q:'What happened to his leg?', options:['he broke it','it was fine','he hurt his arm'], correct:0},
      {transcript:'Before the meeting, the assistant had printed all the reports.', q:'When were the reports printed?', options:['before the meeting','after the meeting','during lunch'], correct:0},
      {transcript:'They had lived in Canada for ten years before they moved back home.', q:'How long did they live in Canada?', options:['ten years','two years','one year'], correct:0},
      {transcript:'The lecture last night about climate change lasted two hours.', q:'What was the lecture about?', options:['climate change','cooking','music'], correct:0}
    ],
    evaluation:[
      {transcript:'Last month the team finally finished the project they had started in January.', q:'When had they started?', options:['in January','last week','yesterday'], correct:0},
      {transcript:'While she was driving to work, she heard the news on the radio.', q:'How did she hear the news?', options:['on the radio','on TV','from a friend'], correct:0},
      {transcript:'The concert started at eight, but many people arrived late.', q:'What time did the concert start?', options:['eight','nine','ten'], correct:0},
      {transcript:'He had forgotten to lock the door, so the dog escaped.', q:'Why did the dog escape?', options:['the door was unlocked','the dog flew','a window was open'], correct:0},
      {transcript:'Yesterday I went to the bank, then to the supermarket, and finally home.', q:'What was the second place?', options:['the supermarket','the bank','home'], correct:0},
      {transcript:'The meeting finished early because everyone agreed quickly.', q:'Why did it finish early?', options:['they agreed quickly','nobody came','it was cancelled'], correct:0},
      {transcript:'When we got home, our neighbours had already left a package at the door.', q:'What had the neighbours done?', options:['left a package','called the police','taken the mail'], correct:0},
      {transcript:'She studied all night and felt very tired the next day.', q:'How did she feel?', options:['very tired','full of energy','sick of school'], correct:0},
      {transcript:'The sales had ended by the time I got to the shop, so everything was full price.', q:'What happened to the sales?', options:['they had ended','they just started','they were fake'], correct:0},
      {transcript:'While they were talking, the waiter brought the wrong order.', q:'What went wrong?', options:['the wrong order was brought','they left','the waiter quit'], correct:0},
      {transcript:'He had saved money for years before he bought that car.', q:'How long had he saved?', options:['for years','for a week','not at all'], correct:0},
      {transcript:'Yesterday the package was delivered at noon, earlier than expected.', q:'When was it delivered?', options:['at noon','in the evening','at midnight'], correct:0},
      {transcript:'We had visited Rome before, so we knew where to eat.', q:'Why did they know where to eat?', options:['they had visited before','they had a map','they guessed'], correct:0},
      {transcript:'She apologised for being late because the bus had broken down.', q:'Why was she late?', options:['the bus broke down','she overslept','she was lost'], correct:0},
      {transcript:'Last weekend we went hiking, but the weather turned cold quickly.', q:'What happened to the weather?', options:['it turned cold','it stayed warm','it rained all day'], correct:0}
    ]
  },

  { aspect:'speaking', title:'Speaking: Tell a Past Story',
    explain:{ en:[
      {t:'p',text:'Use the past simple for main events, past continuous for background, and past perfect for earlier actions. Add time markers: <b>first, then, after that, finally</b>.'},
      {t:'tip',text:'Practise telling a story out loud focusing on sequence words and the microphone.'}
    ], es:[
      {t:'p',text:'Para contar historias: past simple para eventos, past continuous para el fondo, past perfect para acciones anteriores. Usa first, then, finally.'}
    ]},
    activity:[
      {prompt:'Tell the story of a past trip you made.', model:'Last year I went to Paris with my family. First we took the train, then we visited the Eiffel Tower, and finally we ate a great dinner by the river.', keywords:['last','year','trip','paris','family','finally']},
      {prompt:'Describe what you were doing yesterday at a specific time.', model:'Yesterday at seven I was cooking dinner while my sister was doing her homework.', keywords:['yesterday','seven','cooking','dinner','sister','homework']},
      {prompt:'Talk about an important event last year.', model:'Last year I passed a difficult exam. I had studied a lot for weeks, and I was really happy when I saw my results.', keywords:['year','passed','exam','studied','happy','results']},
      {prompt:'Tell what you had done before your current job or studies.', model:'Before I started this job, I had studied languages and worked as a teacher in another city.', keywords:['before','started','studied','teacher','worked','city']},
      {prompt:'Describe a past holiday and what happened.', model:'Two summers ago I went to the beach with friends. While we were swimming, it became cloudy and we had to go back.', keywords:['summer','beach','friends','swimming','cloudy','back']},
      {prompt:'Tell about a time you learnt something new.', model:'I once learnt to cook a traditional dish from my grandma. While she was teaching me, I made mistakes, but finally it was perfect.', keywords:['learnt','cook','grandma','teaching','mistakes','perfect']},
      {prompt:'Describe an accident or problem that happened once.', model:'Once I missed my flight because the taxi had broken down. I was frustrated, but I took the next flight.', keywords:['missed','flight','taxi','broke','frustrated','next']},
      {prompt:'Talk about a childhood memory.', model:'As a child I used to play football in the park every afternoon. I had a yellow ball, and my friends and I spent hours together.', keywords:['child','football','park','afternoon','ball','friends']}
    ],
    evaluation:[
      {prompt:'Describe your last visit to the doctor.', model:'Last month I visited the doctor because I had had a bad cough for a week. He examined me and told me to rest and drink water.', keywords:['doctor','cough','week','examined','rest','water']},
      {prompt:'Tell about a job interview you had.', model:'Last year I had a job interview. I had prepared many answers, so I felt calm, and they called me two days later.', keywords:['interview','prepared','answers','calm','called','later']},
      {prompt:'Describe something you bought that you were happy about.', model:'I bought a new laptop last spring. I had saved money for months, and it was worth it.', keywords:['bought','laptop','saved','money','worth']},
      {prompt:'Tell about a past celebration with your family.', model:'Last Christmas my whole family gathered at my grandparents\' house. We had prepared food and celebrated until late.', keywords:['christmas','family','grandparents','food','celebrated','night']},
      {prompt:'Describe your first day at university.', model:'On my first day at university I was very nervous. I had arrived early, so I had time to find my classroom and meet classmates.', keywords:['first','university','nervous','arrived','classroom','classmates']},
      {prompt:'Tell what you used to do in your free time as a teenager.', model:'As a teenager I used to ride my bike after school and listen to music. I also played video games with my brother.', keywords:['teenager','bike','school','music','video','games']},
      {prompt:'Describe a past challenge you overcame.', model:'Last year I had to give a presentation in English. I had practised for weeks, and in the end it went really well.', keywords:['presentation','english','hard','practised','weeks','went']}
    ]
  }
  ]
});


/* DAY 3 - Future Forms */
DAYS.push({
  id:'day-3', title:'Future Forms',
  focus:'Master will, going to, present continuous for future, future perfect and future continuous.',
  sections:[

  { aspect:'grammar', title:'Grammar: Future Forms',
    explain:{ en:[
      {t:'h',text:'Future Forms in English'},
      {t:'p',text:'English has several ways to talk about the future, each with a different meaning and use.'},
      {t:'p',text:'<b>Will</b> is used for predictions (often with think/believe), spontaneous decisions made at the moment of speaking, promises, offers and requests.'},
      {t:'p',text:'<b>Going to</b> is used for intentions/plans decided before the moment of speaking, and for predictions based on present evidence.'},
      {t:'p',text:'<b>Present continuous for future</b> is used for fixed personal arrangements and confirmed plans (usually with a time expression).'},
      {t:'p',text:'<b>Future perfect</b> (will + have + past participle) describes an action that will be completed before a specific time in the future.'},
      {t:'p',text:'<b>Future continuous</b> (will + be + verb-ing) describes an action that will be in progress at a specific time in the future.'},
      {t:'tip',text:'Key difference: "I will help you" = spontaneous offer. "I am going to help you" = pre-planned intention. "I am helping you tomorrow" = fixed arrangement.'}
    ], es:[
      {t:'h',text:'Las formas futuras en ingles'},
      {t:'p',text:'El ingles tiene varias formas de hablar del futuro, cada una con un significado y uso diferente.'},
      {t:'p',text:'<b>Will</b> se usa para predicciones, decisiones espontaneas, promesas, ofertas y peticiones.'},
      {t:'p',text:'<b>Going to</b> se usa para intenciones/planes decididos antes de hablar, y predicciones basadas en evidencia presente.'},
      {t:'p',text:'<b>Present continuous para futuro</b> se usa para arreglos personales fijos y planes confirmados.'},
      {t:'p',text:'<b>Future perfect</b> (will + have + participio) describe una accion que se completara antes de un momento especifico.'},
      {t:'p',text:'<b>Future continuous</b> (will + be + verbo-ing) describe una accion que estara en progreso en un momento especifico.'}
    ]},
    activity:[
      {q:'I promise I _____ help you with your homework tonight.', options:['will','going to','am going to help','shall help'], correct:0},
      {q:'Look at those dark clouds. It _____ rain.', options:['will','is going to','is raining','shall'], correct:1},
      {q:'I have my ticket. I _____ to Paris next Monday.', options:['will fly','am flying','am going to fly','go to fly'], correct:1},
      {q:'By next year, I _____ my degree.', options:['will finish','will have finished','am finishing','have finished'], correct:1},
      {q:'This time tomorrow, I _____ on the beach.', options:['will lie','will be lying','am lying','lie'], correct:1},
      {q:'I think the team _____ the match tomorrow.', options:['wins','will win','is winning','is going to win'], correct:1},
      {q:'The train arrives at 3 pm. By then, we _____ for two hours.', options:['wait','will have waited','will wait','are waiting'], correct:1},
      {q:'She _____ her driving test next week. She has been practising every day.', options:['will pass','is going to pass','is passing','passes'], correct:1},
      {q:'Be careful! You _____ that glass!', options:['break','are breaking','will break','are going to break'], correct:3},
      {q:'At 9 o\'clock tonight, I _____ a film with friends.', options:['watch','will watch','will be watching','am watching'], correct:2},
      {q:'We _____ a party for Mum\'s birthday next Saturday. Everything is booked.', options:['will have','are having','will be having','have'], correct:1},
      {q:'Don\'t worry. I _____ you everything you need.', options:['am going to bring','will bring','will be bringing','bring'], correct:1},
      {q:'By the time you arrive, I _____ the dinner.', options:['cook','will cook','will have cooked','am cooking'], correct:2},
      {q:'The President _____ the new policy in a press conference at noon tomorrow.', options:['announces','will announce','will be announcing','is going to announce'], correct:2},
      {q:'I can\'t meet at 7. I _____ a meeting at that time.', options:['will have','will be having','am having','have'], correct:1}
    ],
    evaluation:[
      {q:'Which form expresses a spontaneous decision made while speaking?', options:['Going to','Present continuous','Will','Future perfect'], correct:2},
      {q:'"I am meeting John at 6 pm tomorrow." This is a:', options:['prediction','spontaneous decision','fixed arrangement','general intention'], correct:2},
      {q:'Which sentence correctly uses the future perfect?', options:['I will have finish by Monday.','I will finish by Monday.','I will have finished by Monday.','I am going to have finished by Monday.'], correct:2},
      {q:'She _____ all evening, so she cannot come.', options:['will study','will be studying','studies','is studying'], correct:1},
      {q:'What does "going to" express for predictions?', options:['a spontaneous guess','evidence-based prediction','a promise','a fixed arrangement'], correct:1},
      {q:'By 2030, scientists _____ a cure for the disease.', options:['found','will find','will have found','are finding'], correct:2},
      {q:'"Be quiet! The baby _____." Which form is correct?', options:['is sleeping','will sleep','sleeps','will be sleeping'], correct:0},
      {q:'I _____ you as soon as I get home.', options:['will call','am calling','will be calling','call'], correct:0},
      {q:'Which is a fixed arrangement?', options:['It will rain tomorrow.','I think it will be cold.','I am visiting my parents this weekend.','I am going to visit my parents.'], correct:2},
      {q:'Don\'t call at 8. I _____ dinner then.', options:['will cook','will have cooked','will be cooking','cook'], correct:2},
      {q:'He _____ for three hours by the time the exam starts.', options:['will study','will have studied','will be studying','studies'], correct:1},
      {q:'Which form is most suitable for a prediction based on dark clouds?', options:['Will','Going to','Present continuous','Future continuous'], correct:1},
      {q:'We _____ in this house for ten years next March.', options:['live','will live','will be living','will have lived'], correct:3},
      {q:'I decided last night. I _____ the job offer.', options:['accept','will accept','am accepting','am going to accept'], correct:1},
      {q:'At this time next week, the students _____ their final exams.', options:['take','will take','will be taking','will have taken'], correct:2}
    ]
  },

  { aspect:'reading', title:'Reading: Life in 2050',
    explain:{ en:[
      {t:'p',text:'<b>Text:</b> By 2050, our daily lives will look dramatically different from today. Scientists predict that most cars will be electric and self-driving, which means commuting times will be spent working or relaxing rather than gripping a steering wheel. Cities will have been redesigned with vertical gardens and rooftop farms to combat pollution and food shortages. Many jobs that exist today will have been replaced by artificial intelligence, but new careers in technology, healthcare, and sustainability will have emerged. Children who are born now will have grown up in a world where virtual reality classrooms are the norm and long-distance travel will have become almost instant through new transport technologies. However, experts warn that the transition will not be smooth. By 2050, rising sea levels will have displaced millions of people, and governments will be struggling to manage the social consequences. The choices we make today will determine whether 2050 is a utopia or a crisis.'},
      {t:'tip',text:'Notice how the passage uses a variety of future forms: will for predictions, future perfect for completed actions by a deadline, and future continuous for ongoing actions at a specific time.'}
    ], es:[
      {t:'p',text:'<b>Texto:</b> Para 2050, nuestras vidas diarias se veran dramaticamente diferentes. Los cientificos predicen que la mayoria de los coches seran electrices y autonomos, lo que significara que los tiempos de desplazamiento se dedicaran a trabajar o relajarse. Las ciudades habran sido rediseÃ±adas con jardines verticales y granjas en azoteas para combatir la contaminacion. Muchos trabajos actuales habran sido reemplazados por inteligencia artificial, pero surgiran nuevas carreras. Los niÃ±os que nacen ahora habran crecido en un mundo donde las aulas de realidad virtual son la norma. Sin embargo, los expertos advierten que la transicion no sera sencilla. Para 2050, el aumento del nivel del mar habra desplazado a millones de personas.'}
    ]},
    activity:[
      {q:'According to the text, what will self-driving cars allow commuters to do?', options:['Drive faster','Work or relax during the journey','Save money on fuel','Travel without tickets'], correct:1},
      {q:'What will cities use to combat pollution?', options:['Underground tunnels','Vertical gardens and rooftop farms','Bigger roads','More parking'], correct:1},
      {q:'The text states that many current jobs will be replaced by:', options:['Human workers','International organisations','Artificial intelligence','Manual robots'], correct:2},
      {q:'What does the passage predict about education by 2050?', options:['Schools will close','All teaching will be done by robots','Virtual reality classrooms will be normal','Students will study outdoors'], correct:2},
      {q:'Which problem will rising sea levels cause according to the text?', options:['More tourism','Displacement of millions of people','Stronger oceans','Longer summers'], correct:1},
      {q:'The word "emerged" in paragraph 2 is closest in meaning to:', options:['disappeared','been destroyed','come into existence','been forgotten'], correct:2},
      {q:'What tone does the author use when discussing the future?', options:['Completely optimistic','Mostly neutral with some warnings','Entirely negative','Humorous and light-hearted'], correct:1},
      {q:'The phrase "the choices we make today" suggests that:', options:['the future is entirely unpredictable','human decisions can influence future outcomes','only scientists control the future','nothing will change'], correct:1},
      {q:'How many future forms are clearly used in this passage?', options:['Only one (will)','Only two (will and going to)','Three or more (will, future perfect, future continuous)','None at all'], correct:2},
      {q:'The passage mentions that children born now will have experienced:', options:['Traditional classrooms only','Long-distance travel by horse','Virtual reality classrooms as normal','No technology at school'], correct:2},
      {q:'What does "gripping a steering wheel" suggest about current driving?', options:['It is relaxing','It requires active attention and effort','It is dangerous','It is enjoyable'], correct:1},
      {q:'According to the passage, what will governments struggle with?', options:['Building new cars','Managing social consequences of displacement','Creating new schools','Growing food indoors'], correct:1},
      {q:'The word "norm" in paragraph 2 means:', options:['something unusual','something rare','the standard or expected thing','an expensive option'], correct:2},
      {q:'The author implies that the future could be:', options:['only positive','only negative','either positive or negative depending on our actions','impossible to imagine'], correct:2},
      {q:'Which future form is used most frequently in the passage?', options:['Present continuous for future','Going to','Will / will have / will be','Future perfect only'], correct:2}
    ],
    evaluation:[
      {q:'What is the main purpose of this passage?', options:['To describe modern life','To predict life in 2050','To explain artificial intelligence','To promote electric cars'], correct:1},
      {q:'Why does the author mention vertical gardens?', options:['To describe current gardening trends','To illustrate a solution to pollution and food shortages','Because they are popular in 2050','To discuss architecture'], correct:1},
      {q:'The passage suggests that transport technology will:', options:['become slower','remain unchanged','make long-distance travel nearly instant','become more expensive'], correct:2},
      {q:'Which group of people does the passage focus on most when discussing the future?', options:['Retired people','Adults over 60','Children born now','Tourists'], correct:2},
      {q:'What contrast does the final sentence create?', options:['Past vs present','Technology vs nature','Utopia vs crisis','Work vs leisure'], correct:2},
      {q:'The author describes the future as "dramatically different" to emphasise:', options:['small changes','no change at all','the scale of transformation expected','a return to the past'], correct:2},
      {q:'Which detail from the text best supports the idea that AI will change employment?', options:['Cars will be self-driving','Many current jobs will have been replaced by AI','Virtual reality classrooms will exist','Sea levels will rise'], correct:1},
      {q:'The passage organises its predictions by:', options:['chronological order','geographical location','topic areas (transport, cities, jobs, education, challenges)','comparing countries'], correct:2},
      {q:'What kind of reading skill does this passage primarily test?', options:['Skimming for gist','Scanning for specific details','Inferring meaning from context','All of the above'], correct:3},
      {q:'The word "combat" in paragraph 1 is closest in meaning to:', options:['ignore','accept','fight against','enjoy'], correct:2},
      {q:'Why does the author include a warning in the final paragraph?', options:['To make the reader stop reading','To present a balanced view of the future','To promote pessimism','To criticise scientists'], correct:1},
      {q:'The phrase "new careers in technology, healthcare, and sustainability will have emerged" uses future perfect to show:', options:['a future ongoing action','a prediction based on evidence','an action completed before a future time','a fixed arrangement'], correct:2},
      {q:'Which of the following best summarises the passage?', options:['Technology will solve all our problems by 2050','The future holds both exciting opportunities and serious challenges','Only bad things will happen in 2050','Education will remain the same'], correct:1},
      {q:'How does the passage help students practise future forms?', options:['By testing grammar rules directly','By reading authentic-style predictions using multiple future tenses','By asking students to write their own essay','By translating Spanish sentences'], correct:1},
      {q:'What is the author\'s attitude towards the future described?', options:['Blindly optimistic','Deeply pessimistic','Cautiously balanced','Completely indifferent'], correct:2}
    ]
  },

  { aspect:'listening', title:'Listening: Future Plans Discussion',
    explain:{ en:[
      {t:'p',text:'In this listening task, you will hear three friends discussing their plans for the next five years. They use various future forms, including will, going to, present continuous, future perfect, and future continuous.'},
      {t:'tip',text:'Listen for time markers like "by 2030", "this time next year", and "next week" â€” they help you identify which future form is being used.'}
    ], es:[
      {t:'p',text:'En esta tarea de comprension auditiva, escucharas a tres amigos discutiendo sus planes para los proximos cinco aÃ±os. Usan varias formas futuras.'},
      {t:'p',text:'Escucha atentamente las senales temporales que indican que forma futura se esta usando.'}
    ]},
    activity:[
      {transcript:'Sarah: So, what are your plans for the future? Tom: Well, I\'m starting a new job next month. I\'ve already signed the contract. Sarah: That\'s exciting! What about you, Lisa? Lisa: I\'m going to move to Barcelona. I\'ve been learning Spanish for two years now, so by next summer I\'ll have saved enough money. Sarah: I envy you both. I haven\'t made any firm plans yet, but I think I\'ll take a year off travelling.', q:'What has Tom already done regarding his new job?', options:['He has applied for it','He has signed the contract','He has told his friends about it','He has started working there'], correct:1},
      {transcript:'Sarah: So, what are your plans for the future? Tom: Well, I\'m starting a new job next month. I\'ve already signed the contract. Sarah: That\'s exciting! What about you, Lisa? Lisa: I\'m going to move to Barcelona. I\'ve been learning Spanish for two years now, so by next summer I\'ll have saved enough money. Sarah: I envy you both. I haven\'t made any firm plans yet, but I think I\'ll take a year off travelling.', q:'Which future form does Lisa use to describe her move to Barcelona?', options:['Will','Going to','Future continuous','Future perfect'], correct:1},
      {transcript:'Sarah: So, what are your plans for the future? Tom: Well, I\'m starting a new job next month. I\'ve already signed the contract. Sarah: That\'s exciting! What about you, Lisa? Lisa: I\'m going to move to Barcelona. I\'ve been learning Spanish for two years now, so by next summer I\'ll have saved enough money. Sarah: I envy you both. I haven\'t made any firm plans yet, but I think I\'ll take a year off travelling.', q:'What does Sarah say about her own future plans?', options:['She is moving abroad','She has a clear plan','She has not made firm plans','She is starting a new job'], correct:2},
      {transcript:'Tom: By the way, where are you working this time next year, Sarah? Sarah: Actually, I\'ll be volunteering in South America. I\'m arranging it all at the moment. Tom: That sounds amazing. Lisa: By the time you come back, Tom will have been promoted twice, I bet! Tom: Ha! Don\'t count on it.', q:'What will Sarah be doing "this time next year"?', options:['Working in a hospital','Volunteering in South America','Travelling in Europe','Living in Barcelona'], correct:1},
      {transcript:'Tom: By the way, where are you working this time next year, Sarah? Sarah: Actually, I\'ll be volunteering in South America. I\'m arranging it all at the moment. Tom: That sounds amazing. Lisa: By the time you come back, Tom will have been promoted twice, I bet! Tom: Ha! Don\'t count on it.', q:'Which future form does Sarah use to describe what she will be doing?', options:['Will','Going to','Future continuous (will be volunteering)','Future perfect'], correct:2},
      {transcript:'Lisa: When do you finish your current contract, Tom? Tom: It finishes in March. By then, I\'ll have worked at this company for exactly three years. Lisa: And then you start the new one in April, right? Tom: Yes, the day after. I won\'t even have time for a holiday!', q:'When does Tom\'s current contract finish?', options:['In January','In March','In April','In summer'], correct:1},
      {transcript:'Lisa: When do you finish your current contract, Tom? Tom: It finishes in March. By then, I\'ll have worked at this company for exactly three years. Lisa: And then you start the new one in April, right? Tom: Yes, the day after. I won\'t even have time for a holiday!', q:'Why does Tom say he won\'t have time for a holiday?', options:['He is going on holiday next month','His new job starts the day after his contract finishes','He has already used all his holiday days','He does not like holidays'], correct:1},
      {transcript:'Sarah: I read that by 2035, most offices will have switched to a four-day working week. Lisa: Do you believe that? I think it\'s going to change everything. Tom: I hope so. By then, I\'ll have been working five days a week for over a decade.', q:'What does Sarah say about the four-day working week?', options:['It already exists in her company','Most offices will have switched to it by 2035','It is only for managers','The government has banned it'], correct:1},
      {transcript:'Sarah: I read that by 2035, most offices will have switched to a four-day working week. Lisa: Do you believe that? I think it\'s going to change everything. Tom: I hope so. By then, I\'ll have been working five days a week for over a decade.', q:'Which future form does Lisa use to express her opinion about the four-day week?', options:['Will','Going to (it\'s going to change)','Future continuous','Future perfect'], correct:1},
      {transcript:'Lisa: I\'m also thinking about doing a master\'s degree online while I\'m in Barcelona. Sarah: Really? That sounds intense. Lisa: I know, but by the time I finish, I\'ll have qualifications in both languages and business. Tom: You\'re very ambitious.', q:'What is Lisa planning to do while in Barcelona?', options:['Start a new job','Do a master\'s degree online','Learn to cook','Travel around Spain'], correct:1},
      {transcript:'Lisa: I\'m also thinking about doing a master\'s degree online while I\'m in Barcelona. Sarah: Really? That sounds intense. Lisa: I know, but by the time I finish, I\'ll have qualifications in both languages and business. Tom: You\'re very ambitious.', q:'Which future form does Lisa use for her qualifications?', options:['Will','Going to','Future continuous','Future perfect (will have qualifications)'], correct:3},
      {transcript:'Tom: Right, I need to go. I\'m meeting my manager at five to discuss my handover. Sarah: Already? Your contract doesn\'t end until March. Tom: I know, but there\'s a lot to sort out. I\'ll probably be working overtime every day until the end.', q:'Why does Tom need to leave the conversation?', options:['He is tired','He is meeting his manager','He has a phone call','He is catching a train'], correct:1},
      {transcript:'Tom: Right, I need to go. I\'m meeting my manager at five to discuss my handover. Sarah: Already? Your contract doesn\'t end until March. Tom: I know, but there\'s a lot to sort out. I\'ll probably be working overtime every day until the end.', q:'What does "handover" most likely mean in this context?', options:['A holiday gift','Transferring responsibilities to a replacement','A company meeting','A type of contract'], correct:1},
      {transcript:'Sarah: Well, I\'m going to miss you both. Lisa: We\'ll keep in touch! We can video call. Sarah: I\'ll be thinking of you when I\'m sitting on a beach in Peru. Tom: And we\'ll be thinking of you when we\'re stuck in the office!', q:'Where does Sarah plan to be while thinking of her friends?', options:['In a hospital','On a beach in Peru','In an office in London','In a university in Barcelona'], correct:1},
      {transcript:'Sarah: Well, I\'m going to miss you both. Lisa: We\'ll keep in touch! We can video call. Sarah: I\'ll be thinking of you when I\'m sitting on a beach in Peru. Tom: And we\'ll be thinking of you when we\'re stuck in the office!', q:'Which future form does Tom use in his final comment?', options:['Going to','Future continuous (will be thinking)','Future perfect','Will'], correct:1}
    ],
    evaluation:[
      {q:'In the conversation, "I\'m starting a new job" indicates:', options:['a prediction','a spontaneous decision','a fixed arrangement','a promise'], correct:2},
      {q:'Lisa\'s use of "I\'m going to move" shows:', options:['an evidence-based prediction','a decision made before speaking','a suggestion','a request'], correct:1},
      {q:'"By next summer I\'ll have saved enough money" uses future perfect to express:', options:['a current action','an action completed before a future deadline','a future habit','a past event'], correct:1},
      {q:'The future continuous "I\'ll be volunteering" emphasises:', options:['the completion of an action','an action in progress at a future time','a promise','a decision'], correct:1},
      {q:'Why does Sarah use present continuous rather than "will" for her volunteering?', options:['Because she has not decided yet','Because she has already arranged it','Because it is a prediction','Because she is asking a question'], correct:1},
      {q:'"By then, I\'ll have worked at this company for exactly three years" expresses:', options:['duration up to a future point','a future plan','a prediction','a regret'], correct:0},
      {q:'Tom\'s statement "I won\'t even have time for a holiday" uses:', options:['future simple','future continuous','future perfect negative','going to'], correct:2},
      {q:'Lisa uses "it\'s going to change everything" to express:', options:['a spontaneous decision','a prediction based on her opinion','a fixed arrangement','a command'], correct:1},
      {q:'Which speaker uses the most future forms in the conversation?', options:['Sarah','Tom','Lisa','All use the same number'], correct:2},
      {q:'"I\'ll keep in touch" is an example of:', options:['a prediction','a promise','a fixed arrangement','a request'], correct:1},
      {q:'The conversation is primarily about:', options:['past memories','current work problems','future plans and intentions','a holiday review'], correct:2},
      {q:'What does "sort out" mean when Tom says "there\'s a lot to sort out"?', options:['buy','organise and resolve','cancel','forget about'], correct:1},
      {q:'"I\'ll probably be working overtime" suggests Tom thinks:', options:['he will definitely work overtime','there is a strong possibility of overtime','he wants to work overtime','he has already worked overtime'], correct:1},
      {q:'Which future form would be INCORRECT to use in Sarah\'s place about volunteering?', options:['I\'ll be volunteering','I\'m going to volunteer','I volunteer','I\'m volunteering'], correct:2},
      {q:'The friends plan to stay in contact through:', options:['email only','video calls','text messages','postal mail'], correct:1}
    ]
  },

  { aspect:'speaking', title:'Speaking: Future Plans and Predictions',
    explain:{ en:[
      {t:'h',text:'Talking About the Future'},
      {t:'p',text:'In the B2 speaking exam, you may be asked to discuss your plans, make predictions, or describe what you expect to happen. Using a range of future forms correctly will impress the examiner.'},
      {t:'p',text:'Try to use all five forms naturally: will for predictions and spontaneous decisions, going to for intentions, present continuous for arrangements, future perfect for completed actions, and future continuous for ongoing actions.'},
      {t:'tip',text:'When giving extended answers, combine future forms: "I\'m going to start a new course next month. By the end of the year, I\'ll have learned a lot, and I\'ll be using new skills at work."'}
    ], es:[
      {t:'h',text:'Hablando del futuro'},
      {t:'p',text:'En el examen oral de B2, te pueden pedir que hables sobre tus planes, hagas predicciones o describas lo que esperas que suceda.'},
      {t:'p',text:'Intenta usar todas las formas futuras de forma natural para impresionar al examinador.'},
      {t:'p',text:'Cuando des respuestas largas, combina formas futuras para demostrar variedad gramatical.'}
    ]},
    activity:[
      {prompt:'Describe two things you are going to do this weekend and explain why you chose them.', model:'I am going to visit my grandmother on Saturday because I haven\'t seen her for a while. On Sunday, I am going to go hiking with friends since the weather forecast looks perfect.', keywords:['visit','grandmother','hiking','friends','weather']},
      {prompt:'What do you think life will be like in your country in 20 years? Give at least two predictions.', model:'I think life will be much more technology-driven in 20 years. I believe most people will be working from home, and electric vehicles will have completely replaced petrol cars in cities.', keywords:['technology','working','electric','vehicles','cities']},
      {prompt:'You have just decided to learn a new skill. Explain what it is and how you will do it.', model:'I have just decided to learn Japanese. I will start with an online course and practise every day using language apps. I think it will take about two years to reach an intermediate level.', keywords:['learn','Japanese','online','course','practise']},
      {prompt:'Describe what you will be doing at this time next month.', model:'This time next month, I will be preparing for my final exams. I will be studying in the library most evenings and reviewing my notes during the day.', keywords:['preparing','exams','studying','library','reviewing']},
      {prompt:'Talk about something you will have achieved by the time you are 30.', model:'By the time I am 30, I will have graduated from university and started my career. I also hope I will have travelled to at least five different countries.', keywords:['graduated','university','career','travelled','countries']},
      {prompt:'A friend asks you: "Should I take the job abroad?" Give your advice using future forms.', model:'I think you should definitely go. You will gain incredible experience, and by the time you come back, you will have developed skills that most people here don\'t have.', keywords:['definitely','experience','developed','skills','opportunity']},
      {prompt:'Describe a change in your daily routine that you are planning to make soon.', model:'I am planning to start exercising every morning before work. I will set my alarm an hour earlier and go for a run. I think it will help me feel more energetic throughout the day.', keywords:['exercising','morning','alarm','energetic','routine']},
      {prompt:'What do you think schools will look like in 50 years? Explain your ideas.', model:'I believe schools in 50 years will have been completely transformed by technology. Students will probably be learning through virtual reality, and teachers will have become more like guides than lecturers.', keywords:['transformed','technology','virtual','reality','learning']}
    ],
    evaluation:[
      {prompt:'Talk about a future event you are looking forward to. Use at least two different future forms.', model:'I am really looking forward to my sister\'s wedding next summer. It is going to be in the countryside, and by the time the ceremony starts, we will have been preparing for months.', keywords:['looking','forward','wedding','summer','preparing']},
      {prompt:'Describe something that will be very different about your life in ten years.', model:'In ten years, I think I will be living in a different city. I will probably have changed careers at least once, and my daily routine will have become very different from what it is now.', keywords:['different','city','careers','routine','changed']},
      {prompt:'Explain what you think will happen to the environment if we do not act now.', model:'If we do not act now, the environment will have suffered irreversible damage by 2050. Sea levels will be rising, and millions of people will be losing their homes.', keywords:['environment','damage','rising','millions','homes']},
      {prompt:'Describe a plan you have for improving your English in the next six months.', model:'I am going to watch more English-language films without subtitles. By the end of six months, I will have read at least three books in English and will be having conversations with native speakers regularly.', keywords:['films','subtitles','books','conversations','speakers']},
      {prompt:'What do you think the next big technological breakthrough will be? Explain.', model:'I think the next big breakthrough will be in artificial intelligence. Scientists will have developed machines that can think almost like humans, and this will change every industry.', keywords:['breakthrough','artificial','intelligence','machines','industry']},
      {prompt:'Describe what you will be doing five years from now in your career.', model:'Five years from now, I will be working as a senior manager in an international company. I will have gained experience in several departments and will be leading a team of about twenty people.', keywords:['senior','manager','international','experience','leading']},
      {prompt:'A friend says: "I don\'t think the future will be any better." How would you respond?', model:'I understand your concern, but I think we should stay optimistic. Technology will have solved many of today\'s problems, and new opportunities will have emerged in fields we cannot even imagine today.', keywords:['optimistic','technology','solved','opportunities','emerged']}
    ]
  }
  ]
});


/* DAY 4 - Conditionals */
DAYS.push({
  id:'day-4', title:'Conditionals',
  focus:'Understand and use zero, first, second and third conditionals accurately.',
  sections:[

  { aspect:'grammar', title:'Grammar: Conditionals',
    explain:{ en:[
      {t:'h',text:'The Four Conditional Types'},
      {t:'p',text:'<b>Zero Conditional</b> (If + present, present): Used for general truths, scientific facts and things that are always true. Example: "If you heat water to 100Â°C, it boils."'},
      {t:'p',text:'<b>First Conditional</b> (If + present, will + infinitive): Used for real and possible future situations. Example: "If it rains tomorrow, I will stay at home."'},
      {t:'p',text:'<b>Second Conditional</b> (If + past simple, would + infinitive): Used for unreal, hypothetical or unlikely present/future situations. Example: "If I had more money, I would travel the world."'},
      {t:'p',text:'<b>Third Conditional</b> (If + past perfect, would have + past participle): Used for unreal past situations â€” things that did not happen. Example: "If I had studied harder, I would have passed the exam."'},
      {t:'tip',text:'Common mistake: "If I would have more money..." is WRONG for the second conditional. Use "If I had more money..." Notice that the if-clause never takes "would".'}
    ], es:[
      {t:'h',text:'Los cuatro tipos de condicionales'},
      {t:'p',text:'<b>Cero condicional</b> (If + presente, presente): Se usa para verdades generales y hechos cientificos.'},
      {t:'p',text:'<b>Primer condicional</b> (If + presente, will + infinitivo): Se usa para situaciones futuras reales y posibles.'},
      {t:'p',text:'<b>Segundo condicional</b> (If + pasado simple, would + infinitivo): Se usa para situaciones irreales o hipoteticas presentes/futuras.'},
      {t:'p',text:'<b>Tercer condicional</b> (If + pasado perfecto, would have + participio): Se usa para situaciones pasadas irreales â€” cosas que no sucedieron.'},
      {t:'tip',text:'Error comun: "If I would have more money..." es INCORRECTO para el segundo condicional. Usa "If I had more money..." La clausula if nunca lleva "would".'}
    ]},
    activity:[
      {q:'If you mix blue and yellow paint, you _____ green.', options:['get','will get','would get','would have got'], correct:0},
      {q:'If it rains tomorrow, I _____ the match.', options:['will miss','miss','would miss','would have missed'], correct:0},
      {q:'If I were you, I _____ accept the offer.', options:['will','would','am going to','have'], correct:1},
      {q:'If they had left earlier, they _____ the train.', options:['would catch','will catch','would have caught','catch'], correct:2},
      {q:'If you heat ice, it _____.', options:['will melt','melts','would melt','would have melted'], correct:1},
      {q:'If I had a car, I _____ to work every day.', options:['will drive','drive','would drive','would have driven'], correct:2},
      {q:'If she had studied medicine, she _____ a doctor now.', options:['will be','is','would be','would have been'], correct:2},
      {q:'If you press this button, the light _____.', options:['will turn on','turns on','would turn on','turned on'], correct:1},
      {q:'If I won the lottery, I _____ a new house.', options:['will buy','buy','would buy','would have bought'], correct:2},
      {q:'If we had booked the tickets, we _____ to the concert.', options:['will go','would go','would have gone','went'], correct:2},
      {q:'If you don\'t eat, you _____ hungry.', options:['will get','get','would get','would have got'], correct:1},
      {q:'If I were taller, I _____ basketball professionally.', options:['will play','play','would play','would have played'], correct:2},
      {q:'If the company had invested in research, it _____ more profit now.', options:['will make','makes','would make','would have made'], correct:2},
      {q:'If you drop a stone, it _____.', options:['will fall','falls','would fall','would have fallen'], correct:1},
      {q:'If I had known about the meeting, I _____ there.', options:['will go','would go','would have gone','have gone'], correct:2}
    ],
    evaluation:[
      {q:'Which conditional type expresses a scientific fact?', options:['First conditional','Second conditional','Zero conditional','Third conditional'], correct:2},
      {q:'"If I were rich, I would donate to charity." This is:', options:['first conditional','second conditional','third conditional','zero conditional'], correct:1},
      {q:'Which sentence contains a grammatical error?', options:['If it snows, I will make a snowman.','If I had more time, I would learn French.','If she would study harder, she would pass.','If you heat metal, it expands.'], correct:2},
      {q:'The third conditional expresses:', options:['a real future possibility','a general truth','an unreal past situation','a current arrangement'], correct:2},
      {q:'"If you don\'t water plants, they die." This is a:', options:['first conditional','second conditional','third conditional','zero conditional'], correct:3},
      {q:'In "If I had left earlier, I would have caught the bus", the speaker:', options:['caught the bus','did not catch the bus','will catch the bus','is catching the bus'], correct:1},
      {q:'Which is correct for a hypothetical present situation?', options:['If I would be you...','If I am you...','If I were you...','If I have been you...'], correct:2},
      {q:'"If it rains, we will cancel the picnic." This expresses:', options:['an unreal situation','a possible future event','a past regret','a general fact'], correct:1},
      {q:'Why do we use "were" instead of "was" in the second conditional?', options:['It is the correct past tense','For emphasis only','As the traditional subjunctive form in conditionals','It is optional and interchangeable'], correct:2},
      {q:'Which pair of tenses is used in the third conditional?', options:['If + past simple, will + infinitive','If + past perfect, would have + past participle','If + present simple, would + infinitive','If + present perfect, will have + past participle'], correct:1},
      {q:'"If I had taken that job, I would be living in London now." This sentence combines:', options:['first and second conditionals','second and third conditionals','zero and first conditionals','mixed conditional (third if-clause + second main clause)'], correct:3},
      {q:'"If you heat water to 100Â°C, it boils." The if-clause is in:', options:['future simple','past simple','present simple','present perfect'], correct:2},
      {q:'"If she had asked me, I would have helped her." She:', options:['asked me','did not ask me','will ask me','is asking me'], correct:1},
      {q:'Which conditional is most commonly used for advice?', options:['Zero conditional','First conditional','Second conditional','Third conditional'], correct:2},
      {q:'"If I study hard, I will pass." This refers to:', options:['an unreal present situation','a real and possible future result','a past event that did not happen','a general scientific fact'], correct:1}
    ]
  },

  { aspect:'reading', title:'Reading: The Road Not Taken',
    explain:{ en:[
      {t:'p',text:'<b>Text:</b> Everyone has moments in life when they look back and wonder what might have been. Psychologists call this "counterfactual thinking" â€” the tendency to imagine alternative outcomes for events that have already happened. Research shows that people tend to generate more upward counterfactuals (imagining how things could have been better) than downward ones (imagining how things could have been worse). For example, a student who fails an exam might think, "If I had studied more, I would have passed." This type of thinking is closely linked to regret, which is one of the most commonly reported emotions. However, counterfactual thinking is not always negative. It can actually help people learn from their mistakes and make better decisions in the future. If we reflect on what went wrong, we are more likely to avoid similar errors. Studies have also found that people who engage in moderate counterfactual thinking tend to be more creative and better at problem-solving. Of course, too much reflection can be harmful. If someone constantly imagined how life could have turned out differently, they would risk falling into chronic dissatisfaction. The key, researchers suggest, is to use counterfactual thinking as a tool for growth rather than a source of endless regret.'},
      {t:'tip',text:'The text contains examples of all four conditional types. Look for "if + past perfect" (third conditional), "if + past simple" (second conditional), and zero conditional statements about general facts.'}
    ], es:[
      {t:'p',text:'<b>Texto:</b> Todos hemos tenido momentos en la vida en los que miramos hacia atras y nos preguntamos que podria haber sido. Los psicologos llaman a esto "pensamiento contrafactual" â€” la tendencia a imaginar resultados alternativos para eventos que ya han sucedido. La investigacion muestra que las personas tienden a generar mas contrafactuales ascendentes (imaginando como las cosas podrian haber sido mejores) que descendentes. Por ejemplo, un estudiante que suspende un examen podria pensar: "Si hubiera estudiado mas, habria aprobado." Este tipo de pensamiento esta estrechamente vinculado al arrepentimiento. Sin embargo, no siempre es negativo. Puede ayudar a las personas a aprender de sus errores. Por supuesto, demasiada reflexiÃ³n puede ser perjudicial.'}
    ]},
    activity:[
      {q:'What is "counterfactual thinking" according to the text?', options:['A type of intelligence test','The tendency to imagine alternative outcomes','A psychological disorder','A method of studying'], correct:1},
      {q:'What are "upward counterfactuals"?', options:['Imagining worse outcomes','Imagining better outcomes','Thinking about the future','Ignoring past events'], correct:1},
      {q:'A student who says "If I had studied more, I would have passed" is using:', options:['zero conditional','first conditional','second conditional','third conditional'], correct:3},
      {q:'The text states that counterfactual thinking is linked to:', options:['happiness','regret','fear','surprise'], correct:1},
      {q:'What positive effect does moderate counterfactual thinking have?', options:['It makes people wealthier','It improves creativity and problem-solving','It prevents all negative emotions','It guarantees exam success'], correct:1},
      {q:'According to the text, what happens when people reflect on mistakes?', options:['They give up entirely','They tend to avoid similar errors in future','They become more anxious','They forget the event completely'], correct:1},
      {q:'The word "chronic" in paragraph 2 means:', options:['temporary','sudden','long-lasting','mild'], correct:2},
      {q:'What do researchers suggest about counterfactual thinking?', options:['Avoid it completely','Use it only when happy','Use it as a growth tool, not a source of regret','It should be eliminated by therapy'], correct:2},
      {q:'Which of the following is a zero conditional fact from the text?', options:['If she had studied, she would have passed','If we reflect on mistakes, we avoid similar errors','If I were you, I would study harder','If it had rained, we would have stayed home'], correct:1},
      {q:'How does the passage organised its argument?', options:['By chronological events','By presenting a concept, its pros, and its cons','By comparing two scientists\' opinions','By using only personal stories'], correct:1},
      {q:'The phrase "the road not taken" in the title most likely refers to:', options:['a physical road','choices and alternatives in life','a book of poetry','a driving test'], correct:1},
      {q:'What does the passage suggest about excessive counterfactual thinking?', options:['It is beneficial','It can lead to chronic dissatisfaction','It makes people more creative','It is impossible'], correct:1},
      {q:'The word "generate" in paragraph 1 is closest in meaning to:', options:['destroy','produce','avoid','forget'], correct:1},
      {q:'Which conditional type appears most frequently in the passage as examples?', options:['Zero conditional','First conditional','Second conditional','Third conditional'], correct:3},
      {q:'What is the main message of the passage?', options:['Never look back at the past','Counterfactual thinking should be balanced for personal growth','All regret is harmful','Psychologists disagree about counterfactual thinking'], correct:1}
    ],
    evaluation:[
      {q:'The text mainly discusses:', options:['exam techniques','the psychology of imagining alternative outcomes','how to avoid making mistakes','the history of psychology'], correct:1},
      {q:'Why does the author mention a student failing an exam?', options:['To criticise lazy students','To give a concrete example of counterfactual thinking','To discuss exam preparation','To compare different education systems'], correct:1},
      {q:'Which statement about counterfactual thinking does the passage support?', options:['It only affects people with low self-esteem','It can be both helpful and harmful','It always leads to depression','It only occurs after major life events'], correct:1},
      {q:'The passage suggests that people generate more:', options:['downward counterfactuals','upward counterfactuals','no counterfactuals at all','equal amounts of both'], correct:1},
      {q:'What contrast does paragraph 2 present?', options:['Men vs women','Old vs young people','Positive vs negative effects of counterfactual thinking','Past vs future'], correct:2},
      {q:'"If someone constantly imagined how life could have turned out differently, they would risk falling into chronic dissatisfaction." This is an example of:', options:['zero conditional','first conditional','second conditional','third conditional'], correct:2},
      {q:'The author\'s overall attitude towards counterfactual thinking is:', options:['completely negative','cautiously positive with caveats','entirely enthusiastic','indifferent'], correct:1},
      {q:'The phrase "the key" in the final sentence means:', options:['a physical key','the most important factor','a secret code','a locked door'], correct:1},
      {q:'Which skill does this passage primarily test?', options:['Listening for gist','Reading for specific information and inference','Writing a summary','Speaking about emotions'], correct:1},
      {q:'The word "engage in" is closest in meaning to:', options:['avoid','participate in','suffer from','argue about'], correct:1},
      {q:'What would the author most likely agree with?', options:['People should never think about the past','Some reflection helps people improve','Counterfactual thinking is a mental illness','Only unhappy people use counterfactuals'], correct:1},
      {q:'The third conditional example in the text ("If I had studied more...") expresses:', options:['a possible future action','a present unreal situation','an unreal past situation with an unreal past result','a scientific fact'], correct:2},
      {q:'How does the passage use conditional sentences?', options:['Only in the title','As examples to illustrate the concept of counterfactual thinking','As a grammar exercise','They do not appear in the text'], correct:1},
      {q:'The final sentence serves to:', options:['introduce a new topic','conclude with practical advice','contradict the main argument','quote a famous person'], correct:1},
      {q:'A suitable title alternative for this passage could be:', options:['How to Pass Exams','Why We Imagine What Might Have Been','The Dangers of Studying','Famous Psychologists'], correct:1}
    ]
  },

  { aspect:'listening', title:'Listening: What If...?',
    explain:{ en:[
      {t:'p',text:'In this listening task, you will hear a radio programme where three callers discuss hypothetical and real situations using conditionals.'},
      {t:'tip',text:'Pay attention to which conditional type each speaker uses. First conditional indicates a real possibility, second conditional indicates a hypothetical scenario, and third conditional refers to an unreal past.'}
    ], es:[
      {t:'p',text:'En esta tarea de comprension auditiva, escucharas un programa de radio donde tres personas discuten situaciones hipoteticas y reales usando condicionales.'},
      {t:'p',text:'Presta atencion a que tipo de condicional usa cada persona. El primer condicional indica una posibilidad real, el segundo una situacion hipotetica, y el tercero se refiere a un pasado irreal.'}
    ]},
    activity:[
      {transcript:'Presenter: Welcome to "What If..." â€” the show where we explore life\'s big hypotheticals. Our first caller is James from Leeds. James, what\'s your question? James: Hi. If you could change one thing about the education system, what would you do? Presenter: Great question. Let\'s start with our panel. Dr. Green?', q:'What type of question does James ask?', options:['A factual question about education','A hypothetical question using the second conditional','A third conditional question about the past','A zero conditional scientific question'], correct:1},
      {transcript:'Dr. Green: Well, if the government invested more in schools, class sizes would be smaller, and students would get more individual attention. The problem is that they don\'t prioritise education enough. Caller 2: If I were the minister of education, I would increase teachers\' salaries. If teachers were paid better, more talented people would choose teaching as a career.', q:'What solution does Caller 2 suggest for improving education?', options:['Building more schools','Increasing teachers\' salaries','Reducing school hours','Using more technology'], correct:1},
      {transcript:'Caller 2: If I were the minister of education, I would increase teachers\' salaries. If teachers were paid better, more talented people would choose teaching as a career. Presenter: That\'s an interesting point. What about you, Maria? Maria: If I had the power, I would completely change the assessment system. Exams don\'t work for everyone. If students had more continuous assessment, they would perform better overall.', q:'Maria uses the second conditional to suggest:', options:['exams should be abolished','students should study more','the assessment system should change','teachers should give more homework'], correct:2},
      {transcript:'Maria: If I had the power, I would completely change the assessment system. Exams don\'t work for everyone. If students had more continuous assessment, they would perform better overall. Presenter: Now, James, you mentioned something earlier about your own experience. Can you tell us more? James: Yes. If I had taken maths more seriously at school, I would have become an engineer. I failed my maths exam, so I ended up in a completely different career.', q:'James regrets not taking maths seriously because:', options:['he became an engineer anyway','he failed his exam and chose a different career path','maths was too easy for him','he became a teacher instead'], correct:1},
      {transcript:'James: Yes. If I had taken maths more seriously at school, I would have become an engineer. I failed my maths exam, so I ended up in a completely different career. Dr. Green: That\'s a classic third conditional â€” looking back at the past and imagining a different outcome. But here\'s the thing, James: if you had become an engineer, you might not be doing the job you love now.', q:'Dr. Green uses a first conditional to suggest that James:', options:['should retake his exams','might have missed a career he loves if things had been different','is unhappy with his current job','should study engineering now'], correct:1},
      {transcript:'Presenter: Let\'s move on. We have a caller from Bristol. Sophie, what would you like to ask? Sophie: My question is about the environment. If we don\'t take action on climate change now, what will happen in 50 years? Dr. Green: If temperatures continue to rise, many coastal cities will be underwater. If we act now, we can still limit the damage, but the window is closing fast.', q:'Sophie uses which conditional to frame her question about climate change?', options:['Second conditional','Third conditional','First conditional','Zero conditional'], correct:2},
      {transcript:'Dr. Green: If temperatures continue to rise, many coastal cities will be underwater. If we act now, we can still limit the damage, but the window is closing fast. Caller 2: If governments had listened to scientists 30 years ago, we wouldn\'t be in this situation. But it\'s not too late. If everyone reduced their carbon footprint, the impact would be significant.', q:'Caller 2 uses a third conditional to express:', options:['a prediction for the future','a criticism of past inaction','a general scientific fact','a suggestion for next week'], correct:1},
      {transcript:'Maria: If I were you, Sophie, I would focus on what you can control. If every person in this country recycled properly, it would make a huge difference. Presenter: Good advice. And remember, if people are educated about climate change, they are more likely to change their behaviour.', q:'Maria advises Sophie to:', options:['ignore the problem','focus on what she can personally control','contact the government','stop worrying about the future'], correct:1},
      {transcript:'Presenter: And remember, if people are educated about climate change, they are more likely to change their behaviour. James: That\'s true. If I had learned about climate change at school, I would have changed my habits sooner. We need to start teaching children about the environment from a young age.', q:'James believes environmental education should begin:', options:['at university','when people are older','from a young age','only for scientists'], correct:2},
      {transcript:'Presenter: Before we finish, one last quick question. If you could give one piece of advice to young people today, what would it be? Dr. Green: If I could give one piece of advice, it would be: learn a language. If you speak more than one language, doors open all over the world.', q:'What advice does Dr. Green give to young people?', options:['Study maths harder','Learn a foreign language','Move abroad immediately','Become an engineer'], correct:1},
      {transcript:'Presenter: Before we finish, one last quick question. If you could give one piece of advice to young people today, what would it be? Dr. Green: If I could give one piece of advice, it would be: learn a language. If you speak more than one language, doors open all over the world. Caller 2: I\'d say travel more. If you travel when you are young, you learn things no textbook can teach you.', q:'Caller 2\'s advice to young people is to:', options:['read more books','travel while young','learn to cook','study science'], correct:1},
      {transcript:'Caller 2: I\'d say travel more. If you travel when you are young, you learn things no textbook can teach you. Maria: Mine would be to follow your passions. If you do something you genuinely enjoy, you will work harder at it and be more successful in the long run.', q:'Maria\'s advice is based on the idea that enjoyment leads to:', options:['less effort','longer working hours','greater effort and success','more money immediately'], correct:2},
      {transcript:'Presenter: Fantastic advice from all our panellists. If you have a question for "What If...", call us next Thursday. Remember, if we all think about the future more carefully, we might make better choices today.', q:'At the end, the presenter uses a first conditional to suggest:', options:['listeners should call next week','thoughtful thinking can lead to better decisions','the show will end permanently','no one should think about the future'], correct:1},
      {transcript:'Presenter: Fantastic advice from all our panellists. If you have a question for "What If...", call us next Thursday. Remember, if we all think about the future more carefully, we might make better choices today.', q:'What is the main topic of this radio programme?', options:['educational reform','hypothetical situations and life advice','climate change only','travel recommendations'], correct:1}
    ],
    evaluation:[
      {q:'James\'s initial question uses the second conditional because he is:', options:['describing a past event','asking about a hypothetical change','making a scientific statement','requesting information'], correct:1},
      {q:'"If the government invested more..." (second conditional) implies the speaker believes:', options:['the government is already investing enough','the government is not currently investing enough','the government will invest tomorrow','the government never invests'], correct:1},
      {q:'Caller 2\'s suggestion about teachers\' salaries is an example of:', options:['a zero conditional fact','a first conditional prediction','a second conditional hypothetical','a third conditional regret'], correct:2},
      {q:'James\'s personal story is an example of the third conditional because:', options:['he is talking about a real future plan','he is imagining an unreal past with a different result','he is giving scientific advice','he is describing a current arrangement'], correct:1},
      {q:'Dr. Green responds to James\'s regret with a first conditional to show:', options:['he disagrees completely','there could have been a positive outcome either way','James should not worry','the past cannot be changed'], correct:1},
      {q:'Sophie\'s question about climate change is in the first conditional because:', options:['she is asking about a hypothetical past','she is asking about a real possible future','she is describing a scientific fact','she is talking about her weekend plans'], correct:1},
      {q:'"If governments had listened to scientists 30 years ago, we wouldn\'t be in this situation" expresses:', options:['a prediction','a scientific fact','frustration about past inaction','a suggestion for the future'], correct:2},
      {q:'The presenter uses "if people are educated, they are more likely to change" â€” this is closest to:', options:['a zero conditional (general truth)','a first conditional (future possibility)','a second conditional (hypothetical)','a third conditional (past unreal)'], correct:1},
      {q:'Which conditional form is used most frequently in this radio programme?', options:['Zero conditional','First conditional','Second conditional','Third conditional'], correct:2},
      {q:'Why does the programme use a mix of conditional types?', options:['By mistake','To model natural, varied English speech','Because the speakers are confused','To test the listeners'], correct:1},
      {q:'"If you speak more than one language, doors open all over the world" is an example of:', options:['a third conditional','a second conditional','a zero conditional (general truth)','a first conditional'], correct:2},
      {q:'Maria\'s advice ("follow your passions") uses which structure?', options:['If + past perfect, would have','If + past simple, would','If + present simple, will','If + present, imperative'], correct:2},
      {q:'What skill does listening to this programme primarily practise?', options:['Note-taking for academic purposes','Understanding conditional forms in context','Learning new vocabulary','Pronunciation of conditional forms'], correct:1},
      {q:'The final statement by the presenter ("if we all think about the future more carefully...") is:', options:['a third conditional','a zero conditional','a first conditional','a second conditional'], correct:2},
      {q:'How many different conditional types appear in the programme?', options:['One','Two','Three','All four types appear'], correct:3}
    ]
  },

  { aspect:'speaking', title:'Speaking: Hypothetical Scenarios',
    explain:{ en:[
      {t:'h',text:'Using Conditionals in Speaking'},
      {t:'p',text:'In the B2 speaking exam, you may be asked to discuss hypothetical situations, give advice, or reflect on past decisions. Conditionals are essential for these tasks.'},
      {t:'p',text:'Use second conditionals for hypothetical present situations ("If I were you..."), third conditionals for reflecting on the past ("If I had known..."), and first conditionals for real future possibilities ("If it rains, we will...").'},
      {t:'tip',text:'A strong B2 speaker mixes conditional types naturally. For example: "If I had studied harder at school (third), I would have gone to university. But if I were offered the chance now (second), I would definitely take it."'}
    ], es:[
      {t:'h',text:'Usar condicionales al hablar'},
      {t:'p',text:'En el examen oral de B2, te pueden pedir que discutas situaciones hipoteticas, des consejos o reflexiones sobre decisiones pasadas.'},
      {t:'p',text:'Usa el segundo condicional para situaciones hipoteticas presentes, el tercero para reflexionar sobre el pasado, y el primero para posibilidades futuras reales.'},
      {t:'p',text:'Un hablante fuerte de B2 mezcla tipos de condicionales de forma natural para demostrar competencia gramatical.'}
    ]},
    activity:[
      {prompt:'If you could live in any country in the world, where would you live and why?', model:'If I could live anywhere, I would choose Japan. I have always been fascinated by the culture, and if I moved there, I would learn the language and try all the traditional food.', keywords:['Japan','culture','language','fascinated','traditional']},
      {prompt:'If you had studied a different subject at school, what would you have chosen?', model:'If I had studied psychology instead of business, I think I would have found it much more interesting. I might have ended up working as a counsellor or therapist.', keywords:['psychology','business','interesting','counsellor','therapist']},
      {prompt:'Describe what the world would be like if social media had never been invented.', model:'If social media had never been invented, people would probably communicate more face to face. We would spend less time on our phones, but we might feel more isolated from people in other countries.', keywords:['communicate','face','phones','isolated','countries']},
      {prompt:'If you won a million pounds tomorrow, what would you do?', model:'If I won a million pounds, I would first pay off my family\'s debts. Then I would invest some of it and travel around South America for a few months.', keywords:['pay','debts','invest','travel','South America']},
      {prompt:'If you had been born 100 years ago, how would your life be different?', model:'If I had been born 100 years ago, I would not have had the chance to attend university. Life would have been much harder, and I probably would have started working at a very young age.', keywords:['university','chance','harder','working','young']},
      {prompt:'What advice would you give to someone who is about to move to your city for the first time?', model:'If I were you, I would learn the transport system before you arrive. Also, if you try the local food early on, you will discover some amazing restaurants.', keywords:['transport','system','learn','local','food']},
      {prompt:'If world leaders could solve one global problem overnight, which problem should they choose and why?', model:'If I were a world leader, I would choose to solve climate change first. If we fixed the environment, everything else â€” health, economy, food supply â€” would eventually improve as well.', keywords:['climate','change','environment','improve','economy']},
      {prompt:'If you had the chance to meet any historical figure, who would you choose and what would you ask?', model:'If I could meet any historical figure, I would choose Marie Curie. I would ask her how she managed to stay motivated despite all the obstacles she faced as a woman in science.', keywords:['Marie Curie','motivated','obstacles','woman','science']}
    ],
    evaluation:[
      {prompt:'Tell me about a time when you made a decision that you now regret. What would you have done differently?', model:'If I had thought more carefully, I would have chosen a different university course. But at the time, I didn\'t know what I really wanted to do. If I were making the decision now, I would pick something more creative.', keywords:['decision','regret','university','course','creative']},
      {prompt:'What do you think would happen if everyone in your country had to learn a second language from primary school?', model:'If everyone learned a second language from primary school, communication across cultures would improve significantly. People would be more open-minded and would find it easier to work abroad.', keywords:['communicate','cultures','improve','open-minded','abroad']},
      {prompt:'If you could change one thing about your daily routine, what would it be and why?', model:'If I could change one thing, I would stop using my phone before bed. If I did that, I would probably sleep much better and feel more productive the next day.', keywords:['phone','sleep','bed','productive','routine']},
      {prompt:'Imagine the internet had never been invented. How would your life be different?', model:'If the internet had never been invented, I would not be able to study online or keep in touch with friends abroad. I would rely much more on libraries and physical letters.', keywords:['internet','study','online','libraries','letters']},
      {prompt:'If you could give your younger self one piece of advice, what would it be?', model:'If I could talk to my younger self, I would tell them not to worry so much about exams. If I had relaxed more, I would have enjoyed school much more.', keywords:['advice','worry','exams','relaxed','enjoyed']},
      {prompt:'What would the world be like if there were no cars?', model:'If there were no cars, cities would be much quieter and cleaner. People would walk or cycle more, and public transport would have developed much faster than it did.', keywords:['quieter','cleaner','cycle','public','transport']},
      {prompt:'If you had to give up your phone for a month, how would you cope?', model:'If I had to give up my phone for a month, I would probably struggle at first. But if I managed it, I would spend more time reading books and talking to people face to face.', keywords:['phone','struggle','reading','books','face']}
    ]
  }
  ]
});


/* DAY 5 - The Passive */
DAYS.push({
  id:'day-5', title:'The Passive',
  focus:'Form and use the passive voice across tenses, and know when passive is preferred over active.',
  sections:[

  { aspect:'grammar', title:'Grammar: The Passive Voice',
    explain:{ en:[
      {t:'h',text:'The Passive Voice in English'},
      {t:'p',text:'The passive is formed with <b>be + past participle</b>. The object of the active sentence becomes the subject of the passive sentence, and the original subject is introduced with "by" (optional).'},
      {t:'p',text:'<b>Present simple passive:</b> English is spoken in many countries. / <b>Past simple passive:</b> The building was constructed in 1902. / <b>Present continuous passive:</b> The report is being written right now. / <b>Past continuous passive:</b> The house was being renovated when the earthquake struck.'},
      {t:'p',text:'<b>Present perfect passive:</b> The bridge has been repaired. / <b>Past perfect passive:</b> The letter had been sent before he arrived. / <b>Future simple passive:</b> The results will be announced tomorrow. / <b>Modal passive:</b> This work must be finished by Friday.'},
      {t:'p',text:'We use the passive when: (1) the doer is unknown or unimportant, (2) the action is more important than the doer, (3) in formal or scientific writing, (4) to sound more diplomatic or objective.'},
      {t:'tip',text:'Remember: the verb "be" must match the tense, and the main verb is always the past participle. Active: "They clean the office every day." Passive: "The office is cleaned every day."'}
    ], es:[
      {t:'h',text:'La voz pasiva en ingles'},
      {t:'p',text:'La pasiva se forma con <b>be + participio pasado</b>. El objeto de la frase activa se convierte en sujeto de la pasiva.'},
      {t:'p',text:'<b>Pasiva presente simple:</b> El ingles se habla en muchos paises. / <b>Pasiva pasado simple:</b> El edificio fue construido en 1902. / <b>Pasiva presente continuo:</b> El informe se esta escribiendo ahora.'},
      {t:'p',text:'Usamos la pasiva cuando: (1) el autor es desconocido, (2) la accion es mas importante que el autor, (3) en escritura formal, (4) para sonar mas objetivo.'}
    ]},
    activity:[
      {q:'English _____ in over 50 countries as an official language.', options:['speaks','is spoken','is speaking','was spoken'], correct:1},
      {q:'The bridge _____ last year after being closed for three years.', options:['was repaired','is repaired','has repaired','repairs'], correct:0},
      {q:'Look! The walls _____ right now.', options:['are painted','are being painted','were painted','have been painted'], correct:1},
      {q:'The Great Wall of China _____ millions of visitors every year.', options:['visits','is visited','is visiting','has been visited'], correct:1},
      {q:'The package _____ before I got home.', options:['had been delivered','was delivered','has been delivered','is delivered'], correct:0},
      {q:'A new hospital _____ in our town next year.', options:['builds','is built','will be built','is being built'], correct:2},
      {q:'The suspect _____ by the police yesterday evening.', options:['arrested','is arrested','was arrested','has arrested'], correct:2},
      {q:'This experiment _____ under controlled laboratory conditions.', options:['carries out','is carried out','was carried','carried out'], correct:1},
      {q:'The homework _____ by the time the teacher collected it.', options:['had been finished','was finished','is finished','has been finished'], correct:0},
      {q:'Lots of new offices _____ in the city centre at the moment.', options:['build','are built','are being built','were built'], correct:2},
      {q:'The novel _____ into twelve languages so far.', options:['translates','has been translated','was translated','is translated'], correct:1},
      {q:'This song _____ by millions of people around the world.', options:['knows','is known','is knowing','was known'], correct:1},
      {q:'Water _____ into hydrogen and oxygen through electrolysis.', options:['splits','is split','is splitting','was splitting'], correct:1},
      {q:'The award _____ to her in person by the president last night.', options:['gives','gave','was given','had given'], correct:2},
      {q:'The road _____ when we drove past, so we had to take a detour.', options:['was being repaired','is being repaired','had repaired','has been repaired'], correct:0}
    ],
    evaluation:[
      {q:'The passive is formed with:', options:['have + past participle','be + past participle','do + past participle','be + present participle'], correct:1},
      {q:'When is the passive preferred over the active?', options:['When the doer is the most important element','When the action is more important than the doer','When speaking informally with friends','When using the present continuous'], correct:1},
      {q:'Which is the correct passive form of "People speak English worldwide"?', options:['English is spoken worldwide.','English speaks worldwide.','English was spoken worldwide.','English has spoken worldwide.'], correct:0},
      {q:'"The letter had been sent" uses which tense of the passive?', options:['Present perfect passive','Past simple passive','Past perfect passive','Future passive'], correct:2},
      {q:'"The report is being written right now" indicates:', options:['a completed action','an action in progress at the present moment','a future plan','a habitual action'], correct:1},
      {q:'The preposition "by" in a passive sentence introduces:', options:['the time of the action','the place of the action','the doer/agent of the action','the reason for the action'], correct:2},
      {q:'Which sentence is in the passive voice?', options:['The team won the match.','The match was won by the team.','The team is playing the match.','The team will win the match.'], correct:1},
      {q:'"This medication must be taken twice daily" uses:', options:['future passive','modal passive','past perfect passive','present continuous passive'], correct:1},
      {q:'In scientific writing, the passive is common because:', options:['it is shorter','it sounds more informal','it focuses on the process rather than the scientist','it uses fewer words'], correct:2},
      {q:'Which active sentence matches "The window was broken by the boy"?', options:['The boy breaks the window.','The boy was breaking the window.','The boy broke the window.','The boy has broken the window.'], correct:2},
      {q:'"The building is being renovated" uses the passive in:', options:['present simple','present continuous','past continuous','present perfect'], correct:1},
      {q:'Why might a politician use the passive voice?', options:['To sound more enthusiastic','To avoid taking responsibility','Because they forgot the subject','To make sentences shorter'], correct:1},
      {q:'Which is NOT a reason to use the passive?', options:['The doer is unknown','To emphasise the action','To sound less formal','In formal or academic writing'], correct:2},
      {q:'"The results will be announced" uses the:', options:['present passive','past passive','future passive','modal passive'], correct:2},
      {q:'"Many trees had been planted before the ceremony started" uses the:', options:['past simple passive','present perfect passive','past perfect passive','future passive'], correct:2}
    ]
  },

  { aspect:'reading', title:'Reading: The Discovery of Penicillin',
    explain:{ en:[
      {t:'p',text:'<b>Text:</b> In 1928, one of the most important medical breakthroughs in history was made by accident. Alexander Fleming, a Scottish bacteriologist, returned to his laboratory at St Mary\'s Hospital in London after a holiday. He noticed that a petri dish containing bacteria had been contaminated by a mould. Around the mould, the bacteria had been killed. Fleming quickly realised that the mould was producing a substance that could destroy harmful bacteria. He named the substance "penicillin," but it was not until the 1940s that it was developed into a usable medicine by Howard Florey and Ernst Boris Chain. During the Second World War, penicillin was used to treat wounded soldiers, and millions of lives were saved. Since then, penicillin has been credited with transforming modern medicine. Antibiotics were developed, and diseases that had previously been considered fatal could now be treated effectively. However, in recent years, concerns have been raised about antibiotic resistance. Overuse of antibiotics has been identified as a major cause of this growing problem. Experts have warned that if antibiotics continue to be misused, many infections will become untreatable again. Steps have been taken by governments and healthcare organisations to limit unnecessary prescriptions, but the challenge remains significant.'},
      {t:'tip',text:'This text uses the passive extensively, as is typical in scientific and historical writing. Notice how the focus is on the discovery and its impact, not on the people involved.'}
    ], es:[
      {t:'p',text:'<b>Texto:</b> En 1928, uno de los avances medicos mas importantes de la historia fue descubierto por accidente. Alexander Fleming, un bacteriologo escoces, volvio a su laboratorio en el Hospital St Mary en Londres despues de unas vacaciones. Noto que una caja de Petri con bacterias habia sido contaminada por un moho. Alrededor del moho, las bacterias habian sido destruidas. Fleming se dio cuenta de que el moho estaba produciendo una sustancia que podia destruir bacterias harmful. NombrÃ³ la sustancia "penicilina", pero no fue hasta la decada de 1940 que fue desarrollada como medicina utilizable.'}
    ]},
    activity:[
      {q:'When was penicillin discovered?', options:['In the 1940s','In 1928','During the Second World War','In the 1990s'], correct:1},
      {q:'How did Fleming discover penicillin?', options:['He was experimenting deliberately','It was found by accident in a contaminated petri dish','A colleague told him about it','He read about it in a medical journal'], correct:1},
      {q:'Penicillin was named by:', options:['Howard Florey','Ernst Boris Chain','Alexander Fleming','A group of scientists'], correct:2},
      {q:'Penicillin was developed into a usable medicine by:', options:['Fleming alone','Florey and Chain','The British government','St Mary\'s Hospital'], correct:1},
      {q:'During the war, penicillin was used to:', options:['prevent disease outbreaks','treat wounded soldiers','make soldiers stronger','clean hospital equipment'], correct:1},
      {q:'The word "fatal" in paragraph 2 is closest in meaning to:', options:['manageable','deadly','common','mild'], correct:1},
      {q:'What concern about antibiotics is mentioned in the text?', options:['They are too expensive','Antibiotic resistance due to overuse','They cause side effects','They are not manufactured enough'], correct:1},
      {q:'Steps to limit unnecessary prescriptions have been taken by:', options:['hospitals alone','doctors only','governments and healthcare organisations','the general public'], correct:2},
      {q:'The passive is used throughout this text because:', options:['it is a personal narrative','it is scientific/historical writing where the action matters more than the doer','the author wants to sound casual','the author does not know the facts'], correct:1},
      {q:'"Millions of lives were saved" is an example of:', options:['present simple passive','past simple passive','past perfect passive','present perfect passive'], correct:1},
      {q:'"Diseases that had previously been considered fatal could now be treated" uses:', options:['present simple passive','future passive','past perfect passive','modal passive'], correct:2},
      {q:'The text primarily discusses:', options:['a biography of Alexander Fleming','the history and impact of penicillin','the problem of hospital infections','modern antibiotic research'], correct:1},
      {q:'What does the text imply about the future of antibiotics?', options:['There is no concern','The situation may become worse if misuse continues','Antibiotics will be replaced by surgery','New antibiotics are being developed rapidly'], correct:1},
      {q:'The phrase "by accident" means:', options:['carefully','on purpose','by mistake or unintentionally','with help from others'], correct:2},
      {q:'How many passive constructions appear in the first paragraph alone?', options:['Zero','Two to three','At least five','Only one'], correct:2}
    ],
    evaluation:[
      {q:'What type of text is this passage?', options:['A personal diary entry','A scientific-historical account','A newspaper opinion piece','A recipe'], correct:1},
      {q:'Why is the passive voice particularly suitable for this text?', options:['It makes the text shorter','It focuses on events and discoveries rather than individuals','It is required by law in scientific writing','It is easier to understand'], correct:1},
      {q:'The discovery of penicillin is described as happening "by accident" to emphasise:', options:['Fleming was careless','the unexpected nature of the breakthrough','Fleming was unqualified','it was planned'], correct:1},
      {q:'Which sentence from the text best demonstrates a typical use of passive in scientific writing?', options:['"Fleming returned to his laboratory"','"Penicillin was used to treat wounded soldiers"','"I noticed a petri dish"','"We are concerned about antibiotics"'], correct:1},
      {q:'The passage mentions antibiotic resistance to:', options:['praise the medical industry','introduce a current challenge related to the topic','end the text on a positive note','criticise Alexander Fleming'], correct:1},
      {q:'"Concerns have been raised" uses the passive to:', options:['identify who raised the concerns','avoid naming specific people or organisations','indicate a future action','sound more emotional'], correct:1},
      {q:'Which historical event is mentioned to show penicillin\'s impact?', options:['The Industrial Revolution','The Second World War','The moon landing','The invention of the internet'], correct:1},
      {q:'The structure "it was not until the 1940s that..." emphasises:', options:['how quickly penicillin was developed','the long delay before penicillin became a usable medicine','the popularity of penicillin in the 1940s','Fleming\'s disappointment'], correct:1},
      {q:'The text uses passive constructions like "has been identified" and "have been warned" to show:', options:['completed past actions','ongoing research and expert opinions in the present'], correct:1},
      {q:'Which statement about the passage is TRUE?', options:['Penicillin was immediately available after its discovery','Antibiotic resistance is a solved problem','The passive voice helps maintain an objective tone','Fleming developed penicillin into a usable medicine himself'], correct:2},
      {q:'The passage would most likely appear in:', options:['a children\'s storybook','a medical or educational magazine','a comedy script','a sports report'], correct:1},
      {q:'"Penicillin has been credited with transforming modern medicine" means:', options:['penicillin has received recognition for changing medicine','penicillin was destroyed by modern medicine','doctors disagree about penicillin','penicillin is no longer used'], correct:0},
      {q:'Why does the author include the final paragraph about antibiotic resistance?', options:['To contradict everything written before','To add a modern challenge that relates to the topic','To end the text quickly','To promote antibiotic use'], correct:1},
      {q:'The passive "could now be treated" indicates:', options:['a past possibility','a present ability made possible by past developments','a future prediction','a wish'], correct:1},
      {q:'What makes this passage effective for practising passive voice recognition?', options:['It contains no passive voice','It uses passive voice extensively and naturally across multiple tenses','It uses only present simple passive','It is written entirely in active voice'], correct:1}
    ]
  },

  { aspect:'listening', title:'Listening: Behind the Headlines',
    explain:{ en:[
      {t:'p',text:'In this listening task, you will hear a news report about a factory fire investigation. The passive voice is used extensively, as is common in news reporting.'},
      {t:'tip',text:'News reports frequently use the passive to sound objective and to focus on events rather than individuals. Listen for forms like "has been arrested", "was destroyed", and "is being investigated".'}
    ], es:[
      {t:'p',text:'En esta tarea de comprension auditiva, escucharas un reportaje de noticias sobre la investigacion de un incendio en una fabrica. La voz pasiva se usa extensivamente.'},
      {t:'p',text:'Los reportajes de noticias usan frecuentemente la pasiva para sonar objetivos y enfocarse en los eventos.'}
    ]},
    activity:[
      {transcript:'Newsreader: Good evening. The investigation into last week\'s fire at the Riverside Textile Factory is continuing tonight. The blaze, which started early on Tuesday morning, destroyed almost half of the factory building. No workers were injured, as the building had been evacuated before the fire started.', q:'When did the factory fire start?', options:['On Monday evening','Early on Tuesday morning','Late on Wednesday night','Early on Thursday morning'], correct:1},
      {transcript:'Newsreader: Good evening. The investigation into last week\'s fire at the Riverside Textile Factory is continuing tonight. The blaze, which started early on Tuesday morning, destroyed almost half of the factory building. No workers were injured, as the building had been evacuated before the fire started.', q:'Were any workers injured in the fire?', options:['Yes, several were hurt','No, the building had been evacuated','No, but the building was damaged','Yes, but only minor injuries'], correct:1},
      {transcript:'Reporter: The fire is being investigated by a team of experts from the local fire service. According to the lead investigator, the most likely cause was an electrical fault. The wiring in the factory had not been updated for over twenty years. The owner, Mr David Chen, told reporters that all safety regulations had been followed.', q:'What is the most likely cause of the fire?', options:['Arson','A gas leak','An electrical fault','A dropped cigarette'], correct:2},
      {transcript:'Reporter: The fire is being investigated by a team of experts from the local fire service. According to the lead investigator, the most likely cause was an electrical fault. The wiring in the factory had not been updated for over twenty years. The owner, Mr David Chen, told reporters that all safety regulations had been followed.', q:'How old was the factory\'s wiring?', options:['It was brand new','It had not been updated for over twenty years','It had been replaced last year','It was five years old'], correct:1},
      {transcript:'Reporter: Over three hundred workers were employed at the factory before the fire. Many have been offered temporary work at a nearby warehouse, but some are worried about long-term employment. One worker, Maria Santos, said: "I was at home when the fire started. I found out on the news. It was terrifying." The local council has promised the workers will be supported.', q:'How many workers were employed at the factory?', options:['Around 100','About 200','Over 300','More than 500'], correct:2},
      {transcript:'Reporter: Over three hundred workers were employed at the factory before the fire. Many have been offered temporary work at a nearby warehouse, but some are worried about long-term employment. One worker, Maria Santos, said: "I was at home when the fire started. I found out on the news. It was terrifying." The local council has promised the workers will be supported.', q:'What has been offered to many of the factory workers?', options:['Permanent new jobs','Compensation money','Temporary work at a nearby warehouse','Holidays until the factory reopens'], correct:2},
      {transcript:'Reporter: Mr Chen said the building would be rebuilt as soon as possible. He was devastated by the damage and full insurance was in place. However, residents have raised concerns about air quality. Toxic chemicals were stored in part of the building that was destroyed, and questions have been asked about safety procedures.', q:'What concerns have local residents raised?', options:['Noise from the fire','Air quality after toxic chemicals were released','The cost of rebuilding','Lack of insurance'], correct:1},
      {transcript:'Reporter: Mr Chen said the building would be rebuilt as soon as possible. He was devastated by the damage and full insurance was in place. However, residents have raised concerns about air quality. Toxic chemicals were stored in part of the building that was destroyed, and questions have been asked about safety procedures.', q:'Toxic chemicals were stored in:', options:['a separate warehouse nearby','part of the building that was destroyed','the owner\'s office','the basement of the building'], correct:1},
      {transcript:'Reporter: The Environmental Agency confirmed air quality tests were carried out within hours of the fire. While levels of certain pollutants were temporarily elevated, they quickly returned to normal. Residents have been advised no long-term health risks are expected, but some remain sceptical.', q:'What did the air quality tests show?', options:['Dangerous pollution levels that persist','A temporary rise in pollutants that returned to normal','No pollution at all','Permanent environmental damage'], correct:1},
      {transcript:'Reporter: The Environmental Agency confirmed air quality tests were carried out within hours of the fire. While levels of certain pollutants were temporarily elevated, they quickly returned to normal. Residents have been advised no long-term health risks are expected, but some remain sceptical.', q:'Why do some residents remain sceptical?', options:['They do not believe the factory existed','They do not trust the official reassurances about air quality','They want the factory to stay closed','They were not consulted about the tests'], correct:1},
      {transcript:'Reporter: In a statement, the fire chief said: "Our team responded quickly and the fire was brought under control within four hours. I want to praise the bravery of the firefighters involved." An inquiry into the full causes is expected to be completed by the end of the year.', q:'How long did it take to bring the fire under control?', options:['Two hours','Four hours','Six hours','The whole day'], correct:1},
      {transcript:'Reporter: In a statement, the fire chief said: "Our team responded quickly and the fire was brought under control within four hours. I want to praise the bravery of the firefighters involved." An inquiry into the full causes is expected to be completed by the end of the year.', q:'When is the full inquiry expected to be completed?', options:['Within one month','By the end of the year','Next summer','It has already been completed'], correct:1},
      {transcript:'Newsreader: Meanwhile, a separate fire broke out at a school in Manchester earlier today. The blaze started in the science laboratory and was quickly extinguished by staff. No students were present, as the school had already closed for the day. The cause is currently being investigated.', q:'Where did the second fire start?', options:['In the school playground','In the science laboratory','In the school kitchen','In the headteacher\'s office'], correct:1},
      {transcript:'Newsreader: Meanwhile, a separate fire broke out at a school in Manchester earlier today. The blaze started in the science laboratory and was quickly extinguished by staff. No students were present, as the school had already closed for the day. The cause is currently being investigated.', q:'Why were no students harmed?', options:['They were evacuated quickly','The school had already closed for the day','Firefighters arrived before the fire started','The fire was in an unused building'], correct:1},
      {transcript:'Newsreader: Finally, a historic church in Yorkshire has been damaged by flooding. The roof, restored just two years ago, was severely affected. The community has launched a fundraising campaign for repairs. Donations have already been received from across the country.', q:'What happened to the church in Yorkshire?', options:['It was destroyed by fire','It was damaged by flooding','It was closed permanently','It was renovated successfully'], correct:1},
      {transcript:'Newsreader: Finally, a historic church in Yorkshire has been damaged by flooding. The roof, restored just two years ago, was severely affected. The community has launched a fundraising campaign for repairs. Donations have already been received from across the country.', q:'What has the local community done?', options:['Closed the church permanently','Launched a fundraising campaign','Requested government funding','Built a new church'], correct:1}
    ],
    evaluation:[
      {q:'Why is the passive used so frequently in this news report?', options:['To make the sentences longer','To focus on events and results rather than specific individuals','Because the reporters are not sure of the facts','To sound more informal'], correct:1},
      {q:'"The investigation is continuing" uses which form of the passive?', options:['Present simple passive','Present continuous passive','Past simple passive','Future passive'], correct:1},
      {q:'"The building had been evacuated" uses the passive to show:', options:['a future arrangement','an action completed before another past action','a present ongoing action','a general truth'], correct:1},
      {q:'What does "The wiring had not been updated for over twenty years" imply?', options:['the factory was well maintained','the factory\'s electrical system was outdated and possibly unsafe','the owner had just replaced the wiring','electrical faults are impossible'], correct:1},
      {q:'"All safety regulations had been followed" is in the passive because:', options:['the owner wants to appear responsible','it is impossible to say who followed them','it sounds more formal and avoids naming individuals','it is grammatically required'], correct:2},
      {q:'The passive "have been offered" suggests that temporary work is:', options:['a command','a possibility being provided to workers','something the workers demanded','no longer available'], correct:1},
      {q:'"Questions have been asked" is a diplomatic way of saying:', options:['everyone is happy','somebody is being blamed','people are demanding answers','nobody cares about the issue'], correct:2},
      {q:'The report uses passive voice when discussing air quality tests to sound:', options:['emotional and personal','objective and factual','casual and friendly','aggressive and accusatory'], correct:1},
      {q:'Which passive form appears in the report for a future expected event?', options:['is being investigated','will be rebuilt','have been received','were employed'], correct:1},
      {q:'"The fire was brought under control" means:', options:['the fire stopped itself','the firefighters managed to control it','the fire spread further','the building was completely destroyed'], correct:1},
      {q:'Why does the newsreader mention a second fire at a school?', options:['To fill time in the broadcast','To show another incident where passive voice is used naturally in reporting','Because it is connected to the factory fire','To warn people about fire safety'], correct:1},
      {q:'"The roof, restored just two years ago, was severely affected" uses passive to:', options:['praise the builders','show that the roof was damaged by an external event','suggest the restoration was poor','introduce a new topic'], correct:1},
      {q:'How many separate news stories are covered in this broadcast?', options:['One','Two','Three','Four'], correct:2},
      {q:'What type of register does this broadcast represent?', options:['Very informal and slangy','Formal and objective news reporting','Academic and technical','Poetic and creative'], correct:1},
      {q:'The broadcast uses passive voice primarily to:', options:['make sentences shorter and easier to understand','maintain objectivity and focus on events rather than people','sound more emotional and personal','avoid using the verb "to be"'], correct:1}
    ]
  },

  { aspect:'speaking', title:'Speaking: Reporting and Describing Events',
    explain:{ en:[
      {t:'h',text:'Using the Passive in Speaking'},
      {t:'p',text:'In B2 speaking exams, you may need to describe events, report news, or explain processes. The passive voice helps you sound objective and formal when appropriate.'},
      {t:'p',text:'Use the passive when the doer is unknown ("My bike was stolen"), unimportant ("The road is being repaired"), or when you want to sound diplomatic ("Mistakes were made").'},
      {t:'tip',text:'Combine active and passive naturally: "The government announced new rules. Taxes have been increased, and new laws were introduced last month." This shows grammatical range.'}
    ], es:[
      {t:'h',text:'Usar la pasiva al hablar'},
      {t:'p',text:'En los examenes orales de B2, necesitaras describir eventos, reportar noticias o explicar procesos. La voz pasiva te ayuda a sonar objetivo.'},
      {t:'p',text:'Usa la pasiva cuando el autor es desconocido ("Mi bicicleta fue robada"), poco importante ("La carretera se esta reparando"), o para sonar diplomatrico ("Se cometieron errores").'}
    ]},
    activity:[
      {prompt:'Describe a recent news event you heard about. Use at least two passive constructions in your answer.', model:'A famous painting was stolen from a museum in Paris last week. It has been valued at over ten million pounds, and the theft is being investigated by the police. No arrests have been made so far.', keywords:['stolen','museum','valued','investigated','arrests']},
      {prompt:'Explain how a product you use every day is made. What steps are involved?', model:'My smartphone is manufactured in China using components from several countries. The screen is assembled in one factory, and the battery is installed in another. The final product is then shipped to retailers around the world.', keywords:['manufactured','components','assembled','installed','shipped']},
      {prompt:'What changes have been made to your school or workplace recently?', model:'The library has been completely renovated. New computers have been installed, and the heating system was replaced last month. A new cafÃ© is being built on the ground floor.', keywords:['renovated','computers','installed','heating','replaced']},
      {prompt:'Describe a historical event that you think changed the world. Why was it important?', model:'The invention of the internet changed the world because information can now be shared instantly across the globe. Before the internet, news was delivered by newspapers and television, and communication was much slower.', keywords:['invention','information','shared','globally','communication']},
      {prompt:'What are some rules that must be followed in your country? Why are they important?', model:'In my country, seatbelts must be worn at all times while driving. Speed limits are enforced strictly, and drink-driving is punished severely. These rules have been introduced to reduce road accidents.', keywords:['seatbelts','enforced','drink-driving','punished','accidents']},
      {prompt:'Describe a problem in your local area that needs to be solved. What should be done?', model:'The main road in my area has been damaged by flooding and needs to be repaired. Potholes have appeared everywhere, and several cars have been damaged. The council should be contacted to fix it as soon as possible.', keywords:['damaged','flooding','repaired','potholes','council']},
      {prompt:'How has technology changed the way people communicate? Give examples.', model:'Communication has been transformed by technology. Letters have been replaced by emails, and face-to-face conversations have been supplemented by video calls. However, some people argue that personal skills have been lost.', keywords:['transformed','replaced','supplemented','personal','technology']},
      {prompt:'Explain what happens during a typical election in your country.', model:'During an election, candidates are nominated by political parties. Campaigns are organised across the country, and voters are asked to choose their preferred candidate. The results are announced within hours of the polls closing.', keywords:['nominated','candidates','campaigns','voters','announced']}
    ],
    evaluation:[
      {prompt:'A friend tells you that something valuable was stolen from them. How would you respond using passive structures?', model:'I am sorry to hear that. Your phone was stolen? That is terrible. Has it been reported to the police? If it has not been recovered yet, I would recommend checking with local second-hand shops.', keywords:['stolen','reported','police','recovered','recommend']},
      {prompt:'Describe a natural disaster you know about. What happened and what was the result?', model:'A massive earthquake struck the region, and thousands of buildings were destroyed. Roads were blocked by rubble, and many people were left without homes. Emergency services were deployed immediately to help.', keywords:['earthquake','destroyed','blocked','deployed','emergency']},
      {prompt:'Why do you think some people prefer to use the passive voice in formal writing?', model:'People prefer the passive in formal writing because it sounds more objective and professional. When the focus is on the result rather than the person responsible, the passive creates a more neutral tone.', keywords:['formal','objective','professional','neutral','result']},
      {prompt:'Describe a time when something was organised for you (an event, a trip, etc.).', model:'A surprise birthday party was organised for me last month. My favourite decorations had been put up, and a special cake had been ordered. I was completely shocked when I walked into the room.', keywords:['surprise','organised','decorations','ordered','shocked']},
      {prompt:'What new laws do you think should be introduced in your country? Why?', model:'I think stricter laws should be introduced to protect the environment. Plastic bags should be banned completely, and more recycling centres should be built in every neighbourhood.', keywords:['strict','protect','banned','recycling','neighbourhood']},
      {prompt:'If you could interview a famous person who is no longer alive, who would you choose? What would you ask?', model:'I would interview Albert Einstein. I would ask how his theories were developed and whether he ever imagined that nuclear energy would be created based on his work. Many breakthroughs have been attributed to his ideas.', keywords:['interview','theories','developed','nuclear','attributed']},
      {prompt:'How do you think education will change in the next 50 years?', model:'In the next 50 years, traditional classrooms will probably be replaced by virtual learning environments. Textbooks will have been phased out completely, and students will be assessed by AI-powered systems.', keywords:['traditional','replaced','virtual','phased out','AI-powered']}
    ]
  }
  ]
});


/* DAY 6 - Modals of Deduction */
DAYS.push({
  id:'day-6', title:'Modals of Deduction',
  focus:'Use must, might, may, could, can\u2019t for present and past deduction.',
  sections:[

  { aspect:'grammar', title:'Grammar: Modals of Deduction',
    explain:{ en:[ {t:'h',text:'Deducing with modals'},{t:'p',text:'We use modal verbs to make deductions, or logical guesses, about situations. The modal you choose shows how sure you are. <b>Must</b> is used when you are almost certain something is true because of evidence. <b>Might, may</b> and <b>could</b> are used when you think something is possibly true. <b>Can\u2019t</b> is used when you are almost certain something is not true.'},{t:'p',text:'For present deduction we follow the modal with the base form of the verb: <b>He must be tired</b>. For past deduction we use <b>have + past participle</b>: <b>She must have missed the bus</b>. We never use <b>to</b> after these modals.'},{t:'tip',text:'Strong evidence = must or can\u2019t. Weak possibility = might, may or could. Remember that must and can\u2019t express certainty, not obligation or ability.'} ],
      es:[ {t:'h',text:'DeducciÃ³n con modales'},{t:'p',text:'Usamos verbos modales para hacer deducciones, es decir, suposiciones lÃ³gicas basadas en evidencia. <b>Must</b> indica casi certeza. <b>Might, may</b> y <b>could</b> expresan posibilidad. <b>Can\u2019t</b> indica casi certeza de que algo no es cierto.'},{t:'p',text:'En presente usamos el modal + verbo en forma base. En pasado usamos el modal + <b>have</b> + participio pasado. Nunca usamos <b>to</b> despuÃ©s de estos modales.'} ]},
    activity:[
      {q:'Choose the correct modal: Look at those dark clouds. It ___ rain soon.', options:['must','might','must have'], correct:1},
      {q:'He has not slept for two days and looks exhausted. He ___ be very tired.', options:['might','must','could'], correct:1},
      {q:'The lights are off and nobody is answering. They ___ be at home.', options:['can\u2019t','might','may'], correct:0},
      {q:'The phone is ringing, but I hear no voice. It ___ be a wrong number.', options:['must','could','can\u2019t'], correct:1},
      {q:'Complete: She ___ have taken the keys; they are not on the table anymore.', options:['might','can\u2019t','must'], correct:2},
      {q:'The car is covered in dust. It ___ have been driven for months.', options:['must','can\u2019t','may'], correct:1},
      {q:'He left the office one hour ago, so he ___ be home by now.', options:['can\u2019t','held to','must'], correct:2},
      {q:'I am not sure, but this cheese ___ be past its best date.', options:['must','mustn\u2019t','could'], correct:2},
      {q:'She passed all her exams without studying. She ___ be very clever.', options:['can\u2019t','must','could'], correct:1},
      {q:'That cake tastes strange and bitter. It ___ contain too much salt.', options:['must','mustn\u2019t','could'], correct:0},
      {q:'They said they would arrive at eight, so they ___ have left already.', options:['must','can\u2019t','might'], correct:0},
      {q:'I do not believe your sister said that. You ___ be joking!', options:['must','might','may'], correct:0},
      {q:'There is a strong smell of smoke. Someone ___ have had a barbecue.', options:['could','can\u2019t','must'], correct:2},
      {q:'The ground is wet but there are no dark clouds now. It ___ have rained earlier.', options:['might','mustn\u2019t','must'], correct:0},
      {q:'He is always late and never apologises. He ___ care about being on time.', options:['can\u2019t','must','might'], correct:0}
    ],
    evaluation:[
      {q:'The floor is covered in snow and it is still falling. It ___ be very cold outside.', options:['might','must','may'], correct:1},
      {q:'Complete: You look pale and you are shivering. You ___ have caught a cold.', options:['must','might','can\u2019t'], correct:0},
      {q:'I hear footsteps upstairs, but everyone else is downstairs. It ___ be my imagination.', options:['must','could','can\u2019t'], correct:2},
      {q:'The shop is closed and the windows are dark. It ___ be open on Sundays.', options:['could','can\u2019t','might'], correct:1},
      {q:'She said she was feeling fine, so she ___ be ill.', options:['may','might','can\u2019t'], correct:2},
      {q:'There is a queue outside the cinema. The film ___ be very popular.', options:['must','can\u2019t','could'], correct:0},
      {q:'Complete: He ___ have forgotten the meeting; I reminded him twice.', options:['might','mustn\u2019t','could'], correct:1},
      {q:'The email has no attachment and the file is missing. It ___ have been deleted.', options:['can\u2019t','might','must'], correct:2},
      {q:'I am only guessing, but she ___ be about thirty years old.', options:['must','mustn\u2019t','could'], correct:2},
      {q:'The train is always crowded at this hour. It ___ be hard to find a seat.', options:['might','must','may'], correct:1},
      {q:'Your shoes are dry, so you ___ have walked in puddles.', options:['must','can\u2019t','could'], correct:1},
      {q:'He has a confident voice and clear ideas. He ___ be an experienced manager.', options:['must','can\u2019t','might'], correct:0},
      {q:'I doubt it, but this project ___ be finished by Friday.', options:['must','mustn\u2019t','may'], correct:2},
      {q:'The parcel was posted last week, so it ___ have arrived by now.', options:['can\u2019t','must','might'], correct:1},
      {q:'That is not my jacket; mine is black. This ___ be yours.', options:['must','can\u2019t','must not'], correct:0}
    ]
  },

  { aspect:'reading', title:'Reading: A Mystery in the Office',
    explain:{ en:[ {t:'p',text:'<b>Text:</b> When Sarah arrived at work on Monday morning, she found the office door unlocked and the computers switched on. Nobody had been there all weekend, so this was strange. The coffee machine was still warm, and there was a half-finished sandwich on the desk. Sarah thought the cleaning lady must have left the door open, but the cleaner always finishes at six and locks everything. A note on the board said \u201cBe careful.\u201d Nobody remembered writing it. Sarah realised someone could have been in the office overnight. She called the security team, but the cameras had filmed nothing unusual. \u201cIt might simply be a fault,\u201d the officer said, \u201cbut we must check everything.\u201d In the end, the technician found a loose wire that had turned the lights on by itself. The mystery was solved, and Sarah laughed at her own worries.'},{t:'tip',text:'When you read a story, ask yourself what evidence supports each deduction. Look for the modal verbs (must, might, could, can\u2019t) and check which level of certainty they express.'} ],
      es:[ {t:'p',text:'<b>Texto:</b> Al llegar el lunes por la maÃ±ana, Sarah encontrÃ³ la puerta abierta y los ordenadores encendidos, siendo que nadie habÃ­a estado allÃ­ el fin de semana. PensÃ³ que quizÃ¡ la limpiadora habÃ­a dejado la puerta abierta, pero ella siempre cierra todo. Al final, un tÃ©cnico descubriÃ³ un cable suelto. El misterio se resolviÃ³ y Sarah se riÃ³ de sus preocupaciones.'} ]},
    activity:[
      {q:'Why was the situation strange for Sarah on Monday morning?', options:['The building was new','Nobody had been there all weekend but things looked used','A party had been planned'], correct:1},
      {q:'What can we deduce from the coffee machine being warm?', options:['Someone must have used it recently','It must be broken','It could only be the weekend'], correct:0},
      {q:'According to the writer, the cleaner usually ___.', options:['leaves the door open','locks everything at six','works at night'], correct:1},
      {q:'Why did Sarah think the cleaner might be responsible?', options:['She found a note','The cleaner was the only one with a key often seen there','The door was open'], correct:2},
      {q:'From the evidence, the note on the board must have been written by someone ___.', options:['who remembered everything','who no one remembers writing it','the technician'], correct:1},
      {q:'The camera, according to the passage, filmed ___.', options:['an intruder','nothing unusual','Sarah entering'], correct:1},
      {q:'Which deduction does the officer express about the situation?', options:['It must be a crime','It might simply be a fault','It can\u2019t be explained'], correct:1},
      {q:'What could the intruder have done overnight?', options:['Written the note and used the office','stolen the computers','broken the window'], correct:0},
      {q:'We can deduce that the equipments had been used because ___.', options:['the computers were switched on','the room was cold','the lights were off'], correct:0},
      {q:'Why might Sarah have laughed at the end?', options:['She was angry','The cause was a simple technical fault, not an intruder','She got a promotion'], correct:1},
      {q:'The technician found that the mystery was caused by ___.', options:['a thief','a loose wire','the cleaning lady'], correct:1},
      {q:'Before calling security, Sarah must have felt ___.', options:['calm and relaxed','worried and curious','bored'], correct:1},
      {q:'The phrase \u201cBe careful\u201d on the note could have been written by ___.', options:['the technician','anyone, since nobody remembers it','a cleaner'], correct:1},
      {q:'Given that cameras showed nothing, the problem ___ been caused by a person.', options:['might have','must have','can\u2019t have'], correct:2},
      {q:'We can conclude that the writer of the note probably ___.', options:['left it by accident','was an intruder','was writing for no reason'], correct:2}
    ],
    evaluation:[
      {q:'What time does the cleaner usually leave?', options:['at six','at eight','at midnight'], correct:0},
      {q:'Where did Sarah work when she found the situation?', options:['in a school','in an office','in a shop'], correct:1},
      {q:'The note contained the words ___.', options:['\u201cDo not enter\u201d','\u201cBe careful\u201d','\u201cHelp me\u201d'], correct:1},
      {q:'Nobody remembered ___.', options:['writing the note','locking the door','turning off the coffee'], correct:0},
      {q:'The security officer suggested the cause ___ be a fault.', options:['must','might','can\u2019t'], correct:1},
      {q:'What did the cameras show?', options:['a person entering','a loose wire','nothing unusual'], correct:2},
      {q:'Lights that had turned on by themselves were caused by ___.', options:['a loose wire','a person','a mouse'], correct:0},
      {q:'Sarah\u2019s first idea blamed ___.', options:['the technician','the cleaning lady','the guard'], correct:1},
      {q:'We could deduce someone had been in the office because ___.', options:['the door was locked','the coffee machine was warm','the windows were closed'], correct:1},
      {q:'The story shows that things are not always what they ___.', options:['must be','can be','seem'], correct:2},
      {q:'The technician probably ___ the problem quickly.', options:['might have solved','can\u2019t have solved','must have solved'], correct:0},
      {q:'Sarah\u2019s worry turned out to be ___.', options:['true','unnecessary','dangerous'], correct:1},
      {q:'Which modal would you use to make a sure deduction about the computers being on?', options:['must','can\u2019t','might'], correct:0},
      {q:'The story took place on ___.', options:['Friday','Monday','Sunday'], correct:1},
      {q:'At the end Sarah felt ___.', options:['frightened','relieved','angry'], correct:1}
    ]
  },

  { aspect:'listening', title:'Listening: Deduction at Work',
    explain:{ en:[ {t:'p',text:'Listen to three short conversations and make deductions. Practise understanding how modal verbs express certainty and possibility in everyday speech.'},{t:'tip',text:'Focus on words like must, might, could and can\u2019t. They tell you how sure the speaker is about what they are saying.'} ],
      es:[ {t:'p',text:'Escucha tres conversaciones cortas y haz deducciones. Presta atenciÃ³n a los modales para entender el nivel de certeza del hablante.'} ]},
    activity:[
      {transcript:'Woman: There is milk everywhere and the fridge door is open. Man: Then someone must have left it open last night.', q:'Why does the man think the milk is everywhere?', options:['Someone must have left the fridge open','A cat was inside','The milk was old'], correct:0},
      {transcript:'Man: I called Sam three times but there is no answer. Woman: He might be in a meeting, or his phone could be off.', q:'What might be true about Sam?', options:['He is angry','He might be in a meeting or his phone is off','He has left town'], correct:1},
      {transcript:'Woman: The bus stop is empty and the road is quiet. Man: Then the bus must have already left.', q:'What does the man deduce about the bus?', options:['It must have already left','It is late','It never comes'], correct:0},
      {transcript:'Man: The windows are all open and it is freezing. Woman: Someone must have been careless, or maybe a cleaner left them open.', q:'What deduction does the woman offer?', options:['Someone must have been careless','The heater is broken','It is summer'], correct:0},
      {transcript:'Woman: The lights are off but the computer screen is bright. Man: So someone could still be working inside.', q:'What could be happening, according to the man?', options:['Everyone left','Someone could still be working inside','The power failed'], correct:1},
      {transcript:'Man: She said she would arrive at nine and it is ten now. Woman: She might have got stuck in traffic.', q:'Why might she be late?', options:['She forgot','She might have got stuck in traffic','She is sick'], correct:1},
      {transcript:'Woman: This room smells like fresh coffee. Man: Then someone must have just made a cup.', q:'What does the man deduce?', options:['The coffee is stale','Someone must have just made a cup','Nobody drinks coffee'], correct:1},
      {transcript:'Man: I cannot find my umbrella anywhere. Woman: It could be at the office since you left it there last week.', q:'Where could the umbrella be?', options:['At home','At the office','In the car'], correct:1},
      {transcript:'Woman: The road is blocked by police cars. Man: There must have been an accident earlier.', q:'What does the man think happened?', options:['A party is happening','There must have been an accident earlier','Road works continue'], correct:1},
      {transcript:'Man: The cake has no sugar in it? Woman: That cannot be right, the recipe always calls for sugar.', q:'What is the woman almost sure of?', options:['The cake must have sugar','The cake is too sweet','The recipe is wrong'], correct:0},
      {transcript:'Woman: Tom\u2019s light is on and his shoes are by the door. Man: Then he must be home.', q:'What does the man conclude?', options:['Tom must be home','Tom has left','Tom is asleep outside'], correct:0},
      {transcript:'Man: The dog is barking at the gate. Woman: It might have heard a stranger, or could just be playing.', q:'What might explain the barking?', options:['The dog is hungry','It might have heard a stranger or be playing','Nobody is outside'], correct:1},
      {transcript:'Woman: The papers are gone from the desk. Man: The boss must have taken them to the meeting.', q:'Where does the man think the papers are?', options:['On the floor','With the boss at the meeting','In the bin'], correct:1},
      {transcript:'Man: I heard a crash from the kitchen. Woman: Someone must have dropped a plate again.', q:'What does the woman deduce?', options:['Someone must have dropped a plate','A visitor arrived','The cat is hungry'], correct:0},
      {transcript:'Woman: The tickets are sold out already. Man: That cannot be true, the show is next month.', q:'How does the man react?', options:['He believes it','He doubts the tickets are sold out','He is angry'], correct:1}
    ],
    evaluation:[
      {transcript:'Man: The printer is jammed and there is paper everywhere. Woman: Someone must have fed it too many pages.', q:'What should be deduced about the printer?', options:['Someone must have fed it too many pages','It is new','It is off'], correct:0},
      {transcript:'Woman: I heard you laugh during the film. Man: Then the film must have been funny for you too.', q:'What does the man suggest?', options:['The film must have been funny','The film was boring','He did not watch'], correct:0},
      {transcript:'Man: There is a puddle on the floor and a wet coat. Woman: Someone might have come in from the rain.', q:'What might have happened?', options:['Someone might have come in from the rain','The roof is leaking','A plant broke'], correct:0},
      {transcript:'Woman: The file is corrupted and cannot open. Man: It could have been damaged when the power failed.', q:'What could have damaged the file?', options:['A virus','The power failure','A mistake'], correct:1},
      {transcript:'Man: The window is open and the room is cold. Woman: Then it must have been left open all night.', q:'What does the woman conclude about the window?', options:['It must have been left open all night','Someone closed it','It is broken'], correct:0},
      {transcript:'Woman: I saw a light in the office at midnight. Man: It could have been the cleaner or the guard.', q:'Who could the light belong to?', options:['A burglar always','The cleaner or the guard','A ghost'], correct:1},
      {transcript:'Man: The milk smells fresh. Woman: Then someone must have bought it today.', q:'What does the woman deduce about the milk?', options:['It is old','Someone must have bought it today','It is empty'], correct:1},
      {transcript:'Woman: The lift is not working again. Man: It might be a temporary fault that is easy to fix.', q:'What does the man believe about the lift?', options:['It might be a temporary fault','It is permanently broken','It cannot be fixed'], correct:0},
      {transcript:'Man: Her phone rings but she does not answer. Woman: She could be driving and cannot pick it up.', q:'Why might she not answer?', options:['She could be driving','She is angry','She lost the phone'], correct:0},
      {transcript:'Woman: The doorbell rang twice but nobody was there. Man: It must have been the wind or a child playing.', q:'What does the man think caused the doorbell?', options:['A thief','The wind or a child playing','A ghost'], correct:1},
      {transcript:'Man: The report is missing a page. Woman: You might have printed it without the last page.', q:'What does the woman suggest?', options:['Someone stole the page','The report might have been printed without the last page','The page is hidden'], correct:1},
      {transcript:'Woman: The car engine is cold and the windows are foggy. Man: So the car must have been parked all night here.', q:'What does the man deduce?', options:['The car must have been parked all night','The car was driven just now','The car is broken'], correct:0},
      {transcript:'Man: There are fresh footprints on the path. Woman: Someone must have walked here recently in the mud.', q:'What does the woman conclude?', options:['No one was here','Someone must have walked here recently','The ground is dry'], correct:1},
      {transcript:'Woman: The cake is gone but the box is here. Man: It could have been eaten by someone in the family.', q:'Who might have eaten the cake?', options:['A stranger','Someone in the family','The dog only'], correct:1},
      {transcript:'Man: The light is flashing on the machine. Woman: There must be a fault that needs checking.', q:'What does the woman conclude?', options:['There must be a fault','The machine is perfect','It is off'], correct:0}
    ]
  },

  { aspect:'speaking', title:'Speaking: Making Deductions',
    explain:{ en:[ {t:'p',text:'Explain situations and use deduction modals to say what you think must, might, could or can\u2019t be true. Practise giving reasons for your conclusions.'},{t:'tip',text:'Structure your answer: describe the evidence, then give a deduction with the right modal, then justify it.'} ],
      es:[ {t:'p',text:'Describe situaciones y usa modales de deducciÃ³n para expresar certeza o posibilidad, siempre justificando tus conclusiones.'} ]},
    activity:[
      {prompt:'A colleague is yawning and has dark circles under their eyes. Make a present deduction using must.', model:'You look so tired that you must have gone to bed very late. There are dark circles under your eyes.', keywords:['must','tired','circles','late','bed']},
      {prompt:'You hear loud music from the neighbours\u2019 flat at 11pm. Make two possible deductions using might and could.', model:'They might be having a party tonight. It could also be that someone forgot to turn the music off before leaving.', keywords:['might','party','could','forgot','music']},
      {prompt:'A friend promised to call you at seven but it is now eight. Use must have for a past deduction.', model:'You promised to call at seven, so you must have forgotten or been very busy. Something must have delayed you.', keywords:['must','have','forgotten','busy','delayed']},
      {prompt:'You walk into a room and smell burning. Make a past deduction about food using must have.', model:'There is a strong smell of burning, so someone must have left the food in the oven too long. It must have been forgotten.', keywords:['smell','burning','must','have','oven']},
      {prompt:'A friend says they saw your twin in the park, but you were at home. Say it cannot have been you.', model:'That cannot have been me because I was at home all afternoon. You must have seen my twin instead.', keywords:['cannot','have','been','home','twin']},
      {prompt:'Your teacher looks very happy today. Give two deductions about why using must and might.', model:'The teacher must have received good news this morning. She might also be happy because her class did well in the test.', keywords:['must','received','news','might','happy']},
      {prompt:'A door in your building is badly scratched. Give a possible explanation using could have.', model:'The door could have been scratched by someone moving heavy furniture. Someone could have dragged a sofa through it.', keywords:['could','have','scratched','furniture','moved']},
      {prompt:'Your bag is missing from the kitchen. Give deduction ideas using must, might and can\u2019t.', model:'It must be somewhere in the house because I used it this morning. It might be in the car, and it can\u2019t be in the kitchen anymore because it is not there.', keywords:['must','somewhere','might','car','cannot']}
    ],
    evaluation:[
      {prompt:'A plant in your office is turning yellow even though it is watered. Make two deductions using might and could.', model:'The plant might be getting too much direct sunlight, or the soil could be lacking nutrients. Perhaps it could also be overwatered.', keywords:['might','sunlight','could','nutrients','overwatered']},
      {prompt:'A train is always late in the morning. Give a past deduction using must have and explain why.', model:'The morning train must have been delayed by the heavy traffic or track works. It can\u2019t have been on time because it never is these days.', keywords:['must','have','delayed','traffic','works']},
      {prompt:'Your friend is sneezing a lot. Make present deductions about the cause.', model:'You must have a cold or an allergy to something in the air. You might also be allergic to the flowers on the balcony.', keywords:['must','cold','allergy','might','flowers']},
      {prompt:'You find the kitchen window open on a windy night. Explain what must or might have happened.', model:'The window must have been blown open by the strong wind, or someone might have left it open before it got dark. It can\u2019t have been closed properly.', keywords:['window','wind','might','open','cannot']},
      {prompt:'A colleague is praised by the boss. Say what cannot have been the reason and suggest a positive deduction.', model:'It cannot have been because of the lateness today, so the boss must have been impressed by your project. You must have done excellent work.', keywords:['cannot','lateness','must','impressed','project']},
      {prompt:'Your keys are always on the table but they are gone. Give deductions using must and could.', model:'The keys must have been moved by someone, or they could have fallen behind the drawer. They could also be in your coat pocket by accident.', keywords:['must','moved','could','fallen','pocket']},
      {prompt:'A shop is closed in the middle of the day. Make two deductions about why using must and might.', model:'The shop must have closed for lunch, or the owner might have had an emergency. It can\u2019t be the usual closing day because that is Monday.', keywords:['must','lunch','might','emergency','cannot']}
    ]
  }
  ]
});


/* DAY 7 - Reported Speech */
DAYS.push({
  id:'day-7', title:'Reported Speech',
  focus:'Report statements, questions and commands with tense backshift.',
  sections:[

  { aspect:'grammar', title:'Grammar: Reported Speech',
    explain:{ en:[ {t:'h',text:'Reporting what people say'},{t:'p',text:'When we report what someone said, we usually move the tense one step back. This is called backshift. For example, <b>\u201cI am tired\u201d</b> becomes <b>She said she was tired</b>, and <b>\u201cI have finished\u201d</b> becomes <b>He said he had finished</b>. Time words also change: <i>now</i> becomes <i>then</i>, <i>today</i> becomes <i>that day</i>, and <i>tomorrow</i> becomes <i>the next day</i>.'},{t:'p',text:'To report questions, we use <b>asked</b> and change the word order to statement order. We do not use a question mark. <b>\u201cWhere is the bank?\u201d</b> becomes <b>She asked where the bank was</b>. Yes/No questions are introduced by <b>if</b> or <b>whether</b>: <b>\u201cAre you ready?\u201d</b> becomes <b>He asked if we were ready</b>.'},{t:'p',text:'To report commands and requests, we use <b>tell + object + infinitive</b> or <b>ask + object + infinitive</b>. <b>\u201cPlease open the window\u201d</b> becomes <b>She asked me to open the window</b>. Negative commands use <b>not to</b>: <b>He told me not to be late</b>.'},{t:'tip',text:'After a reporting verb in the past, shift the tenses: present to past, past to past perfect. Change pronouns and time expressions too. Commands take the infinitive and never change tense.'} ],
      es:[ {t:'h',text:'Discurso indirecto'},{t:'p',text:'Al reportar lo que alguien dijo, movemos el tiempo verbal un paso atrÃ¡s. Decimos <b>is se convierte en was</b>, <b>have en had</b>. TambiÃ©n cambian las palabras de tiempo: <i>hoy</i> a <i>ese dÃ­a</i>, <i>maÃ±ana</i> a <i>el dÃ­a siguiente</i>.'},{t:'p',text:'Para reportar preguntas usamos <b>asked</b> y orden de oraciÃ³n afirmativa, sin signo de interrogaciÃ³n. Las preguntas de sÃ­/no se introducen con <b>if</b> o <b>whether</b>. Las Ã³rdenes se reportan con <b>tell/ask + objeto + infinitivo</b>.'} ]},
    activity:[
      {q:'Choose the correct reported form: \u201cI am hungry,\u201d she said. \u2192 She said that she ___ hungry.', options:['is','was','has been'], correct:1},
      {q:'\u201cWe have finished the report,\u201d they said. \u2192 They said they ___ the report.', options:['finished','had finished','have finished'], correct:1},
      {q:'\u201cI will help you,\u201d Tom said. \u2192 Tom said he ___ help me.', options:['will','would','should'], correct:1},
      {q:'\u201cWhere are you going?\u201d she asked. \u2192 She asked where I ___.', options:['am going','was going','go'], correct:1},
      {q:'\u201cAre you ready?\u201d he asked. \u2192 He asked ___ ready.', options:['whether I was','if am I','that I was'], correct:0},
      {q:'\u201cPlease wait here,\u201d the guard said. \u2192 The guard told me ___ there.', options:['wait','to wait','waited'], correct:1},
      {q:'\u201cDon\u2019t be late,\u201d the teacher said. \u2192 The teacher told us ___ late.', options:['not to be','to not be','not be'], correct:0},
      {q:'\u201cI saw the film last night,\u201d she said. \u2192 She said she ___ the film the previous night.', options:['saw','had seen','sees'], correct:1},
      {q:'\u201cWhat time does the train leave?\u201d he asked. \u2192 He asked what time the train ___.', options:['leaves','left','is leaving'], correct:1},
      {q:'\u201cI can swim,\u201d Mark said. \u2192 Mark said he ___ swim.', options:['can','could','may'], correct:1},
      {q:'\u201cI have never been abroad,\u201d Anna said. \u2192 Anna said she ___ never been abroad.', options:['has','had','would'], correct:1},
      {q:'\u201cCall me tomorrow,\u201d he said. \u2192 He told me to call him ___.', options:['tomorrow','the next day','today'], correct:1},
      {q:'\u201cWe are leaving now,\u201d they said. \u2192 They said they ___ leaving then.', options:['are','were','had been'], correct:1},
      {q:'\u201cDid you lock the door?\u201d she asked. \u2192 She asked ___ the door.', options:['if I locked','whether did I lock','that I locked'], correct:0},
      {q:'\u201cDon\u2019t open that box,\u201d he warned. \u2192 He warned me ___ that box.', options:['not to open','to not open','not open'], correct:0}
    ],
    evaluation:[
      {q:'\u201cI am working on the project,\u201d Maya said. \u2192 Maya said she ___ on the project.', options:['am working','was working','worked'], correct:1},
      {q:'\u201cWe will visit you,\u201d they promised. \u2192 They promised they ___ visit us.', options:['will','would','are going to'], correct:1},
      {q:'\u201cI do not like coffee,\u201d he said. \u2192 He said he ___ like coffee.', options:['did not','does not','had not'], correct:0},
      {q:'\u201cHow much does it cost?\u201d she asked. \u2192 She asked how much it ___.', options:['costs','cost','is costing'], correct:1},
      {q:'\u201cHave you finished your homework?\u201d Mum asked. \u2192 Mum asked if I ___ my homework.', options:['have finished','had finished','finished'], correct:1},
      {q:'\u201cPlease sit down,\u201d the host said. \u2192 The host asked us ___.', options:['to sit down','sit down','sitting down'], correct:0},
      {q:'\u201cDo not touch the paintings,\u201d the guide said. \u2192 The guide told us ___ the paintings.', options:['to not touch','not to touch','not touch'], correct:1},
      {q:'\u201cI will call you later,\u201d Ben said. \u2192 Ben said he ___ call me later.', options:['will','would','does'], correct:1},
      {q:'\u201cWhy are you crying?\u201d she asked. \u2192 She asked why I ___.', options:['am crying','was crying','cry'], correct:1},
      {q:'\u201cWe can meet at noon,\u201d they said. \u2192 They said they ___ meet at noon.', options:['can','could','may'], correct:1},
      {q:'\u201cI bought a new car,\u201d he said. \u2192 He said he ___ a new car.', options:['bought','had bought','buys'], correct:1},
      {q:'\u201cAre you feeling better?\u201d the nurse asked. \u2192 The nurse asked ___ feeling better.', options:['if I was','whether was I','that I was'], correct:0},
      {q:'\u201cTurn off the lights,\u201d Dad said. \u2192 Dad told me ___ off the lights.', options:['turn','to turn','turning'], correct:1},
      {q:'\u201cI have eaten already,\u201d she said. \u2192 She said she ___ already.', options:['has eaten','had eaten','ate'], correct:1},
      {q:'\u201cDo not forget your keys,\u201d he reminded me. \u2192 He reminded me ___ my keys.', options:['to not forget','not to forget','not forget'], correct:1}
    ]
  },

  { aspect:'reading', title:'Reading: The Interview',
    explain:{ en:[ {t:'p',text:'<b>Text:</b> After the job interview, Sofia reported everything to her friend Leo. \u201cThe manager asked me where I had studied and how much experience I had,\u201d she said. \u201cHe asked if I could speak Spanish fluently, and I said that I had lived in Spain for two years.\u201d Leo wanted to know what she had answered about the salary. Sofia explained that the manager had told her to send her CV and references by email. She added that the manager had said he would contact her the following week. \u201cHe told me not to worry about the tests,\u201d Sofia remembered, \u201cand he promised that the first interview was just a formality.\u201d When Leo asked whether she felt confident, Sofia replied that she was quite sure she had made a good impression.'},{t:'tip','text':'When reading a report, notice how each direct statement has been changed: verbs shift back one tense, questions become statements with if or whether, and commands use the infinitive.'} ],
      es:[ {t:'p',text:'<b>Texto:</b> DespuÃ©s de la entrevista, SofÃ­a le contÃ³ todo a su amigo Leo. Le dijo que el director le habÃ­a preguntado dÃ³nde habÃ­a estudiado y cuÃ¡nta experiencia tenÃ­a, y si hablaba espaÃ±ol con fluidez. El director le dijo que le enviara su CV por correo y prometiÃ³ contactarla la semana siguiente, ademÃ¡s de pedirle que no se preocupara por las pruebas.'} ]},
    activity:[
      {q:'Where did the conversation between Sofia and Leo take place?', options:['At the office','After the interview, as a report to a friend','During the test'], correct:1},
      {q:'What did the manager ask first, according to Sofia?', options:['Where she had studied','Her age','Her salary'], correct:0},
      {q:'The manager asked how much experience ___.', options:['she has','she had','she will have'], correct:1},
      {q:'Did the manager ask about speaking Spanish?', options:['Yes, if she could speak it fluently','No, never','Only about writing'], correct:0},
      {q:'Sofia answered that she ___ in Spain for two years.', options:['had lived','lives','lived'], correct:0},
      {q:'What did the manager tell Sofia to send?', options:['A photo','Her CV and references','A letter'], correct:1},
      {q:'How were the CV and references to be sent?', options:['By post','By email','In person'], correct:1},
      {q:'The manager said he ___ contact her the following week.', options:['will','would','can'], correct:1},
      {q:'What did the manager tell her about the tests?', options:['Not to worry about them','To study hard for them','To bring them'], correct:0},
      {q:'The manager promised the first interview was just ___.', options:['a formality','the final stage','a mistake'], correct:0},
      {q:'Leo asked Sofia whether she ___.', options:['felt confident','was paid well','liked the office'], correct:0},
      {q:'Sofia replied that she was quite sure she ___.', options:['had made a good impression','would fail','did not belong'], correct:0},
      {q:'The phrase \u201cwhere I had studied\u201d reports the question ___.', options:['\u201cWhere did you study?\u201d','\u201cWhere have you studied?\u201d','\u201cWhere will you study?\u201d'], correct:0},
      {q:'The command \u201cSend your CV by email\u201d becomes in the report ___.', options:['told her to send her CV','told her sent her CV','told her sending her CV'], correct:0},
      {q:'Which of these is a correctly reported yes/no question from the text?', options:['if she could speak Spanish','whether salary was high','that she had a degree in English'], correct:0}
    ],
    evaluation:[
      {q:'Sofia was reporting her interview to her friend ___.', options:['Leo','Maya','Ben'], correct:0},
      {q:'The manager asked where she had studied and how much ___.', options:['money she earned','experience she had','time she wanted'], correct:1},
      {q:'According to Sofia, she had lived in Spain for ___.', options:['two years','a month','five years'], correct:0},
      {q:'Leo was curious about what she had answered regarding ___.', options:['the salary','the holidays','the location'], correct:0},
      {q:'Sofia had to send her CV by ___.', options:['email','fax','hand'], correct:0},
      {q:'The manager said he would contact her ___.', options:['that day','the following week','in a month'], correct:1},
      {q:'About the tests, the manager told her ___.', options:['to take them twice','not to worry','to pass them quickly'], correct:1},
      {q:'The first interview was described as ___.', options:['a formality','the final choice','a warning'], correct:0},
      {q:'Sofia felt fairly confident that she had made ___.', options:['a good impression','a mistake','a payment'], correct:0},
      {q:'The question \u201cDo you speak Spanish?\u201d was reported using ___.', options:['that','if','when'], correct:1},
      {q:'In the report, \u201cI have lived\u201d became ___.', options:['had lived','have lived','lives'], correct:0},
      {q:'The manager\u2019s promise used the modal ___.', options:['will changed to would','can changed to could','may changed to might'], correct:0},
      {q:'Which reporting verb did Sofia use for the instruction about the tests?', options:['told','asked','warned'], correct:0},
      {q:'Leo\u2019s question about confidence was a ___.', options:['yes/no question','wh question','command'], correct:0},
      {q:'Overall, Sofia felt the interview had gone ___.', options:['badly','well','unfinished'], correct:1}
    ]
  },

  { aspect:'listening', title:'Listening: What They Said',
    explain:{ en:[ {t:'p',text:'Listen to short conversations and reports, then choose the correct reported version of what was said.'},{t:'tip',text:'Listen for the original words, then imagine how they would change: tense backshift, pronoun changes, and new time expressions.'} ],
      es:[ {t:'p',text:'Escucha conversaciones y elige la versiÃ³n correcta en estilo indirecto de lo que se dijo.'} ]},
    activity:[
      {transcript:'Man: I am going to the gym after work. Woman: He said he was going to the gym after work.', q:'Which reported sentence is correct?', options:['He said he was going to the gym','He said he is going to the gym','He said he had gone to the gym'], correct:0},
      {transcript:'Woman: We have booked the hotel. Man: She said they had booked the hotel.', q:'What did the man report?', options:['She said they had booked the hotel','She said they book the hotel','She said they have booked'], correct:0},
      {transcript:'Man: I will help you carry the boxes. Woman: He told me he would help me carry the boxes.', q:'Which reported sentence is correct?', options:['He told me he will help','He told me he would help me carry the boxes','He told me he helps'], correct:1},
      {transcript:'Woman: Where is the nearest station? Man: She asked where the nearest station was.', q:'What did she ask about?', options:['the nearest station','the best restaurant','the bus stop'], correct:0},
      {transcript:'Man: Are you coming to the party? Woman: He asked if I was coming to the party.', q:'How was the question reported?', options:['He asked if I was coming to the party','He asked where the party was','He asked that I come'], correct:0},
      {transcript:'Woman: Please close the window. Man: She asked me to close the window.', q:'What was reported?', options:['She asked me to close the window','She told me the window was closed','She asked if the window was open'], correct:0},
      {transcript:'Man: Do not enter the room. Woman: He told me not to enter the room.', q:'Which reported command is correct?', options:['He told me to not enter','He told me not to enter the room','He told me don\u2019t enter'], correct:1},
      {transcript:'Woman: I saw you at the market yesterday. Man: She said she had seen me at the market the day before.', q:'What time change appears in the report?', options:['yesterday to the day before','tomorrow to the next day','now to then'], correct:0},
      {transcript:'Man: When did you arrive? Woman: He asked when I had arrived.', q:'How was the wh question reported?', options:['He asked when did I arrived','He asked when I had arrived','He asked when I arrive'], correct:1},
      {transcript:'Woman: I can finish this today. Man: She said she could finish it that day.', q:'Which changes were made?', options:['can to could and today to that day','can to may and now to then','will to would and today to tomorrow'], correct:0},
      {transcript:'Man: Bring me the report tomorrow. Woman: He asked me to bring him the report the next day.', q:'Which reported request is correct?', options:['He asked me brought him the report','He asked me to bring him the report the next day','He asked if I bring the report'], correct:1},
      {transcript:'Woman: It is cold in here. Man: She said it was cold in there.', q:'Which place change was reported?', options:['here to there','here to here','here to nowhere'], correct:0},
      {transcript:'Man: I have lost my wallet. Woman: He said he had lost his wallet.', q:'Which reported sentence is correct?', options:['He said he has lost his wallet','He said he had lost his wallet','He said he loses his wallet'], correct:1},
      {transcript:'Woman: Did you pay the bill? Man: She asked whether I had paid the bill.', q:'How was the yes/no question reported?', options:['She asked whether I had paid the bill','She asked whether did I pay the bill','She asked that I paid the bill'], correct:0},
      {transcript:'Man: Don\u2019t forget your coat. Woman: He told me not to forget my coat.', q:'Which reported command is correct?', options:['He told me not remember my coat','He told me not to forget my coat','He told me to forget my coat'], correct:1}
    ],
    evaluation:[
      {transcript:'Woman: I am writing an essay. Man: She said she was writing an essay.', q:'Which reported sentence is correct?', options:['She said she was writing an essay','She said she is writing an essay','She said she wrote an essay'], correct:0},
      {transcript:'Man: We will arrive at nine. Woman: He said they would arrive at nine.', q:'What did the report change will to?', options:['would','can','might'], correct:0},
      {transcript:'Woman: Do you like this music? Man: She asked if I liked that music.', q:'Which reported question is correct?', options:['She asked if did I like the music','She asked if I liked that music','She asked that I like the music'], correct:1},
      {transcript:'Man: Open the door for me. Woman: He asked me to open the door for him.', q:'What was the request?', options:['He asked me to open the door for him','He asked me opened the door','He told me the door was open'], correct:0},
      {transcript:'Woman: I have bought a present. Man: She said she had bought a present.', q:'How was \u201chave bought\u201d reported?', options:['had bought','buy','will buy'], correct:0},
      {transcript:'Man: Where do you live? Woman: He asked where I lived.', q:'Which reported question is correct?', options:['He asked where do I live','He asked where I lived','He asked where I live'], correct:1},
      {transcript:'Woman: Please be quiet. Man: She asked us to be quiet.', q:'What did she say?', options:['She asked us to be quiet','She asked us being quiet','She told us we are quiet'], correct:0},
      {transcript:'Man: I don\u2019t understand the lesson. Woman: He said he didn\u2019t understand the lesson.', q:'Which reported sentence is correct?', options:['He said he doesn\u2019t understand','He said he didn\u2019t understand the lesson','He said he hadn\u2019t understand'], correct:1},
      {transcript:'Woman: Can you help me now? Man: She asked whether I could help her then.', q:'Which changes were made?', options:['can to could and now to then','can to will and now to then','may to could and now to today'], correct:0},
      {transcript:'Man: Don\u2019t shout. Woman: He told me not to shout.', q:'Which reported command is correct?', options:['He told me don\u2019t shout','He told me not to shout','He told me not shout'], correct:1},
      {transcript:'Woman: I am cooking dinner. Man: She said she was cooking dinner.', q:'What was reported?', options:['She said she was cooking dinner','She said she is cooking dinner','She said she cooked dinner'], correct:0},
      {transcript:'Man: Give me your number. Woman: He asked me to give him my number.', q:'Which reported request is correct?', options:['He asked me give him my number','He asked me to give him my number','He asked me giving him my number'], correct:1},
      {transcript:'Woman: We saw the film. Man: She said they had seen the film.', q:'How was \u201csaw\u201d reported?', options:['saw','had seen','see'], correct:1},
      {transcript:'Man: Wait for me here. Woman: He told me to wait for him there.', q:'Which changes were made to the report?', options:['me to him and here to there','me to us and now to then','I to he and today to that day'], correct:0},
      {transcript:'Woman: I will come tomorrow. Man: She said she would come the next day.', q:'Which reported sentence is correct?', options:['She said she will come the next day','She said she would come the next day','She said she comes the next day'], correct:1}
    ]
  },

  { aspect:'speaking', title:'Speaking: Reporting Conversations',
    explain:{ en:[ {t:'p',text:'Practise reporting what other people said. Start with a direct quote, then turn it into reported speech using the correct reporting verb and tense backshift.'},{t:'tip',text:'Choose the right reporting verb: said for statements, asked for questions, told/asked for commands. Remember to change pronouns and time words.'} ],
      es:[ {t:'p',text:'Practica cÃ³mo reportar lo que otros dijeron: de estilo directo a indirecto, con el verbo adecuado y los cambios de tiempo necesarios.'} ]},
    activity:[
      {prompt:'Report this statement to a friend: \u201cI am learning English at the British Council.\u201d Use said.', model:'My friend said that she was learning English at the British Council. She told me she was taking a B2 course.', keywords:['said','was','learning','Council','course']},
      {prompt:'Report this wh question: \u201cWhere is the station?\u201d Use asked and correct word order.', model:'A tourist asked me where the station was. He asked because he had lost his way.', keywords:['asked','where','station','was','tourist']},
      {prompt:'Report this yes/no question: \u201cHave you seen my keys?\u201d Use asked if.', model:'My mother asked if I had seen her keys. She asked me whether they were on the table.', keywords:['asked','whether','keys','had','seen']},
      {prompt:'Report this command: \u201cPlease close the door.\u201d Use asked me.', model:'She asked me to close the door because it was cold. I told her I would do it right away.', keywords:['asked','close','door','cold','would']},
      {prompt:'Report this negative command: \u201cDon\u2019t be late.\u201d Use told me.', model:'My boss told me not to be late for the meeting tomorrow. He said the guests would arrive early.', keywords:['told','not','late','meeting','would']},
      {prompt:'Report this past statement: \u201cI saw the film last night.\u201d Use said with backshift.', model:'Tom said he had seen the film the previous night. He told me it was really exciting.', keywords:['said','had','seen','previous','exciting']},
      {prompt:'Report this future statement: \u201cI will call you tomorrow.\u201d Use promised.', model:'The technician promised he would call me the next day. He promised to fix the problem before the weekend.', keywords:['promised','would','call','next','fix']},
      {prompt:'Report this sentence using a suitable verb: \u201cI can speak three languages.\u201d', model:'She claimed that she could speak three languages fluently. She said she had learnt them at school.', keywords:['claimed','could','speak','languages','learnt']}
    ],
    evaluation:[
      {prompt:'Report this statement: \u201cWe are moving to a new flat next month.\u201d Use said.', model:'My neighbours said they were moving to a new flat the following month. They told me they had found a bigger place.', keywords:['said','were','moving','following','bigger']},
      {prompt:'Report this wh question: \u201cHow much does this cost?\u201d Use asked.', model:'The customer asked how much the product cost. She asked me about the total price including delivery.', keywords:['asked','how','much','cost','price']},
      {prompt:'Report this command: \u201cSend the email now.\u201d Use told me.', model:'My manager told me to send the email immediately. He told me not to forget to attach the file.', keywords:['told','send','email','immediately','attach']},
      {prompt:'Report this yes/no question: \u201cDid you enjoy the trip?\u201d Use asked whether.', model:'My uncle asked whether I had enjoyed the trip. He asked me if the weather had been good.', keywords:['asked','whether','enjoyed','trip','weather']},
      {prompt:'Report this statement with time change: \u201cI will finish it today.\u201d Use said.', model:'Anna said she would finish the work that day. She told me she had almost completed the final part.', keywords:['said','would','finish','that','day']},
      {prompt:'Report this negative command: \u201cDon\u2019t touch the device.\u201d Use warned me.', model:'The technician warned me not to touch the device while it was on. He told me it could be dangerous.', keywords:['warned','not','touch','device','dangerous']},
      {prompt:'Report this past statement: \u201cI have already eaten.\u201d Use said.', model:'She said she had already eaten dinner. She told me she was not hungry anymore.', keywords:['said','had','eaten','dinner','hungry']}
    ]
  }
  ]
});
