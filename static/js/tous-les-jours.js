/* ============================================================
   SEED DECK — everyday spoken French, not textbook French.
   phon: syllables split by "-" or space; the LAST one is the beat.
   ============================================================ */
const SEED = [
["g1","Coucou !","Hey! (soft, affectionate hello)","koo-KOO","greet","What you text someone you like. Warmer than « salut »."],
["g2","Ça va ?","How's it going? / You okay?","sah-VAH","greet","Question and answer both. « Ça va ? » — « Ça va. »"],
["g3","Ça va, et toi ?","I'm good, and you?","sah-vah, ay-TWAH","greet",""],
["g4","Quoi de neuf ?","What's new?","kwah duh-NUHF","greet",""],
["g5","Tu fais quoi ?","What are you up to?","tü fay-KWAH","greet","Spoken word order. The textbook « Que fais-tu ? » sounds stiff."],
["g6","Bien dormi ?","Sleep well?","byan dor-MEE","greet","Good morning message."],
["g7","Bonne nuit","Good night","bun-NWEE","greet",""],
["g8","À demain","See you tomorrow","ah duh-MAN","greet",""],
["g9","À tout à l'heure","See you later today","ah-too-tah-LUR","greet","Often crushed to « à tout' ! » in speech."],
["g10","Je te laisse","I'll let you go","juh tuh-LESS","greet","How French people end a call politely."],
["g11","Bonne journée","Have a good day","bun jor-NAY","greet",""],
["g12","Tu me réveilles ?","Will you wake me up?","tü muh ray-VAY","greet",""],

["t1","tkt","don't worry (t'inquiète)","tan-KYET","text","You will see this constantly. Full form: « t'inquiète »."],
["t2","mdr","lol (mort de rire)","em-day-AIR","text","Literally 'dying of laughter'."],
["t3","jsp","idk (je sais pas)","juh say-PAH","text",""],
["t4","bcp","a lot (beaucoup)","boh-KOO","text",""],
["t5","dsl","sorry (désolé)","day-zo-LAY","text",""],
["t6","jtm","ily (je t'aime)","juh-TEM","text",""],
["t7","slt","hi (salut)","sah-LÜ","text",""],
["t8","ptdr","lmao (pété de rire)","pay-tay-day-AIR","text","Stronger than mdr."],
["t9","cc","hey (coucou)","koo-KOO","text",""],
["t10","stp","please (s'il te plaît)","seel tuh-PLAY","text",""],
["t11","qqch","something (quelque chose)","kel-kuh-SHOZ","text",""],
["t12","auj","today (aujourd'hui)","oh-jor-DWEE","text",""],

["f1","Tu me manques","I miss you","tü muh-MONK","feel","Backwards from English: literally 'you are missing to me'."],
["f2","Je pense à toi","I'm thinking about you","juh ponss ah-TWAH","feel",""],
["f3","J'ai hâte de te voir","I can't wait to see you","jay aht duh tuh-VWAHR","feel",""],
["f4","Tu es adorable","You're adorable","tü ay ah-do-RAHBL","feel",""],
["f5","Ça me fait plaisir","That makes me happy","sah muh fay play-ZEER","feel","Use it when she does something kind."],
["f6","Je suis fier de toi","I'm proud of you","juh swee fyair duh-TWAH","feel","« fière » if the speaker is female."],
["f7","Repose-toi bien","Rest well","ruh-poz-twah-BYAN","feel",""],
["f8","Prends soin de toi","Take care of yourself","pron swan duh-TWAH","feel",""],
["f9","Tu me rends heureux","You make me happy","tü muh ron zuh-RUH","feel",""],
["f10","Je suis là","I'm here for you","juh swee-LAH","feel","Small phrase, does a lot of work."],
["f11","Tu m'as manqué","I missed you","tü mah mon-KAY","feel","Past tense of « tu me manques »."],
["f12","Ça va aller","It'll be okay","sah vah ah-LAY","feel",""],
["f13","Je te trouve belle","I think you're beautiful","juh tuh troov-BELL","feel","Softer than « tu es belle » — it's your opinion, offered."],

["r1","Ça marche","Sounds good / works for me","sah-MARSH","react",""],
["r2","Grave","Totally / for real","GRAHV","react","Agreeing hard. Very common with people under 30."],
["r3","J'avoue","True / fair enough","jah-VOO","react",""],
["r4","Carrément","Absolutely","kah-ray-MON","react",""],
["r5","En vrai","Honestly / actually","on-VRAY","react","Starts half of all casual sentences."],
["r6","Du coup","So / and so","dü-KOO","react","Pure filler. Using it makes you sound native fast."],
["r7","N'importe quoi","Nonsense / whatever","nam-port-KWAH","react","Playful when teasing, sharp when annoyed."],
["r8","C'est pas grave","It's no big deal","say pah-GRAHV","react","Spoken French drops the « ne »."],
["r9","Franchement","Frankly","fronsh-MON","react",""],
["r10","Bref","Anyway / long story short","BREF","react",""],
["r11","Ouais","Yeah","WAY","react","« Oui » in real life."],
["r12","Genre","Like… (filler)","JON-ruh","react",""],
["r13","C'est chaud","That's rough / intense","say-SHOH","react","Not about temperature."],
["r14","Trop mignon","So cute","troh meen-YON","react",""],

["c1","Tu peux répéter ?","Can you repeat that?","tü puh ray-pay-TAY","ask","The single most useful phrase you own."],
["c2","Doucement, s'il te plaît","Slowly, please","dooss-mon seel tuh-PLAY","ask",""],
["c3","Ça veut dire quoi ?","What does that mean?","sah vuh deer-KWAH","ask",""],
["c4","Comment on dit… ?","How do you say…?","ko-mon on-DEE","ask",""],
["c5","J'ai pas compris","I didn't understand","jay pah kom-PREE","ask",""],
["c6","Attends, je réfléchis","Wait, I'm thinking","ah-ton, juh ray-flay-SHEE","ask","Buys you time instead of freezing."],
["c7","Je suis en train d'apprendre","I'm learning","juh swee zon tran dah-PRONDR","ask",""],
["c8","Corrige-moi si je me trompe","Correct me if I'm wrong","ko-reej-mwah see juh muh-TROMP","ask","Invites her to teach you. Use it early."],
["c9","Tu dis ça comment ?","How do you pronounce that?","tü dee sah ko-MON","ask",""],
["c10","C'est quoi la différence ?","What's the difference?","say kwah lah dee-fay-RONSS","ask",""],
["c11","En français, on dit quoi ?","In French, what do you say?","on fron-say, on dee-KWAH","ask",""],
["c12","Redis-le, j'écoute","Say it again, I'm listening","ruh-dee-luh, jay-KOOT","ask",""],

["d1","Je suis crevé","I'm exhausted","juh swee kruh-VAY","day","« crevée » if she says it."],
["d2","J'ai faim","I'm hungry","jay-FAN","day",""],
["d3","Je vais prendre une douche","I'm going to shower","juh vay prondr ün-DOOSH","day",""],
["d4","J'arrive","Be right there","jah-REEV","day","Present tense doing future work."],
["d5","Je suis occupé","I'm busy","juh swee zo-kü-PAY","day",""],
["d6","J'ai trop de boulot","I have too much work","jay troh duh boo-LOH","day","« boulot » = work, casually."],
["d7","Je me lève tôt demain","I get up early tomorrow","juh muh lev toh duh-MAN","day",""],
["d8","Il faut que j'y aille","I gotta go","eel foh kuh jee-AHY","day",""],
["d9","Je suis en cours","I'm in class","juh swee zon-KOOR","day",""],
["d10","J'ai un examen","I have an exam","jay an eg-zah-MAN","day",""],
["d11","Je t'appelle après","I'll call you after","juh tah-pel ah-PRAY","day",""],
["d12","Ça a été, ta journée ?","How was your day?","sah ah ay-TAY, tah jor-NAY","day",""],

["p1","On se parle ce soir ?","Talk tonight?","on suh parl suh-SWAHR","plan",""],
["p2","Tu es libre quand ?","When are you free?","tü ay leebr-KON","plan",""],
["p3","Dans cinq minutes","In five minutes","don sank mee-NÜT","plan",""],
["p4","Ce week-end","This weekend","suh week-END","plan",""],
["p5","La semaine prochaine","Next week","lah suh-men pro-SHEN","plan",""],
["p6","On verra","We'll see","on vay-RAH","plan",""],
["p7","Je te dis quoi","I'll let you know","juh tuh dee-KWAH","plan",""],

["o1","L'addition, s'il vous plaît","The check, please","lah-dee-syon seel voo-PLAY","out","« vous » with strangers, always."],
["o2","Je voudrais un café","I'd like a coffee","juh voo-dray zan kah-FAY","out","« je voudrais » is the polite way to order anything."],
["o3","C'est combien ?","How much is it?","say kom-BYAN","out",""],
["o4","Où sont les toilettes ?","Where's the bathroom?","oo son lay twah-LET","out",""],
["o5","Un billet pour Paris","A ticket to Paris","an bee-yay poor pah-REE","out",""],
["o6","Excusez-moi de vous déranger","Sorry to bother you","ex-kü-zay mwah duh voo day-ron-JAY","out",""],
["o7","Je ne parle pas très bien français","I don't speak French very well","juh nuh parl pah tray byan fron-SAY","out","Say this first and people slow down for you."],
["o8","Vous pouvez m'aider ?","Can you help me?","voo poo-vay may-DAY","out",""],
["o9","Je cherche la gare","I'm looking for the train station","juh shairsh lah-GAR","out",""],
["o10","C'est par où ?","Which way is it?","say par-OO","out",""]
];

