/* ============================================================
   LE VESPA — Application JavaScript
   ============================================================ */

// ---- Allergen Reference ----
const ALLERGENS = {
  1:  { icon: '🌾', name: 'Gluten' },
  2:  { icon: '🦐', name: 'Crustacés' },
  3:  { icon: '🥚', name: 'Œufs' },
  4:  { icon: '🐟', name: 'Poisson' },
  5:  { icon: '🥜', name: 'Arachides' },
  6:  { icon: '🫘', name: 'Soja' },
  7:  { icon: '🥛', name: 'Lait' },
  8:  { icon: '🌰', name: 'Fruits à coque' },
  9:  { icon: '🌿', name: 'Céleri' },
  10: { icon: '🌻', name: 'Moutarde' },
  11: { icon: '⬜', name: 'Sésame' },
  12: { icon: '🍷', name: 'Sulfites' },
  13: { icon: '🌱', name: 'Lupin' },
  14: { icon: '🐚', name: 'Mollusques' }
};

// ---- Gradient visuals for each dish type ----
const GRADIENTS = {
  tomato:      'linear-gradient(145deg,#4a0e0e 0%,#8b1e1e 40%,#c94a3a 70%,#e07060 100%)',
  'tomato-meat':'linear-gradient(145deg,#3a1505 0%,#6b2a10 40%,#a04828 70%,#c87060 100%)',
  cream:       'linear-gradient(145deg,#2a1e08 0%,#5a4015 40%,#9a7030 70%,#c8a860 100%)',
  verde:       'linear-gradient(145deg,#082010 0%,#155025 40%,#2a8040 70%,#50aa65 100%)',
  med:         'linear-gradient(145deg,#081528 0%,#103060 40%,#2060a0 70%,#40a0d0 100%)',
  pesto:       'linear-gradient(145deg,#101a08 0%,#285015 40%,#508030 70%,#80b050 100%)',
  gorg:        'linear-gradient(145deg,#141a10 0%,#2a3820 40%,#4a6030 70%,#80a050 100%)',
  carbonara:   'linear-gradient(145deg,#201505 0%,#503010 40%,#906020 70%,#c09045 100%)',
  salmon:      'linear-gradient(145deg,#2a0e08 0%,#602820 40%,#a05848 70%,#d09080 100%)',
  truffle:     'linear-gradient(145deg,#100a00 0%,#301e08 40%,#504030 70%,#706050 100%)',
  seafood:     'linear-gradient(145deg,#040e28 0%,#0c2a5a 40%,#1a559a 70%,#3a85cc 100%)',
  special:     'linear-gradient(145deg,#120818 0%,#2a1040 40%,#5a3080 70%,#9060b0 100%)',
  dessert:     'linear-gradient(145deg,#200808 0%,#501520 40%,#8a2a40 70%,#c06070 100%)'
};

