/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
const b = parseInt(string);

  if ( b < 12) {
  return 'Good Morning'
  } if (17 > b  && b > 12) {
  return 'Good Afternoon'
  } else {
  return 'Good Evening'
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(arg){
  document.getElementById('greeting').textContent = arg;
}