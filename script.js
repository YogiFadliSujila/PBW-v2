// Fungsi untuk menghasilkan warna acak dengan saturasi lembut
function generateRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 15%)`; // Gelap, tetap futuristik
}

// Mengubah warna latar belakang body dan efek neon dinamis
function changeBackgroundColor() {
  const color = generateRandomColor();
  document.body.style.background = `radial-gradient(circle at 20% 20%, ${color}, #05070d)`;
  document.querySelectorAll("h1, h2, .popup button, a").forEach((el) => {
    el.style.setProperty("text-shadow", `0 0 10px ${color}`);
  });
}

// Jalankan fungsi saat halaman dimuat
window.onload = function () {
  changeBackgroundColor();
};

// Menampilkan popup modern
function showWelcomeMessage() {
  const popupOverlay = document.getElementById("welcomePopup");
  const popup = popupOverlay.querySelector(".popup");

  popupOverlay.classList.add("active");
  setTimeout(() => popup.classList.add("active"), 50);
}

// Menutup popup
function closePopup() {
  const popupOverlay = document.getElementById("welcomePopup");
  const popup = popupOverlay.querySelector(".popup");

  popup.classList.remove("active");
  setTimeout(() => popupOverlay.classList.remove("active"), 300);
}

// Inisialisasi saat halaman dimuat
window.onload = function () {
  changeBackgroundColor();
  showWelcomeMessage(); // tampilkan pop-up modern
  displayProjects();
  displayExperience();
};
