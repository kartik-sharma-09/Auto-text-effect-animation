let container = document.querySelector(".container");

let about = ["Coder", "Web Devloper", "Rapper", "Learner"];

let aboutIndex = 0;

let characterIndex = 0;

function updatetext() {
  characterIndex++;
  container.innerHTML = `<h1>I am a ${about[aboutIndex].slice(
    0,
    characterIndex
  )}</h1>`;

  if (characterIndex === about[aboutIndex].length) {
    aboutIndex++;
    characterIndex = 0;
  }
  setTimeout(updatetext, 400);
}

updatetext();

if (aboutIndex === about.length) {
  aboutIndex = 0;
}
