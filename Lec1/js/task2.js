document.querySelectorAll(".soft-skills__circular-meter").forEach((meter) => {
  const percent = meter.getAttribute("data-percent");
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (circumference * percent) / 100;

  // Select the circle inside the SVG and update stroke properties
  const circle = meter.querySelector(".soft-skills__measurment circle");
  circle.setAttribute("stroke-dasharray", circumference);
  circle.setAttribute(
    "stroke-dashoffset",
    strokeOffset
  ); /*Controls where the stroke starts by shifting it along the path [how much of the stroke should be hidden]*/
});

function startAudio() {
  var audioElem = document.getElementById("audio1");
  audioElem.play();
}

function stopAudio() {
  var audioElem = document.getElementById("audio1");
  audioElem.pause();
}