// ---- Menu Data ----
const MENU_DATA = {
  pasta: {
    label: 'Pasta & Basta',
    tagline: '"La pasta è vita — La pâte, c\'est la vie"',
    items: [
      { id:'p1',  name:'Penne Napolitaine ou Arrabbiata', desc:'Sauce tomate maison, origan, basilic frais. Avec ou sans piment selon votre envie.', price:12.50, allergens:[1], gradient:'tomato', badge:'Végétarien', badgeType:'vege' },
      { id:'p2',  name:'Penne Amatriciana', desc:'Sauce napolitaine maison, lardons fumés, piment rouge. Le goût de Rome dans votre assiette.', price:13.00, allergens:[1], gradient:'tomato-meat' },
      { id:'p3',  name:'Penne Broccoli', desc:'Brocolis croquants, huile d\'olive extra-vierge, ail rôti, piment, guanciale croustillant.', price:13.50, allergens:[1], gradient:'verde' },
      { id:'p4',  name:'Penne Caccio é Pépé', desc:'Crème fraîche, poivre noir concassé généreux, pecorino romano affiné, persil frais. La grande tradition romaine.', price:13.80, allergens:[1,7], gradient:'cream', badge:'Végétarien', badgeType:'vege' },
      { id:'p5',  name:'Penne Del Sole', desc:'Légumes du soleil, huile d\'olive, olives noires, câpres, ail, persil. La Méditerranée en assiette.', price:14.00, allergens:[1], gradient:'med', badge:'Végétarien', badgeType:'vege' },
      { id:'p6',  name:'Penne Carciofi', desc:'Artichaut à la romana, lardons fumés, sauce napolitaine maison, persil frais.', price:14.80, allergens:[1], gradient:'tomato-meat' },
      { id:'p7',  name:'Penne Pesto & sa Burrata', desc:'Crème, pesto de basilic frais, pignons de pin torréfiés, piment d\'Espelette, basilic — couronné d\'une burrata fondante.', price:17.50, allergens:[1,7,8], gradient:'pesto', badge:'Végétarien', badgeType:'vege' },
      { id:'p8',  name:'Penne Gorgonzola', desc:'Gorgonzola DOP fondant, crème fraîche, pistaches concassées. Un accord audacieux et profond.', price:17.80, allergens:[1,7,8], gradient:'gorg', badge:'Végétarien', badgeType:'vege' },
      { id:'p9',  name:'Linguine Carpasio', desc:'Huile d\'olive pressée à froid, tomates cerises fraîches et séchées, dés d\'asiago affiné. Simple et remarquable.', price:14.80, allergens:[1,7], gradient:'tomato', badge:'Végétarien', badgeType:'vege' },
      { id:'p10', name:'Linguine Carbonara Pomodoro', desc:'Jaune d\'œuf fermier, crème fraîche, parmesan 24 mois, tomates cerises fraîches et séchées, persil. La carbonara revisitée.', price:17.00, allergens:[1,3,7], gradient:'carbonara' },
      { id:'p11', name:'Linguine Carbonara à l\'Italienne', desc:'Jaune d\'œuf, guanciale affiné, parmesan 24 mois, poivre noir concassé, persil. La recette authentique romaine.', price:17.00, allergens:[1,3,7], gradient:'carbonara' },
      { id:'p12', name:'Linguine Carbonara au Chorizo', desc:'Jaune d\'œuf, crème, chorizo ibérique, parmesan, persil. Du caractère dans chaque bouchée.', price:17.00, allergens:[1,3,7], gradient:'carbonara' },
      { id:'p13', name:'Linguine Carbonara Bressane', desc:'Jaune d\'œuf, crème fraîche, lardons de la Bresse, parmesan 24 mois, persil frais. Notre hommage au terroir local.', price:17.00, allergens:[1,3,7], gradient:'carbonara', badge:'Notre région', badgeType:'chef' },
      { id:'p14', name:'Linguine Al Limone', desc:'Citron frais, saumon fumé, beurre demi-sel, vodka, poivre concassé, crème fouettée maison. Élégant et vif.', price:17.80, allergens:[1,4,7], gradient:'salmon', badge:'Chef\'s pick', badgeType:'chef' },
      { id:'p15', name:'Linguine Tartufo', desc:'Pesto de truffes noires, crème fraîche onctueuse, copeaux de parmesan 24 mois. Le luxe discret.', price:18.00, allergens:[1,7,8], gradient:'truffle', badge:'Premium', badgeType:'chef' }
    ]
  },
  ravioli: {
    label: 'Ravioli & Compagnie',
    tagline: '"Fatto a mano ogni giorno — Fait à la main chaque jour"',
    items: [
      { id:'r1', name:'Gnochi Spinaci', desc:'Gnocchis maison généreux, crème d\'épinard onctueuse, chorizo fondant, cerneaux de noix grillés.', price:16.80, allergens:[8], gradient:'verde' },
      { id:'r2', name:'Gratin de Raviolini au Poulet', desc:'Raviolini gratinés au four, crème de moutarde à l\'ancienne, échalotes fondantes. Réconfort absolu.', price:17.50, allergens:[1,3,10], gradient:'cream' },
      { id:'r3', name:'Ravioli Bœuf Braisé', desc:'Ravioli farcis au bœuf longuement braisé, sauce napolitaine maison, aubergines rôties, dés d\'asiago.', price:18.00, allergens:[1,3], gradient:'tomato-meat' },
      { id:'r4', name:'Tortelli Végé', desc:'Tortelli aux légumes du moment, sauce napolitaine, crème fraîche, brocolis al dente, dés d\'asiago fondants.', price:18.00, allergens:[1,3,7], gradient:'verde', badge:'Végétarien', badgeType:'vege' },
      { id:'r5', name:'Le Vespa', desc:'La création signature du Chef, changeante au gré de l\'humeur et des saisons. Une surprise garantie — interrogez notre équipe.', price:19.50, allergens:[1,3], gradient:'special', badge:'Signature', badgeType:'chef' },
      { id:'r6', name:'Malfatti au St-Jacques', desc:'Malfatti frais pétris ici, crème légère, pesto d\'agrumes vif, chorizo croustillant, noix de Saint-Jacques poêlées.', price:21.00, allergens:[1,3,14], gradient:'seafood', badge:'Coup de cœur', badgeType:'chef' }
    ]
  },
  risotto: {
    label: 'Risotto',
    tagline: '"Qui va piano va sano — Lentement mais sûrement"',
    items: [
      { id:'ri1', name:'Risotto Verde', desc:'Carnaroli mantecato, mascarpone crémeux, épinards frais, copeaux de parmesan 24 mois, cerneaux de noix torréfiés. Profond et végétal.', price:17.00, allergens:[7,8], gradient:'verde', badge:'Végétarien', badgeType:'vege' },
      { id:'ri2', name:'Risotto Selon l\'Humeur du Chef', desc:'La création du jour, composée selon l\'arrivage du marché et l\'inspiration du moment. Interrogez notre équipe pour la composition du jour.', price:18.50, allergens:[1,2,4,5,7,8,9,14], gradient:'special', badge:'Créatif', badgeType:'chef' }
    ]
  },
  desserts: {
    label: 'Dolcetissime',
    tagline: '"La dolce vita comincia qui — La belle vie commence ici"',
    items: [
      { id:'d1', name:'Dessert Maison du Jour', desc:'La création du moment — tiramisu, panna cotta, fondant au chocolat ou tarte maison. Laissez-vous surprendre par notre équipe.', price:7.80, allergens:[1,3,7,8], gradient:'dessert', badge:'Fait maison', badgeType:'chef' }
    ]
  }
};

