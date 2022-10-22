const data = [
  2, 3, 5, 6, 4, 2, 20, 24, 32, 40, 59, 68, 89, 100, 112, 109, 101, 78, 56, 32,
  31, 12, 1,
];

const todaySvgs = document.querySelector("svg");

data.forEach((d, i) => {
  const rectTag = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  rectTag.setAttribute("x", i * 36);
  rectTag.setAttribute("y", 112 - d);
  rectTag.setAttribute("width", 24);
  rectTag.setAttribute("height", d);

  todaySvg.append(rectTag);
});
