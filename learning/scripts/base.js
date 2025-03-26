// const element = document.getElementById("watch-me");
// element.addEventListener("animationstart", listener, false);
// element.addEventListener("animationend", listener, false);
// element.addEventListener("animationiteration", listener, false);

// element.className = "slide-in";


// function listener(event) {
//     const l = document.createElement("li");
//     switch (event.type) {
//       case "animationstart":
//         l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
//         break;
//       case "animationend":
//         l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
//         break;
//       case "animationiteration":
//         l.textContent = `New loop started at time ${event.elapsedTime}`;
//         break;
//     }
//     document.getElementById("output").appendChild(l);
//   }

const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList[0] === "fade-in") {
    divElem.classList.remove("fade-in");
    divElem.classList.add("fade-out");
  } else {
    divElem.classList.remove("fade-out");
    divElem.classList.add("fade-in");
  }
}