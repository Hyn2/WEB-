function setColor(color) {
  var alist = document.querySelectorAll("a");
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}

var body = {
  background: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
  font: function (color) {
    document.querySelector("body").style.color = color;
  },
};

function nightDayHandler(self) {
  var target2 = document.querySelector("h1");
  var target3 = document.querySelector("ol");
  if (self.value === "NIGHT") {
    body.background("black");
    body.font("white");
    target2.style.borderBottom = "5px solid white";
    target3.style.borderRight = "5px solid white";
    setColor("white");
    self.value = "DAY";
    document.button.style.background;
  } else {
    body.background("white");
    body.font("black");
    target2.style.borderBottom = "5px solid black";
    target3.style.borderRight = "5px solid black";
    setColor("black");
    self.value = "NIGHT";
  }
}
