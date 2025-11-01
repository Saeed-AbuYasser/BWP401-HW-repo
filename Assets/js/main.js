/* 
   Dear Phd, I had started searching for real events to fill in that data, but it look so boring and time-consuming,
   so I just filled in some random data (specially dates and places). I hope you don't mind.
*/

const eventsData = [
  // cultural
  { id: 'c1', category:'cultural', name:'جرة الغاز', image:'Assets/img/cultural-1.jpg', city:'Damascus', date:'2025-11-02', place:'', classification:'cultural', description:'This topic is larger than being described', story:'if you’re a syrian, you absolutely know it.', startedYear:2011, exclusive:false },
  { id: 'c2', category:'cultural', name:'اجت الكهربا', image:'Assets/img/cultural-2.jpg', city:'Damascus', date:'2025-10-15', place:'', classification:'cultural', description:'This topic is larger than being described', story:'if you’re a syrian, you absolutely know it.', startedYear:2011, exclusive:true },
  { id: 'c3', category:'cultural', name:'بقبلش', image:'Assets/img/cultural-3.png', city:'Damascus', date:'2025-09-28', place:'', classification:'cultural', description:'This topic is larger than being described', story:'if you’re a syrian, you absolutely know it.', startedYear:2025, exclusive:false },
  { id: 'c4', category:'cultural', name:'ادين و صروف ولا تعتاز حدا', image:'Assets/img/cultural-4.jpg', city:'Damascus', date:'2025-11-21', place:'', classification:'cultural', description:'This topic is larger than being described', story:'if you’re a syrian, you absolutely know it.', startedYear:2011, exclusive:false },
  { id: 'c5', category:'cultural', name:'اقليم الساحل', image:'Assets/img/cultural-5.jpg', city:'Damascus', date:'2025-12-05', place:'', classification:'cultural', description:'This topic is larger than being described', story:'if you’re a syrian, you absolutely know it.', startedYear:2025, exclusive:true },

  // sportive
  { id: 's1', category:'sportive', name:'DCT', image:'Assets/img/sport-1.jpg', city:'Damascus', date:'2025-11-22', place:'Kafr Souseh', classification:'sportive', description:'Damascus Cycling Tour', story:'Launched in 2015, this cycling tour showcases the natural beauty surrounding Damascus. Cyclists navigate through mountain paths and valleys, enjoying breathtaking views of the city.', startedYear:2012, exclusive:false },
  { id: 's2', category:'sportive', name:'ADM', image:'Assets/img/sport-2.jpg', city:'Damascus', date:'2025-11-09', place:'Old City', classification:'sportive', description:'Annual Damascene Marathon', story:'The Damascus Marathon takes runners through the city’s most iconic landmarks. The route passes by the Umayyad Mosque, historic gates, and modern neighborhoods, celebrating both heritage and athleticism.', startedYear:2012, exclusive:true },
  { id: 's3', category:'sportive', name:'DBLF', image:'Assets/img/sport-3.jpg', city:'Damascus', date:'2025-10-22', place:'Zamalka', classification:'sportive', description:'Damascus Basketball League Finals', story:'The Damascus Basketball League was established in 1985 and has grown into one of the region’s most competitive leagues. The finals draw thousands of passionate fans each year.', startedYear:1913, exclusive:false },
  { id: 's4', category:'sportive', name:'FY Cup', image:'Assets/img/sport-4.jpg', city:'Damascus', date:'2025-09-10', place:'Equestrian Club', classification:'sportive', description:'Football Youth Cup', story:'This championship has been nurturing young football talent since 2008. Teams from across Damascus compete in this month-long tournament that has produced several national team players.', startedYear:1965, exclusive:false },
  { id: 's5', category:'sportive', name:'TWT', image:'Assets/img/sport-5.jpg', city:'Damascus', date:'2025-12-01', place:'Yafour', classification:'sportive', description:'Traditional Wrestling Tournament', story:'This tournament preserves the ancient sport of traditional wrestling in Syria. Started in 1998, it honors the country’s wrestling heritage while providing a platform for modern athletes.', startedYear:1998, exclusive:true },

  // competitive-championship
  { id: 'm1', category:'competitive-championship', name:'SCPC', image:'Assets/img/cch-1.jpg', city:'Damascus', date:'2025-9-13', place:'Damascus University', classification:'competitive-championship', description:'Syrian Collegiate Programming Contest', story:'The Syrian Collegiate Programming Contest (SCPC) is an annual, multi-tiered competitive programming competition for university students in Syria, serving as a qualifier for the larger Arab Collegiate Programming Contest (ACPC). It operates under the auspices of the ICPC Foundation and the Syrian Computer Society (SCS).', startedYear:2011, exclusive:false },
  { id: 'm2', category:'competitive-championship', name:'SSO', image:'Assets/img/cch-2.jpg', city:'Damascus', date:'2025-10-25', place:'I don’t know', classification:'competitive-championship', description:'Syrian Science Olympiad', story:'The Syrian Science Olympiad is a national competition for pre-university students in math, physics, chemistry, biology, and informatics. Organized by the Syrian Excellence and Creativity Authority, the program identifies and trains top students to represent Syria in international competitions.', startedYear:2014, exclusive:false },
  { id: 'm3', category:'competitive-championship', name:'ARC', image:'Assets/img/cch-3.jpg', city:'Damascus', date:'2025-11-30', place:'I don’t know', classification:'competitive-championship', description:'Annual Robotic Competition', story:'An annual robotics championship using Arduino microcontrollers is held in Syria and Lebanon in cooperation between Cera Robo Robotics Company in Syria and Kalimat Association.', startedYear:2015, exclusive:true },
  { id: 'm4', category:'competitive-championship', name:'Blue Seed', image:'Assets/img/cch-4.jpg', city:'Damascus', date:'2025-10-03', place:'I don’t know', classification:'competitive-championship', description:'The Blue Seed Art Contest', story:'A UNICEF Syria World Children’s Day initiative (20 November) that uses art to amplify children’s voices and spotlight practical steps adults can take to fulfil children’s rights—so every seed can grow. Entries will feed into a child-led Blue Seed Garden exhibition and advocacy event on 20 November', startedYear:2011, exclusive:false },

  // familial
  { id: 'f1', category:'familial', name:'בנימין נתניהו', image:'Assets/img/family-1.png', city:'Damascus', date:'2025-10-05', place:'', classification:'familial', description:'Peter', story:'داق خلقي، مو حاج بقى. خلص الباقي رح حطو بس منظر', startedYear:2013, exclusive:false },
  { id: 'f2', category:'familial', name:'יוַּב גלאנְט', image:'Assets/img/family-2.jpg', city:'Damascus', date:'2025-10-20', place:'', classification:'familial', description:'Stewie', story:'!No Stories Any More!', startedYear:2016, exclusive:false },
  { id: 'f3', category:'familial', name:'בְּצַלְאֵל סְמוֹטְרִיץ’', image:'Assets/img/family-3.png', city:'Damascus', date:'2025-11-16', place:'', classification:'familial', description:'Meg', story:'!No Stories Any More!', startedYear:2018, exclusive:true },
  { id: 'f4', category:'familial', name:'אוֹפִיר סוֹפֵר', image:'Assets/img/family-4.jpg', city:'Damascus', date:'2025-09-25', place:'', classification:'familial', description:'Lois', story:'!No Stories Any More!', startedYear:2014, exclusive:false },
  { id: 'f5', category:'familial', name:'מיקי זֹהַר', image:'Assets/img/family-5.png', city:'Damascus', date:'2025-12-20', place:'', classification:'familial', description:'Brian', story:'!No Stories Any More!', startedYear:2017, exclusive:true }
];

