window.onload = function () {
  let button = document.getElementById("myButton");
  button.addEventListener("click", buttonClicked, true);
}
// const button = document.getElementById("myButton").addEventListener("click", click);

const y_or_n = document.getElementById("answer");

setTimeout(again, 70000)


function buttonClicked() {

  const choice = y_or_n.value;
  if (choice == 1) {
    alert(choice)
    again()

  } else {
    window.close();
  }

  event.preventDefault();
}

function again() {
  chrome.windows.create({
    'url': 'video.html',
    'type': 'popup'
  }, function (window) {});
}