function part01() {
  MyFunction();
}

function MyFunction() {
  const ZERO = 0;
  var x;

  x = prompt("Enter a number");
  x = Number(x);

  var y;
  y = prompt("Enter another number");
  y = Number(y);


  if (x < ZERO || y < ZERO) {
      alert("One of the numbers was less than zero, please try again.");
  } else if (y < x) {
      alert("The second number has to be bigger than the first, please try again.");
  } else {

      while (x < y) {

          document.write(x);
          document.write(" times ");
          document.write(y);
          document.write(" is ");
          document.write(x * y);
          document.write(". <br />");

          x++;
  }
}
}
