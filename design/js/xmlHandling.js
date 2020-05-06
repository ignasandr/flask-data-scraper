"use strict";

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "hntop.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  const listPlace = document.querySelector('.container');
  var i;
  var xmlDoc = xml.responseXML;
  let HTML=``;
  var x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i <x.length; i++) {
    const link = x[i].getElementsByTagName("blink")[0].childNodes[0].nodeValue;
    HTML += `<div class="item">
      <div class="title"><a href="${link}">${x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue}</a></div>
      <div class="score">${x[i].getElementsByTagName("score")[0].childNodes[0].nodeValue}</div>
      </div>
    `;
  }
  return listPlace.innerHTML = HTML;
  //document.getElementById("demo").innerHTML = table;
}

loadXMLDoc();
