function myFunction(){
  var x, d;
  x = document.getElementById("show").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 31) {
    d = "Date is not valid";
  } else {
    d= "Date is valid";
  }
  document.getElementById("mira").innerHTML = d;
}
