document.body.onload = function () {
  createColors();
};

function createColors () {
  var i = 0;
  var validElements = [];
  
  for (i = 0; i < document.getElementsByTagName('body')[0].childNodes.length; i++) {
    if (String(document.getElementsByTagName('body')[0].childNodes[i].className).indexOf('_#') !== -1) {
      validElements.push(i);
    }
  }
  
  for (i = 0; i < validElements.length; i++) {
    document.getElementsByTagName('body')[0].childNodes[validElements[i]].style.backgroundColor = document.getElementsByTagName('body')[0].childNodes[validElements[i]].className.slice(document.getElementsByTagName('body')[0].childNodes[validElements[i]].className.indexOf('_#') + 1, document.getElementsByTagName('body')[0].childNodes[validElements[i]].className.indexOf('_#') + 8);
  }
}
