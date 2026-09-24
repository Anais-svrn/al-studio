const STORAGE_KEY = "al-studio-wardrobe";

const defaultWardrobe = [
  { id: crypto.randomUUID(), name: "Robe fluide", category: "robe", style: "Chic", color: "Blanc cassé", emoji: "👗" },
  { id: crypto.randomUUID(), name: "Jean straight", category: "bas", style: "Décontracté", color: "Bleu denim", emoji: "👖" },
  { id: crypto.randomUUID(), name: "Trench beige", category: "veste", style: "Simple", color: "Beige", emoji: "🧥" },
  { id: crypto.randomUUID(), name: "Sneakers blanches", category: "chaussures", style: "Sportwear", color: "Blanc", emoji: "👟" }
];

const styles = [
  { name: "Chic", icon: "✨" },
  { name: "Décontracté", icon: "☁️" },
  { name: "Simple", icon: "✓" },
  { name: "Sportwear", icon: "🏃" },
  { name: "Bureau", icon: "💼" }
];

const state = {
  userName: "Anaïs",
  selectedStyle: "Chic",
  wardrobe: loadWardrobe(),
  favorites: ["Élégance légère"],
  activeDay: new Date().getDate()
};

const greetingName = document.getElementById("greeting-name");
const weatherTemp = document.getElementById("weather-temp");
const lookTitle = document.getElementById("look-title");
const lookRecommendation = document.getElementById("look-recommendation-text");
const styleChips = document.getElementById("style-chips");
const wardrobeGrid = document.getElementById("wardrobe-grid");
const calendar = document.getElementById("calendar");
const time = document.getElementById("time");
const fabAdd = document.getElementById("fab-add");
const addWardrobeBtn = document.getElementById("add-wardrobe-btn");
const favoriteLook = document.getElementById("favorite-look");
const addGarmentModal = document.getElementById("add-garment-modal");
const garmentForm = document.getElementById("garment-form");
const closeModal = document.getElementById("close-modal");

function loadWardrobe() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultWardrobe));
    return defaultWardrobe;
  }

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultWardrobe));
    return defaultWardrobe;
  }
}

function persistWardrobe() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.wardrobe));
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Bonjour";
  if (hour < 18) return "Bon après-midi";
  return "Bonsoir";
}

function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  time.textContent = formatted;

  const greetingText = getGreeting();
  greetingName.textContent = `${greetingText}, ${state.userName}`;
}

function updateWeather() {
  const temp = "26°";
  weatherTemp.textContent = temp;
}

function renderStyleChips() {
  styleChips.innerHTML = "";

  styles.forEach((style) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `style-chip ${style.name === state.selectedStyle ? "active" : ""}`;
    chip.innerHTML = `<span>${style.icon}</span><span>${style.name}</span>`;

    chip.addEventListener("click", () => {
      state.selectedStyle = style.name;
      renderStyleChips();
      renderLook();
    });

    styleChips.appendChild(chip);
  });
}

function getLookData() {
  const weatherBase = {
    hot: ["Robe légère", "Look décontracté chic", "Set monochrome fluide"],
    cool: ["Manteau léger", "Tenue de bureau élégante", "Look cosy premium"]
  };

  const chosenList = weatherBase.hot;
  const matching = chosenList[Math.floor(Math.random() * chosenList.length)];

  const recommendations = {
    Chic: "cheveux lâchés + légère brillance",
    Décontracté: "tresse douce + gloss nude",
    Simple: "brush-up naturel + teint lumineux",
    Sportwear: "queue haute + bronzer discret",
    Bureau: "chignon élégant + rouge à lèvres discret"
  };

  return {
    title: matching,
    recommendation: recommendations[state.selectedStyle] || recommendations.Chic
  };
}

function renderLook() {
  const look = getLookData();
  lookTitle.textContent = look.title;
  lookRecommendation.textContent = look.recommendation;

  const favorite = state.favorites.includes(look.title);
  favoriteLook.textContent = favorite ? "♥" : "♡";
  favoriteLook.style.background = favorite ? "rgba(255, 107, 132, 0.12)" : "rgba(123, 90, 247, 0.1)";
  favoriteLook.style.color = favorite ? "#ff5d7a" : "var(--primary-strong)";

  favoriteLook.onclick = () => {
    if (state.favorites.includes(look.title)) {
      state.favorites = state.favorites.filter((item) => item !== look.title);
    } else {
      state.favorites.push(look.title);
    }
    renderLook();
  };
}

function renderWardrobe() {
  wardrobeGrid.innerHTML = "";

  state.wardrobe.forEach((item) => {
    const card = document.createElement("article");
    card.className = "wardrobe-item";

    const thumb = document.createElement("div");
    thumb.className = "wardrobe-thumb";

    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      thumb.appendChild(img);
    } else {
      thumb.textContent = item.emoji || "🧥";
    }

    const meta = document.createElement("div");
    meta.className = "wardrobe-meta";
    meta.innerHTML = `
      <strong>${item.name}</strong>
      <span>${item.category} · ${item.style}</span>
    `;

    card.appendChild(thumb);
    card.appendChild(meta);
    wardrobeGrid.appendChild(card);
  });
}

function renderCalendar() {
  const today = new Date();
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const firstDay = monthStart.getDay();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  calendar.innerHTML = "";

  const dayNames = ["L", "M", "M", "J", "V", "S", "D"];
  dayNames.forEach((day) => {
    const el = document.createElement("div");
    el.className = "calendar-empty";
    el.textContent = day;
    calendar.appendChild(el);
  });

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.className = "calendar-empty";
    empty.textContent = "";
    calendar.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = `calendar-day ${day === state.activeDay ? "active" : ""} ${day % 3 === 0 ? "has-look" : ""}`;
    pill.textContent = day;
    pill.setAttribute("aria-label", `Jour ${day}`);
    pill.addEventListener("click", () => {
      state.activeDay = day;
      renderCalendar();
    });
    calendar.appendChild(pill);
  }
}

function openModal() {
  addGarmentModal.showModal();
}

function closeGarmentModal() {
  addGarmentModal.close();
  garmentForm.reset();
}

function handleNewGarment(event) {
  event.preventDefault();

  const fileInput = document.getElementById("garment-photo");
  const file = fileInput.files[0];
  const objectURL = file ? URL.createObjectURL(file) : "";

  const garment = {
    id: crypto.randomUUID(),
    name: document.getElementById("garment-name").value.trim() || "Nouvel article",
    category: document.getElementById("garment-category").value,
    style: document.getElementById("garment-style").value,
    color: document.getElementById("garment-color").value.trim() || "Couleur neutre",
    emoji: categoryEmoji(document.getElementById("garment-category").value),
    image: objectURL
  };

  state.wardrobe.unshift(garment);
  persistWardrobe();
  renderWardrobe();
  closeGarmentModal();
}

function categoryEmoji(category) {
  const emojiMap = {
    haut: "👕",
    bas: "👖",
    robe: "👗",
    veste: "🧥",
    accessoire: "👜",
    chaussures: "👟"
  };

  return emojiMap[category] || "🧥";
}

fabAdd.addEventListener("click", openModal);
addWardrobeBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", closeGarmentModal);
garmentForm.addEventListener("submit", handleNewGarment);

updateTime();
updateWeather();
renderStyleChips();
renderLook();
renderWardrobe();
renderCalendar();
setInterval(updateTime, 60000);
