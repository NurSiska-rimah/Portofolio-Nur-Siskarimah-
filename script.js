function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
 
function lihatProject(project) {
  if (project === 'absensi') {
    window.open("https://absensiskanic-b4895.web.app");
  } else if (project === 'notes') {
    window.open("https://nursiska-rimah.github.io/notes-app/");
  } else if (project === 'komodo') {
    window.open("https://aboutkomododragon.netlify.app/");
  }
}

  function lihatDesign(gambar) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImg").src = gambar;
  }

  document.getElementById("popup").onclick = function () {
    this.style.display = "none";
  };

document.getElementById("popup").onclick = function() {
  this.style.display = "none";
}

function filterProject(category) {
  const cards = document.querySelectorAll('.projects .card');
  const buttons = document.querySelectorAll('.filter-buttons button');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}