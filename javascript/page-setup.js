// This file contains all of the onload scripts for each page (ie. navigation menu creation)

document.body.onload = function () {
  fillNavigation();
};

function fillNavigation () {
  var i = 0;
  var links = [];
  
  links = [
    {
      name: 'Home',
      url: 'https://soccerjoshnumbernine.github.io'
    }
  ];
  
  for (i = 0; i < links.length; i++) {
    document.getElementById('navSidebar').innerHTML += "<a href='" + links[i].url + "' class='w3-bar-item w3-button w3-hover-teal'>" + links[i].name + "</a>";
  }
}
