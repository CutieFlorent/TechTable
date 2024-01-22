var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 400;
var ctx = canvas.getContext("2d");
var size = 10000;
var lists = [];
for (var i = 0; i < size; i++) {
  lists.push((Math.random() * canvas.height) | 0);
}
var count = 1;
function check(x, y) {
  if (x < y) {
    return [x, y];
  }
  return [y, x];
}
function sort(c) {
  //不言自明
  if (c > size) return undefined;
  for (var i = 0; i < size; i += 2 * c) {
    let a = lists.slice(i, i + c);
    let b = lists.slice(i + c, i + 2 * c);
    merged = merge(a, b, []);
    lists.splice(i, 2 * c, ...merged);
  }
  console.log(c);
}
function merge(a, b, merged) {
  if (a.length == 0) return merged.concat(b); //a为空就把b接在排好的后面
  else if (b.length == 0) return merged.concat(a); //b为空就把a接在排好的后面
  else if (a[0] < b[0]) {
    //如果a的第一个元素更小，就把它加入已排好的里面
    return merge(a.slice(1), b, merged.concat(a[0]));
  } else {
    //如果b的第一个元素更小，就把它加入已排好的里面
    return merge(a, b.slice(1), merged.concat(b[0]));
  }
}
function draw() {
  sort(count);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < lists.length; i++) {
    //ctx.font = "24px Arial";
    ctx.fillStyle = "hsl(" + (lists[i] * 360) / canvas.height + "deg,100%,50%)";
    ctx.fillRect(
      (i * canvas.width) / lists.length,
      lists[i],
      canvas.width / lists.length - 2,
      canvas.height - lists[i]
    );
  }
  count *= 2; //每次大小翻倍
}
setInterval(draw, 500);