const CATS={greet:"Check-ins",text:"Texting",feel:"Feelings",react:"Reactions",ask:"Clarifying",day:"Daily life",plan:"Plans",out:"Out & about",mine:"From her"};

/* ============================================================
   storage
   ============================================================ */
const KEY='tlj:v2';
const store={
  async get(){
    try{ const v=localStorage.getItem(KEY); if(v)return JSON.parse(v); }catch(e){}
    return null;
  },
  async set(o){
    const s=JSON.stringify(o);
    try{ localStorage.setItem(KEY,s); }catch(e){}
  }
};
let S={p:{},custom:[],inbox:[],edits:{},hidden:[],hist:{},streak:0,last:null,goal:12};
const save=()=>store.set(S);

const DAY=864e5;
const dayNum=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/DAY);
const dayKey=n=>new Date((n??dayNum())*DAY).toISOString().slice(0,10);
const nice=ts=>{const d=Math.floor((dayNum()*DAY-ts)/DAY);
  return d<=0?'today':d===1?'yesterday':d<7?d+' days ago':new Date(ts).toISOString().slice(0,10);};

/* ---------- deck ---------- */
function deck(){
  const seeds=SEED.map(a=>({id:a[0],fr:a[1],en:a[2],phon:a[3],cat:a[4],note:a[5],src:''}));
  const mine=S.custom.map(x=>({id:x.id,fr:x.fr,en:x.en,phon:x.phon||'',cat:x.cat||'mine',note:x.note||'',src:x.src||'',added:x.added,own:true}));
  return seeds.concat(mine)
    .filter(c=>!S.hidden.includes(c.id))
    .map(c=>Object.assign({},c,S.edits[c.id]||{}));
}
const card=id=>deck().find(x=>x.id===id);
const prog=id=>S.p[id]||(S.p[id]={b:0,d:0,n:0,w:0});
const noSound=c=>!c.phon||!c.phon.trim();

