window.onload = () => {

  // r1
  var r1 = document.getElementById("r1");

  r1.onclick = () => {
  var target =  r1.getAttribute("data-to-target");
  var offset =  r1.getAttribute("data-to-offset");

  var element =  document.getElementById(target);

  window.scrollTo({
    top: element.offsetTop,
    behavior:"smooth"
  })
  }

  // r2
  var r2 = document.getElementById("r2");

  r2.onclick = () => {
  var target =  r2.getAttribute("data-to-target");
  var offset =  r2.getAttribute("data-to-offset");

  var element =  document.getElementById(target);

  window.scrollTo({
    top: element.offsetTop,
    behavior:"smooth"
  })
  }

  // r3

  var r3 = document.getElementById("r3");

  r3.onclick = () => {
  var target =  r3.getAttribute("data-to-target");
  var offset =  r3.getAttribute("data-to-offset");

  var element =  document.getElementById(target);

  window.scrollTo({
    top: element.offsetTop,
    behavior:"smooth"
  })
  }

  // r4
  var r4 = document.getElementById("r4");

  r4.onclick = () => {
  var target =  r4.getAttribute("data-to-target");
  var offset =  r4.getAttribute("data-to-offset");

  var element =  document.getElementById(target);

  window.scrollTo({
    top: element.offsetTop,
    behavior:"smooth"
  })
  }

  // r5
  var r5 = document.getElementById("r5");

  r5.onclick = () => {
  var target =  r5.getAttribute("data-to-target");
  var offset =  r5.getAttribute("data-to-offset");

  var element =  document.getElementById(target);

  window.scrollTo({
    top: element.offsetTop,
    behavior:"smooth"
  })
  }
}