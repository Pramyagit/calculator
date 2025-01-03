let input = document.getElementById("inputBox");
// console.log(input.value);
let buttons = document.querySelectorAll("button");
// console.log(buttons);

let string = "";
let arr = Array.from(buttons);
arr.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
