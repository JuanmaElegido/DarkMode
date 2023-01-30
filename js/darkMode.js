document.addEventListener("DOMContentLoaded", function (event) {
  printFirstButton();
});

function printFirstButton() {
  document.body.style.backgroundColor = "#fff";
  let printDom =
    '<div class="row justify-content-end">' +
    '<div class="col-auto mt-3 me-3 btn-group btn-group" role="group" aria-label="Small button group">' +
    '<button id="button2" type="button" class="btn btn-dark btn-outline-secondary btn-sm" onclick="darkMode(this.id, 1)">+</button>' +
    '<button id="button1" type="button" class="btn btn-light btn-outline-secondary btn-sm" onclick="darkMode(this.id)">Light</button>' +
    '<button id="button3" type="button" class="btn btn-light btn-outline-secondary btn-sm" onclick="darkMode(this.id, -1)">-</button>' +
    "</div>";

  document.getElementById("darkModeDom").innerHTML = printDom;

  initValues();
}

function darkMode(idButton, increase) {
  let domButton = document.getElementById("button1");
  if (idButton == "button1") {
    domButton.classList.toggle("btn-dark");
    domButton.classList.toggle("btn-light");

    if (domButton.innerHTML === "Light") {
      darkColor(domButton);
    } else {
      lightColor(domButton);
    }
  } else {
    let numberColor = 0;
    let bColor = document.body.style.backgroundColor;
    bColor = bColor.slice(4, 7).replace(",", "");

    let nOriginalColor = bColor / 17;
    numberColor = bColor / 17 - increase;
    chooseColor(numberColor, nOriginalColor, domButton);
  }
}

function chooseColor(numberColor, nOriginalColor, domButton) {
  localStorage.setItem("numberColor", numberColor);
  bColor = numberColor.toString();
  bColor3 = numberColor.toString();
  bColor = "#" + bColor + bColor + bColor3;

  if (bColor == "#141414") {
    document.body.style.backgroundColor = "#999";
  } else if (bColor == "#101010") {
    document.body.style.backgroundColor = "#fff";
  } else if (bColor != "#161616") {
    document.body.style.backgroundColor = bColor;
  }

  if (numberColor < 9) {
    document.body.style.color = "#fff";
  } else {
    document.body.style.color = "#222";
  }

  if (
    (numberColor == 5 && nOriginalColor == 6) ||
    (numberColor == 6 && nOriginalColor == 5)
  ) {
    domButton.classList.toggle("btn-dark");
    domButton.classList.toggle("btn-light");
    if (domButton.innerHTML === "Light") {
      domButton.innerHTML = "Dark";
    } else {
      domButton.innerHTML = "Light";
    }
  }
}

function initValues() {
  let domButton = document.getElementById("button1");
  var isNumberColor = localStorage.getItem("numberColor");
  if (isNumberColor) {
    chooseColor(isNumberColor, isNumberColor, domButton);
    if (isNumberColor <= 5) {
      domButton.classList.toggle("btn-dark");
      domButton.classList.toggle("btn-light");
      domButton.innerHTML = "Dark";
    } else {
      domButton.innerHTML = "Light";
    }
  }
}

function darkColor(domButton) {
  domButton.innerHTML = "Dark";
  localStorage.setItem("numberColor", 2);
  document.body.style.backgroundColor = "#222";
  document.body.style.color = "#fff";
}

function lightColor(domButton) {
  domButton.innerHTML = "Light";
  localStorage.setItem("numberColor", 10);
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#222";
}
