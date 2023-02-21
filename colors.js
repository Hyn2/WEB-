function setColor(color) {
  let alist = document.querySelectorAll("a");
  let i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}

let body = {
  background: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
  font: function (color) {
    document.querySelector("body").style.color = color;
  },
};

function nightDayHandler(self) {
  let target2 = document.querySelector("h1");
  let target3 = document.querySelector("ul");
  if (self.value === "NIGHT") {
    body.background("black");
    body.font("white");
    target2.style.borderBottom = "5px solid white";
    target3.style.borderRight = "5px solid white";
    setColor("white");
    document.querySelector("img").src = "DAY_NEW.png";
    self.value = "DAY";
  } else {
    body.background("white");
    body.font("black");
    target2.style.borderBottom = "5px solid black";
    target3.style.borderRight = "5px solid black";
    setColor("black");
    document.querySelector("img").src = "NIGHT_NEW.png";
    self.value = "NIGHT";
  }
}
