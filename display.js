const N = 64;
const borderWidth = 1;
$(".table").css({
  width: 18 * N + "px",
  height: 10 * N + "px",
});

function displayPos(n) {
  pos = position(n);
  let y = pos.period;
  switch (pos.spdf) {
    case 1:
      x = pos.group;
      break;
    case 2:
      x = pos.group + 12;
      break;
    case 3:
      x = pos.group + 2;
      break;
    case 4:
      y += 2.5;
      x = pos.group + 2;
      break;
  }
  if (n == 2) x = 18;
  x = parseInt(N * (x - 1));
  y = parseInt(N * (y - 1));
  return { x, y };
}

function categoryLabel() {
  for (let i = 1; i <= 10; i++) {
    $(document).ready(function () {
      //var symbol = symbols[n];
      var x = i <= 5 ? 5 * N : 8.5 * N;
      var y = (i % 5) * 0.6 * N;
      var initStyle = {
        position: "absolute",
        cursor: "default",
        "font-size": "24px",
        "font-family": "sans-serif",
        "font-weight": "lighter",
        "text-align": "center",
        "line-height": "100%", //the vertical offset of symbol text
        "background-color": "green", // Adjust style as needed
        color: "black", // Adjust style as needed
        top: y + borderWidth + "px",
        left: x + borderWidth + "px",
        width: 3.5 * N - 2 * borderWidth + "px",
        height: 0.6 * N - 2 * borderWidth + "px",
      };
      var label = $("<div>").addClass("categoryLabel").css(initStyle);
      $(".table").append(label);
    });
  }
}

function gensoButton(n) {
  $(document).ready(function () {
    var symbol = symbols[n];
    var x = displayPos(n).x;
    var y = displayPos(n).y;
    var initStyle = {
      position: "absolute",
      cursor: "default",
      "font-size": "32px",
      "font-family": "sans-serif",
      "font-weight": "lighter",
      "text-align": "center",
      "line-height": "200%", //the vertical offset of symbol text
      "background-color": "green", // Adjust style as needed
      color: "black", // Adjust style as needed
      top: y + borderWidth + "px",
      left: x + borderWidth + "px",
      width: N - 2 * borderWidth + "px",
      height: N - 2 * borderWidth + "px",
    };
    var button = $("<div>").addClass("gensoButton").css(initStyle);
    button.text(symbol).css({});
    button.hover(
      //change button style as highlight
      function () {
        console.log(categories[category(n)]);
        button.css({
          "background-color": "darkgreen",
          top: y + "px",
          left: x + "px",
          width: N + "px",
          height: N + "px",
        });
      },
      function () {
        button.css(initStyle);
      }
    );
    $(".table").append(button);
  });
}

categoryLabel();
for (let i = 1; i <= 118; i++) {
  //console.log(symbols[i]);
  gensoButton(i);
}

Vue.createApp({
  data() {
    return {
      message: "Hello vue!",
      futureGenso: [119, 120],
    };
  },
}).mount("#app");

//Vue.createApp({});
