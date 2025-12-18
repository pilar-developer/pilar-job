document.addEventListener("scroll", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // jika navbar terbuka di mobile, tutup otomatis saat scroll
  if (navbarCollapse.classList.contains("show")) {
    navbarToggler.click();
  }
});

const track = document.getElementById("teamTrack");

// DUPLIKASI SEMUA CARD
const cards = Array.from(track.children);
cards.forEach((card) => {
  track.appendChild(card.cloneNode(true));
});

let position = 0;
let speed = 0.4;

const originalWidth = track.scrollWidth / 2;

function autoScroll() {
  position -= speed;

  // Saat sudah melewati konten asli
  if (Math.abs(position) >= originalWidth) {
    position = 0; // reset TANPA TERLIHAT
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(autoScroll);
}

autoScroll();


// const openA11y = document.getElementById("openA11y");
// const closeA11y = document.getElementById("closeA11y");
// const panel = document.getElementById("a11yPanel");

// openA11y.addEventListener("click", () => panel.classList.add("show"));
// closeA11y.addEventListener("click", () => panel.classList.remove("show"));

// document.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && e.key.toLowerCase() === "u") {
//     e.preventDefault();
//     panel.classList.toggle("show");
//   }
// });


// let fontScale = 100;
// let lineHeight = 1.6;

// document.querySelectorAll(".a11y-item").forEach((item) => {
//   item.addEventListener("click", () => {
//     const action = item.dataset.action;

//     switch (action) {
//       case "contrast":
//         document.body.classList.toggle("a11y-contrast");
//         break;

//       case "highlight-link":
//         document.body.classList.toggle("a11y-highlight");
//         break;

//       case "font-size":
//         fontScale += 10;
//         document.body.style.fontSize = fontScale + "%";
//         break;

//       case "text-spacing":
//         document.body.style.letterSpacing =
//           document.body.style.letterSpacing === "0.15em" ? "normal" : "0.15em";
//         break;

//       case "pause-animation":
//         document.body.classList.toggle("a11y-pause");
//         break;

//       case "hide-images":
//         document.body.classList.toggle("a11y-hide-img");
//         break;

//       case "dyslexia":
//         document.body.classList.toggle("a11y-dyslexia");
//         break;

//       case "cursor":
//         document.body.classList.toggle("a11y-cursor");
//         break;

//       case "line-height":
//         lineHeight = lineHeight === 1.6 ? 2.2 : 1.6;
//         document.body.style.lineHeight = lineHeight;
//         break;

//       case "tooltip":
//         alert("Fitur ini membantu pengguna memahami fungsi elemen.");
//         break;
//     }
//   });
// });
