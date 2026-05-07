const results = [
  { type: '✈️ Voyage', title: 'Marrakech chill & photo', meta: '3 nuits · 2 places · Budget moyen', score: '92%', tags: ['📸 Photo', '😌 Chill', '🍽️ Gastro'] },
  { type: '📍 Activité', title: 'Bruxelles brunch + expo', meta: 'Samedi 11h · 6 km · Gratuit / partagé', score: '88%', tags: ['🎭 Culture', '🍽️ Gastro', '🤓 Curieux'] },
  { type: '✈️ Voyage', title: 'Rome spontané week-end', meta: 'Dates flexibles · 1 place · Petit budget', score: '84%', tags: ['✨ Spontané', '🏃 Sportif', '🎉 Festif'] },
  { type: '📍 Activité', title: 'Spa girls day', meta: 'Dimanche 14h · 4 places · Entrée payante', score: '90%', tags: ['🧘 Détente', '😌 Chill', '🌿 Nature'] }
];

const template = document.getElementById('resultTemplate');
const resultList = document.getElementById('resultList');
const navItems = document.querySelectorAll('.nav-item[data-target]');
const screens = document.querySelectorAll('.screen');
const fabBtn = document.getElementById('fabBtn');
const createSheet = document.getElementById('createSheet');
const closeSheet = document.getElementById('closeSheet');
const notifyBtn = document.getElementById('notifyBtn');

for (const item of results) {
  const node = template.content.cloneNode(true);
  node.querySelector('.result-title').textContent = `${item.type} · ${item.title}`;
  node.querySelector('.result-meta').textContent = item.meta;
  node.querySelector('.result-score').textContent = item.score;
  const tags = node.querySelector('.result-tags');
  item.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tag;
    tags.appendChild(span);
  });
  resultList.appendChild(node);
}

navItems.forEach(btn => {
  btn.addEventListener('click', () => {
    navItems.forEach(i => i.classList.toggle('active', i === btn));
    screens.forEach(screen => screen.classList.toggle('active', screen.dataset.screen === btn.dataset.target));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

function openSheet() {
  createSheet.classList.add('open');
  createSheet.setAttribute('aria-hidden', 'false');
}
function hideSheet() {
  createSheet.classList.remove('open');
  createSheet.setAttribute('aria-hidden', 'true');
}

fabBtn.addEventListener('click', openSheet);
closeSheet.addEventListener('click', hideSheet);
createSheet.addEventListener('click', (e) => { if (e.target === createSheet) hideSheet(); });
document.getElementById('heroCard').addEventListener('click', () => alert('Prototype : détail complet du trip + candidature.'));
document.getElementById('openFilters').addEventListener('click', () => alert('Prototype : filtres avancés + bouton Pour moi.'));
notifyBtn.addEventListener('click', () => alert('Prototype : nouvelle candidature, message de groupe et rappel d’appel vidéo.'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