function parseDate(d){ return new Date(d + 'T00:00:00'); }
function today(){ const t = new Date(); t.setHours(0,0,0,0); return t; }

function renderExclusiveCarousel(){
  const exclusive = eventsData.filter(e => e.exclusive).slice(0,6);
  const container = document.getElementById('exclusiveCarouselInner');
  if(!container) return;
  container.innerHTML = exclusive.map((e,i)=>`
    <div class="carousel-item ${i===0?'active':''}">
      <div class="row g-0 align-items-center">
        <div class="col-md-5">
          <img src="${e.image}" class="d-block w-100" alt="${e.name}">
        </div>
        <div class="col-md-7 p-4">
          <h4>${e.name} <span class="badge bg-warning text-dark ms-2">${e.classification}</span></h4>
          <p class="mb-1 text-muted">${e.place} • ${e.city} • ${e.date}</p>
          <p>${e.description}</p>
          <a class="btn btn-sm btn-primary" href="event.html?id=${e.id}">Details</a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderLatestEvents(){
  const container = document.getElementById('latestEventsGrid');
  if(!container) return;
  const sorted = eventsData.slice().sort((a,b)=> parseDate(b.date)-parseDate(a.date)).slice(0,8);
  container.innerHTML = sorted.map(e=>`
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card event-card h-100">
        <img src="${e.image}" class="card-img-top" alt="${e.name}">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
          <p class="mb-1 text-muted"><small>${e.place} • ${e.city}</small></p>
          <p class="mb-1"><strong>${e.date}</strong></p>
          <p class="mb-2 text-truncate">${e.description}</p>
          <span class="badge bg-primary badge-category">${e.classification}</span>
          <a class="btn btn-sm btn-outline-secondary float-end" href="event.html?id=${e.id}">Details</a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderEventsGrid(filtered){
  const container = document.getElementById('eventsGrid');
  if(!container) return;
  container.innerHTML = (filtered||eventsData).map(e=>`
    <div class="col-md-6">
      <div class="card event-card">
        <div class="row g-0">
          <div class="col-5">
            <img src="${e.image}" alt="${e.name}">
          </div>
          <div class="col-7">
            <div class="card-body">
              <h5 class="card-title">${e.name} <span class="badge bg-secondary">${e.classification}</span></h5>
              <p class="text-muted mb-1">${e.city}</p>
              <p class="mb-1"><strong>${e.date}</strong> • <small>${e.place}</small></p>
              <p class="small text-muted text-truncate">${e.description}</p>
              <a class="btn btn-sm btn-primary mt-2" href="event.html?id=${e.id}">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function populateCityFilter(){
  const select = document.getElementById('filterCity');
  if(!select) return;
  const cities = Array.from(new Set(eventsData.map(e=>e.city))).sort();
  select.innerHTML = `<option value="">All cities</option>` + cities.map(c=>`<option value="${c}">${c}</option>`).join('');
}

function applyFilters(){
  const cat = document.getElementById('filterCategory')?.value || '';
  const city = document.getElementById('filterCity')?.value || '';
  const when = document.getElementById('filterTime')?.value || '';
  const txt = document.getElementById('filterText')?.value?.toLowerCase()||'';

  let filtered = eventsData.slice();

  if(cat) filtered = filtered.filter(e=>e.category === cat);
  if(city) filtered = filtered.filter(e=>e.city === city);
  if(when==='upcoming') filtered = filtered.filter(e => parseDate(e.date) >= today());
  if(when==='past') filtered = filtered.filter(e => parseDate(e.date) < today());
  if(txt) filtered = filtered.filter(e => (e.name + ' ' + e.description + ' ' + e.place).toLowerCase().includes(txt));

  renderEventsGrid(filtered);
  const count = document.getElementById('resultsCount');
  if(count) count.innerText = `${filtered.length} result(s)`;
}



function getQueryParam(key){
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function renderEventDetails(){
  const id = getQueryParam('id');
  const container = document.getElementById('eventDetail');
  if(!container) return;

  if(!id){
    container.innerHTML = `<div class="alert alert-info">No event selected. Use the search box above or return to <a href="events.html">events list</a>.</div>`;
    return;
  }
  const ev = eventsData.find(e => e.id === id);
  if(!ev){
    container.innerHTML = `<div class="alert alert-warning">Event not found.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-5">
        <div class="hero">
          <img src="${ev.image}" alt="${ev.name}" class="w-100">
        </div>
      </div>
      <div class="col-lg-7">
        <h2>${ev.name} <span class="badge bg-warning text-dark ms-2">${ev.classification}</span></h2>
        <p class="text-muted">${ev.place} • ${ev.city} • <strong>${ev.date}</strong></p>
        <p>${ev.description}</p>
        <h6>About this event</h6>
        <p>${ev.story}</p>
        <p><strong>Started:</strong> ${ev.startedYear}</p>
        <div class="mt-3">
          <a class="btn btn-primary" href="events.html">Back to events</a>
        </div>
      </div>
    </div>
  `;
  renderRelevantEvents(ev);
}

function renderRelevantEvents(current){
  const relTarget = document.getElementById('relevantEvents');
  if(!relTarget) return;
  const relevant = eventsData.filter(e=> e.category === current.category && e.id !== current.id).slice(0,4);
  relTarget.innerHTML = relevant.map(e=>`
    <div class="col-sm-6 col-md-3">
      <div class="card event-card h-100">
        <img src="${e.image}" class="card-img-top" alt="${e.name}">
        <div class="card-body">
          <h6 class="card-title">${e.name}</h6>
          <p class="mb-1 text-muted">${e.place}</p>
          <p class="mb-1"><small>${e.date}</small></p>
          <a class="btn btn-sm btn-outline-secondary" href="event.html?id=${e.id}">View</a>
        </div>
      </div>
    </div>
  `).join('');
}


function initIndex(){
  renderExclusiveCarousel();
  renderLatestEvents();
}

function initEventsPage(){
  populateCityFilter();
  renderEventsGrid();
  applyFilters();

  document.getElementById('filterCategory')?.addEventListener('change', applyFilters);
  document.getElementById('filterCity')?.addEventListener('change', applyFilters);
  document.getElementById('filterTime')?.addEventListener('change', applyFilters);
  document.getElementById('filterText')?.addEventListener('input', applyFilters);
  document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.getElementById('filterCategory').value='';
    document.getElementById('filterCity').value='';
    document.getElementById('filterTime').value='';
    document.getElementById('filterText').value='';
    applyFilters();
  });
}

function initEventPage(){
  document.getElementById('eventSearchBtn')?.addEventListener('click', ()=>{
    const q = document.getElementById('eventSearchBox').value.trim().toLowerCase();
    if(!q) { alert('Enter event name to search'); return; }
    const found = eventsData.find(e=> e.name.toLowerCase().includes(q));
    if(found){
      window.location.href = `event.html?id=${found.id}`;
    } else {
      alert('No matching event found.');
    }
  });
  renderEventDetails();
}

function initContact(){
  const sendBtn = document.getElementById('sendBtn');
  const resetBtn = document.getElementById('resetBtn');
  const alertPlaceholder = document.getElementById('alertPlaceholder');

  function showAlert(message, type='success'){
    alertPlaceholder.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  }

  sendBtn?.addEventListener('click', ()=>{
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if(!name || !email || !message){
      showAlert('Please complete all fields before sending.', 'danger'); return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
      showAlert('Please enter a valid email address.', 'danger'); return;
    }

    // Simulate success, of course I'm not going to send messages to myself :)
    showAlert('Your message was sent successfully. Thank you!', 'success');

    document.getElementById('contactForm').reset();
  });

  resetBtn?.addEventListener('click', ()=>{
    alertPlaceholder.innerHTML = '';
  });
}

document.addEventListener('DOMContentLoaded', ()=>{

  if(document.getElementById('exclusiveCarouselInner')) initIndex();
  if(document.getElementById('eventsGrid')) initEventsPage();
  if(document.getElementById('eventDetail')) initEventPage();
  if(document.getElementById('contactForm')) initContact();
});