// ---- State ----
const state = {
  currentCat: 'pasta',
  selectedDate: null,
  selectedCovers: 2,
  selectedSlot: null,
  resaStep: 1,
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth()
};

// ---- DOM refs ----
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ============================================================
// NAVIGATION
// ============================================================
function initNav() {
  const navbar = $('navbar');
  const hamburger = $('hamburger');
  const mobileOverlay = $('mobile-overlay');
  const mobileClose = $('mobile-close');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
  });
  mobileClose.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', e => {
    if (e.target === mobileOverlay) closeMobileMenu();
  });

  // Mobile links close menu on click
  $$('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = $$('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
}

function closeMobileMenu() {
  $('hamburger').classList.remove('open');
  $('mobile-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// MENU
// ============================================================
function initMenu() {
  const tabs = $$('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentCat = tab.dataset.cat;
      renderMenuGrid();
    });
  });
  renderMenuGrid();
}

function renderMenuGrid() {
  const grid = $('menu-grid');
  const taglineEl = $('cat-tagline');
  const noteEl = $('menu-note-pasta');
  const cat = MENU_DATA[state.currentCat];

  taglineEl.textContent = cat.tagline;
  noteEl.style.display = state.currentCat === 'pasta' ? '' : 'none';

  grid.innerHTML = '';
  cat.items.forEach((dish, i) => {
    const card = document.createElement('div');
    card.className = 'dish-card reveal';
    card.style.transitionDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="dish-card-top">
        <p class="dish-name">${dish.name}</p>
        <span class="dish-price">${dish.price.toFixed(2).replace('.', ',')} €</span>
      </div>
      <p class="dish-desc">${dish.desc}</p>
      <div class="dish-footer">
        <div class="dish-allergens">${renderAllergenDots(dish.allergens)}</div>
        ${dish.badge ? `<span class="dish-badge badge-${dish.badgeType || ''}">${dish.badge}</span>` : ''}
        <span class="dish-detail-hint">Détails →</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(dish, cat.label));
    grid.appendChild(card);

    // Trigger reveal
    requestAnimationFrame(() => {
      setTimeout(() => {
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
        }, { threshold: 0.1 });
        obs.observe(card);
      }, 50);
    });
  });
}

