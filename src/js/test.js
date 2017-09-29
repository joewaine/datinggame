
  var inputWidth = document.getElementById("windowWidth");
  var inputHeight = document.getElementById("windowHeight");
  localStorage.setItem("widthofwindow", inputWidth.value);
  localStorage.setItem("heightofwindow", inputHeight.value);


var divw = document.getElementById('divIDwidth');
var divh = document.getElementById('divIDheight');

divw.innerHTML = localStorage.getItem('widthofwindow');
divh.innerHTML = localStorage.getItem('heightofwindow');

document.getElementById('windowWidth').value = localStorage.getItem('widthofwindow');
document.getElementById('windowHeight').value = localStorage.getItem('heightofwindow');
