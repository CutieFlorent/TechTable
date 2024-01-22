var n = 1;
function cute() {
  document.getElementById("cute").innerHTML =
    "Florent is a " + "cute ".repeat(n) + "girl.";

  console.log(n++);
  n += 1;
}
