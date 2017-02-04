var slideIndex = 1;
var select = document.getElementById("selectAnimation");
var selectIndex, selectedValue, dropdownValue, i,animationValue,timeoutValue;
var slidesArray = document.getElementsByClassName("mySlides");

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

 function loadImages() {
   var imagesArray = [
  {"img" : "images/image1.jpg", "text" : "Caption One"},
  {"img" : "images/image2.jpg", "text" : "Caption Two"},
  {"img" : "images/image3.jpg", "text" : "Caption Three"},
  {"img" : "images/image4.jpg", "text" : "Caption Four"},
  {"img" : "images/image5.jpeg", "text" : "Caption Five"},
  {"img" : "images/image6.png", "text" : "Caption Six"}
  ];

  for (i = 0; i < imagesArray.length; i ++)
  {
  var slides_image = imagesArray[i].img;
  var slides_text =  imagesArray[i].text;

  var z = document.createElement('div');
  z.innerHTML = "<div class='mySlides' id='slide'><img src=\"" +slides_image+ "\"><div class='text'>"+slides_text+"</div></div>";
  document.getElementById("slideshow-container").appendChild(z);
  }

 }

function showSlides(n) {
 var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  applyTimeOut();
}

/* Append the elements of dropdown dynamically */
function fetchOptions(id){
  var select = document.getElementById(id);
  var options, i;
  if(id == 'selectAnimation'){
  options = ["fade", "animatezoom", "animatebottom", "animateright", "animatetop","animateleft"];
  }
  else{
    options = ["5000", "4000", "4500", "3000", "3500","2000"];
  }
  var optionsLength = options.length;
  for(i = 0; i < optionsLength; i++) {
    var option = options[i];
    var elem = document.createElement("option");
    elem.textContent = option;
    elem.value = option;
    select.appendChild(elem);
  }
}

fetchOptions('selectAnimation');
fetchOptions('selectTimeout');



/* Get the selected value of the dropdown */
function getSelectedValue() {
  dropdownValue = select.options[select.selectedIndex].value;
  for(i = 0; i < slidesArray.length; i++)
  {
  slidesArray[i].classList.remove(animationValue);
  }
}

function applyAnimation() {
  var i;
  animationValue = select.options[select.selectedIndex].value;
  var slidesArray = document.getElementsByClassName("mySlides");
  for(i = 0; i < slidesArray.length; i++)
  {
    slidesArray[i].classList.add(animationValue);
 }
  
}

function applyTimeOut() {
  timeoutValue = document.getElementById("selectTimeout");
  value = timeoutValue.options[timeoutValue.selectedIndex].value
setTimeout(showSlides, value);
}