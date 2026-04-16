// Daftar karakter anime (bisa kamu tambah sendiri)
const characters = [
  { name: "Gojo Satoru", anime: "Jujutsu Kaisen", img: "https://source.unsplash.com/random/400x300/?gojo" },
  { name: "Luffy", anime: "One Piece", img: "https://source.unsplash.com/random/400x300/?luffy" },
  { name: "Zero Two", anime: "Darling in the Franxx", img: "https://source.unsplash.com/random/400x300/?zero-two" },
  { name: "Levi Ackerman", anime: "Attack on Titan", img: "https://source.unsplash.com/random/400x300/?levi" },
  { name: "Anya Forger", anime: "Spy x Family", img: "https://source.unsplash.com/random/400x300/?anya" },
  { name: "Tanjiro Kamado", anime: "Demon Slayer", img: "https://source.unsplash.com/random/400x300/?tanjiro" },
  { name: "Asuna", anime: "Sword Art Online", img: "https://source.unsplash.com/random/400x300/?asuna" }
];

function generateCharacter() {
  const random = characters[Math.floor(Math.random() * characters.length)];
  const result = document.getElementById('character-result');
  
  result.innerHTML = `
    <h3>${random.name}</h3>
    <p>${random.anime}</p>
    <img src="\( {random.img}" alt=" \){random.name}">
    <p>Kamu dapet karakter ini! 🔥</p>
  `;
}

// Daftar quote anime
const quotes = [
  { quote: "Orang yang paling kuat adalah orang yang bisa melindungi orang lain.", char: "— Gojo Satoru" },
  { quote: "Aku nggak mau mati sebelum aku tahu aku hidup.", char: "— Monkey D. Luffy" },
  { quote: "Kalau kamu nggak bisa menang hari ini, coba lagi besok.", char: "— Tanjiro Kamado" },
  { quote: "Hidup itu seperti anime. Kadang sedih, kadang lucu, tapi selalu epik.", char: "— Otaku Anonymous" },
  { quote: "Aku nggak butuh alasan untuk melindungi orang yang aku sayang.", char: "— Levi Ackerman" }
];

function generateQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  const result = document.getElementById('quote-result');
  
  result.innerHTML = `
    <p>"${random.quote}"</p>
    <p style="margin-top:15px; color:#c026d3;">${random.char}</p>
  `;
}

// Today's Waifu/Husbando (random tiap refresh)
function setToday() {
  const todayChar = characters[Math.floor(Math.random() * characters.length)];
  const result = document.getElementById('today');
  
  result.innerHTML = `
    <h3>Hari ini: ${todayChar.name}</h3>
    <p>from ${todayChar.anime}</p>
    <img src="\( {todayChar.img}" alt=" \){todayChar.name}">
  `;
}

// Jalankan saat halaman dibuka
window.onload = () => {
  setToday();
  // generateCharacter(); // uncomment kalau mau langsung muncul
  // generateQuote();
};