function renderAllergenDots(allergens) {
  return allergens.map(n => `<span class="allergen-dot" title="${ALLERGENS[n]?.name || n}">${n}</span>`).join('');
}

// ============================================================
// MODAL
// ============================================================
function openModal(dish, categoryLabel) {
  const overlay = $('modal-overlay');
  $('modal-visual').style.background = GRADIENTS[dish.gradient] || GRADIENTS.cream;
  $('modal-category').textContent = categoryLabel;
  $('modal-title').textContent = dish.name;
  $('modal-desc').textContent = dish.desc;
  $('modal-price').textContent = `${dish.price.toFixed(2).replace('.', ',')} €`;

  // Badge
  const badgeWrap = $('modal-badge-wrap');
  badgeWrap.innerHTML = dish.badge ? `<span class="dish-badge badge-${dish.badgeType || ''}">${dish.badge}</span>` : '';

  // Allergens
  const allergensList = $('modal-allergens');
  const allergensBlock = $('modal-allergens-block');
  if (dish.allergens && dish.allergens.length > 0) {
    allergensBlock.classList.remove('hidden');
    allergensList.innerHTML = dish.allergens.map(n => {
      const a = ALLERGENS[n];
      return a ? `<span class="allergen-chip"><span>${a.icon}</span><span>${a.name}</span></span>` : '';
    }).join('');
  } else {
    allergensBlock.classList.remove('hidden');
    allergensList.innerHTML = '<span class="no-allergens">Aucun allergène majeur détecté — renseignez-vous auprès de notre équipe.</span>';
  }

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = $('modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  $('modal-close').addEventListener('click', closeModal);
  $('modal-overlay').addEventListener('click', e => {
    if (e.target === $('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// ============================================================
// CALENDAR
// ============================================================
const MONTHS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const DAYS_FR = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

function initCalendar() {
  $('cal-prev').addEventListener('click', () => {
    state.calMonth--;
    if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; }
    renderCalendar();
  });
  $('cal-next').addEventListener('click', () => {
    state.calMonth++;
    if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; }
    renderCalendar();
  });
  renderCalendar();
}

function renderCalendar() {
  const grid = $('calendar-grid');
  const label = $('cal-month-label');
  const today = new Date();
  today.setHours(0,0,0,0);

  label.textContent = `${MONTHS_FR[state.calMonth]} ${state.calYear}`;
  grid.innerHTML = '';

  const firstDay = new Date(state.calYear, state.calMonth, 1);
  // JS: 0=Sun,1=Mon... we want Mon=0
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;

  const daysInMonth = new Date(state.calYear, state.calMonth + 1, 0).getDate();

  // Empty cells
  for (let i = 0; i < startDow; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day empty';
    grid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(state.calYear, state.calMonth, d);
    const dow = date.getDay(); // 0=Sun,1=Mon
    const isPast = date < today;
    const isClosed = dow === 0 || dow === 1; // Sun & Mon closed
    const isToday = date.getTime() === today.getTime();
    const isSelected = state.selectedDate && date.toDateString() === state.selectedDate.toDateString();

    const cell = document.createElement('div');
    cell.className = 'cal-day';
    if (isPast || isClosed) cell.classList.add('disabled');
    if (isToday) cell.classList.add('today');
    if (isSelected) cell.classList.add('selected');
    cell.textContent = d;

    if (!isPast && !isClosed) {
      cell.addEventListener('click', () => selectDate(date));
    }
    grid.appendChild(cell);
  }
}

function selectDate(date) {
  state.selectedDate = date;
  renderCalendar();
  // Go to step 2
  goToStep(2);
}

// ============================================================
// RESERVATION STEPS
// ============================================================
function initResa() {
  initCalendar();

  // Covers
  $$('.cover-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.cover-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedCovers = btn.dataset.covers;
    });
  });

  renderSlots();

  $('back-1').addEventListener('click', () => goToStep(1));
  $('back-2').addEventListener('click', () => goToStep(2));

  $('resa-form').addEventListener('submit', handleResaSubmit);
  $('new-resa-btn').addEventListener('click', resetResa);
}

function renderSlots() {
  const midiSlots = ['12:00','12:30','13:00','13:30'];
  const soirSlots = ['19:00','19:30','20:00','20:30','21:00','21:30'];

  $('slots-midi').innerHTML = midiSlots.map(s => `
    <button class="slot-btn" data-slot="${s}">${s}</button>
  `).join('');
  $('slots-soir').innerHTML = soirSlots.map(s => `
    <button class="slot-btn" data-slot="${s}">${s}</button>
  `).join('');

  $$('.slot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.slot-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedSlot = btn.dataset.slot;
      goToStep(3);
    });
  });
}

