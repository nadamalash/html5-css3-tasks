var imgElem;
function getDragElem(dragElem) {
  imgElem = dragElem;
}

function dropHander(divElem) {
  if (imgElem.id == "img1") {
    var imgElemChild = imgElem.cloneNode(true);
    divElem.appendChild(imgElemChild);
  }
}
