document.body.onload = function () {
  createColors();
  createSpacers();
  createLinks();
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

function createSpacers () {
  var i = 0;
  var validElements = [];
  
  for (i = 0; i < document.getElementsByTagName('body')[0].childNodes.length; i++) {
    if (String(document.getElementsByTagName('body')[0].childNodes[i].className).indexOf('_spacer') !== -1) {
      validElements.push(i);
    }
  }
    
  for (i = 0; i < validElements.length; i++) {
    document.getElementsByTagName('body')[0].childNodes[validElements[i]].style.height = String(document.getElementsByTagName('body')[0].childNodes[validElements[i]].className.slice(document.getElementsByTagName('body')[0].childNodes[validElements[i]].className.indexOf('_spacer') + 7, document.getElementsByTagName('body')[0].childNodes[validElements[i]].className.indexOf('_px') + 12) + 'px');
  }
}

function createLinks () {
  var i = 0;
  var links = [
    {
      name: 'Home',
      url: 'https://soccerjoshnumbernine.github.io'
    }
  ];
  
  for (i = 0; i < links.length; i++) {
    document.getElementById('navigation-table').innerHTML += "<tr><td class='link standard'><a class='plain-link white' href='" + links[i].url + "'>" + links[i].name + "</a></td></tr>";
  }
}