/* ---------- speech ---------- */
let voice=null;
function findVoice(){
  if(!('speechSynthesis' in window))return;
  const v=speechSynthesis.getVoices(); if(!v.length)return;
  voice=v.find(x=>x.lang.replace('_','-').toLowerCase().startsWith('fr-fr'))||v.find(x=>x.lang.toLowerCase().startsWith('fr'))||null;
  const w=document.getElementById('voicewarn');
  if(!voice){w.classList.remove('hide');
    w.innerHTML="No French voice on this device, so audio will sound wrong. Windows: Settings → Time &amp; language → Speech → Add voices → French (France). iPhone: Settings → Accessibility → Spoken Content → Voices. Everything else still works.";}
  else w.classList.add('hide');
}
if('speechSynthesis' in window){speechSynthesis.addEventListener('voiceschanged',findVoice);findVoice();setTimeout(findVoice,600);}
function say(text,rate){
  if(!('speechSynthesis' in window))return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(text).replace(/…/g,''));
  u.lang='fr-FR'; if(voice)u.voice=voice; u.rate=rate||0.92;
  speechSynthesis.speak(u);
}

/* ---------- helpers ---------- */
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const jq=s=>JSON.stringify(String(s)).replace(/"/g,'&quot;');
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[\u2018\u2019]/g,"'").replace(/[^a-z' ]/g,'').replace(/\s+/g,' ').trim();
const shuffle=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
const val=id=>{const e=document.getElementById(id);return e?e.value.trim():'';};

function ribbon(phon){
  const syls=String(phon).split(/[-\s]+/).filter(Boolean);
  return syls.map((s,i)=>`<span class="syl${i===syls.length-1?' beat':''}">${esc(s)}</span>`).join('');
}
function phraseBlock(c,small){
  const sound = noSound(c)
    ? `<div class="askher">no pronunciation yet — ask her, then add it</div>`
    : `<div class="ribbon">${ribbon(c.phon)}</div>
       <p class="beatnote">French leans on the <em>last</em> syllable — that's the dark one.</p>`;
  return `<div class="fr${small?' sm':''}">${esc(c.fr)}</div>${sound}
  <div class="audio">
    <button onclick="say(${jq(c.fr)})">▶ Hear it</button>
    <button onclick="say(${jq(c.fr)},0.55)">◐ Slow</button>
  </div>`;
}

/* ============================================================
   session engine
   ============================================================ */
const STEPS=[1,2,4,8,16,32,60];
let sess=null;

function buildSession(){
  const t=dayNum(),d=deck();
  const due=d.filter(c=>{const p=prog(c.id);return p.n>0&&p.d<=t;}).sort((a,b)=>prog(a.id).d-prog(b.id).d);
  const fresh=d.filter(c=>prog(c.id).n===0).sort((a,b)=>(b.own?1:0)-(a.own?1:0));
  const list=due.slice(0,S.goal);
  for(const c of fresh){if(list.length>=S.goal)break;list.push(c);}
  return shuffle(list);
}
function modeFor(c){
  const p=prog(c.id);
  if(p.n===0)return'meet';
  if(p.b<=1)return'recall';
  if(p.b===2)return'listen';
  return'produce';
}
function startSession(){
  const list=buildSession();
  if(!list.length){render('home');return;}
  sess={list,i:0,right:0,answered:false};
  drawStep();
}
function drawStep(){
  const c=sess.list[sess.i],mode=modeFor(c);
  sess.mode=mode;sess.answered=false;
  const bars=sess.list.map((_,i)=>`<i class="${i<sess.i?'done':i===sess.i?'now':''}"></i>`).join('');
  let body='';

  if(mode==='meet'){
    body=`<div class="card rise">
      <p class="eyebrow">New — ${CATS[c.cat]||'Mine'}</p>
      ${phraseBlock(c)}
      <p class="en big" style="margin-top:18px">${esc(c.en)}</p>
      ${c.note?`<p class="note">${esc(c.note)}</p>`:''}
      ${c.src?`<p class="src">heard: ${esc(c.src)}</p>`:''}
      <div style="margin-top:20px"><button class="btn" onclick="grade(2)">Got it — next</button></div>
    </div>`;
    setTimeout(()=>say(c.fr),260);
  }

  if(mode==='recall'||mode==='listen'){
    let pool=shuffle(deck().filter(x=>x.id!==c.id&&x.cat===c.cat)).slice(0,3);
    const all=deck();
    while(pool.length<3){const r=all[Math.floor(Math.random()*all.length)];
      if(r.id!==c.id&&!pool.find(x=>x.id===r.id))pool.push(r);}
    sess.opts=shuffle([c,...pool]);
    const head=mode==='listen'
      ? `<p class="eyebrow">Listen — what did you hear?</p>
         <div class="audio" style="margin:4px 0 0">
           <button onclick="say(${jq(c.fr)})">▶ Play</button>
           <button onclick="say(${jq(c.fr)},0.55)">◐ Slow</button></div>`
      : `<p class="eyebrow">What does this mean?</p><div class="fr">${esc(c.fr)}</div>`;
    body=`<div class="card rise">${head}
      <div class="choices" id="ch">${sess.opts.map((o,i)=>`<button class="choice" onclick="pick(${i})">${esc(o.en)}</button>`).join('')}</div>
      <div id="after"></div></div>`;
    if(mode==='listen')setTimeout(()=>say(c.fr),300);
  }

  if(mode==='produce'){
    body=`<div class="card rise">
      <p class="eyebrow">Say it in French</p>
      <p class="en big">${esc(c.en)}</p>
      <input type="text" id="ans" placeholder="tape ici…" autocomplete="off" autocorrect="off" spellcheck="false">
      <p class="beatnote" style="margin-top:9px">Accents are optional here — I'll show you the real spelling.</p>
      <div style="margin-top:16px"><button class="btn" onclick="check()">Check</button></div>
      <div id="after"></div></div>`;
  }

  document.getElementById('view').innerHTML=
    `<div class="prog">${bars}</div>${body}
     <div style="margin-top:12px"><button class="btn ghost" onclick="quit()">End session</button></div>`;
  if(mode==='produce'){const el=document.getElementById('ans');el.focus();
    el.addEventListener('keydown',e=>{if(e.key==='Enter'&&!sess.answered)check();});}
}
function pick(i){
  if(sess.answered)return;sess.answered=true;
  const c=sess.list[sess.i],ok=sess.opts[i].id===c.id;
  document.querySelectorAll('#ch .choice').forEach((b,j)=>{
    b.disabled=true;
    if(sess.opts[j].id===c.id)b.classList.add('right');
    else if(j===i)b.classList.add('wrong');});
  reveal(ok);
}
function check(){
  if(sess.answered)return;
  const c=sess.list[sess.i],v=document.getElementById('ans').value;
  const ok=norm(v)===norm(c.fr);
  if(!ok&&norm(v).length<2)return;
  sess.answered=true;
  document.getElementById('ans').disabled=true;
  reveal(ok,ok&&v.trim()!==c.fr?'accents':null);
}
function reveal(ok,flag){
  const c=sess.list[sess.i];
  if(ok)sess.right++;
  say(c.fr);
  document.getElementById('after').innerHTML=`
    <p class="verdict ${ok?'ok':'no'}">${ok?(flag==='accents'?'Right — accents to tidy up.':'Right.'):'Not this time.'}</p>
    <div style="margin-top:14px">${phraseBlock(c,true)}
    <p class="en" style="margin-top:14px">${esc(c.en)}</p>
    ${c.note?`<p class="note">${esc(c.note)}</p>`:''}
    ${c.src?`<p class="src">heard: ${esc(c.src)}</p>`:''}</div>
    <p class="beatnote" style="margin-top:18px">Say it out loud once, then rate it.</p>
    <div class="grade">
      <button onclick="grade(0)">Again<small>TODAY</small></button>
      <button onclick="grade(${ok?2:1})">${ok?'Good':'Almost'}<small>${ok?'FORWARD':'SOON'}</small></button>
      <button onclick="grade(3)">Easy<small>SKIP AHEAD</small></button>
    </div>`;
}
function grade(g){
  const c=sess.list[sess.i],p=prog(c.id),t=dayNum();
  p.n++;
  if(g===0){p.b=0;p.d=t;p.w++;}
  else if(g===1){p.b=Math.max(0,p.b-1);p.d=t+1;p.w++;}
  else if(g===2){p.b=Math.min(STEPS.length-1,p.b+1);p.d=t+STEPS[Math.max(0,p.b-1)];}
  else{p.b=Math.min(STEPS.length-1,p.b+2);p.d=t+STEPS[Math.max(0,p.b-1)];}
  save();sess.i++;
  if(sess.i>=sess.list.length)finish();else drawStep();
}
function quit(){if(sess&&sess.i>0)recordDay(sess.i);sess=null;render('home');}
function finish(){recordDay(sess.list.length);const n=sess.list.length,r=sess.right;sess=null;render('home',{done:n,right:r});}
function recordDay(n){
  const k=dayKey(),t=dayNum();
  S.hist[k]=(S.hist[k]||0)+n;
  if(S.last!==k){S.streak=(S.last===dayKey(t-1))?S.streak+1:1;S.last=k;}
  save();
}

/* ============================================================
   capture → define → dictionary
   ============================================================ */
function capture(){
  const raw=val('cap_raw'),ctx=val('cap_ctx'),split=document.getElementById('cap_split').checked;
  if(!raw){flash('cap_msg','Type or paste something first.',false);return;}
  const parts=split?raw.split(/\n+/).map(s=>s.trim()).filter(Boolean):[raw];
  parts.forEach((t,i)=>S.inbox.push({id:'i'+Date.now()+i,raw:t,ctx,at:Date.now()}));
  document.getElementById('cap_raw').value='';
  save();render('capture');
  flash('cap_msg',parts.length>1?parts.length+' saved to the inbox.':'Saved. Define it when you have a minute.',true);
}
function dropInbox(id){S.inbox=S.inbox.filter(x=>x.id!==id);save();render('capture');}
function openDefine(id){window._def=id;render('capture');setTimeout(()=>document.getElementById('d_en')?.focus(),50);}
function closeDefine(){window._def=null;render('capture');}

function saveDefined(id){
  const item=S.inbox.find(x=>x.id===id);
  const fr=val('d_fr'),en=val('d_en');
  if(!fr||!en){flash('d_msg','Needs the French and what it means.',false);return;}
  S.custom.push({id:'m'+Date.now(),fr,en,phon:val('d_ph'),cat:val('d_cat')||'mine',
    note:val('d_nt'),src:val('d_src')||(item?item.ctx:''),added:Date.now()});
  S.inbox=S.inbox.filter(x=>x.id!==id);
  window._def=null;save();render('capture');
  flash('cap_msg','Added to the dictionary. It joins your next session.',true);
  say(fr);
}
function quickAdd(){
  const fr=val('q_fr'),en=val('q_en');
  if(!fr||!en){flash('q_msg','Needs both fields.',false);return;}
  S.custom.push({id:'m'+Date.now(),fr,en,phon:val('q_ph'),cat:val('q_cat')||'mine',note:'',src:val('q_src'),added:Date.now()});
  save();render('capture');
  flash('cap_msg','Added to the dictionary.',true);
  say(fr);
}
function flash(id,msg,ok){
  const e=document.getElementById(id);if(!e)return;
  e.classList.remove('hide');e.className='verdict '+(ok?'ok':'no');e.textContent=msg;
}

/* ---------- editing any entry ---------- */
function openEdit(id){window._edit=id;render('dict');setTimeout(()=>document.getElementById('e_fr')?.focus(),50);}
function saveEdit(id){
  const fr=val('e_fr'),en=val('e_en');
  if(!fr||!en){flash('e_msg','French and meaning are both required.',false);return;}
  const patch={fr,en,phon:val('e_ph'),cat:val('e_cat'),note:val('e_nt'),src:val('e_src')};
  const own=S.custom.find(c=>c.id===id);
  if(own)Object.assign(own,patch); else S.edits[id]=patch;
  window._edit=null;save();render('dict');
}
function resetEdit(id){delete S.edits[id];window._edit=null;save();render('dict');}
function removeEntry(id){
  if(S.custom.find(c=>c.id===id))S.custom=S.custom.filter(c=>c.id!==id);
  else if(!S.hidden.includes(id))S.hidden.push(id);
  delete S.p[id];delete S.edits[id];
  window._edit=null;save();render('dict');
}

/* ---------- backup ---------- */
function exportData(){
  const blob=new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='tous-les-jours-'+dayKey()+'.json';
  a.click();setTimeout(()=>URL.revokeObjectURL(a.href),3000);
}
function importData(input){
  const f=input.files&&input.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=()=>{
    try{
      const o=JSON.parse(r.result);
      if(!o||typeof o!=='object')throw 0;
      S=Object.assign({p:{},custom:[],inbox:[],edits:{},hidden:[],hist:{},streak:0,last:null,goal:12},o);
      save();render('dict');
      flash('io_msg','Restored '+(S.custom.length)+' of your own entries.',true);
    }catch(e){flash('io_msg',"That file isn't a Tous les jours backup.",false);}
  };
  r.readAsText(f);
}

/* ============================================================
   views
   ============================================================ */
function render(v,extra){
  window._view=v;
  document.querySelectorAll('.tlj-tabs button').forEach(b=>b.classList.toggle('on',b.dataset.go===v));
  const capBtn=document.querySelector('.tlj-tabs button[data-go=capture]');
  capBtn.innerHTML='Capture'+(S.inbox.length?`<span class="badge">${S.inbox.length}</span>`:'');
  const el=document.getElementById('view'),t=dayNum(),doneToday=S.hist[dayKey()]||0;
  const fl=document.getElementById('flame');
  fl.textContent=S.streak?`${S.streak} DAY${S.streak>1?'S':''} STRAIGHT`:'DAY 0';
  fl.className='flame'+(S.streak?'':' cold');

  /* ---------------- TODAY ---------------- */
  if(v==='home'){
    const d=deck();
    const dueN=d.filter(c=>{const p=prog(c.id);return p.n>0&&p.d<=t;}).length;
    const newN=d.filter(c=>prog(c.id).n===0).length;
    const pct=Math.min(100,Math.round(doneToday/S.goal*100));
    const pod=d[(t*7919)%d.length];
    el.innerHTML=`
      ${extra?`<div class="card rise" style="border-color:var(--ok);margin-bottom:14px">
        <p class="eyebrow" style="color:var(--ok)">Session done</p>
        <div class="fr sm">${extra.right}/${extra.done} first try.</div>
        <p class="en" style="margin:6px 0 0">Come back tomorrow — that's the whole trick.</p></div>`:''}
      <div class="card">
        <p class="eyebrow">Today</p>
        <div class="today"><b>${doneToday}</b><span>of ${S.goal} cards</span></div>
        <div class="meter"><i style="width:${pct}%"></i></div>
        <button class="btn" onclick="startSession()">${doneToday>=S.goal?'Keep going':"Start today's session"}</button>
        <div class="split">
          <div><b>${dueN}</b><small>due</small></div>
          <div><b>${newN}</b><small>unseen</small></div>
          <div><b>${d.length}</b><small>total</small></div>
        </div>
      </div>
      ${S.inbox.length?`<div class="card" style="margin-top:14px;border-left:2px solid var(--no)">
        <p class="eyebrow" style="color:var(--no)">Waiting in your inbox</p>
        <div class="fr sm">${S.inbox.length} phrase${S.inbox.length>1?'s':''} to define</div>
        <p class="en" style="margin:8px 0 14px">They won't show up in sessions until they have a meaning.</p>
        <button class="btn ghost" onclick="render('capture')">Define them</button></div>`:''}
      <div class="card" style="margin-top:14px">
        <p class="eyebrow">Phrase of the day — ${CATS[pod.cat]||'Mine'}</p>
        ${phraseBlock(pod,true)}
        <p class="en" style="margin-top:14px">${esc(pod.en)}</p>
        ${pod.note?`<p class="note">${esc(pod.note)}</p>`:''}
      </div>`;
  }

  /* ---------------- CAPTURE ---------------- */
  if(v==='capture'){
    const def=window._def?S.inbox.find(x=>x.id===window._def):null;
    const catOpts=(sel)=>Object.keys(CATS).map(k=>`<option value="${k}" ${sel===k?'selected':''}>${CATS[k]}</option>`).join('');
    el.innerHTML=`
      <h2 class="sec">Capture</h2>
      <p class="sub">Mid-conversation, dump it here and keep talking. Define it later when you have a minute.</p>

      <div class="card">
        <div class="field">
          <label>What did you hear?</label>
          <textarea id="cap_raw" rows="3" placeholder="t'inquiète&#10;j'suis crevée&#10;on se capte demain"></textarea>
          <span class="hint">Don't worry about spelling it right — you can fix it when you define it.</span>
        </div>
        <div class="field">
          <label>Where from (optional)</label>
          <input type="text" id="cap_ctx" placeholder="call tonight">
        </div>
        <label style="display:flex;gap:9px;align-items:center;font-size:13px;color:var(--muted);margin-bottom:14px">
          <input type="checkbox" id="cap_split" checked style="width:auto;accent-color:var(--accent)">
          Each line is a separate phrase
        </label>
        <button class="btn" onclick="capture()">Save to inbox</button>
        <p id="cap_msg" class="verdict ok hide"></p>
      </div>

      ${def?`
      <div class="card rise" style="margin-top:14px;border-color:var(--accent)">
        <p class="eyebrow" style="color:var(--accent)">Defining</p>
        <div class="field"><label>French</label><input type="text" id="d_fr" value="${esc(def.raw)}"></div>
        <div class="field"><label>What it means</label><input type="text" id="d_en" placeholder="don't worry"></div>
        <div class="field"><label>How it sounds</label>
          <input type="text" id="d_ph" placeholder="tan-KYET">
          <span class="hint">Split syllables with hyphens. Leave it blank and it gets flagged so you remember to ask her.</span></div>
        <div class="field"><label>Category</label><select id="d_cat">${catOpts('mine')}</select></div>
        <div class="field"><label>Note (optional)</label><input type="text" id="d_nt" placeholder="she says this when I over-apologise"></div>
        <div class="field"><label>Source</label><input type="text" id="d_src" value="${esc(def.ctx||'')}" placeholder="call, 12 Aug"></div>
        <div class="row">
          <button class="btn" onclick="saveDefined('${def.id}')">Add to dictionary</button>
          <button class="btn ghost" onclick="closeDefine()">Cancel</button>
        </div>
        <p id="d_msg" class="verdict no hide"></p>
      </div>`:''}

      ${S.inbox.length?`
      <div style="margin-top:22px">
        <p class="eyebrow">Inbox — ${S.inbox.length} waiting</p>
        ${S.inbox.slice().reverse().map(x=>`
          <div class="inbox">
            <div class="raw">${esc(x.raw)}</div>
            <div class="meta">${esc(x.ctx||'no source')} · ${nice(x.at)}</div>
            <div class="acts">
              <button class="btn sm" onclick="openDefine('${x.id}')">Define</button>
              <button class="btn sm ghost" onclick="say(${jq(x.raw)})">▶ Hear</button>
              <button class="btn sm ghost" onclick="dropInbox('${x.id}')">Discard</button>
            </div>
          </div>`).join('')}
      </div>`:`
      <p class="sub" style="margin-top:22px">Inbox is empty. Next time she says something you half-catch, put it here.</p>`}

      <div class="card" style="margin-top:22px">
        <p class="eyebrow">Or add one straight away</p>
        <div class="field"><label>French</label><input type="text" id="q_fr" placeholder="on se capte demain"></div>
        <div class="field"><label>What it means</label><input type="text" id="q_en" placeholder="we'll catch up tomorrow"></div>
        <div class="row" style="gap:10px">
          <div class="field" style="flex:1"><label>Sound</label><input type="text" id="q_ph" placeholder="on suh kapt duh-MAN"></div>
          <div class="field" style="flex:1"><label>Category</label><select id="q_cat">${catOpts('mine')}</select></div>
        </div>
        <div class="field"><label>Source (optional)</label><input type="text" id="q_src" placeholder="call, text, show…"></div>
        <button class="btn ghost" onclick="quickAdd()">Add to dictionary</button>
        <p id="q_msg" class="verdict no hide"></p>
      </div>`;
  }

  /* ---------------- DICTIONARY ---------------- */
  if(v==='dict'){
    const f=window._f||'all',q=window._q||'';
    const cats=['all','needs','mine',...Object.keys(CATS).filter(k=>k!=='mine')];
    const label=k=>k==='all'?'Everything':k==='needs'?'Needs sound':CATS[k];
    let items=deck();
    if(f==='needs')items=items.filter(noSound);
    else if(f!=='all')items=items.filter(c=>c.cat===f);
    if(f==='mine')items=deck().filter(c=>c.own);
    if(q){const n=norm(q);
      items=items.filter(c=>norm(c.fr).includes(n)||norm(c.en).includes(n)||norm(c.note||'').includes(n)||norm(c.src||'').includes(n));}
    const ed=window._edit?deck().find(c=>c.id===window._edit):null;
    const catOpts=sel=>Object.keys(CATS).map(k=>`<option value="${k}" ${sel===k?'selected':''}>${CATS[k]}</option>`).join('');
    const mineN=deck().filter(c=>c.own).length,needsN=deck().filter(noSound).length;

    el.innerHTML=`
      <h2 class="sec">Your dictionary</h2>
      <p class="sub">${deck().length} entries · ${mineN} you added${needsN?` · ${needsN} still need a pronunciation`:''}</p>
      <div class="field"><input type="text" id="q" placeholder="Search French, English, notes or source…" value="${esc(q)}"></div>
      <div class="filters">${cats.map(c=>
        `<button class="chip ${c==='needs'?'alert':''} ${f===c?'on':''}" onclick="window._f='${c}';render('dict')">${label(c)}</button>`).join('')}</div>

      ${ed?`
      <div class="card rise" style="margin-bottom:14px;border-color:var(--accent)">
        <p class="eyebrow" style="color:var(--accent)">Editing${ed.own?'':' — built-in phrase'}</p>
        <div class="field"><label>French</label><input type="text" id="e_fr" value="${esc(ed.fr)}"></div>
        <div class="field"><label>What it means</label><input type="text" id="e_en" value="${esc(ed.en)}"></div>
        <div class="field"><label>How it sounds</label><input type="text" id="e_ph" value="${esc(ed.phon)}" placeholder="syllables split by hyphens"></div>
        <div class="field"><label>Category</label><select id="e_cat">${catOpts(ed.cat)}</select></div>
        <div class="field"><label>Note</label><input type="text" id="e_nt" value="${esc(ed.note)}"></div>
        <div class="field"><label>Source</label><input type="text" id="e_src" value="${esc(ed.src)}"></div>
        <div class="row">
          <button class="btn" onclick="saveEdit('${ed.id}')">Save</button>
          <button class="btn ghost" onclick="window._edit=null;render('dict')">Cancel</button>
        </div>
        <div class="row" style="margin-top:9px">
          ${!ed.own&&S.edits[ed.id]?`<button class="btn ghost sm" style="width:100%" onclick="resetEdit('${ed.id}')">Undo my changes</button>`:''}
          <button class="btn ghost sm" style="width:100%;color:var(--no)" onclick="removeEntry('${ed.id}')">${ed.own?'Delete this entry':'Remove from deck'}</button>
        </div>
        <p id="e_msg" class="verdict no hide"></p>
      </div>`:''}

      <div class="card" id="list"></div>

      <div class="card" style="margin-top:14px">
        <p class="eyebrow">Backup</p>
        <p class="beatnote" style="margin-bottom:14px">Everything lives on this device. Export before you switch phones or reinstall.</p>
        <div class="row">
          <button class="btn ghost sm" style="width:100%" onclick="exportData()">Export a copy</button>
          <button class="btn ghost sm" style="width:100%" onclick="document.getElementById('io').click()">Restore from file</button>
        </div>
        <input type="file" id="io" accept="application/json" class="hide" onchange="importData(this)">
        <p id="io_msg" class="verdict ok hide"></p>
      </div>`;

    document.getElementById('list').innerHTML = items.length? items.map(c=>{
      const p=prog(c.id);
      const col=p.n===0?'var(--line)':p.b>=4?'var(--ok)':'var(--accent)';
      return `<div class="item">
        <span class="dot" style="background:${col}"></span>
        <div class="txt" onclick="openEdit('${c.id}')" style="cursor:pointer">
          <div class="f">${esc(c.fr)}</div>
          <div class="e">${esc(c.en)}</div>
          <div class="p ${noSound(c)?'missing':''}">${noSound(c)?'pronunciation missing':esc(c.phon)}${c.src?' · '+esc(c.src):''}</div>
        </div>
        <button class="spk" onclick="say(${jq(c.fr)})">▶</button>
      </div>`;}).join('')
      : `<p class="sub" style="margin:0">Nothing matches. ${q?'Try a shorter search.':'Add some from the Capture tab.'}</p>`;

    const qi=document.getElementById('q');
    qi.addEventListener('input',e=>{
      window._q=e.target.value;
      clearTimeout(window._qt);
      window._qt=setTimeout(()=>{const pos=e.target.selectionStart;render('dict');
        const n=document.getElementById('q');n.focus();n.setSelectionRange(pos,pos);},260);
    });
  }

  /* ---------------- PROGRESS ---------------- */
  if(v==='stats'){
    const d=deck(),seen=d.filter(c=>prog(c.id).n>0);
    const solid=d.filter(c=>prog(c.id).b>=2&&prog(c.id).b<4).length;
    const locked=d.filter(c=>prog(c.id).b>=4).length;
    const mine=d.filter(c=>c.own).length;
    const cells=[];
    for(let i=27;i>=0;i--){const n=S.hist[dayKey(t-i)]||0;cells.push(`<i class="${n===0?'':n>=S.goal?'b':'a'}"></i>`);}
    const total=Object.values(S.hist).reduce((a,b)=>a+b,0);
    el.innerHTML=`
      <h2 class="sec">Progress</h2>
      <p class="sub">Four weeks. Filled means you showed up.</p>
      <div class="card">
        <div class="grid28">${cells.join('')}</div>
        <p class="beatnote">Left is four weeks ago, right is today.</p>
        <div class="split" style="margin-top:16px">
          <div><b>${S.streak}</b><small>streak</small></div>
          <div><b>${seen.length}</b><small>started</small></div>
          <div><b>${locked}</b><small>locked in</small></div>
        </div>
        <div class="split" style="margin-top:10px">
          <div><b>${solid}</b><small>getting there</small></div>
          <div><b>${mine}</b><small>from her</small></div>
          <div><b>${total}</b><small>cards ever</small></div>
        </div>
      </div>
      <div class="card" style="margin-top:14px">
        <p class="eyebrow">Daily target</p>
        <select id="goal" onchange="S.goal=+this.value;save();render('stats')">
          ${[6,8,10,12,15,20].map(n=>`<option value="${n}" ${S.goal===n?'selected':''}>${n} cards a day</option>`).join('')}
        </select>
        <p class="beatnote" style="margin-top:12px">Pick a number you'd still do on a bad day. Ten minutes daily beats an hour on Sunday.</p>
      </div>`;
  }
}

document.querySelectorAll('.tlj-tabs button').forEach(b=>
  b.addEventListener('click',()=>{sess=null;window._def=null;window._edit=null;render(b.dataset.go);}));

(async()=>{
  const saved=await store.get();
  if(saved)S=Object.assign(S,saved);
  S.inbox=S.inbox||[];S.edits=S.edits||{};S.hidden=S.hidden||[];
  const k=dayKey(),t=dayNum();
  if(S.last&&S.last!==k&&S.last!==dayKey(t-1))S.streak=0;
  render('home');
})();
