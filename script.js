const universities = [
  { id:"nu", name:"Назарбаев Университет (НУ)", city:"Астана", mission:"Исследования и инновации мирового уровня", tuition:"0–3.5 млн ₸", languages:"английский", dorms:"да", internships:"междунар. партнёры" },
  { id:"kaznu", name:"КазНУ им. аль‑Фараби", city:"Алматы", mission:"Фундаментальная наука и образование", tuition:"0.8–1.8 млн ₸", languages:"казахский/русский", dorms:"да", internships:"научные лаборатории" },
  { id:"satbayev", name:"Satbayev University", city:"Алматы", mission:"Инженерия и горное дело", tuition:"1.0–2.0 млн ₸", languages:"казахский/русский/английский", dorms:"да", internships:"промышленность" },
  { id:"kbtu", name:"КБТУ", city:"Алматы", mission:"Нефтегаз, IT, бизнес", tuition:"1.5–2.5 млн ₸", languages:"казахский/русский/английский", dorms:"ограничено", internships:"энергетика/IT" },
  { id:"sdu", name:"СДУ им. С.Демиреля", city:"Алматы", mission:"IT и гуманитарные науки", tuition:"1.2–2.2 млн ₸", languages:"казахский/русский/английский", dorms:"да", internships:"IT и медиа" },
  { id:"kimep", name:"КИМЭП University", city:"Алматы", mission:"Бизнес, финансы, право", tuition:"2.0–3.0 млн ₸", languages:"английский", dorms:"да", internships:"бизнес‑партнёры" },
  { id:"aitu", name:"Astana IT University (AITU)", city:"Астана", mission:"Цифровые технологии и телеком", tuition:"1.2–2.2 млн ₸", languages:"казахский/русский/английский", dorms:"да", internships:"IT‑компании" },
  { id:"kaznaru", name:"КазНАИУ (Аграрно‑исслед.)", city:"Алматы", mission:"Аграрные и биотех. исследования", tuition:"0.8–1.6 млн ₸", languages:"казахский/русский", dorms:"да", internships:"агро‑холдинги" },
  { id:"women", name:"Казахский женский пед. университет", city:"Алматы", mission:"Педагогика и социальные науки", tuition:"0.7–1.4 млн ₸", languages:"казахский/русский", dorms:"да", internships:"школы/НКО" },
  { id:"buketov", name:"Карагандинский университет им. Букетова", city:"Караганда", mission:"Многопрофильный классический университет", tuition:"0.7–1.5 млн ₸", languages:"казахский/русский", dorms:"да", internships:"региональные партнёры" },
];

const programs = [
  { id:"p1", university:"Назарбаев Университет (НУ)", city:"Астана", field:"Computer Science", name:"Бакалавр CS", language:"английский", tuition:"3.5 млн ₸" },
  { id:"p2", university:"СДУ им. С.Демиреля", city:"Алматы", field:"Computer Science", name:"Бакалавр CS", language:"английский", tuition:"1.7 млн ₸" },
  { id:"p3", university:"КБТУ", city:"Алматы", field:"Computer Science", name:"Бакалавр CS", language:"английский", tuition:"2.2 млн ₸" },
  { id:"p4", university:"Astana IT University (AITU)", city:"Астана", field:"Computer Science", name:"Бакалавр IT", language:"казахский/русский/английский", tuition:"1.5 млн ₸" },
  { id:"p5", university:"КИМЭП University", city:"Алматы", field:"Business", name:"Бакалавр Бизнес‑администрирования", language:"английский", tuition:"2.6 млн ₸" },
  { id:"p6", university:"КазНУ им. аль‑Фараби", city:"Алматы", field:"Business", name:"Бакалавр Менеджмента", language:"казахский/русский", tuition:"1.2 млн ₸" },
  { id:"p7", university:"Satbayev University", city:"Алматы", field:"Engineering", name:"Бакалавр Мехатроника", language:"русский", tuition:"1.5 млн ₸" },
  { id:"p8", university:"КБТУ", city:"Алматы", field:"Engineering", name:"Бакалавр Нефтегаз", language:"русский/английский", tuition:"2.3 млн ₸" },
  { id:"p9", university:"КазНАИУ (Аграрно‑исслед.)", city:"Алматы", field:"Biology", name:"Бакалавр Агрономии", language:"казахский/русский", tuition:"1.1 млн ₸" },
  { id:"p10", university:"КазНУ им. аль‑Фараби", city:"Алматы", field:"Biology", name:"Бакалавр Биологии", language:"казахский/русский", tuition:"1.2 млн ₸" },
  { id:"p11", university:"Казахский женский пед. университет", city:"Алматы", field:"Education", name:"Бакалавр Педагогики", language:"казахский/русский", tuition:"0.9 млн ₸" },
  { id:"p12", university:"Карагандинский университет им. Букетова", city:"Караганда", field:"Social Sciences", name:"Бакалавр Социологии", language:"русский", tuition:"0.9 млн ₸" },
];

