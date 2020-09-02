function showObj(screen) {
  console.log("Objectives:", screen);
  let display = document.getElementById(screen);
  if (display !== null) {
    display.classList.remove("hidden");
    mainObj(screen);
  } else {
    display = document.getElementById("not-ready");
  }
  display.classList.remove("hidden");
}
function closeObj(screen) {
  console.log("Close:", screen);
  let display = document.getElementById(screen);
  display.classList.add("hidden");
}
function supportObj(screen) {
  let display = document.getElementById(screen + "-main");
  if (!display.classList.contains("hidden")) {
    display.classList.add("hidden");
  }
  display = document.getElementById(screen + "-extension");
  if (!display.classList.contains("hidden")) {
    display.classList.add("hidden");
  }
  let button = document.getElementsByClassName("selected");
  for (let counter = 0; counter < button.length; counter++) {
    button[counter].classList.remove("selected");
  }
  button = document.getElementById(screen + "-supportBtn");
  button.classList.add("selected");
  let title = document.getElementById(screen + "-topic-title");
  let newTitle = title.innerHTML.replace("- Main", "- Support");
  newTitle = newTitle.replace("- Extension", "- Support");
  title.innerHTML = newTitle;
  display = document.getElementById(screen + "-support");
  display.classList.remove("hidden");
}
function mainObj(screen) {
  let display = document.getElementById(screen + "-support");
  if (!display.classList.contains("hidden")) {
    display.classList.add("hidden");
  }
  display = document.getElementById(screen + "-extension");
  if (!display.classList.contains("hidden")) {
    display.classList.add("hidden");
  }
  let button = document.getElementsByClassName("selected");
  for (let counter = 0; counter < button.length; counter++) {
    button[counter].classList.remove("selected");
  }
  button = document.getElementById(screen + "-mainBtn");
  button.classList.add("selected");
  let title = document.getElementById(screen + "-topic-title");
  let newTitle = title.innerHTML.replace("- Support", "- Main");
  newTitle = newTitle.replace("- Extension", "- Main");
  title.innerHTML = newTitle;
  display = document.getElementById(screen + "-main");
  display.classList.remove("hidden");
}
function extensionObj(screen) {
  let display = document.getElementById(screen + "-support");
  if (!display.classList.contains("hidden")) {
    display.classList.add("hidden");
  }
  display = document.getElementById(screen + "-main");
  if (!display.classList.contains("hidden")) {
    display.classList.add("hidden");
  }
  let button = document.getElementsByClassName("selected");
  for (let counter = 0; counter < button.length; counter++) {
    console.log(button[counter].id);
    if (button[counter].id.length > 0) {
      button[counter].classList.remove("selected");
    }
  }
  button = document.getElementById(screen + "-extensionBtn");
  button.classList.add("selected");
  let title = document.getElementById(screen + "-topic-title");
  let newTitle = title.innerHTML.replace("- Support", "- Extension");
  newTitle = newTitle.replace("- Main", "- Extension");
  title.innerHTML = newTitle;
  display = document.getElementById(screen + "-extension");
  display.classList.remove("hidden");
}

function prevObj(screen) {
  let display = document.getElementById(screen);
  display.classList.add("hidden");
  switch (screen) {
    case "PRG":
      display = "DL";
      break;
    case "DR":
      display = "PRG";
      break;
    default:
      display = null;
  }
  if (display !== null) {
    showObj(display);
  }
}
function nextObj(screen) {
  let display = document.getElementById(screen);
  display.classList.add("hidden");
  switch (screen) {
    case "DL":
      display = "PRG";
      break;
    case "PRG":
      display = "DR";
      break;
    default:
      display = null;
  }
  if (display !== null) {
    showObj(display);
  }
}
