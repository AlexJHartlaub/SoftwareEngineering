var dice = {
    roll: function () {
      var randomNumber = Math.floor(Math.random() * 6) + 1;
      return randomNumber;
    }
  }
  
  

  
  function printNumber(number) {
    var placeholder = document.getElementById('number');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };

  window.onload = function () {
    document.getElementById("button").click(); };