function goToStep(step) {
  state.resaStep = step;

  // Update panels
  for (let i = 1; i <= 3; i++) {
    const panel = $(`panel-${i}`);
    panel.classList.toggle('active', i === step);
  }

  // Update step dots
  $$('.resa-step-dot').forEach(dot => {
    const n = parseInt(dot.dataset.step);
    dot.classList.remove('active','done');
    if (n === step) dot.classList.add('active');
    else if (n < step) dot.classList.add('done');
  });

  if (step === 2) {
    // Update date display
    const d = state.selectedDate;
    const dayNames = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    $('selected-date-display').textContent =
      `${dayNames[d.getDay()]} ${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
    // Re-render slots (reset selection)
    state.selectedSlot = null;
    renderSlots();
  }

  if (step === 3) {
    const d = state.selectedDate;
    const dayNames = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
    $('booking-summary').textContent =
      `${dayNames[d.getDay()]} ${d.getDate()} ${MONTHS_FR[d.getMonth()]} — ${state.selectedSlot} — ${state.selectedCovers} personne${state.selectedCovers > 1 ? 's' : ''}`;
  }

  // Smooth scroll to reservation section
  document.getElementById('reservation').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleResaSubmit(e) {
  e.preventDefault();

  const prenom = $('f-prenom').value.trim();
  const nom = $('f-nom').value.trim();
  const tel = $('f-tel').value.trim();
  let valid = true;

  [$('f-prenom'),$('f-nom'),$('f-tel')].forEach(f => f.classList.remove('error'));

  if (!prenom) { $('f-prenom').classList.add('error'); valid = false; }
  if (!nom)    { $('f-nom').classList.add('error'); valid = false; }
  if (!tel)    { $('f-tel').classList.add('error'); valid = false; }

  if (!valid) return;

  // Show confirmation
  const d = state.selectedDate;
  const dayNames = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  $('conf-details').textContent =
    `${prenom} ${nom} · ${dayNames[d.getDay()]} ${d.getDate()} ${MONTHS_FR[d.getMonth()]} · ${state.selectedSlot} · ${state.selectedCovers} personne${state.selectedCovers > 1 ? 's' : ''}`;

  $('resa-wrapper').style.display = 'none';
  const conf = $('resa-confirmation');
  conf.classList.add('visible');
  conf.style.display = 'block';
  conf.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetResa() {
  state.selectedDate = null;
  state.selectedCovers = 2;
  state.selectedSlot = null;
  state.resaStep = 1;
  $('resa-form').reset();
  $$('.cover-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.cover-btn[data-covers="2"]').classList.add('active');

  $('resa-wrapper').style.display = '';
  const conf = $('resa-confirmation');
  conf.classList.remove('visible');
  conf.style.display = 'none';

  renderCalendar();
  for (let i = 1; i <= 3; i++) $(`panel-${i}`).classList.toggle('active', i === 1);
  $$('.resa-step-dot').forEach(dot => {
    dot.classList.remove('active','done');
    if (dot.dataset.step === '1') dot.classList.add('active');
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initMenu();
  initModal();
  initResa();
});