const partnerships = [
  { university:"Назарбаев Университет (НУ)", partner:"ETH Zurich", country:"Швейцария", programType:"обмен/исследования" },
  { university:"КИМЭП University", partner:"Seoul National University", country:"Южная Корея", programType:"обмен/бизнес" },
  { university:"СДУ им. С.Демиреля", partner:"Erasmus+ (ЕС)", country:"ЕС", programType:"обмен/IT" },
  { university:"Satbayev University", partner:"TU Munich", country:"Германия", programType:"обмен/инженерия" },
  { university:"КБТУ", partner:"Heriot‑Watt", country:"Великобритания", programType:"двойные дипломы" },
];

const scholarships = [
  { university:"Назарбаев Университет (НУ)", name:"Merit Scholarship", amount:"до полной", deadline:"01.03" },
  { university:"КИМЭП University", name:"Need‑based Aid", amount:"до 50%", deadline:"15.06" },
  { university:"КазНУ им. аль‑Фараби", name:"Государственные гранты", amount:"полная", deadline:"по гос. графику" },
  { university:"СДУ им. С.Демиреля", name:"Ректорская стипендия", amount:"до 100%", deadline:"30.06" },
];

const sections = ["home","about","programs","admissions","tour","international","compare"];
document.querySelectorAll("nav a").forEach(a=>{
  a.addEventListener("click", e=>{
    e.preventDefault();
    const target = a.getAttribute("data-target");
    document.querySelectorAll("nav a").forEach(x=>x.classList.remove("active"));
    a.classList.add("active");
    sections.forEach(id=>{
      document.getElementById(id).classList.toggle("active", id===target);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const popular = document.getElementById("popular");
popular.innerHTML = universities.slice(0,6).map(u=>`
  <div class="card">
    <div style="font-weight:600;">${u.name}</div>
    <div class="muted">${u.city} • ${u.mission}</div>
    <div class="hint">Языки: ${u.languages} • Общежития: ${u.dorms}</div>
  </div>
`).join("");

const searchInput = document.getElementById("search");
const clearSearch = document.getElementById("clearSearch");
const searchResults = document.getElementById("searchResults");
function renderSearch(q="") {
  const s = q.toLowerCase();
  const res = programs.filter(p =>
    p.name.toLowerCase().includes(s) || p.university.toLowerCase().includes(s) || p.field.toLowerCase().includes(s)
  ).slice(0,8);
  searchResults.innerHTML = res.map(r=>`
    <div class="card">
      <div style="font-weight:600;">${r.university}: ${r.name}</div>
      <div class="muted">${r.city} • ${r.field} • ${r.language}</div>
      <div class="hint">Стоимость: ${r.tuition}/год</div>
    </div>
  `).join("");
}
searchInput.addEventListener("input", e=> renderSearch(e.target.value));
clearSearch.addEventListener("click", ()=>{ searchInput.value=""; renderSearch(""); });

const aboutList = document.getElementById("aboutList");
aboutList.innerHTML = universities.map(u=>`
  <div class="card">
    <div style="font-weight:600;">${u.name}</div>
    <div class="muted">${u.city}</div>
    <div>Миссия: ${u.mission}</div>
    <div class="hint">Языки: ${u.languages} • Общежития: ${u.dorms}</div>
  </div>
`).join("");

const programList = document.getElementById("programList");
const filterCity = document.getElementById("filterCity");
const filterField = document.getElementById("filterField");
const filterLang = document.getElementById("filterLang");

function renderPrograms() {
  const city = filterCity.value || "";
  const field = filterField.value || "";
  const lang = filterLang.value || "";
  const res = programs.filter(p =>
    (!city || p.city===city) &&
    (!field || p.field===field) &&
    (!lang || p.language.toLowerCase().includes(lang.toLowerCase()))
  );
  programList.innerHTML = res.map(p=>`
    <div class="card">
      <div style="font-weight:600;">${p.university} — ${p.name}</div>
      <div class="muted">Город: ${p.city}</div>
      <div>Направление: ${p.field}</div>
      <div>Язык: ${p.language}</div>
      <div class="hint">Стоимость: ${p.tuition}/год</div>
    </div>
  `).join("");
}
[filterCity, filterField, filterLang].forEach(el=> el.addEventListener("change", renderPrograms));
renderPrograms();

const scholarList = document.getElementById("scholarList");
scholarList.innerHTML = scholarships.map(s=>`
  <div class="card">
    <div style="font-weight:600;">${s.university}</div>
    <div>${s.name} • ${s.amount}</div>
    <div class="hint">Дедлайн: ${s.deadline}</div>
  </div>
`).join("");

const partnerList = document.getElementById("partnerList");
partnerList.innerHTML = partnerships.map(p=>`
  <div class="card">
    <div style="font-weight:600;">${p.university}</div>
    <div>Партнёр: ${p.partner} (${p.country})</div>
    <div class="hint">Тип: ${p.programType}</div>
  </div>
`).join("");

const cmpA = document.getElementById("cmpA");
const cmpB = document.getElementById("cmpB");
const cmpC = document.getElementById("cmpC");
[cmpA, cmpB, cmpC].forEach(sel=>{
  sel.innerHTML = universities.map(u=>`<option value="${u.id}">${u.name}</option>`).join("");
});
cmpA.value = "nu"; cmpB.value = "kimep"; cmpC.value = "kbtu";

const compareBody = document.getElementById("compareBody");
function renderCompare() {
  const a = universities.find(u=>u.id===cmpA.value);
  const b = universities.find(u=>u.id===cmpB.value);
  const c = universities.find(u=>u.id===cmpC.value);
  const rows = [
    { label:"Город", key:"city" },
    { label:"Стоимость (год)", key:"tuition" },
    { label:"Языки обучения", key:"languages" },
    { label:"Общежития", key:"dorms" },
    { label:"Стажировки/партнёры", key:"internships" },
  ];
  compareBody.innerHTML = rows.map(r=>`
    <tr>
      <td>${r.label}</td>
      <td>${a[r.key]}</td>
      <td>${b[r.key]}</td>
      <td>${c[r.key]}</td>
    </tr>
  `).join("");
}
renderCompare();
document.getElementById("updateCmp").addEventListener("click", renderCompare);

const chat = document.getElementById("chat");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

function addMsg(role, text) {
  const div = document.createElement("div");
  div.className = "bubble " + role;
  div.innerHTML = (role==="assistant" ? "ИИ: " : "Вы: ") + text.replace(/\n/g, '<br>');
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
addMsg("assistant", "Я помогу выбрать вуз, найти программы, дедлайны. Попробуйте спросить о чем угодно, используя Wikipedia!");


sendBtn.addEventListener("click", async ()=>{
  const q = chatInput.value.trim();
  if (q) {
    addMsg("user", q);
    const response = await routeIntent(q);
    addMsg("assistant", response);
    chatInput.value = "";
  }
});
chatInput.addEventListener("keypress", (e)=>{
  if (e.key === "Enter") sendBtn.click();
});

async function fetchWikipediaInfo(query) {
    const searchQueries = [query];
    
    if (query.toLowerCase() === 'icpc') {
        searchQueries.push('International Collegiate Programming Contest');
    }
    if (searchQueries.length === 1 && searchQueries[0].includes('(')) {
        searchQueries.push(searchQueries[0].split('(')[0].trim());
    }

    for (const q of searchQueries) {
        const apiUrl = `https://ru.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`;

        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                if (data.extract) {
                    return {
                        title: data.title,
                        extract: data.extract
                    };
                }
            }
        } catch (error) {
            console.error(`Ошибка при получении данных с Википедии для "${q}":`, error);
        }
    }
    
    return null;
}


async function routeIntent(q) {
  const s = q.toLowerCase();

  if (s.includes("програм") || s.includes("бакалавр") || s.includes("магистр")) {
    const city = s.includes("алматы") ? "Алматы" : (s.includes("астана") || s.includes("нур-султан")) ? "Астана" : "";
    const field = s.includes("cs") || s.includes("ит") || s.includes("информ") ? "Computer Science" :
                  s.includes("бизнес") || s.includes("менедж") ? "Business" :
                  s.includes("инжен") ? "Engineering" :
                  s.includes("биолог") ? "Biology" :
                  s.includes("педагог") ? "Education" :
                  s.includes("социолог") ? "Social Sciences" : "";
    const lang = s.includes("англ") ? "английский" : s.includes("рус") ? "русский" : s.includes("каз") ? "казахский" : "";

    const filtered = programs.filter(p =>
      (!city || p.city===city) && (!field || p.field===field) && (!lang || p.language.toLowerCase().includes(lang))
    ).slice(0,6);

    if (filtered.length > 0) {
      return "Нашёл программы:\n" + filtered.map(p=>`• ${p.university}: ${p.name} (${p.field}), язык: ${p.language}, стоимость: ${p.tuition}/год`).join("\n");
    }
    return "Не нашёл подходящих программ. Уточните город, направление и язык обучения.";
  }

  if (s.includes("сравни") || s.includes("compare") || s.includes("какой лучше")) {
    const pick = ["Назарбаев Университет (НУ)","КИМЭП University","КБТУ"].map(name=>{
      const u = universities.find(x=>x.name===name);
      return u ? `• ${u.name}: стоимость ~${u.tuition}, языки: ${u.languages}, общежития: ${u.dorms}, стажировки: ${u.internships}` : null;
    }).filter(Boolean).join("\n");
    return "Сводное сравнение:\n" + pick + "\nОткройте раздел «Сравнение» для полной таблицы.";
  }

  if (s.includes("подхожу") || s.includes("eligible") || s.includes("поступ") || s.includes("требования") || s.includes("гранты")) {
    const minGpa = 3.0, minIelts = 6.5;
    return `Базовые требования: GPA ≥ ${minGpa}, IELTS ≥ ${minIelts} для англоязычных программ. Проверьте точные критерии в разделе «Поступление».`;
  }

  if (s.includes("тур") || s.includes("проведи") || s.includes("лаборатори") || s.includes("библиотек")) {
    return "Открываю 3D‑тур: зайдите в раздел «3D‑тур». Голосовое управление отключено.";
  }
  
  let topic = q;
  const generalQueryKeywords = ["что такое", "кто такой", "определение", "расскажи о", "история", "когда был", "что это", "что такое", "кто это", "что за", "об"];
  generalQueryKeywords.forEach(keyword => {
      topic = topic.replace(new RegExp(`\\b${keyword}\\b`, 'gi'), '');
  });
  topic = topic.trim();
  
  if (topic.length <= 1) {
      topic = q.trim();
  } else if (topic.toLowerCase().startsWith('icpc')) {
      topic = 'ICPC';
  }


  const wikiData = await fetchWikipediaInfo(topic); 

  if (wikiData) {
       return `[Wikipedia] **${wikiData.title}**: ${wikiData.extract}<br>Источник: Wikipedia (ru.wikipedia.org)`;
  } else {
       const displayedTopic = topic.length > 50 ? topic.substring(0, 50) + '...' : topic;
       
       return `[Wikipedia] **${displayedTopic.charAt(0).toUpperCase() + displayedTopic.slice(1)}**: Не удалось найти точную статью по этому запросу в русской Wikipedia. Пожалуйста, попробуйте уточнить запрос или ввести другое ключевое слово.`;
  }
}
