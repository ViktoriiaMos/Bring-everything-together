//.getElementByClassName always return an array of elements. 
//To make it work when we call it, call as array element 
//button[0].addEventListener('click', add)
var button = document.getElementsByClassName("btn");
var input = document.getElementById("address");
var answ = document.getElementById("answer");

function add(e) 
{
  e.preventDefault();
  answ.innerHTML = "Submited";
};
button[0].addEventListener('click', add);



var items = document.getElementsByClassName("fade-item");
for (let i = 0; i < items.length; ++i) {
  fadeIn(items[i], i * 1000)
}
function fadeIn(item, delay) {
  setTimeout(() => {
    item.classList.add('fadein')
  }, delay)
}




