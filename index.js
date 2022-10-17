
let button = document.getElementsByClassName("btn");
let input = document.getElementById("address");
let answ = document.getElementById("answer");

function add() 
{
  answ.innerHTML = "Submited";
};
button.addEventListener("click", add)


var items = document.getElementsByClassName("fade-item");
		for (let i = 0; i < items.length; ++i) {
      fadeIn(items[i], i * 1000)
    }
    function fadeIn (item, delay) {
      setTimeout(() => {
        item.classList.add('fadein')
      }, delay)
    }

   


